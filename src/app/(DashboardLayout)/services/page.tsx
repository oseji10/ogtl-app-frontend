'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Image from 'next/image';
import Footer from '../stryling/footer';
import Header from '../stryling/header';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    color: '#000',
    boxShadow: 'none',
    paddingBottom: '10px',
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    backgroundColor: '#f8fafc',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 140,
  },
  footer: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto',
  },
};



const servicesData = [
  {
    title: "Luxury Bus Rides",
    imageUrl: "/images/luxury-bus.jpg",
    description: "Experience premium comfort with our luxury buses, equipped with reclining seats, air conditioning, and Wi-Fi.",
  },
  {
    title: "Parcel Delivery",
    imageUrl: "/images/parcel-delivery.jpg",
    description: "Fast and secure parcel delivery to all our service locations, ensuring your items arrive safely and on time.",
  },
  {
    title: "Chartered Services",
    imageUrl: "/images/charter-service.jpg",
    description: "Book our vehicles for private or corporate events. We offer tailored services to meet your travel needs.",
  },
  {
    title: "Flexible Booking Options",
    imageUrl: "/images/flexible-booking.jpg",
    description: "Easily book your ride through our online platform, mobile app, or by visiting any of our terminals.",
  },
];

<Header/>
const ServicesPage = () => {
  return (
    <div style={styles.pageContainer}>
      <Header />
      <Container style={styles.contentContainer}>
        <Box mt={5}>
          <Typography variant="h4" align="center" gutterBottom color="#2f6e36">
            Our Services
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" mb={4}>
            Discover the range of services we offer to make your travel experience exceptional.
          </Typography>
          <Grid container spacing={4}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card style={styles.card}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.imageUrl}
                    alt={service.title}
                    style={styles.media}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="#2f6e36">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer style={styles.footer} />
    </div>
  );
};

export default ServicesPage;
