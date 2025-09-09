import React from 'react'
import { motion } from 'framer-motion'
import '../styles/HeroSection.css'
import lion from '../assets/lion.png'

export default function HeroSection() {
  return (
    <div className='hero-section-container'>
  
<div className='hero-image'>
        <img src={lion} alt='lion' />
      </div>
    <section className="hero-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Crafting digital experiences with passion.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We design and build beautiful, responsive websites and applications
          that engage and inspire.
        </motion.p>
        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#work" className="btn primary-btn">
            Our Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Us
          </a>
        </motion.div>
      </div>
      
    </section>
    
      </div>
  )
}
