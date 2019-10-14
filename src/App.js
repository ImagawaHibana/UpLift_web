import React from 'react';
import Header from './Header';
import Main from './Main';
import { createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

let theme = createMuiTheme({
  palette: {
    primary: {main: '#000000',},
    secondary: {main: '#E8E8E8',},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
