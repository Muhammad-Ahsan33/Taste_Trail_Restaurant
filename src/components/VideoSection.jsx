import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const VideoSection = () => (
  <Box sx={{ 
    py: 10, 
    px: 2, 
    textAlign: "center",
    background: 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)'
  }}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h1"
        sx={{ 
          color: "#000000ff", 
          fontWeight: 'bold',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          mb: 6,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        Behind The Scenes
      </Typography>
    </motion.div>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        aspectRatio: "16/9",
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </Box>
    <Button
      variant="outlined"
      size="large"
      sx={{
        mt: 4,
        color: "#f59e0b",
        borderColor: "#f59e0b",
        px: 4,
        py: 1.5,
        borderRadius: '50px',
        fontWeight: 'bold',
        '&:hover': {
          bgcolor: "#f59e0b",
          color: "#fff",
          borderColor: "#f59e0b"
        },
        transition: 'all 0.3s ease'
      }}
      component="a"
      href="https://www.instagram.com/yourrestaurant"
      target="_blank"
      rel="noopener noreferrer"
    >
      Follow Us on Instagram
    </Button>
  </Box>
);

export default VideoSection;