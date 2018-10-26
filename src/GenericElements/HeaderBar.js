import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";
import { withCookies } from 'react-cookie';

import * as constants from '../CONSTANTS';

import "./GenericCSS.css"

var images = require.context('../img', true);

class HeaderBar extends React.Component {
  constructor(props){
    super(props);
    const { cookies } = props;

    this.state = {
      user_info: cookies.get('user_info'),
      cookies: props.cookies,
    }
  }


  render() {

    var retour_liste_sujet = [
      <Menu.Item as={Link} to="/"
      style={
        parseInt(this.state.cookies.get('parcours_jury')) === constants.CONSULT_UNE_OPINION_DETAIL_TROIS_RETOUR ||
        parseInt(this.state.cookies.get('parcours_jury')) === constants.CONSULT_DEUX_VOTE_VALIDE
      ? constants.style : []}>
      Liste des sujets</Menu.Item>
    ]
    var retour_desactivé = [
      <Menu.Item>Liste des sujets (Desactivé)</Menu.Item>
    ]
    return(
      <div>
        <Menu fixed='top' className="header_bar" >
          <Container>
            <Menu.Item header className="header_bar_hide_border_left_main_button">
              <Image size='mini' src={images("./logo.png")} style={{ marginRight: '1.5em' }} />
              Aurora
            </Menu.Item>
            {parseInt(this.state.cookies.get('parcours_jury')) >= constants.CONSULT_UNE_OPINION_DETAIL_TROIS_RETOUR ?
              retour_liste_sujet : retour_desactivé}
            <Menu.Item position="right" className="remove_padding_profile_pic">
              <Image size='mini' src={images("./profile_pic.jpg")}  circular />
            </Menu.Item>
            <Dropdown item simple text="Jury Dare Award">
              <Dropdown.Menu>
                <Dropdown.Item>Mon compte (Désactivé)</Dropdown.Item>
                <Dropdown.Item >Déconnexion (Désactivé)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    );
  }
// src={require("./../img/profile_pic/3.png")}
}


export default withCookies(HeaderBar)
