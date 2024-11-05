'use client';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import { useSearchParams, useRouter } from 'next/navigation';
import SeatSelectionModal from './seats';
import Header from '../stryling/header';
import Footer from '../stryling/footer';

const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      backgroundImage: `url('#')`,  // Background image
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
  
<Header/>

const AvailableVehicles = () => {
  const router = useRouter(); // Initialize useRouter
//   const { query } = router; // Get the query object
//   console.log('Router query:', router.query);

  // Use optional chaining to safely access properties
//   const from = query.from || '';
//   const to = query.to || '';
//   const departureDate = query.departureDate || '';
//   const returnDate = query.returnDate || '';
//   const passengers = query.passengers || '';

  const [vehicles, setVehicles] = useState([]);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);


  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const departureDate = searchParams.get('departureDate');
  const returnDate = searchParams.get('returnDate');
  const passengers = searchParams.get('passengers');

  useEffect(() => {
    // Check if the necessary parameters are available before fetching
    if (from && to && departureDate) {
      const fetchVehicles = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destinations/search?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`);
          const data = await response.json();
          setVehicles(data);
        } catch (error) {
          console.error('Error fetching vehicles:', error);
        }
      };

      fetchVehicles();
    }
  }, [from, to, departureDate, returnDate, passengers]); // Run when query parameters change

  // Handle cases where the query is still being populated
//   if (!query.from || !query.to || !query.departureDate) {
//     return <Typography>Loading...</Typography>; // Show a loading message
//   }

const openSeatModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeSeatModal = () => {
    setIsModalOpen(false);
  };

  const handleSeatSelect = (seatId) => {
    setSelectedSeat(seatId);
    console.log(`Seat ${seatId} selected for vehicle ${selectedVehicle.model}`);
  };

  return (
    <div>
      <Header />
      <Box style={styles.heroSection}>
        <Box style={styles.cardContainer}>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle) => (
              <Card key={vehicle.tripID} style={styles.card}>
                <CardMedia
                  style={styles.media}
                  image='/images/hiace.jpg'
                  title={vehicle.bus.busName}
                />
                <CardContent>
                  <Typography variant="h3" component="div">
                    {vehicle.bus?.busName}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {vehicle?.destination?.destinationName} |  {new Date(vehicle?.departureDate).toLocaleDateString()} | {vehicle?.departureTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seats Available: {vehicle?.numberOfSeats}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price:&nbsp;
                    {/* ₦{vehicle?.destination?.destination_cost?.[0].cost} */}
                    { vehicle?.destination?.destination_cost?.[0]?.cost 
  ? `₦${(Number(vehicle.destination.destination_cost[0].cost) || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
  : 'N/A' }


                  </Typography>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={() => openSeatModal(vehicle)}
                >
                    View Seats
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="h6" component="div">
              No vehicles available for this route/date.
            </Typography>
          )}

           {/* Seat Selection Modal */}
      {selectedVehicle && (
        <SeatSelectionModal
          open={isModalOpen}
          onClose={closeSeatModal}
          onSelectSeat={handleSeatSelect}
        />
      )}
        </Box>
      </Box>
      <Footer/>
    </div>
  );
};

export default AvailableVehicles;
