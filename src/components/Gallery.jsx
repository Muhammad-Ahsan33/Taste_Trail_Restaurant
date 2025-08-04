import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457c00",
    title: "Spicy Momos"
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    title: "Loaded Fries"
  },
  {
    src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    title: "Chicken Burger"
  },
  {
    src: "https://images.unsplash.com/photo-1615199236544-3b5d5ad9eadd",
    title: "Crispy Tacos"
  },
];

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457c00?w=400", title: "Spicy Momos" },
    { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", title: "Loaded Fries" },
    { src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400", title: "Chicken Burger" },
    { src: "https://images.unsplash.com/photo-1615199236544-3b5d5ad9eadd?w=400", title: "Crispy Tacos" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
            FOOD GALLERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;