import React from 'react';
import TopBar from './Design1/TopBar';
import Footer from './Design1/Footer';
import science from "../assets/image3.jpeg";
import { Typography, List, ListItem, Container, Box } from '@mui/material';

function Index() {
  return (
    <div style={{ backgroundImage: `url(${science})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <TopBar />

      <Container maxWidth="lg" style={{ marginTop: '5%', position: 'relative' }}>
        <Box display="flex" flexDirection="column" mt={5} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h2" gutterBottom style={{ color: '#357ABD' }}>
            Connecting Students Through Shared Interests!
          </Typography>
          <Typography variant="h4" gutterBottom style={{ color: '#444', fontWeight: 500 }}>
            Discover peers who share your passions and interests, and forge meaningful friendships.
          </Typography>
          <Typography variant="body1" paragraph style={{ color: '#555', lineHeight: 1.6 }}>
            Are you passionate about something but can't find anyone to share in your excitement? Do you wish to collaborate on projects or discuss topics that fascinate you? Our platform matches students based on shared interests, helping you find like-minded peers within your school!
          </Typography>
          <Typography variant="h5" gutterBottom style={{ color: '#6A30A3' }}>
            Features:
          </Typography>
          <List>
            <ListItem><Typography style={{ color: '#444' }}>Personalized Matching: Tell us about your interests, and we'll find students with similar passions.</Typography></ListItem>
            <ListItem><Typography style={{ color: '#444' }}>Secure and Private: Your personal information is always protected. Connect with confidence!</Typography></ListItem>
            <ListItem><Typography style={{ color: '#444' }}>Expand Your Network: Join a community where everyone shares a common goal - to connect and collaborate.</Typography></ListItem>
            <ListItem><Typography style={{ color: '#444' }}>Diverse Interests: Whether it's art, science, sports, or literature, there's someone out there waiting to connect with you.</Typography></ListItem>
          </List>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default Index;
