// src/components/NewsSection.jsx
import React from 'react';
import './NewsSection.css';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion
import diamondImage from '../assets/news.png';
import newsImage from '../assets/image1.jpg';

const NewsSection = () => {
  return (
    <motion.section
      className="news-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="left-panel"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src={diamondImage}
          alt="Our News Diamond Design"
          className="diamond-grid"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
      </motion.div>

      <motion.div
        className="right-panel"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img
          src={newsImage}
          alt="News"
          className="news-main-img"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />

        <motion.h3
          className="news-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “HEADING OF UPDATE”
        </motion.h3>

        <motion.p
          className="news-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text 
          of the printing and typesetting industry...
        </motion.p>

        <motion.div
          className="arrow-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button whileHover={{ scale: 1.2 }} className="arrow-circle">←</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} className="arrow-circle">→</motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default NewsSection;

