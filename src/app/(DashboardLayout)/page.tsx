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
  Stack,
  MenuItem,
  Select,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    backgroundImage: `url('/images/hiace.jpg')`,  // Background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)',  // Optional: Blur effect for background
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Transparent white background
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    width: '500px',
  },
  button: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#24562a',
    },
  },
};

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" component="div">
          On-God Transport Ltd.
        </Typography>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Routes</Button>
          <Button color="inherit">Terminals</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const Forms = () => {
  const router = useRouter(); // Initialize useRouter
  const [tripType, setTripType] = useState('oneWay');
  const [bookingData, setBookingData] = useState({
    from: '',
    to: '',
    passengers: '',
    departureDate: '',
    returnDate: '', 
  });

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
    if (event.target.value === 'oneWay') {
      setBookingData({ ...bookingData, returnDate: '' });
    }
  };

  const handleSubmit = () => {
    const queryParams = new URLSearchParams({
      from: bookingData.from,
      to: bookingData.to,
      departureDate: bookingData.departureDate,
      returnDate: tripType === 'roundTrip' ? bookingData.returnDate : undefined,
      passengers: bookingData.passengers,
    }).toString();

    router.push(`/available-buses?${queryParams}`); // Navigate to the second page with query parameters
  };

  // const handleSubmit = () => {
  //   router.push({
  //     pathname: 'http://localhost:3000/available-buses',
  //     query: {
  //       from: bookingData.from,
  //       to: bookingData.to,
  //       departureDate: bookingData.departureDate,
  //       returnDate: tripType === 'roundTrip' ? bookingData.returnDate : undefined,
  //       passengers: bookingData.passengers,
  //     },
  //   });
  // };
  

  // Fetch locations
  const [locations, setLocations] = useState([]);
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

  const handleChange = (event) => {
    setBookingData({
      ...bookingData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Header />
      <Box style={styles.heroSection}>
        <Box style={styles.formContainer}>
          <Typography variant="h4" gutterBottom>
            Book Your Trip
          </Typography>
          <FormLabel component="legend">Trip Type</FormLabel>
          <RadioGroup
            row
            value={tripType}
            onChange={handleTripTypeChange}
          >
            <FormControlLabel value="oneWay" control={<Radio />} label="One-Way" />
            <FormControlLabel value="roundTrip" control={<Radio />} label="Round-Trip" />
          </RadioGroup>
          <Grid container spacing={2} alignItems="center">
            {/* Departure City */}
            <Grid item xs={6}>
              <InputLabel id="current-city-label">Departure</InputLabel>
              <Select
                labelId="current-city-label"
                name="from"
                fullWidth
                value={bookingData.from}
                onChange={handleChange}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <DirectionsCarIcon />
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

            {/* Destination City */}
            <Grid item xs={6}>
              <InputLabel id="destination-city-label">Destination</InputLabel>
              <Select
                labelId="destination-city-label"
                name="to"
                fullWidth
                value={bookingData.to}
                onChange={handleChange}
                required
                startAdornment={
                  <InputAdornment position="start">
                    <DirectionsCarIcon />
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

            {/* Departure Date */}
            <Grid item xs={6}>
              <TextField
                label="Date of Departure"
                name="departureDate"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={bookingData.departureDate}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Return Date (for Round-Trip) */}
            {tripType === 'roundTrip' && (
              <Grid item xs={6}>
                <TextField
                  label="Return Date"
                  name="returnDate"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={bookingData.returnDate}
                  onChange={handleChange}
                  required
                />
              </Grid>
            )}

            {/* Passengers */}
            <Grid item xs={tripType === 'roundTrip' ? 12 : 6}>
              <TextField
                label="Number of Passengers"
                name="passengers"
                type="number"
                fullWidth
                value={bookingData.passengers}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Submit button */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                style={styles.button}
                onClick={handleSubmit}
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Forms;
