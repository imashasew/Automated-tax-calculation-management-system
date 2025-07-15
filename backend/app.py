from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import certifi

app = Flask(__name__)
CORS(app)  # To allow requests from your React frontend

# MongoDB Atlas connection string (password `Rashni2000#` becomes `Rashni2000%23`)
MONGO_URI = "mongodb+srv://YashiRashiSiri:Rashni2000@cluster0.yemn5mo.mongodb.net/?retryWrites=true&w=majority&tls=true&appName=Cluster0"
client = MongoClient(MONGO_URI, tls=True, tlsCAFile=certifi.where())
db = client["land_tax_db"]
collection = db["tax_data"]

def load_data():
    data = list(collection.find({}, {"_id": 0}))
    return pd.DataFrame(data)

def train_model():
    df = load_data()
    if df.empty:
        return None

    X = df.drop(columns=["taxPaid"])
    y = df["taxPaid"]

    categorical_features = ["landType"]
    numeric_features = [col for col in X.columns if col != "landType"]

    preprocessor = ColumnTransformer(
        transformers=[
            ("cat", OneHotEncoder(handle_unknown='ignore'), categorical_features)
        ],
        remainder='passthrough'
    )

    model = Pipeline([
        ("preprocessor", preprocessor),
        ("regressor", LinearRegression())
    ])

    model.fit(X, y)
    return model

model = train_model()
@app.route("/predict", methods=["POST"])
def predict():
    global model
    if model is None:
        return jsonify({"error": "No training data available."}), 400

    data = request.get_json()
    print("Received data:", data)  # Debug print input JSON

    try:
        input_df = pd.DataFrame([data])
        print("Input DataFrame for prediction:\n", input_df)  # Debug print input_df
        
        prediction = model.predict(input_df)[0]
        print("Prediction result:", prediction)  # Debug print prediction result

        return jsonify({"predicted_tax": round(float(prediction), 2)})
    except Exception as e:
        print("Prediction error:", e)
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(port=5001, debug=False)

df = load_data()
print(df.head())
