'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import Footer from '../stryling/footer';
import Header from '../stryling/header';

const styles = {
  headerImage: {
    width: '100%',
    height: '300px',
    backgroundImage: 'url("/images/aboutus.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  section: {
    padding: '20px',
    marginTop: '20px',
  },
  heading: {
    color: '#2f6e36',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    lineHeight: '1.7',
    color: '#333',
  },
  divider: {
    margin: '20px 0',
    backgroundColor: '#2f6e36',
  },
};
const AboutUs = () => (
  <div>
<Header/>
    <Box style={styles.headerImage}>
      <Typography variant="h2" component="h1">About Us</Typography>
    </Box>
    <Container>
      <Paper elevation={3} style={styles.section}>
        <Typography variant="h4" style={styles.heading}>Welcome to On-God Transport Services</Typography>
        <Typography style={styles.paragraph}>
          At On-God Transport Services, we are committed to providing a safe, reliable, and comfortable travel experience for all our passengers. Since our inception, we have focused on creating seamless journeys across numerous destinations, with passenger satisfaction as our top priority.
        </Typography>
      </Paper>

      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>Our Mission</Typography>
        <Typography style={styles.paragraph}>
          Our mission is to connect people, cities, and communities with dependable, accessible, and customer-centered transportation services. Every mile we travel is dedicated to bringing you closer to your destination with the ease and comfort you deserve.
        </Typography>
      </Paper>

      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>Why Choose Us?</Typography>
        <ul>
          <li><Typography style={styles.paragraph}><strong>Safety First:</strong> We adhere to stringent safety protocols and regularly maintain our fleet to ensure secure travel for every passenger.</Typography></li>
          <li><Typography style={styles.paragraph}><strong>Comfortable Journeys:</strong> Our vehicles are equipped with comfortable seating, air conditioning, and other amenities to make your journey enjoyable and relaxing.</Typography></li>
          <li><Typography style={styles.paragraph}><strong>Professional Team:</strong> From our skilled drivers to our friendly customer service staff, we have a dedicated team ready to assist you every step of the way.</Typography></li>
          <li><Typography style={styles.paragraph}><strong>Affordable Rates:</strong> Quality travel doesn’t have to be expensive. We offer competitive fares, ensuring excellent value for your money.</Typography></li>
        </ul>
      </Paper>

      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>Our Values</Typography>
        <Typography style={styles.paragraph}>
          We uphold key values that reflect our commitment to excellence in transport service:
        </Typography>
        <ul>
          <li><Typography style={styles.paragraph}><strong>Reliability:</strong> We prioritize punctuality and consistency in our service. Our passengers can always count on us for reliable transport solutions.</Typography></li>
          <li><Typography style={styles.paragraph}><strong>Customer Satisfaction:</strong> We value the feedback of our passengers and continuously strive to improve our services based on their experiences.</Typography></li>
          <li><Typography style={styles.paragraph}><strong>Innovation:</strong> Embracing technology, we’re constantly improving our services to provide our customers with efficient booking, payment, and travel experiences.</Typography></li>
        </ul>
      </Paper>

      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>Our Vision</Typography>
        <Typography style={styles.paragraph}>
          To become the leading choice for intercity travel by maintaining exceptional service standards, ensuring passenger comfort, and setting new benchmarks in the transport industry.
        </Typography>
      </Paper>

      <Divider style={styles.divider} />

      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>Get in Touch</Typography>
        <Typography style={styles.paragraph}>
          Whether you’re planning your next trip or have questions about our services, our team is here to help. Contact us today to experience the difference with On-God Transport Services. We look forward to having you on board!
        </Typography>
      </Paper>
    </Container>
    <Footer />
  </div>
);

export default AboutUs;
