import { Box, Grid, Paper, styled } from '@mui/material';

const Home = () => {
  const SelectedMovies = styled(Paper)(({ theme }) => ({
    position: 'sticky',
    top: theme.spacing(2),
    height: 'calc(100vh - 150px)',
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={6}>Filters section</Paper>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Paper elevation={6}>List of movies</Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SelectedMovies elevation={6}>Selected movies</SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
