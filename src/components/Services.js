import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ServiceCard = styled(Box)({
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

const services = [
  {
    title: 'Classic Cocktails',
    description:
      'We specialize in crafting the perfect classic cocktail. Our experienced bartenders know just how to mix and serve the best drinks for your event.',
    image: 'https://source.unsplash.com/1IAhDzpCP5M/800x600',
  },
  {
    title: 'Custom Creations',
    description:
      'Looking for something more unique? Let us create a custom cocktail menu for your event. Our talented bartenders love getting creative and experimenting with new flavors.',
    image: 'https://source.unsplash.com/wdoM3ye3PQk/800x600',
  },
  {
    title: 'Premium Spirits',
    description:
      'We only use the finest premium spirits in our cocktails. You and your guests will taste the difference in the quality of our drinks.',
    image: 'https://source.unsplash.com/6Bxfl48-QxA/800x600',
  },
];

const Services = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard>
                <img src={service.image} alt={service.title} style={{ height: '200px', width: '100%' }} />
                <Typography variant="h6" align="center" sx={{ mt: 2, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography align="center">{service.description}</Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
