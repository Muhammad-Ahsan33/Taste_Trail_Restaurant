import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";


const items = [
  {
    name: "Spicy Momos",
    price: "Rs. 450",
    img: "https://images.unsplash.com/photo-1600628422019-38c933b4d3e5",
    popular: true
  },
  {
    name: "Loaded Fries",
    price: "Rs. 350",
    img: "https://images.unsplash.com/photo-1606755962773-3be5ba9ed26c",
    spicy: true
  },
  {
    name: "Chicken Burger",
    price: "Rs. 500",
    img: "https://images.unsplash.com/photo-1613145993481-6a0d16f30df2",
    new: true
  },
  {
    name: "Crispy Tacos",
    price: "Rs. 400",
    img: "https://images.unsplash.com/photo-1625943327456-b6d82fce8d8d",
    veg: true
  },
];

const Catalog = () => {
  const items = [
    {
      name: "Spicy Momos",
      price: "Rs. 450",
      img: "https://images.unsplash.com/photo-1600628422019-38c933b4d3e5?w=400",
      popular: true,
      description: "Steamed dumplings with a spicy kick"
    },
    {
      name: "Loaded Fries",
      price: "Rs. 350",
      img: "https://images.unsplash.com/photo-1606755962773-3be5ba9ed26c?w=400",
      spicy: true,
      description: "Crispy fries loaded with toppings"
    },
    {
      name: "Chicken Burger",
      price: "Rs. 500",
      img: "https://images.unsplash.com/photo-1613145993481-6a0d16f30df2?w=400",
      new: true,
      description: "Juicy chicken with fresh ingredients"
    },
    {
      name: "Crispy Tacos",
      price: "Rs. 400",
      img: "https://images.unsplash.com/photo-1625943327456-b6d82fce8d8d?w=400",
      veg: true,
      description: "Crunchy tacos with fresh vegetables"
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <chatbot></chatbot>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
            OUR MENU
          </h2>

          <div className="w-36 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform group-hover:shadow-orange-200/50">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4">
                    {item.popular && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        🔥 Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        🌶️ Spicy
                      </span>
                    )}
                    {item.new && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        ✨ New
                      </span>
                    )}
                    {item.veg && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        🌱 Veg
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-bold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            View Full Menu 📋
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;