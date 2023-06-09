import { Container, CssBaseline } from '@mui/material';
import { Navigation } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Recommend, Settings } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Container maxWidth='ls'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/recommend' element={<Recommend />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
