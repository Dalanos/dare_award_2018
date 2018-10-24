import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import { CookiesProvider, withCookies } from 'react-cookie';

import LoginPage from './LoginPage/LoginPage';
import NewConsultation from "./NewConsultation/NewConsultation"
import ConsultationList from "./ConsultationList/ConsultationList"
import ConsultationDetail from "./ConsultationDetail/ConsultationDetail"
import PrivateRoute from "./GenericElements/PrivateRoute"
import OpinionDetail from "./OpinionDetail/OpinionDetail"

import './App.css';

class App extends Component {

  render() {
    return (
      <CookiesProvider>
        <HashRouter>
            <div className="App content">
              <PrivateRoute exact path="/" component={ConsultationList}/>
              <Route exact path="/login" component={LoginPage}/>
              <PrivateRoute exact path="/new_consultation" component={NewConsultation}/>
              <PrivateRoute exact path="/consultation_list" component={ConsultationList}/>
              <PrivateRoute exact path="/consultation_detail" component={ConsultationDetail}/>
              <PrivateRoute exact path="/opinion_detail" component={OpinionDetail}/>
            </div>
        </HashRouter>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
