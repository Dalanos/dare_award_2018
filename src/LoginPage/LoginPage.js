import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
} from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react'
import { withCookies } from 'react-cookie';
import axios from 'axios';

import * as constants from '../CONSTANTS';

import "./LoginPage.css"

const SignUpMessage = () => (
  <Message>
    New to us? <NavLink to="/TicTacToe">Sign Up</NavLink>
  </Message>
)

function ErrorMessage(props){
  if(!props.error) {
    return null;
  }

  return(
      <Message negative>
        <Message.Header>Error dans le login ou le mot de passe</Message.Header>
        <p>Un indice: le login c'est "jury_dare_award" et le mdp c'est "votez_pour_nous"</p>
      </Message>
  );
}

class FormAuthentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.onFormAuthenticationSubmit(this.state.email, this.state.password);
  }

  render() {
    const { email, password} = this.state;
    const error = this.props.error;

    return (
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked className="segment_background">
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              name='email'
              value={email}
              onChange={this.handleChange}
              error={error}
              />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              value={password}
              type='password'
              onChange={this.handleChange}
              error={error}
            />
            <Button color='blue' fluid size='large'>
              Login
            </Button>
            <ErrorMessage error={error} />
        </Segment>
      </Form>
    );
  }
}

class LoginPage extends Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  constructor(props) {
    super(props);
    this.state= {
      error : false,
      cookies: props,
      successful_login: false,
    }
    this.handleFormAuthenticationSubmit = this.handleFormAuthenticationSubmit.bind(this);
  }


  handleFormAuthenticationSubmit(email, password) {
    if(email === "jury_dare_award" && password === "votez_pour_nous") {
      const { cookies } = this.state.cookies;
      const d = new Date();
      d.setTime(d.getTime() + (constants.ONE_DAY));
      cookies.set('logged_in', 0, {expires : d});
      cookies.set('parcours_jury', constants.LOGIN_VALIDE ,{expires : d})

      const user_info = {
        id: 0,
        first_name: "Jury",
        last_name: "Dare Award",
        accreditation_level: 1,
        photo: "./profile_pic.jpg",
      }
      cookies.set('user_info', user_info ,{expires : d})

      this.setState ({
        successful_login: true,
      });
    } else {
      this.setState({
        error: true,
        successful_login: false,
      });
    }
  }

  render() {
    //In case of successful login
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    // console.log("sucessful-login " + this.state.successful_login)
    if (this.state.successful_login === true) {
      return (<Redirect to={from.pathname} />);
    } else {
      //Otherwise
      return(
        <div className='login-form background_image'>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                Log-in to your account
              </Header>
              <FormAuthentication error={this.state.error} onFormAuthenticationSubmit={this.handleFormAuthenticationSubmit}/>
              <SignUpMessage/>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}

export default withCookies(LoginPage)
