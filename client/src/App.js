import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './pages/Products';
import Categories from './pages/Categories';
import FindProducts from './pages/FindProducts';

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/FindProducts" component={FindProducts} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
