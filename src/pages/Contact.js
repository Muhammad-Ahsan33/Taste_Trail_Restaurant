import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Paper,
  Chip,
  useTheme,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocationOn,
  Phone,
  Email,
  Schedule,
  DirectionsBus,
  LocalParking,
  Wifi,
  AccessibleForward,
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      details: ['123 Food Street, Thamel', 'Kathmandu, Nepal 44600'],
      color: '#ef4444',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      details: ['+977 1-4567890', '+977 9876543210'],
      color: '#10b981',
    },
    {
      icon: <Email />,
      title: 'Email Us',
      details: ['info@tastetrail.com', 'orders@tastetrail.com'],
      color: '#3b82f6',
    },
    {
      icon: <Schedule />,
      title: 'Opening Hours',
      details: ['Mon-Fri: 10AM - 10PM', 'Sat-Sun: 11AM - 11PM'],
      color: '#f59e0b',
    },
  ];

  const amenities = [
    { icon: <DirectionsBus />, label: 'Public Transport' },
    { icon: <LocalParking />, label: 'Free Parking' },
    { icon: <Wifi />, label: 'Free WiFi' },
    { icon: <AccessibleForward />, label: 'Wheelchair Accessible' },
  ];

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
            Get in Touch
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </motion.div>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: info.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        color: 'white',
                      }}
                    >
                      {React.cloneElement(info.icon, { sx: { fontSize: 28 } })}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Additional Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Find Us Here
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      📍 Interactive Map Coming Soon
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Amenities */}
              <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  Amenities & Facilities
                </Typography>
                <Grid container spacing={2}>
                  {amenities.map((amenity, index) => (
                    <Grid item xs={6} key={index}>
                      <Chip
                        icon={amenity.icon}
                        label={amenity.label}
                        variant="outlined"
                        sx={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          p: 1,
                          height: 'auto',
                          '& .MuiChip-label': {
                            fontSize: '0.85rem',
                            whiteSpace: 'normal',
                            overflow: 'visible',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700, mb: 6 }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                question: 'Do you offer delivery services?',
                answer: 'Yes! We offer free delivery within 5km radius for orders above Rs. 500.',
              },
              {
                question: 'Can I make reservations online?',
                answer: 'Absolutely! You can make reservations through our website or by calling us directly.',
              },
              {
                question: 'Do you cater for events?',
                answer: 'Yes, we provide catering services for events, parties, and corporate functions.',
              },
              {
                question: 'Are there vegetarian options available?',
                answer: 'We have a wide variety of vegetarian and vegan options clearly marked on our menu.',
              },
            ].map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.primary.main }}>
                      {faq.question}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Emergency Contact */}
      <Box
        sx={{
          py: 6,
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              🚨 Emergency Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              For urgent matters or last-minute catering needs
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              +977 9876543210
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;