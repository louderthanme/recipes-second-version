import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Home from './pages/home/home.component';
import RecipeShowcase from './pages/recipe-showcase/recipe-showcase.component';
import Navigation from './pages/navigation/navigation.component';
import RecipeUpload from './pages/recipe-upload/recipe-upload.component';
import RecipeEdit from './pages/recipe-edit/recipe-edit.component';
import AuthPage from './pages/authentication/authentication.component';
import UserProfile from './pages/user-profile/user-profile.component';
import { useContext } from 'react';
import { UserContext } from './contexts/user.context';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Navigation />
      <Box style={{ paddingTop: '60px' }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={false} sm={1} md={1} />
          <Grid item xs={12} sm={10}>
            <Grid container justifyContent="center" alignItems="center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeShowcase />} />
                <Route path="/recipe/upload" element={user ? <RecipeUpload /> : <Navigate to="/auth" />} />
                <Route path="/recipe/:id/edit" element={user ? <RecipeEdit /> : <Navigate to="/auth" />} />
                <Route path="/user/profile" element={user ? <UserProfile /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={<AuthPage />} />
              </Routes>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} md={1} />
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
