import React from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    title: "Family Recipes",
    desc: "Generations of flavor packed into every bite.",
    icon: "👨‍🍳"
  },
  {
    title: "Street Vibes",
    desc: "Authentic street food made fresh daily.",
    icon: "🌆"
  },
  {
    title: "Quick Service",
    desc: "Hot meals ready in minutes.",
    icon: "⚡"
  },
];

const Features = () => {
  const features = [
    {
      title: "Family Recipes",
      desc: "Generations of flavor packed into every bite",
      icon: "👨‍🍳",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Street Vibes",
      desc: "Authentic street food made fresh daily",
      icon: "🌆",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Quick Service",
      desc: "Hot meals ready in minutes",
      icon: "⚡",
      gradient: "from-green-500 to-emerald-600"
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">TasteTrail</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${feat.gradient} p-8 rounded-3xl text-white shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feat.title}</h3>
                <p className="text-center opacity-90">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;