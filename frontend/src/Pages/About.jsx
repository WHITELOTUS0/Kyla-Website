import React from 'react';
import TopBar from './Design1/TopBar';
import Footer from './Design1/Footer';
import gamer from "../assets/image4.jpeg";
import { Typography, Box } from '@mui/material';

function About() {
  return (
    <div style={{ backgroundImage: `url(${gamer})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <TopBar />

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '80%', margin: '0 auto' }}>

        <Typography variant="h3" gutterBottom style={{ color: '#357ABD' }}>
          Our Story:
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', lineHeight: 1.6 }}>
          In today's digital age, while we're more connected than ever, genuine connections seem to be fading. Many students feel isolated, unable to find peers with shared interests or passions. Recognizing this challenge, we created Grade Mix N'Match:Akamom - a platform dedicated to helping students discover and connect with peers who share common interests.
        </Typography>

        <Typography variant="h3" gutterBottom style={{ color: '#357ABD' }}>
          Our Mission:
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', lineHeight: 1.6 }}>
          At Grade Mix N'Match:Akamom, our mission is simple: to foster genuine connections among students. We believe that when students collaborate, they not only enhance their learning experiences but also form lasting friendships.
        </Typography>

        <Typography variant="h3" gutterBottom style={{ color: '#357ABD' }}>
          How It Works:
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', lineHeight: 1.6 }}>
          Sign Up: Create your profile and list your interests. Get Matched: Our algorithm will find students with similar passions. Connect & Collaborate: Chat, collaborate on projects, or simply discuss your shared interests. Grow Together: As you connect with more peers, watch your network and friendships grow.
        </Typography>

        <Typography variant="h3" gutterBottom style={{ color: '#357ABD' }}>
          Our Commitment:
        </Typography>
        <Typography variant="body1" paragraph style={{ color: '#555', lineHeight: 1.6 }}>
          We're committed to creating a safe and inclusive platform. Our team constantly updates our matching algorithm to ensure you find the best matches, and we prioritize your privacy and security above all else. Join us in creating a vibrant community of students passionate about learning, connecting, and growing together.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default About;
