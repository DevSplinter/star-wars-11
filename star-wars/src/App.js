import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import Routing from './Routing';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout';

function App() {
  const { isAuthenticated, signIn, signOut } = useAuth();
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routing isAuthenticated={isAuthenticated} signIn={signIn} />
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
