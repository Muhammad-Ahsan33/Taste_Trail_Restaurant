import React from "react";
import { Box, Typography, Grid, Link, Divider, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4">
              TasteTrail
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover authentic street food crafted with family love since 2010. 
              Every dish tells a story of tradition and passion.
            </p>
            <div className="flex space-x-4">
              {['📘', '📷', '🐦', '💼'].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold hover:shadow-lg transition-all duration-300"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Gallery', 'About Us', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Food Street</p>
              <p>Kathmandu, Nepal</p>
              <p>📞 +977 9876543210</p>
              <p>✉️ hello@tastetrail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TasteTrail. All Rights Reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;