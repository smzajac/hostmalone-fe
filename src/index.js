import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//THEME
//MuiThemeProvider provides the MUI theme as CSS to all components that import it withStyles()
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './theme/muiTheme';
import { withStyles } from '@material-ui/core/styles';

//Theme provider is what is used to pass the theme props to all its children
import { ThemeProvider } from "styled-components"


console.log(muiTheme)


ReactDOM.render(
    <MuiThemeProvider theme={muiTheme}>
            <App theme={muiTheme}/>
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
