import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
});

const blogPosts = [
  {
    title: '10 Best Places to Visit in Europe',
    description:
      'From the beaches of Greece to the castles of Scotland, Europe has something for everyone. Here are the 10 best places to visit in Europe.',
    image: 'https://source.unsplash.com/yBZ7mKvXa8A/800x600',
  },
  {
    title: 'Top 5 Ski Resorts in the Alps',
    description:
      'The Alps are home to some of the best ski resorts in the world. Here are the top 5 ski resorts in the Alps that you must visit.',
    image: 'https://source.unsplash.com/SMZK6T-ymHY/800x600',
  },
  {
    title: 'Best Street Food in Asia',
    description:
      'If you love trying new and exciting food, Asia is the place to be. Here are the best street food dishes you need to try in Asia.',
    image: 'https://source.unsplash.com/RvN3LqZi2uA/800x600',
  },
];

const Blog = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Latest Blog Posts
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BlogCard>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography align="center">{post.description}</Typography>
              </BlogCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;