import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Paper,
  Tabs,
  Tab,
  useTheme,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Add,
  Remove,
  // Eco,
  Whatshot,
  Star,
  ShoppingCart,
  Close,
  LocalOffer,
  AccessTime,
} from '@mui/icons-material';

const Menu = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'popular',
      name: 'Popular',
      icon: '🔥',
      description: 'Customer favorites and trending dishes',
    },
    {
      id: 'starters',
      name: 'Starters',
      icon: '🥟',
      description: 'Perfect appetizers to begin your meal',
    },
    {
      id: 'mains',
      name: 'Main Course',
      icon: '🍛',
      description: 'Hearty and satisfying main dishes',
    },
    {
      id: 'rice',
      name: 'Rice & Noodles',
      icon: '🍜',
      description: 'Traditional rice dishes and noodles',
    },
    {
      id: 'street',
      name: 'Street Food',
      icon: '🌮',
      description: 'Authentic Nepali street food favorites',
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: '🥤',
      description: 'Refreshing drinks and traditional teas',
    },
  ];

  const menuItems = {
    popular: [
      {
        id: 1,
        name: 'Chicken Momo (Steam)',
        price: 450,
        originalPrice: 500,
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400',
        description: 'Traditional steamed dumplings filled with spiced chicken',
        veg: false,
        spicy: 2,
        popular: true,
        rating: 4.8,
        prepTime: '15-20 min',
      },
      {
        id: 2,
        name: 'Butter Chicken',
        price: 650,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        veg: false,
        spicy: 1,
        popular: true,
        rating: 4.9,
        prepTime: '20-25 min',
      },
      {
        id: 3,
        name: 'Paneer Tikka Masala',
        price: 550,
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400',
        description: 'Grilled cottage cheese in rich, spiced gravy',
        veg: true,
        spicy: 2,
        popular: true,
        rating: 4.7,
        prepTime: '18-22 min',
      },
      {
        id: 4,
        name: 'Nepali Thali',
        price: 750,
        originalPrice: 850,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
        description: 'Complete traditional meal with dal, bhat, tarkari, and pickle',
        veg: true,
        spicy: 1,
        popular: true,
        rating: 4.8,
        prepTime: '25-30 min',
      },
    ],
    starters: [
      {
        id: 5,
        name: 'Veg Spring Rolls',
        price: 350,
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d25e?w=400',
        description: 'Crispy rolls filled with fresh vegetables and herbs',
        veg: true,
        spicy: 0,
        rating: 4.5,
        prepTime: '10-15 min',
      },
      {
        id: 6,
        name: 'Chicken Wings (6pcs)',
        price: 480,
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400',
        description: 'Spicy glazed chicken wings with special sauce',
        veg: false,
        spicy: 3,
        rating: 4.6,
        prepTime: '15-20 min',
      },
      {
        id: 7,
        name: 'Samosa Chat',
        price: 280,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
        description: 'Crispy samosas topped with yogurt, chutneys, and spices',
        veg: true,
        spicy: 2,
        rating: 4.4,
        prepTime: '8-12 min',
      },
    ],
    mains: [
      {
        id: 8,
        name: 'Mutton Curry',
        price: 850,
        image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400',
        description: 'Slow-cooked mutton in authentic Nepali spices',
        veg: false,
        spicy: 3,
        rating: 4.7,
        prepTime: '35-40 min',
      },
      {
        id: 9,
        name: 'Fish Curry',
        price: 680,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
        description: 'Fresh fish cooked in tangy tomato and mustard gravy',
        veg: false,
        spicy: 2,
        rating: 4.5,
        prepTime: '25-30 min',
      },
      {
        id: 10,
        name: 'Mixed Vegetable Curry',
        price: 420,
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400',
        description: 'Seasonal vegetables in aromatic curry sauce',
        veg: true,
        spicy: 1,
        rating: 4.3,
        prepTime: '20-25 min',
      },
    ],
    rice: [
      {
        id: 11,
        name: 'Chicken Biryani',
        price: 580,
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d25e?w=400',
        description: 'Fragrant basmati rice layered with spiced chicken',
        veg: false,
        spicy: 2,
        rating: 4.8,
        prepTime: '30-35 min',
      },
      {
        id: 12,
        name: 'Vegetable Fried Rice',
        price: 380,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
        description: 'Wok-tossed rice with fresh vegetables and soy sauce',
        veg: true,
        spicy: 1,
        rating: 4.4,
        prepTime: '15-20 min',
      },
      {
        id: 13,
        name: 'Chicken Chow Mein',
        price: 520,
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=400',
        description: 'Stir-fried noodles with chicken and vegetables',
        veg: false,
        spicy: 2,
        rating: 4.6,
        prepTime: '18-22 min',
      },
    ],
    street: [
      {
        id: 14,
        name: 'Pani Puri (8pcs)',
        price: 180,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
        description: 'Crispy puris filled with spiced water and chutneys',
        veg: true,
        spicy: 2,
        rating: 4.7,
        prepTime: '5-8 min',
      },
      {
        id: 15,
        name: 'Bhel Puri',
        price: 220,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400',
        description: 'Puffed rice mixed with vegetables and tangy sauces',
        veg: true,
        spicy: 2,
        rating: 4.5,
        prepTime: '5-10 min',
      },
      {
        id: 16,
        name: 'Chatpate',
        price: 150,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400',
        description: 'Traditional Nepali street snack with puffed rice and spices',
        veg: true,
        spicy: 3,
        rating: 4.6,
        prepTime: '3-5 min',
      },
    ],
    beverages: [
      {
        id: 17,
        name: 'Masala Chai',
        price: 80,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400',
        description: 'Traditional spiced tea with milk and aromatic spices',
        veg: true,
        spicy: 0,
        rating: 4.8,
        prepTime: '5-8 min',
      },
      {
        id: 18,
        name: 'Fresh Lime Soda',
        price: 120,
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
        description: 'Refreshing lime juice with soda and mint',
        veg: true,
        spicy: 0,
        rating: 4.4,
        prepTime: '3-5 min',
      },
      {
        id: 19,
        name: 'Mango Lassi',
        price: 180,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
        description: 'Creamy yogurt drink blended with fresh mango',
        veg: true,
        spicy: 0,
        rating: 4.7,
        prepTime: '5-8 min',
      },
    ],
  };

  const getCurrentItems = () => {
    const categoryKey = categories[selectedCategory].id;
    const items = menuItems[categoryKey] || [];
    
    if (searchTerm) {
      return items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return items;
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prev.filter(cartItem => cartItem.id !== itemId);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getSpicyIndicator = (level) => {
    if (level === 0) return null;
    return '🌶️'.repeat(level);
  };

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
            Our Menu
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9, mb: 4 }}>
            Discover authentic flavors and culinary masterpieces crafted with passion
          </Typography>
          
          {/* Search Bar */}
          <Box sx={{ maxWidth: 500, mx: 'auto' }}>
            <TextField
              fullWidth
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
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

        {/* Floating Cart Button */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            right: '2rem',
            transform: 'translateY(-50%)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={() => setCartOpen(true)}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              width: 60,
              height: 60,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <Badge badgeContent={getTotalItems()} color="error">
              <ShoppingCart sx={{ fontSize: 28 }} />
            </Badge>
          </IconButton>
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper elevation={3} sx={{ mb: 6, borderRadius: 4, overflow: 'hidden' }}>
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  minHeight: 80,
                  px: 3,
                },
                '& .Mui-selected': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  label={
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h5" sx={{ mb: 0.5 }}>
                        {category.icon}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {category.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {category.description}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Paper>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={4}>
              {getCurrentItems().map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 4,
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          transition: 'transform 0.3s ease',
                          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={item.image}
                          alt={item.name}
                        />
                        
                        {/* Overlay badges */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            display: 'flex',
                            gap: 1,
                            flexWrap: 'wrap',
                          }}
                        >
                          {item.veg && (
                            <Chip
                              // icon={<Eco />}
                              label="Veg"
                              size="small"
                              sx={{
                                backgroundColor: '#22c55e',
                                color: 'white',
                                fontWeight: 600,
                              }}
                            />
                          )}
                          {item.popular && (
                            <Chip
                              icon={<Whatshot />}
                              label="Popular"
                              size="small"
                              sx={{
                                backgroundColor: '#ef4444',
                                color: 'white',
                                fontWeight: 600,
                              }}
                            />
                          )}
                          {item.originalPrice && (
                            <Chip
                              icon={<LocalOffer />}
                              label="Sale"
                              size="small"
                              sx={{
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                fontWeight: 600,
                              }}
                            />
                          )}
                        </Box>

                        {/* Rating badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            px: 1,
                            py: 0.5,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}
                        >
                          <Star sx={{ fontSize: 16, color: '#fbbf24' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {item.rating}
                          </Typography>
                        </Box>
                      </Box>

                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {item.name}
                          </Typography>
                          {getSpicyIndicator(item.spicy) && (
                            <Typography variant="body2">
                              {getSpicyIndicator(item.spicy)}
                            </Typography>
                          )}
                        </Box>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2, lineHeight: 1.6 }}
                        >
                          {item.description}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <AccessTime sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="caption" color="text.secondary">
                            {item.prepTime}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>
                              Rs. {item.price}
                            </Typography>
                            {item.originalPrice && (
                              <Typography
                                variant="caption"
                                sx={{
                                  textDecoration: 'line-through',
                                  color: 'text.secondary',
                                  ml: 1,
                                }}
                              >
                                Rs. {item.originalPrice}
                              </Typography>
                            )}
                          </Box>

                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="contained"
                              startIcon={<Add />}
                              onClick={() => addToCart(item)}
                              sx={{
                                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                fontWeight: 600,
                                borderRadius: 3,
                                px: 3,
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                                },
                              }}
                            >
                              Add
                            </Button>
                          </motion.div>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {getCurrentItems().length === 0 && (
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
                  No dishes found
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Try adjusting your search terms or browse different categories
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </Container>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Your Order
          </Typography>
          <IconButton onClick={() => setCartOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        {cart.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <ShoppingCart sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Your cart is empty
            </Typography>
          </Box>
        ) : (
          <>
            <List sx={{ flexGrow: 1 }}>
              {cart.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem
                    sx={{
                      px: 0,
                      py: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                        primary={item.name}
                        secondary={`Rs. ${item.price} each`}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => removeFromCart(item.id)}
                          sx={{ border: '1px solid #e5e7eb' }}
                        >
                          <Remove />
                        </IconButton>
                        <Typography sx={{ mx: 2, fontWeight: 600 }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => addToCart(item)}
                          sx={{ border: '1px solid #e5e7eb' }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Rs. {item.price * item.quantity}
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Rs. {getTotalPrice()}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Drawer>
    </Box>
  );
};

export default Menu;