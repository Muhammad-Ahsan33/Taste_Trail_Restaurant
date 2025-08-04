import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";

const positions = [
  {
    title: "Line Cook",
    type: "Full-time",
    location: "Kathmandu",
    description: "Join our kitchen team to prepare authentic dishes following traditional recipes.",
  },
  {
    title: "Server",
    type: "Part-time",
    location: "Kathmandu",
    description: "Provide excellent customer service in our fast-paced dining environment.",
  },
];

const Careers = () => (
  <Box sx={{ py: 8, px: 2 }}>
    <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
      Join Our Team
    </Typography>
    
    <Typography variant="body1" sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
      At TasteTrail, we're more than just a restaurant - we're a family. We're always looking for passionate
      individuals to join our team and help us share authentic flavors with our community.
    </Typography>
    
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
      {positions.map((position, i) => (
        <Grid item xs={12} md={6} key={i}>
          <motion.div whileHover={{ y: -5 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {position.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                  {position.type} • {position.location}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {position.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#f59e0b",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Don't see your perfect role?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
        We're always interested in meeting talented people. Send us your resume and we'll contact you
        when a matching position becomes available.
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{
          color: "#f59e0b",
          borderColor: "#f59e0b",
          px: 4,
          fontWeight: "bold",
          "&:hover": { bgcolor: "#f59e0b", color: "#fff" },
        }}
      >
        Submit Resume
      </Button>
    </Box>
  </Box>
);

export default Careers;