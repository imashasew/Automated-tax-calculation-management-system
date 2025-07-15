import React from 'react';
import './ServicesSection.css';
import { motion } from 'framer-motion'; // ✅ Import framer-motion

// Import images
import img1 from '../assets/service.png';
import img2 from '../assets/service.png';
import img3 from '../assets/service.png';
import img4 from '../assets/service.png';
import img5 from '../assets/service.png';
import img6 from '../assets/service.png';

const services = [
  { image: img1, title: 'SERVICE HEADING', link: '#' },
  { image: img2, title: 'SERVICE HEADING', link: '#' },
  { image: img3, title: 'SERVICE HEADING', link: '#' },
  { image: img4, title: 'SERVICE HEADING', link: '#' },
  { image: img5, title: 'SERVICE HEADING', link: '#' },
  { image: img6, title: 'SERVICE HEADING', link: '#' },
];

const ServicesSection = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href={service.link} className="service-link">
              <motion.img
                src={service.image}
                alt="Service"
                className="service-image"
                whileHover={{ rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
              <h3 className="service-heading">{service.title}</h3>
            </a>
            <p className="service-description">
              A good design is not only aesthetically pleasing, but also functional.
              It should be able to solve the problem
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
