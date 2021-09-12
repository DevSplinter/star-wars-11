import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Routing from './components/Routing';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout';
import { authContext } from './context/authContext';

function App() {
  const auth = useAuth();

  const theme = createTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      fontFamily: 'Arial',
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
        <authContext.Provider value={auth}>
          <Layout>
            <Routing />
          </Layout>
        </authContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
