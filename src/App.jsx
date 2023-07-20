import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './pages/home/home.component';
import RecipeShowcase from './pages/recipe-showcase/recipe-showcase.component';
import Navigation from './pages/navigation/navigation.component';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Grid container marginTop={6}>
        <Grid item xs={false} sm={1} md={1} />
        <Grid item xs={12} sm={10} md={10}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/recipe/:id"
              element={
                <Grid container justifyContent="center"> {/* Centering the RecipeShowcase */}
                  <Grid item xs={12} sm={10} md={9}> {/* Smaller width for RecipeShowcase */}
                    <RecipeShowcase />
                  </Grid>
                </Grid>
              }
            />
          </Routes>
        </Grid>
        <Grid item xs={false} sm={1} md={1} />
      </Grid>
    </Router>
  );
};
export default App;
