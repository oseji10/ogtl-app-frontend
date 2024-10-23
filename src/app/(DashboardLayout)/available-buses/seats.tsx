import React, { useState } from 'react';
import { Modal, Button, Grid, Box, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const SeatSelectionModal = ({ open, onClose, onSelectSeat }) => {
  const [selectedSeat, setSelectedSeat] = useState(null); // Single selected seat

  const seats = [
    { id: 'Driver', status: 'disabled' }, // Driver seat (Disabled)
    { id: 1, status: 'available' },
    { id: 2, status: 'available' },
    { id: 3, status: 'available' },
    { id: 4, status: 'available' },
    { id: 5, status: 'available' },
    { id: 6, status: 'available' },
    { id: 7, status: 'available' },
    { id: 8, status: 'available' },
    { id: 9, status: 'available' },
    { id: 10, status: 'available' },
    { id: 11, status: 'available' },
    { id: 12, status: 'available' }
  ];

  const handleSeatClick = (seatId) => {
    if (seats.find((seat) => seat.id === seatId).status === 'disabled') return;
    setSelectedSeat(seatId); // Update selected seat
    onSelectSeat(seatId); // Call the selection handler
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Select Your Seat
        </Typography>

        <Grid container spacing={2}>
          {/* Row 1: Driver seat (steering icon), space, Seat 1 */}
          <Grid item xs={3}>
            <Button
              variant="contained"
              disabled
              sx={{
                height: 60,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DirectionsCarIcon />
            </Button>
          </Grid>
          <Grid item xs={6}></Grid> {/* Space */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 1 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(1)}
              fullWidth
              sx={{ height: 60 }}
            >
              1
            </Button>
          </Grid>

          {/* Row 2: Seat 2, Seat 3, space, space */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 2 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(2)}
              fullWidth
              sx={{ height: 60 }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 3 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(3)}
              fullWidth
              sx={{ height: 60 }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}></Grid> {/* Space */}
          <Grid item xs={3}></Grid> {/* Space */}

          {/* Row 3: Seat 4, Seat 5, space, Seat 6 */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 4 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(4)}
              fullWidth
              sx={{ height: 60 }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 5 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(5)}
              fullWidth
              sx={{ height: 60 }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}></Grid> {/* Space */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 6 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(6)}
              fullWidth
              sx={{ height: 60 }}
            >
              6
            </Button>
          </Grid>

          {/* Row 4: Seat 7, Seat 8, space, Seat 9 */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 7 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(7)}
              fullWidth
              sx={{ height: 60 }}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 8 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(8)}
              fullWidth
              sx={{ height: 60 }}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}></Grid> {/* Space */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 9 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(9)}
              fullWidth
              sx={{ height: 60 }}
            >
              9
            </Button>
          </Grid>

          {/* Row 5: Seat 10, Seat 11, space, Seat 12 */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 10 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(10)}
              fullWidth
              sx={{ height: 60 }}
            >
              10
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 11 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(11)}
              fullWidth
              sx={{ height: 60 }}
            >
              11
            </Button>
          </Grid>
          <Grid item xs={3}></Grid> {/* Space */}
          <Grid item xs={3}>
            <Button
              variant={selectedSeat === 12 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSeatClick(12)}
              fullWidth
              sx={{ height: 60 }}
            >
              12
            </Button>
          </Grid>
        </Grid>

        <Button
          onClick={onClose}
          sx={{
            mt: 2,
            backgroundColor: '#1976d2',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default SeatSelectionModal;
