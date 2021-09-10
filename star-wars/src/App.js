import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Routing from './components/Routing';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout';

function App() {
  const { isAuthenticated, signIn, signOut } = useAuth();
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
    overrides: {
      MuiTextField: {
        root: {
          '& label.Mui-focused': {
            color: '#fff',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bbb',
            },
            '&:hover fieldset': {
              borderColor: '#faf3c0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Layout signOut={signOut} isAuthenticated={isAuthenticated}>
          <Routing isAuthenticated={isAuthenticated} signIn={signIn} />
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
