// import React from "react";
// import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
// import { motion } from "framer-motion";

// const About = () => (
//   <Container sx={{ py: 10 }}>
//     <Grid container spacing={6}>
//       <Grid item xs={12} md={6}>
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold", color: "#f59e0b" }}>
//             Our Story
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Founded in 2010 by Chef Rajesh Thapa, TasteTrail began as a small food cart serving authentic
//             Nepali street food in Kathmandu.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             What started as a passion project quickly grew into one of the city's most beloved eateries,
//             known for preserving traditional family recipes while adding modern twists.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Today, we continue our mission to bring authentic flavors and warm hospitality to every customer.
//           </Typography>
//         </motion.div>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Box
//             component="img"
//             src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
//             alt="Our restaurant"
//             sx={{ width: "100%", borderRadius: 4, boxShadow: 6 }}
//           />
//         </motion.div>
//       </Grid>
//     </Grid>

//     <Box sx={{ mt: 10, textAlign: "center" }}>
//       <Typography variant="h4" sx={{ mb: 6, fontWeight: "bold" }}>
//         Meet Our Team
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {[
//           { name: "Rajesh Thapa", role: "Head Chef", img: "https://randomuser.me/api/portraits/men/32.jpg" },
//           { name: "Anjali Sharma", role: "Sous Chef", img: "https://randomuser.me/api/portraits/women/44.jpg" },
//           { name: "Bikram Gurung", role: "Manager", img: "https://randomuser.me/api/portraits/men/22.jpg" },
//         ].map((member, i) => (
//           <Grid item xs={12} sm={4} key={i}>
//             <motion.div whileHover={{ y: -10 }}>
//               <Avatar
//                 src={member.img}
//                 sx={{ width: 150, height: 150, mx: "auto", mb: 2 }}
//               />
//               <Typography variant="h6">{member.name}</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {member.role}
//               </Typography>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   </Container>
// );

// export default About;









import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Restaurant, Schedule, People, LocalDining } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const stats = [
    { icon: <Restaurant />, number: '15+', label: 'Years of Excellence' },
    { icon: <People />, number: '50K+', label: 'Happy Customers' },
    { icon: <LocalDining />, number: '200+', label: 'Unique Dishes' },
    { icon: <Schedule />, number: '24/7', label: 'Service Available' },
  ];

  const team = [
    {
      name: 'Rajesh Shrestha',
      role: 'Head Chef & Founder',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300',
      experience: '20+ years',
      specialty: 'Traditional Nepali Cuisine'
    },
    {
      name: 'Priya Maharjan',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300',
      experience: '15+ years',
      specialty: 'Street Food Innovation'
    },
    {
      name: 'Arjun Tamang',
      role: 'Kitchen Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      experience: '12+ years',
      specialty: 'Quality Control'
    },
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We preserve traditional recipes passed down through generations',
      icon: '🏮',
    },
    {
      title: 'Quality',
      description: 'Only the freshest ingredients make it to your plate',
      icon: '⭐',
    },
    {
      title: 'Community',
      description: 'Building connections through shared meals and experiences',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Blending traditional flavors with modern culinary techniques',
      icon: '💡',
    },
  ];

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Our Story
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
            A journey of flavors, traditions, and culinary passion spanning over a decade
          </Typography>
        </motion.div>
      </Box>

      {/* Main Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" sx={{ mb: 3, color: theme.palette.primary.main }}>
                From Street to Table
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                TasteTrail began in 2010 as a small street food cart in the bustling streets of Kathmandu. 
                Our founder, Rajesh Shrestha, had a simple dream: to share the authentic flavors of Nepali 
                street food with the world.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                What started as a humble cart serving momos and local delicacies has grown into a beloved 
                restaurant chain, but we've never forgotten our roots. Every dish we serve carries the same 
                passion and authenticity that made us who we are today.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Today, we're proud to serve thousands of customers who have become part of our extended family, 
                sharing not just meals, but memories that last a lifetime.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
                alt="Restaurant story"
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Our Journey in Numbers
          </Typography>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                  >
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
          Meet Our Culinary Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 3,
                        border: `4px solid ${theme.palette.primary.main}`,
                      }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
                      {member.role}
                    </Typography>
                    <Chip
                      label={member.experience}
                      size="small"
                      sx={{ mb: 2, mr: 1 }}
                    />
                    <Chip
                      label={member.specialty}
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', gap: 3, p: 3 }}>
                    <Typography variant="h2">{value.icon}</Typography>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {value.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Join Our Culinary Journey
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Experience the authentic flavors that have made us a beloved part of the community
            </Typography>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: 'bold',
                border: '2px solid white',
                backgroundColor: 'transparent',
                color: 'white',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#f59e0b';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Explore Our Menu
            </motion.button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About;