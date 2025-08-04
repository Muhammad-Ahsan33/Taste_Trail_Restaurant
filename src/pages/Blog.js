import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The History of Momos in Nepal",
    date: "May 15, 2023",
    excerpt: "Explore how this Tibetan delicacy became a Nepali street food staple.",
    img: "https://images.unsplash.com/photo-1600628422019-38c933b4d3e5",
  },
  {
    title: "5 Spices That Define Nepali Cuisine",
    date: "April 2, 2023",
    excerpt: "Discover the essential spices that give our dishes their distinctive flavors.",
    img: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b",
  },
];

const Blog = () => (
  <Box sx={{ py: 8, px: 2 }}>
    <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
      TasteTrail Blog
    </Typography>
    
    <Grid container spacing={6} justifyContent="center">
      {blogPosts.map((post, i) => (
        <Grid item xs={12} md={6} lg={4} key={i}>
          <motion.div whileHover={{ y: -10 }}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={post.img}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  {post.date}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {post.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {post.excerpt}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#f59e0b",
                    borderColor: "#f59e0b",
                    "&:hover": { bgcolor: "#f59e0b", color: "#fff" },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
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
        View All Posts
      </Button>
    </Box>
  </Box>
);

export default Blog;