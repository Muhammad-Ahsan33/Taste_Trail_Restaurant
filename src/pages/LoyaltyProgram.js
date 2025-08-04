import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🎁",
    title: "Welcome Gift",
    desc: "Free appetizer on your first visit after signing up",
  },
  {
    icon: "💰",
    title: "Exclusive Discounts",
    desc: "10% off every order for members",
  },
  {
    icon: "🎂",
    title: "Birthday Treat",
    desc: "Special dessert on your birthday month",
  },
];

const LoyaltyProgram = () => (
  <Box sx={{ py: 8, px: 2 }}>
    <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
      TasteTrail Rewards
    </Typography>
    
    <Typography variant="h5" sx={{ textAlign: "center", mb: 6 }}>
      Join our loyalty program and enjoy exclusive benefits
    </Typography>
    
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
      {benefits.map((benefit, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card sx={{ height: "100%", textAlign: "center" }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {benefit.icon}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body1">{benefit.desc}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    
    <Box sx={{ textAlign: "center" }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          bgcolor: "#f59e0b",
          color: "#000",
          px: 6,
          py: 1.5,
          fontSize: "1.1rem",
          fontWeight: "bold",
          borderRadius: "50px",
        }}
      >
        Sign Up Now
      </Button>
    </Box>
  </Box>
);

export default LoyaltyProgram;