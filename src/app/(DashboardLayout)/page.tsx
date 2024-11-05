'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  MenuItem,
  Select,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  CircularProgress,
  Container,
  Stack,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from './stryling/header';
import Footer from './stryling/footer';

const styles = {
  heroSection: {
    position: 'relative',
    height: '90vh',
    overflow: 'hidden',
  },
  formContainer: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    width: '400px',
  },
  button: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#24562a',
    },
  },
  section: {
    padding: '40px 0',
  },
  footer: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
};

<Header/>

const HeroSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/abuja2.jpg', '/images/lagos.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      style={{
        ...styles.heroSection,
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <SearchForm />
    </Box>
  );
};

const SearchForm = () => {
  const router = useRouter();
  const [tripType, setTripType] = useState('oneWay');
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    passengers: '',
    departureDate: '',
    returnDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
    if (event.target.value === 'oneWay') {
      setBookingData({ ...bookingData, returnDate: '' });
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const queryParams = new URLSearchParams({
      from: bookingData.from,
      to: bookingData.to,
      departureDate: bookingData.departureDate,
      returnDate: tripType === 'roundTrip' ? bookingData.returnDate : undefined,
      passengers: bookingData.passengers,
    }).toString();
    router.push(`/available-buses?${queryParams}`);
  };

  const handleChange = (event) => {
    setBookingData({ ...bookingData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`);
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <Box style={styles.formContainer}>
      <Typography variant="h5" gutterBottom>Book Your Trip</Typography>
      <FormLabel component="legend">Trip Type</FormLabel>
      <RadioGroup row value={tripType} onChange={handleTripTypeChange}>
        <FormControlLabel value="oneWay" control={<Radio />} label="One-Way" />
        <FormControlLabel value="roundTrip" control={<Radio />} label="Round-Trip" />
      </RadioGroup>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel id="current-city-label">Departure</InputLabel>
          <Select
            labelId="current-city-label"
            name="from"
            fullWidth
            value={bookingData.from}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            }
          >
            <MenuItem value="">Select Departure</MenuItem>
            {locations.map((location) => (
              <MenuItem key={location.locationID} value={location.locationID}>
                {location.locationName}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="destination-city-label">Destination</InputLabel>
          <Select
            labelId="destination-city-label"
            name="to"
            fullWidth
            value={bookingData.to}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            }
          >
            {locations.map((location) => (
              <MenuItem key={location.locationID} value={location.locationID}>
                {location.locationName}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date of Departure"
            name="departureDate"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={bookingData.departureDate}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {tripType === 'roundTrip' && (
          <Grid item xs={12}>
            <TextField
              label="Return Date"
              name="returnDate"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={bookingData.returnDate}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            label="Number of Passengers"
            name="passengers"
            type="number"
            fullWidth
            value={bookingData.passengers}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            style={styles.button}
            onClick={handleSubmit}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <DirectionsCarIcon />}
          >
            {loading ? 'Please wait...' : 'Book Now'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const HomePage = () => (
  <div>
    <Header />
    <HeroSlideshow />
    <Container>
      <Box style={styles.section}>
    <h1>Why choose us?</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
        <Typography variant="h1" align="left" gutterBottom>Safety First, Always</Typography>
            <Typography variant="body1">
            Your safety is our top priority. We uphold the highest safety standards and ensure that each vehicle is regularly inspected and maintained. Our trained drivers follow strict safety protocols, so you can enjoy a worry-free journey every time you travel with us.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h1" align="left" gutterBottom>Comfortable and Modern Fleet</Typography>
            <Typography variant="body1">
          Our buses are equipped with comfortable seating, air conditioning, and modern amenities to make your journey as pleasant as possible. Whether it’s a short trip or a long journey, our fleet is designed to provide you with the utmost comfort, helping you arrive relaxed and refreshed.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>

    <Container>
      <Box style={styles.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
        <Typography variant="h1" align="left" gutterBottom>Reliable and On-Time Service</Typography>
            <Typography variant="body1">
We value your time and pride ourselves on punctuality. With our carefully planned schedules and dependable service, you can trust us to get you to your destination on time. Say goodbye to delays and hello to a reliable travel experience with us!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h1" align="left" gutterBottom>Affordable Pricing with Excellent Service</Typography>
            <Typography variant="body1">
          Enjoy top-quality service without breaking the bank. Our pricing is competitive, and we strive to offer the best value for your money. With us, you don’t have to choose between affordability and quality—experience both on every trip.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>

  <Footer/>
  </div>
);

export default HomePage;
