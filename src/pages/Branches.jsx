import React, { useState, useEffect } from 'react';
import './Branches.css';

export default function Branches() {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchBranches = async (query = '') => {
    setLoading(true);
    let url = 'http://localhost:5001/api/branches';
    if (query) url += `?q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const data = await res.json();
    setBranches(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBranches(search);
    setSelected(null); // clear selection on new search
  };

  const handleSelect = (branch) => {
    setSelected(branch);
  };

  return (
    <div className="branches-page bg-white min-h-screen">
      <div className="search-bar">
        <div className="search-wrapper">
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </div>

      <main className="main-content">
        <h2 className="title">BRANCHES</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="branches-list">
            {branches.map((branch, idx) => (
              <div
                key={branch.id}
                className={`branch-item ${idx === 0 ? 'first-branch' : ''} ${selected && selected.id === branch.id ? 'selected' : ''}`}
                onClick={() => handleSelect(branch)}
                style={{ cursor: 'pointer', background: selected && selected.id === branch.id ? '#e0f7fa' : undefined }}
              >
                <span className="branch-id">{String(branch.id).padStart(2, '0')}.</span>
                <span className="branch-name">{branch.name}</span>
                <span className="branch-address">{branch.address}</span>
                <span className="branch-contact">{branch.phone || branch.contact}</span>
              </div>
            ))}
          </div>
        )}
        {selected && (
          <div className="branch-details-popup">
            <h3>Selected Branch</h3>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Address:</strong> {selected.address}</p>
            <p><strong>Phone:</strong> {selected.phone || selected.contact}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <button onClick={() => setSelected(null)} className="close-popup">Close</button>
          </div>
        )}
      </main>
    </div>
  );
}
