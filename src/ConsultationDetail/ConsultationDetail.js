import React from 'react'
import axios from 'axios';
import {
  Container,
  Menu,
  Grid,
  Image,
  Item,
  Icon,
  Button,
  Card,
  Form,
  Checkbox,
  Divider
} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";
import { withCookies } from 'react-cookie';
// import {
//   Link
// } from "react-router-dom";
import HeaderBar from "./../GenericElements/HeaderBar"
import Footer from "./../GenericElements/Footer"
import Body from "./../GenericElements/Body"
import TopPanel from "./../GenericElements/TopPanel"

import * as data from '../data';

import "./ConsultationDetail.css"

var images = require.context('../img', true);

const InfoBar = props => {
  return (
    <Container>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={3}>
            <Image src={images(props.info.organisator_photo)} size='tiny' circular/>
          </Grid.Column>
          <Grid.Column width={10} textAlign='left'>
            <h3>{props.info.consultation_details.consultation_name}</h3>

            <i>{props.info.consultation_details.consultation_pitch_sentence}</i>
          </Grid.Column>
          <Grid.Column width={3}>
            {props.info.consultation_details.days_left} jour(s) restant(s) avant l'ouverture des votes
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
};

const DescriptionView = props => {
  return (
    <Container>
      {/* <React.Fragment>
        {props.desc}
      </React.Fragment> */}
      {/* <div dangerouslySetInnerHTML={{ __html: this.props.match.description }} />
      <p>
        {props.desc}
      </p> */}
      <div dangerouslySetInnerHTML={{ __html: props.desc }} />
    </Container>
  )
};

const NavigationBar = props => {
    return (
      <Menu pointing secondary >
        <Menu.Item
          name='Description'
          active={props.active === 'Description'}
          onClick={() => props.onClick("Description")} />
        <Menu.Item
          name='Opinions'
          active={props.active === 'Opinions'}
          onClick={() => props.onClick("Opinions")}
        />
        <Menu.Item
          name='Vote'
          active={props.active === 'Vote'}
          onClick={() => props.onClick("Vote")}
        />
      </Menu>
    );
};

const SearchBlock = props => {
  return (
    <Grid.Column width={3} className="encadrer_bloc">
      Filtres:
      <Form>
        <Form.Field>
          <label>Titre</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Auteur</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Desactivé</Button>
      </Form>
    </Grid.Column>
  )
};

const Réactions = props => {
  return (
    <Grid.Column width={4}>
      <Card className="reactions_box">
        <Card.Content>
          <Card.Header>Réactions</Card.Header>
          <Card.Meta>Que pensez vous de cette consultation?</Card.Meta>
          <Card.Description>
            Imaginer un visuel qui permet de mesurer des réactions
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button  color='green'>
              <Icon  size='large' name='smile outline' />
            </Button>
            <Button  color='red'>
              <Icon  size='large' name='frown outline' />
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
};

const OpinionCard = (props) => {
  if(props.author_detail) {
    const shortened_title = props.opinion_detail.title.substring(0, 45);
    const shortened_content = props.opinion_detail.content.substring(0, 70);
    return (
      <Item className="encadrer_bloc">
        <Item.Image
          size='tiny'
          src={images(props.author_detail.photo)}
          as={Link}
          to={'/opinion_detail?id_consultation=' + props.id_consultation + '&id_opinion=' + props.opinion_detail.id}
          circular/>

        <Item.Content verticalAlign='middle'>
          <Item.Header>
            {shortened_title}
          </Item.Header>
          <Item.Meta>
            {props.author_detail.first_name + " " + props.author_detail.last_name}
          </Item.Meta>
          <Item.Description>
            <p>{shortened_content}</p>
          </Item.Description>
        </Item.Content>

        <Item.Content verticalAlign='middle' className="buttons_alignement">
          <Button.Group vertical labeled icon>
            <Button icon='like' content={props.opinion_detail.likes} className="button_like_fav"/>
            <Button icon='favorite' content='Favorite' className="button_like_fav"/>
          </Button.Group>
        </Item.Content>
      </Item>
    );
  }else {
    return null;
  }

}

class OpinionListAsCard extends React.Component  {

  render () {
    const opinion_list=this.props.state.opinion_list;
    const id_consultation = this.props.state.id_consultation;
    const number_of_opinions = this.props.state.number_of_opinions;
    // Choice to avoid running into an error if user_list not yet loaded
    const user_list = this.props.state.user_list || {};

    var render = [];
    for (var i = 0; i < number_of_opinions; i++) {
      const current_opinion = opinion_list[i];
      render.push(
        <OpinionCard
          id_consultation={id_consultation}
          opinion_detail={current_opinion}
          author_detail={user_list[current_opinion.id_author]}
          key={i}/>
      );
    }

    return (
      <Grid.Column width={9} textAlign='left'>
        <Item.Group>
          {render}
        </Item.Group>
      </Grid.Column>
    );
  }
};


class OpinionView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id_consultation: props.id_consultation,
    };
  }

  componentDidMount() {
    //TODO: Mutualiser en fonction avec OpinionDetal
    axios.get("http://localhost:3001/opinions_of_consultation_" + this.state.id_consultation)
      .then(res => {
        this.setState({
          number_of_opinions: res.data.number_of_opinions,
          opinion_list: res.data.opinion_list
        });
        axios.get("http://localhost:3001/users")
          .then(res => {
            this.setState({
              user_list: res.data.user_list,
            });
          }
        );
      }
      // switch (this.state.id_consultation) {
      //   case 0:
      //       //METTRE LE TOUT ICI
      //     break;
      //   default:
      //
      // }

    );
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row stretched className="margin_opinion_row">
            <SearchBlock/>
            <OpinionListAsCard state={this.state}/>
            <Réactions/>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

class ConsultationDetail extends React.Component {
  constructor(props){
    super(props);
    const { cookies } = props;
    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);
    this.state = {
      current_navigation: "Description",
      id: parsed.id,
      consultation_details: {},
      organisator_photo: "./profile_pic/sami.jpg",
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  componentDidMount() {
      var consultation_info = data.consultation_detail_list_data[this.state.id];
      var organisator_photo = "";
      if (this.state.id === 0 || this.state.id === 2) organisator_photo = "./profile_pic/sami.jpg";
      if (this.state.id === 1) organisator_photo = "./profile_pic/margot.jpg";
      this.setState({
        consultation_details: consultation_info,
        organisator_photo: organisator_photo,
      });
  }

  handleNavigationClick(e) {
    switch(e) {
    case "Description":
        this.setState({
          current_navigation: "Description",
        });break;
    case "Opinions":
      this.setState({
        current_navigation: "Opinions",
      });break;
    case "Vote":
      this.setState({
        current_navigation: "Vote",
      });break;
    default:
      this.setState({
        current_navigation: "Description",
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderBar/>
        <TopPanel
          image={this.state.consultation_details.detail_image}/>
        <Body>

          <InfoBar info={this.state}/>
          {/* <Divider /> */}
          <NavigationBar active={this.state.current_navigation} onClick={(e) => this.handleNavigationClick(e)}/>
          {/* <Divider /> */}
          { this.state.current_navigation === "Description" ?
            <DescriptionView desc={this.state.consultation_details.consultation_description}/> : null }
          { this.state.current_navigation === "Opinions" ?
            <OpinionView id_consultation={this.state.id} /> : null }
        </Body>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(ConsultationDetail)
