import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#ffffffff", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            TasteTrail
          </Link>
        </Typography>
        
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/menu"
            sx={{ fontWeight: "bold" }}
          >
            Menu
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about"
            sx={{ fontWeight: "bold" }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/FAQ"
            sx={{ fontWeight: "bold" }}
          >
            FAQ
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/contact"
            sx={{ fontWeight: "bold" }}
          >
            Contact
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/blog"
            sx={{ fontWeight: "bold" }}
          >
            Blog
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/testimonials"
            sx={{ fontWeight: "bold" }}
          >
            Testimonials
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/careers"
            sx={{ fontWeight: "bold" }}
          >
            Career
          </Button>

          <Button 
            color="inherit" 
            component={Link} 
            to="/rewards"
            sx={{ fontWeight: "bold" }}
          >
            LoyaltyProgram
          </Button>

        </Box>
        
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: "#f59e0b", 
            color: "#000", 
            fontWeight: "bold",
            "&:hover": { bgcolor: "#d97706" }
          }}
          component={Link}
          to="/reservation"
        >
          Book Table
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;