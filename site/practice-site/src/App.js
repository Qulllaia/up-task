import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Home, Info, Group, Article, Link as LinkIcon } from '@mui/icons-material';

import ResourcesPage from './ResourcesPage'
import JournalPage from './JournalPage'
import TeamPage from './TeamPage'
import HomePage from './HomePage'
import AboutPage from './AboutPage';
import { StaticPaper } from './StaticPaper';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.8)'
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '8px 20px',
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: 'none !important',
          transform: 'none !important',
          '&:hover': {
            transform: 'none !important',
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.8) !important'
          }
        }
      }
    },
  },
});


function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', name: 'Главная', icon: <Home /> },
    { path: '/about', name: 'О проекте', icon: <Info /> },
    { path: '/team', name: 'Участники', icon: <Group /> },
    { path: '/journal', name: 'Журнал', icon: <Article /> },
    { path: '/resources', name: 'Ресурсы', icon: <LinkIcon /> },
  ];

  return (
    <AppBar position="static" 
    sx={{ 
      mt: 2,
      mb: 4,
      background: 'linear-gradient(45deg, #1a1a1a 30%, #2d2d2d 90%)',
      boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.8) !important',
      borderRadius: 12
    }}>
      <Toolbar>
        <img 
          src="https://mospolytech.ru/upload/medialibrary/a59/mospolytech_logo_white.png" 
          alt="Мосполитех" 
          style={{ height: 50, marginRight: 16 }} 
        />
        <Box sx={{ flexGrow: 1, display: 'flex', ml: 3, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: location.pathname === item.path ? '#90caf9' : '#e0e0e0',
                borderBottom: location.pathname === item.path ? '2px solid #90caf9' : 'none',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'rgba(144, 202, 249, 0.08)'
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Navigation />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>

          <StaticPaper component="footer" sx={{ 
            mt: 6, 
            p: 3, 
            textAlign: 'center',
            backgroundColor: '#1a1a1a',
            borderRadius: 12
          }}>
            <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
              © {new Date().getFullYear()} Московский политехнический университет
            </Typography>
          </StaticPaper>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;