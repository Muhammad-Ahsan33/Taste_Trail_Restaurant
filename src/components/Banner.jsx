import React from "react";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex items-center justify-center py-4 px-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl animate-bounce">🎉</span>
            <span className="font-bold text-lg tracking-wide">
              FREE DELIVERY on ALL orders today! Limited time offer
            </span>
            <span className="text-2xl animate-bounce delay-300">🚀</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200"
          >
            ✕
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-red-400 animate-pulse"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;