import React from 'react';
import Header from './Header';
import Top from './Top';
import AboutUs from './AboutUs';
import ScrollToTop from './ScrollToTop';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
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
    fontFamily: [
      'Meiryo',
      'Hiragino Kaku Gothic Std',
      "Roboto", "Helvetica","Arial", "sans-serif",//default
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

const App = ()=>{
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <ScrollToTop/>
          <Header/>
          <Route exact path='/' component={Top}/>
          <Route exact path='/about_us' component={AboutUs}/>
      </ThemeProvider>
    </Router>
  );
};

export default App;
