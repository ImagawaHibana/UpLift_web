import React from 'react';
import Header from './Header';
import Top from './Top';
import AboutUs from './AboutUs';
import { createMuiTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route} from "react-router-dom";

let theme = createMuiTheme({
  palette: {
    primary: {main: '#000000',},
    secondary: {main: '#EBEBEB',},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 12,
  },
});

const App = ()=>{
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Header/>
          <Route exact path='/' component={Top}/>
          <Route exact path='/about_us' component={AboutUs}/>
      </ThemeProvider>
    </Router>
  );
};

export default App;
