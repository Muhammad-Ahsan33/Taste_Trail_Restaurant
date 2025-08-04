import React from "react";
import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    text: "The momos here are the best I've had outside of Tibet! The flavors are authentic and the service is always warm.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    text: "I come here at least twice a week. Consistent quality and the chicken thali is my comfort food.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonials = () => (
  <Container sx={{ py: 10 }}>
    <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
      What Our Customers Say
    </Typography>
    
    <Grid container spacing={6}>
      {testimonials.map((testimonial, i) => (
        <Grid item xs={12} md={6} key={i}>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Box sx={{ display: "flex", mb: 3 }}>
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    sx={{
                      color: starIndex < testimonial.rating ? "#f59e0b" : "#e0e0e0",
                    }}
                  />
                ))}
              </Box>
              <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
                "{testimonial.text}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar src={testimonial.img} sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    
    <Box sx={{ mt: 8, textAlign: "center" }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#f59e0b",
          color: "#000",
          px: 4,
          fontWeight: "bold",
        }}
      >
        Leave a Review
      </Button>
    </Box>
  </Container>
);

export default Testimonials;