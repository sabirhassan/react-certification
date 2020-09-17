import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Menu from './MenuComponent';
import Home from './HomeComponent';


import Header from './HeaderComponent';
import Footer from './FooterComponent';

import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
        return(
            <Home 
            />
        );
      }

    return (
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        </Switch>
    );
  }
}

export default Main;