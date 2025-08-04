import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { Parallax } from "react-parallax";
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import RestaurantChatbot from "./chatbot";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Generate floating food particles
  useEffect(() => {
    const foodEmojis = ['🍕', '🍔', '🌮', '🍟', '🥟', '🌶️', '🧄', '🧅', '🍅', '🥬'];
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        emoji: foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <RestaurantChatbot />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=80"
          alt="Delicious food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-900/50 to-red-900/70"></div>
      </div>

      {/* Animated Steam Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${20 + i * 10}%`,
              bottom: '30%',
            }}
            animate={{
              y: [-20, -100, -200],
              opacity: [0.3, 0.6, 0],
              scale: [0.5, 1, 1.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Floating Food Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            {particle.emoji}
          </motion.div>
        ))}
      </div>

      {/* Parallax Food Images */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <motion.img
          src="/images/pizza.png"
          alt="Pizza"
          className="absolute top-20 left-10 w-32 h-32 object-cover rounded-full shadow-2xl opacity-80"
          animate={{
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="/images/momo2.jpg"
          alt="Momos"
          className="absolute top-40 right-20 w-28 h-28 object-cover rounded-full shadow-2xl opacity-80"
          animate={{
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.img
          src="/images/fries.jpg"
          alt="Fries"
          className="absolute bottom-20 left-20 w-36 h-36 object-cover rounded-full shadow-2xl opacity-80"
          animate={{
            rotate: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6 tracking-tight leading-tight drop-shadow-2xl">
            TasteTrail
          </h1>
          <motion.div
            className="w-32 h-2 bg-gradient-to-r from-amber-400 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Embark on a culinary journey through authentic street flavors
          </p>
          <p className="text-lg md:text-xl text-amber-300 mb-12 font-semibold drop-shadow-lg">
            ✨ Crafted with generations of love since 2010 ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 25px 50px rgba(245, 158, 11, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              🍽️ Explore Menu
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-3 border-amber-400 text-amber-300 font-bold text-xl rounded-full hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 backdrop-blur-sm bg-white/10"
          >
            📍 Find Location
          </motion.button>
        </motion.div>

        {/* Additional Interactive Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center gap-8 text-amber-300"
        >
          <div className="text-center">
            <div className="text-3xl font-black">500+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="w-1 h-12 bg-amber-400 rounded-full"></div>
          <div className="text-center">
            <div className="text-3xl font-black">4.9⭐</div>
            <div className="text-sm">Rating</div>
          </div>
          <div className="w-1 h-12 bg-amber-400 rounded-full"></div>
          <div className="text-center">
            <div className="text-3xl font-black">15min</div>
            <div className="text-sm">Quick Service</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-amber-400 text-4xl drop-shadow-lg">↓</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-300 text-sm font-medium"
        >
          Scroll to explore
        </motion.div>
      </div> */}
    </div>
  );
};
export default Hero;