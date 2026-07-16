import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.08
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className='navbar'
      variants={navContainerVariants}
      initial='hidden'
      animate='visible'
    >
      <section className='my-name'>
        <h6>Spiritful_Senthilnathan</h6>
      </section>
      <button
        type="button"
        className='nav-toggle'
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <section className={`nav-links${isMenuOpen ? ' open' : ''}`} id="primary-navigation">
        {[
          { name: 'Home', href: '#Home' },
          { name: 'About', href: '#About' },
          { name: 'Education', href: '#Education' },
          { name: 'Skills', href: '#Skill' },
          { name: 'Project', href: '#Project' },
          { name: 'Contact', href: '#Contact' }
        ].map((link, i) => (
          <motion.a 
            key={i} 
            href={link.href}
            variants={navItemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </motion.a>
        ))}
      </section>
    </motion.div>
  );
}

export default Navbar;
