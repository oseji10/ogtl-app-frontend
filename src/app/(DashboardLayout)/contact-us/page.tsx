'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { useState } from 'react';
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  contactBox: {
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
  },
  textField: {
    marginBottom: '20px',
  },
  submitButton: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    marginTop: '10px',
  },
  footer: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto',
  },
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      <Container style={styles.contentContainer}>
        <Box style={styles.contactBox}>
          <Typography variant="h4" align="center" gutterBottom color="#2f6e36">
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" mb={3}>
            We're here to help. Reach out to us anytime!
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              style={styles.textField}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              required
              style={styles.textField}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
              style={styles.textField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={styles.submitButton}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      <Footer style={styles.footer} />
    </div>
  );
};

export default ContactUsPage;
