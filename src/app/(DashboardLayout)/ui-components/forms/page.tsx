'use client';
import {
    Paper,
    Grid,
    Stack,
    TextField,
    FormControl,
    Button,
    MenuItem,
    InputLabel,
    Select,
} from '@mui/material';
import { useState } from 'react';

const Forms = () => {
    const [bookingData, setBookingData] = useState({
        currentCity: '',
        destinationCity: '',
        passengers: 1,
        departureDate: '',
    });

    const handleChange = (event) => {
        setBookingData({
            ...bookingData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        console.log('Booking data:', bookingData);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Stack spacing={3}>
                        {/* Select current city */}
                        <FormControl fullWidth>
                            <InputLabel id="current-city-label">Current City</InputLabel>
                            <Select
                                labelId="current-city-label"
                                id="current-city"
                                name="currentCity"
                                value={bookingData.currentCity}
                                onChange={handleChange}
                                label="Current City"
                            >
                                <MenuItem value="New York">New York</MenuItem>
                                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                                <MenuItem value="Chicago">Chicago</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Select destination city */}
                        <FormControl fullWidth>
                            <InputLabel id="destination-city-label">Destination City</InputLabel>
                            <Select
                                labelId="destination-city-label"
                                id="destination-city"
                                name="destinationCity"
                                value={bookingData.destinationCity}
                                onChange={handleChange}
                                label="Destination City"
                            >
                                <MenuItem value="San Francisco">San Francisco</MenuItem>
                                <MenuItem value="Miami">Miami</MenuItem>
                                <MenuItem value="Houston">Houston</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Select number of passengers */}
                        <TextField
                            id="passengers"
                            name="passengers"
                            label="Number of Passengers"
                            type="number"
                            value={bookingData.passengers}
                            onChange={handleChange}
                            inputProps={{ min: 1 }}
                            fullWidth
                        />

                        {/* Select departure date */}
                        <TextField
                            id="departure-date"
                            name="departureDate"
                            label="Date of Departure"
                            type="date"
                            value={bookingData.departureDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />

                        {/* Submit button */}
                        <Button variant="contained" onClick={handleSubmit}>
                            Book Now
                        </Button>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Forms;
