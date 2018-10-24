import React from 'react'
import {
  Input,
  Container,
  Button,
  Modal
} from 'semantic-ui-react'
import axios from 'axios';

import HeaderBar from "./../GenericElements/HeaderBar"
import Footer from "./../GenericElements/Footer"
import Body from "./../GenericElements/Body"
import TopPanel from "./../GenericElements/TopPanel"
import CardsDashboard from "./../GenericElements/Cards"

import * as constants from '../CONSTANTS';

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
          content='Favoris (à faire)'
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

const getDaysLeft = ( date1, date2 ) => {
  var one_day=1000*60*60*24;
  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();
  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  // Convert back to days and return
  return Math.round(difference_ms/one_day);
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
    }
    this.getFilteredList = this.getFilteredList.bind(this);
  }


  componentDidMount() {
    var tmp_state = [
      {
        image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
        header: "Présentation",
        description: "Première partie du projet",
        link:'/consultation_detail?id=0',
        popularity: 9000,
        days_left: 1,
        vote: true,
      },
      {
        image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
        header: "Implémentation",
        description: "Deuxième partie du projet",
        link:'/consultation_detail?id=0',
        popularity: 9000,
        days_left: 2,
        vote: true,
      },
      {
        image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
        header: "Equipe et originalité",
        description: "Conclusion du projet",
        link:'/consultation_detail?id=0',
        popularity: 9000,
        days_left: 3,
        vote: true,
      },
    {
      image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
      header: "Election des délégués du personnel - 2018",
      description: " Elisez vos futurs représentants pour l'année 2018 - 2020",
      link:'/consultation_detail?id=0',
      popularity: 150,
      days_left: 15,
      vote: true,
    },
    {
      image: "./consultation_vignette/8_Fermeture de lentreprise sur le pont du 11 Novembre.jpeg",
      header: "Fermeture de l'entreprise sur le pont du 11 Novembre?",
      description: "",
      link:"/consultation_detail?id=7",
      popularity: 15,
      days_left: 12,
      vote: true,
    },
    {
      image: "./consultation_vignette/5_Campagne publicitaire télévision - Printemps 2019.jpeg",
      header: "Campagne publicitaire télévision - Printemps 2019",
      description: "La campagne veut promouvoir l'image de marque de l'entreprise",
      link:"/consultation_detail?id=4",
      popularity: 37,
      days_left: 25,
      vote: false,
    },
    {
      image: "./consultation_vignette/7_Conseil d'Administration - Modification des statuts - Octobre 2018.jpeg",
      header: "Conseil d'Administration - Modification des statuts - Novembre 2018",
      description: "",
      link:"/consultation_detail?id=6",
      popularity: 82,
      days_left: 7,
      vote: true,
    },
    {
      image: "./consultation_vignette/6_Recherche du nom du nouveau logiciel de ventes.jpeg",
      header: "Recherche du nom du nouveau logiciel de ventes",
      description: "Appel à contributions",
      link:"/consultation_detail?id=5",
      popularity: 101,
      days_left: 37,
      vote: true,
    },
    {
      image: "./consultation_vignette/4_Renouvellement du prestataire du restaurant dentreprise.jpeg",
      header: "Renouvellement du prestataire du restaurant d'entreprise",
      description: "Le contrat cadre se termine fin 2018. Donnez vos idées d'améliorations",
      link:"/consultation_detail?id=3",
      popularity: 74,
      days_left: 15,
      vote: false,
    },
    {
      image: "./consultation_vignette/3_Restructuration fonctionnelle de la direction R&D.jpeg",
      header: "Restructuration fonctionnelle de la direction R&D",
      description: "Pour répondre à la demande grandissante, la direction évolue",
      link:"/consultation_detail?id=2",
      popularity: 68,
      days_left: 15,
      vote: false,
    }
  ];

    this.setState({
      consultation_list: sortByNumber(tmp_state),
      displayed_list: sortByNumber(tmp_state),
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
            >
              <Modal.Header>Petit Préambule</Modal.Header>
              <Modal.Content>
                <p>Hohoho bitch, trouver texte à mettre</p>
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
            <CardsDashboard card_list={this.state.displayed_list}/>
          </Body>
          <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(ConsultationList)
