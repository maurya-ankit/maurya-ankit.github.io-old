import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Light from './theme/Light'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loading from './pages/Loading'
import { AnimatePresence } from "framer-motion"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from '@material-ui/core/Container'
import ServiceWorkerWrapper from './ServiceWorkerWrapper.js'
const HomePage = React.lazy(() => import('./pages/HomePage'));
const DetailPage = React.lazy(() => import('./pages/DetailPage'));
const EditDetail = React.lazy(() => import('./pages/EditDetail'));

//--------------------------------------


ReactDOM.render(
  <ThemeProvider theme={Light}>
    <CssBaseline />

    <Router>
      <Header />
      <ServiceWorkerWrapper />
      <Container maxWidth="lg">
        <AnimatePresence>
          <Switch >
            <Suspense fallback={<Loading />}>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/detail/:id" exact>
                <DetailPage />
              </Route>
              <Route path="/contact">
                <Loading />
              </Route>
              <Route path="/detail/:id/edit">
                <EditDetail />
              </Route>
            </Suspense>

          </Switch>
        </AnimatePresence>
        <Footer />
      </Container>
    </Router>
    {/* <App /> */}

  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
