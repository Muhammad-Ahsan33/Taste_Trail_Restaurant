import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Components
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Catalog from "./components/Catalog";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Pages
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import LoyaltyProgram from "./pages/LoyaltyProgram";

// Layout Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const theme = createTheme({
  palette: {
    primary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    secondary: {
      main: '#1a1a1a',
      light: '#374151',
      dark: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Features />
      <Catalog />
      <VideoSection />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/rewards" element={<LoyaltyProgram />} />
          </Routes>
          <Footer />
        </Router>
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  );
}

export default App;