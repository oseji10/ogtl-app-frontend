'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
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
  tableContainer: {
    marginTop: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f4f8',
  },
  tableHeader: {
    backgroundColor: '#2f6e36',
    color: '#fff',
  },
  tableCellHeader: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f9f9f9',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#e0e7eb',
    },
  },
  footer: {
    backgroundColor: '#2f6e36',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto',
  },
};

<Header/>

const RoutesPage = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Fetch routes data from your API
    const fetchRoutes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destinations`);
        const data = await response.json();
        setRoutes(data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div style={styles.pageContainer}>
      <Header />
      <Container style={styles.contentContainer}>
        <Box mt={5}>
          <Typography variant="h4" align="center" gutterBottom color="#2f6e36">
            Our Routes
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" mb={3}>
            Choose from a wide range of destinations. We take you there safely and comfortably.
          </Typography>
          <TableContainer component={Paper} style={styles.tableContainer}>
            <Table>
              <TableHead style={styles.tableHeader}>
                <TableRow>
                  <TableCell style={styles.tableCellHeader}>Route ID</TableCell>
                  <TableCell style={styles.tableCellHeader}>Destination</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {routes.map((route) => (
                  <TableRow key={route.destinationID} style={styles.tableRow}>
                    <TableCell align="center">{route.destinationID}</TableCell>
                    <TableCell align="center">{route.destinationName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <Footer style={styles.footer} />
    </div>
  );
};

export default RoutesPage;
