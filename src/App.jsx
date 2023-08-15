import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './pages/home/home.component';
import RecipeShowcase from './pages/recipe-showcase/recipe-showcase.component';
import Navigation from './pages/navigation/navigation.component';
import RecipeUpload from './pages/recipe-upload/recipe-upload.component';
import RecipeEdit from './pages/recipe-edit/recipe-edit.component';
import AuthPage from './pages/authentication/authentication.component';
import Carousel from './components/recipes-carousel/recipes-carousel.component';
import { useContext } from 'react';
import { UserContext } from './contexts/user.context';


const App = () => {

  const {user}=useContext(UserContext);   


  return (
    <Router>
      <Navigation/>
      <Grid container marginTop={6}>
        <Grid item xs={false} sm={1} md={1} />
        <Grid item xs={12} sm={10} md={10}>
          <Grid container>
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
            <Route
                path="/recipe/upload"
                element={user ?
                  <Grid container justifyContent="center"> {/* Centering the RecipeShowcase */}
                    <Grid item xs={12} sm={7}> {/* Smaller width for RecipeShowcase */}
                      <RecipeUpload />
                    </Grid>
                  </Grid>
                : <Navigate to="/auth" />}
              />
           <Route
                path="/recipe/:id/edit"
                element={user ?
                  <Grid container justifyContent="center"> {/* Centering the RecipeShowcase */}
                    <Grid item xs={12} sm={7}> {/* Smaller width for RecipeShowcase */}
                      <RecipeEdit />
                    </Grid>
                  </Grid>
                : <Navigate to="/auth" />}
            />
            <Route
            path='/auth'
            element={
              <Grid container justifyContent="center"> {/* Centering the RecipeShowcase */}
                <Grid item xs={12} sm={3}> {/* Smaller width for RecipeShowcase */}
                  <AuthPage />
                </Grid>
              </Grid>
            }
            />
            <Route
            path='/carousel'
            element={
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={9}>
                  <Carousel/>
                </Grid>
              </Grid>
              }
              />          
          </Routes>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} md={1} />
      </Grid>
    </Router>
  );
};

export default App;
