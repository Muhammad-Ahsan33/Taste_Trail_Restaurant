// import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
// import { motion } from "framer-motion";

// const events = [
//   {
//     title: "Live Music Fridays",
//     date: "Every Friday | 7PM-10PM",
//     desc: "Enjoy your meal with live acoustic performances from local artists.",
//     img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
//   },
//   {
//     title: "Sunday Brunch Special",
//     date: "Every Sunday | 10AM-2PM",
//     desc: "Unlimited mimosas with our special brunch menu. Rs. 1500 per person.",
//     img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
//   },
// ];

// const Events = () => (
//   <Box sx={{ py: 8, px: 2 }}>
//     <Typography variant="h3" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#f59e0b" }}>
//       Events & Specials
//     </Typography>
    
//     <Grid container spacing={6} justifyContent="center">
//       {events.map((event, i) => (
//         <Grid item xs={12} md={6} key={i}>
//           <motion.div whileHover={{ y: -10 }}>
//             <Card sx={{ height: "100%", position: "relative" }}>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={event.img}
//                 alt={event.title}
//               />
//               <CardContent sx={{ position: "relative", bgcolor: "background.paper" }}>
//                 <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
//                   {event.title}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
//                   {event.date}
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 3 }}>
//                   {event.desc}
//                 </Typography>
//                 <Button variant="contained" sx={{ bgcolor: "#f59e0b", color: "#000" }}>
//                   Learn More
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>
    
//     <Box sx={{ mt: 8, textAlign: "center" }}>
//       <Typography variant="h5" sx={{ mb: 3 }}>
//         Private Events & Catering
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: "auto" }}>
//         TasteTrail offers private dining experiences and catering services for special occasions.
//         Contact us to discuss your event needs.
//       </Typography>
//       <Button
//         variant="outlined"
//         size="large"
//         sx={{
//           color: "#f59e0b",
//           borderColor: "#f59e0b",
//           px: 4,
//           fontWeight: "bold",
//           "&:hover": { bgcolor: "#f59e0b", color: "#fff" },
//         }}
//       >
//         Inquire Now
//       </Button>
//     </Box>
//   </Box>
// );

// export default Events;








import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExpandMore,
  Search,
  Restaurant,
  Delivery,
  Payment,
  Schedule,
  Group,
  LocalOffer,
  Phone,
  Email
} from '@mui/icons-material';

const FAQ = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const categories = [
    { id: 'all', label: 'All Questions', icon: '📋', color: '#6b7280' },
    { id: 'ordering', label: 'Ordering', icon: '🛒', color: '#3b82f6' },
    { id: 'delivery', label: 'Delivery', icon: '🚚', color: '#10b981' },
    { id: 'payment', label: 'Payment', icon: '💳', color: '#f59e0b' },
    { id: 'food', label: 'Food & Menu', icon: '🍽️', color: '#ef4444' },
    { id: 'reservation', label: 'Reservations', icon: '📅', color: '#8b5cf6' },
    { id: 'general', label: 'General', icon: '❓', color: '#06b6d4' },
  ];

  const faqs = [
    {
      category: 'ordering',
      question: 'How can I place an order?',
      answer: 'You can place orders through our website, mobile app, or by calling us directly at +977 9876543210. Our online ordering system is available 24/7 for your convenience.',
    },
    {
      category: 'ordering',
      question: 'What is the minimum order amount?',
      answer: 'The minimum order amount is Rs. 200 for pickup and Rs. 500 for delivery. This helps us maintain quality service and covers operational costs.',
    },
    {
      category: 'delivery',
      question: 'Do you offer free delivery?',
      answer: 'Yes! We offer free delivery within a 5km radius for orders above Rs. 500. For orders below this amount, a delivery fee of Rs. 50 applies.',
    },
    {
      category: 'delivery',
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 30-45 minutes during regular hours. During peak times (lunch and dinner), it may take up to 60 minutes. We always provide real-time tracking.',
    },
    {
      category: 'delivery',
      question: 'What areas do you deliver to?',
      answer: 'We deliver within Kathmandu valley including Thamel, Durbar Marg, New Baneshwor, Patan, and surrounding areas. Check our delivery map on the website for specific locations.',
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, eSewa, Khalti, IME Pay, and all major credit/debit cards. Online payments get a 5% discount on total bill.',
    },
    {
      category: 'payment',
      question: 'Can I pay online?',
      answer: 'Absolutely! We support secure online payments through multiple digital wallets and card payments. All transactions are encrypted and secure.',
    },
    {
      category: 'food',
      question: 'Do you have vegetarian options?',
      answer: 'Yes! We have an extensive vegetarian menu with over 50 items including vegan options. All vegetarian items are clearly marked with a green symbol.',
    },
    {
      category: 'food',
      question: 'Are your ingredients fresh?',
      answer: 'We source fresh ingredients daily from local markets and trusted suppliers. Our kitchen follows strict quality control measures to ensure freshness.',
    },
    {
      category: 'food',
      question: 'Can you accommodate food allergies?',
      answer: 'Yes, we can accommodate most food allergies and dietary restrictions. Please inform us while ordering, and our kitchen will take special care in preparation.',
    },
    {
      category: 'food',
      question: 'Do you offer spice level customization?',
      answer: 'Absolutely! You can choose from mild, medium, hot, or extra hot spice levels for most of our dishes. Just specify your preference when ordering.',
    },
    {
      category: 'reservation',
      question: 'How can I make a reservation?',
      answer: 'You can make reservations through our website, by calling us, or through our mobile app. We recommend booking at least 2 hours in advance.',
    },
    {
      category: 'reservation',
      question: 'Is there a cancellation policy?',
      answer: 'Reservations can be cancelled up to 2 hours before the scheduled time without any charges. Late cancellations may incur a small fee.',
    },
    {
      category: 'general',
      question: 'What are your opening hours?',
      answer: 'We are open Monday to Friday from 10 AM to 10 PM, and weekends from 11 AM to 11 PM. We also offer late-night delivery until midnight on weekends.',
    },
    {
      category: 'general',
      question: 'Do you cater for events?',
      answer: 'Yes! We provide catering services for corporate events, parties, weddings, and other special occasions. Contact us for custom catering packages.',
    },
    {
      category: 'general',
      question: 'Do you have a loyalty program?',
      answer: 'Yes! Our TasteTrail Rewards program offers points for every order, exclusive discounts, and special member-only offers. Sign up through our app.',
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
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
            FAQ
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9, mb: 4 }}>
            Find answers to commonly asked questions about our restaurant and services
          </Typography>
          
          {/* Search Bar in Hero */}
          <Box sx={{ maxWidth: 500, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255,255,255,0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid rgba(255,255,255,0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '2px solid white',
                  },
                  '& input::placeholder': {
                    color: 'rgba(255,255,255,0.8)',
                  },
                },
              }}
            />
          </Box>
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
            Browse by Category
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 6 }}>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Chip
                  label={`${category.icon} ${category.label}`}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                  sx={{
                    py: 2,
                    px: 1,
                    fontSize: '1rem',
                    fontWeight: 600,
                    height: 'auto',
                    backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
                    borderColor: category.color,
                    color: selectedCategory === category.id ? 'white' : category.color,
                    '&:hover': {
                      backgroundColor: selectedCategory === category.id ? category.color : `${category.color}20`,
                    },
                  }}
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
          </Typography>
        </motion.div>

        {/* FAQ Accordions */}
        <AnimatePresence>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{ marginBottom: '16px' }}
              >
                <Accordion
                  expanded={expandedAccordion === index}
                  onChange={handleAccordionChange(index)}
                  elevation={2}
                  sx={{
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      borderRadius: '12px',
                      '&.Mui-expanded': {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '16px 0',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Chip
                        label={categories.find(cat => cat.id === faq.category)?.icon || '❓'}
                        size="small"
                        sx={{
                          backgroundColor: categories.find(cat => cat.id === faq.category)?.color || '#6b7280',
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {faq.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        fontSize: '1.05rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ textAlign: 'center', py: 8 }}>
                <CardContent>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    🔍
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    No results found
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Try adjusting your search terms or browse different categories
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 6,
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              borderRadius: 4,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Still have questions?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Our friendly support team is here to help you 24/7
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      cursor: 'pointer',
                    }}
                  >
                    <Phone sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body2">
                      +977 9876543210
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      backdropFilter: 'blur(10px)',
                      cursor: 'pointer',
                    }}
                  >
                    <Email sx={{ fontSize: 40, mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Email Us
                    </Typography>
                    <Typography variant="body2">
                      info@tastetrail.com
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQ;