import React from 'react'
import {
  Input,
  Container,
  Button,
  Modal
} from 'semantic-ui-react'

import HeaderBar from "./../GenericElements/HeaderBar"
import Footer from "./../GenericElements/Footer"
import Body from "./../GenericElements/Body"
import TopPanel from "./../GenericElements/TopPanel"
import CardsDashboard from "./../GenericElements/Cards"

import * as constants from '../CONSTANTS';
import * as data from '../data';

import { withCookies } from 'react-cookie';

import "./ConsultationList.css"


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: false,
      searchDetails: {
        searchInput: "",
        favorite: false,
        popular: false,
        vote: false,
      },
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendSearchDetails() {
    this.props.callbackFromParent(this.state.searchDetails);
  }

  handleChange(event) {
    var current_state = this.state.searchDetails;
    current_state.searchInput= event.target.value;
    this.setState ({
      searchDetails: current_state,
    });
    this.sendSearchDetails();
  }

  handleClick(button_name) {
    var current_state = this.state.searchDetails;
    switch (button_name) {
      case "Favoris":
        current_state.favorite = !current_state.favorite;
        break;
      case "Populaires":
        current_state.popular = !current_state.popular;
        break;
      case "Votes":
        current_state.vote = !current_state.vote;
        break;
      default:
    }
    this.setState ({
      searchDetails: current_state,
    });
    this.sendSearchDetails();
  }

  render() {
    return (
      <Container className="search_bar">
        <Input
          icon='search'
          type="text"
          loading={this.state.searching}
          placeholder='Search...'
          value={this.state.searchDetails.searchInput}
          onChange={this.handleChange}/>
        <Button
          icon='star'
          size="large"
          content='Favoris (Désactivé)'
          className={this.state.searchDetails.favorite ?
            "button_search favorite button_favorite_clicked" : "button_search favorite "}
          onClick={this.handleClick.bind(this, "Favoris")}/>
          <Button
            icon='fire'
            size="large"
            content='Populaires'
            className={this.state.searchDetails.popular ?
              "button_search popular button_popular_clicked" : "button_search popular "}
            onClick={this.handleClick.bind(this, "Populaires")}/>
            <Button
              icon='deaf'
              size="large"
              content='Avec vote'
              className={this.state.searchDetails.vote ?
                "button_search vote button_vote_clicked" : "button_search vote "}
              onClick={this.handleClick.bind(this, "Votes")}/>
      </Container>
    );
  }
}

const sortByNumber = (consultation_list) => {
  return (
    consultation_list.sort(function(a, b) {
      return a.days_left - b.days_left;
    })
  );
}

class ConsultationList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cookies: props,
      number_of_consultations: 0,
      consultation_list: [],
      displayed_list: [],
      modal_open: true,
      parcours_jury: parseInt(props.cookies.get('parcours_jury'), 10),
    }
    this.getFilteredList = this.getFilteredList.bind(this);
  }


  componentDidMount() {
    const { cookies } = this.state.cookies;
    var tmp_modal = false;
    var current_parcours_jury=parseInt(cookies.get('parcours_jury'), 10);

    if(cookies.get('parcours_jury') < constants.MODALE_VALIDE) {
      tmp_modal = true;
    }
    this.setState({
      consultation_list: sortByNumber(data.consultation_list_data),
      displayed_list: sortByNumber(data.consultation_list_data),
      modal_open: tmp_modal,
      parcours_jury: current_parcours_jury,
    });

    var new_state_jury;

    switch(this.state.parcours_jury){
      case constants.MODALE_VALIDE:
        new_state_jury=constants.CONSULT_UNE_DESC;
      break;
      case constants.CONSULT_UNE_OPINION_DETAIL_TROIS_RETOUR:
        new_state_jury=constants.CONSULT_UNE_RETOUR;
      break;
      case constants.CONSULT_DEUX_VOTE_VALIDE:
        new_state_jury=constants.CONSULT_DEUX_RETOUR;
      break;
      //VIRE CAR SEMBLE INUTILE
      // case constants.CONSULT_UNE_OPINION_DETAIL_UN_VALIDE:
      //   new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_UN_RETOUR;
      // break;
      // case constants.CONSULT_UNE_OPINION_DETAIL_DEUX_VALIDE:
      //   new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_DEUX_RETOUR;
      // break;
      // case constants.CONSULT_UNE_OPINION_DETAIL_TROIS_VALIDE:
      //   new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_TROIS_RETOUR;
      // break;
      default:
        new_state_jury = this.state.parcours_jury;
    }

    const d = new Date();
    d.setTime(d.getTime() + (constants.ONE_DAY));
    cookies.set('parcours_jury', new_state_jury ,{expires : d});
    this.setState({
      parcours_jury: new_state_jury,
    });
  }

  close = () => {
    this.setState({ modal_open: false });
    const { cookies } = this.state.cookies;
    const d = new Date();
    d.setTime(d.getTime() + (constants.ONE_DAY));
    cookies.set('parcours_jury', constants.MODALE_VALIDE ,{expires : d})
  }

  getFilteredList(searchDetails) {
      let displayed_list = this.state.consultation_list;
      //Votes
      if (searchDetails.vote) {
        displayed_list = displayed_list.filter(function(a) {
          return a.vote;
        })
      }
      //Favorite
      if (searchDetails.favorite) {
        //FAIRE FAVORIS
        //TODO FAIRE FAVORIS
      }
      //Popularity
      if (searchDetails.popular) {
        displayed_list.sort(function(a, b) {
            return b.popularity - a.popularity;
        })
      }else {
        displayed_list = sortByNumber(displayed_list)
      }
      //Search input
      displayed_list = displayed_list.filter(function(a) {
        // console.log(a.header.toLowerCase().search(searchDetails.searchInput.toLowerCase()) !== -1)
        return a.header.toLowerCase().search(searchDetails.searchInput.toLowerCase()) !== -1;
      })

      this.setState({
        displayed_list: displayed_list,
      });
  }

  render() {
    return (
      <React.Fragment>
          <HeaderBar/>
          <TopPanel
            title="Liste des sujets disponibles"
            subtitle="Parcourez les opinions de votre entreprise"
            image={constants.IMAGE_BRAINSTORMING}/>
          <Body>


            <Modal
              open={this.state.modal_open}
              closeOnEscape={true}
              closeOnDimmerClick={false}
              dimmer="blurring"
              size="large"
              onClose={this.close}
              style={{
                height: '50%'
              }}
            >
              <Modal.Header style={{fontSize: '22px'}}>Foreword</Modal.Header>
              <Modal.Content style={{fontSize: '19px'}}>
                <p>
                  Hey there! <br/>
                Welcome to our project for the Dare Award 2018 Challenge. <br/>
                We have been developing this platform these last three weeks to make your experience
                as interactive as possible. We will be guiding you during the presentation, you’ll
                just have to click on the highlighted elements!<br/><br/><br/>

                P.S: The platform that you are on is a very early prototype of what we have in mind,
                so it is incomplete and there are probably a few bugs. But if you follow the
                highlighted path, you should be all right.  <br/>
                But if something goes wrong, you can join us at 06 56 84 05 77 or sami.yacoubi@hec.edu.<br/>
                We’ll also add a regular (and boring) version of our presentation in an additional document.

                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  onClick={this.close}
                  positive
                  labelPosition='right'
                  icon='checkmark'
                  content="C'est parti!"
                />
              </Modal.Actions>
            </Modal>


            <SearchBar callbackFromParent={this.getFilteredList}/>
            <CardsDashboard card_list={this.state.displayed_list} cookies={this.state.cookies} parcours_jury={this.state.parcours_jury}/>
          </Body>
          <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(ConsultationList)
