import React from 'react'
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
import * as constants from '../CONSTANTS';

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
            {props.info.consultation_details.days_left} days(s) left before the opening of the votes
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
};

const DescriptionView = props => {

  return (
    <Container>
      {props.desc}
    </Container>
  )
};

const VoteView = props => {

  if(parseInt(props.cookies.get('parcours_jury'), 10) === constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_RETOUR){
    const d = new Date();
    d.setTime(d.getTime() + (constants.ONE_DAY));
    props.cookies.set('parcours_jury', constants.CONSULT_DEUX_VOTE_VALIDE ,{expires : d})
  }
  var question;
  switch (props.id_consultation) {
    case 0:
        question="So, now that you've seen our project, do you believe in it?";
      break;
    case 1:
        question="So, with all that said, do you plan to vote for us?";
      break;
    case 2:
        question='Best team ever, right?';
      break;
    case 3:
        question='[Find question]';
      break;
    case 4:
        question='[Find question]';
      break;
    default:
      question="This is a question to ask to the coworkers";

  }

  return (
    <Container style={{textAlign: 'center'}}>
      <br/>
      <br/>
      <h2>
        {question}
      </h2>
      <br/><br/>
      <Button.Group fluid>
        <Button>Yes</Button>
        <Button.Or />
        <Button>No</Button>
        <Button.Or />
        <Button>No opinion</Button>
      </Button.Group>
      <br/><br/><br/><br/>
      <Button positive size='huge'>Vote!</Button>
    </Container>
  )
};

const NavigationBar = props => {
    console.log(props.id_consultation)
    var render = [];
    var parcours_jury = parseInt(props.cookies.get('parcours_jury'), 10);
    if(parcours_jury < constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_RETOUR ||
      props.id_consultation === 3 || props.id_consultation === 4){
      render.push(
        <Menu.Item
          name='Vote'
          active={props.active === 'Vote'}
          style={{opacity: '0.4'}}
          key={3}
        />
      );
    } else {
      render.push(
        <Menu.Item
          name='Vote'
          style={parcours_jury === constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_RETOUR ? constants.style : {}}
          active={props.active === 'Vote'}
          onClick={() => props.onClick("Vote")}
          key={3}
        />
      );
    }

    return (
      <Menu pointing secondary>
        <Menu.Item
          name='Description'
          active={props.active === 'Description'}
          onClick={() => props.onClick("Description")}/>
        <Menu.Item style={parcours_jury === constants.CONSULT_UNE_DESC ? constants.style : {}}
          name='Opinions'
          active={props.active === 'Opinions'}
          onClick={() => props.onClick("Opinions")}
        />
        {render}
      </Menu>
    );
};

const SearchBlock = props => {
  return (
    <Grid.Column width={3} className="encadrer_bloc">
      Filters:
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <input placeholder='Author' />
        </Form.Field>
        <Button type='submit'>Deactivated</Button>
      </Form>
    </Grid.Column>
  )
};

const Reactions = props => {
  return (
    <Grid.Column width={4}>
      <Card className="reactions_box">
        <Card.Content>
          <Card.Header>Reactions</Card.Header>
          <Card.Meta>What do you think of this subject?</Card.Meta>
          <Card.Description>
            Imagine a badass visual showing at snapshot of the company's mood
            about the subject
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
    const shortened_content = "";

    if(props.clickable){
      return (
        <Item className="encadrer_bloc" style={props.highlighted? constants.style : {}}>
          <Item.Image
            size='tiny'
            src={images(props.author_detail.photo)}
            as={Link}
            to={'/opinion_detail?id_consultation=' + props.id_consultation + '&id_opinion=' + props.opinion_detail.id}
            circular/>

          <Item.Content verticalAlign='middle'>
            <Item.Header
            as={Link}
            to={'/opinion_detail?id_consultation=' + props.id_consultation + '&id_opinion=' + props.opinion_detail.id}>
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
    } else {
      return (
        <Item className="encadrer_bloc" style={props.highlighted? constants.style : {opacity: '0.5'}}>
          <Item.Image
            size='tiny'
            src={images(props.author_detail.photo)}
            circular/>

          <Item.Content verticalAlign='middle'>
            <Item.Header
            as={Link}
            to={'/opinion_detail?id_consultation=' + props.id_consultation + '&id_opinion=' + props.opinion_detail.id}>
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
    }

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
      //Verification qu'on est bien dans la bonne consult pour afficher les highlight
      if((id_consultation === 0 &&
        parseInt(this.props.state.cookies.get('parcours_jury')) < constants.CONSULT_UNE_RETOUR) ||
        (id_consultation === 1 &&
          parseInt(this.props.state.cookies.get('parcours_jury')) < constants.CONSULT_DEUX_RETOUR)){

            switch(parseInt(this.props.state.cookies.get('parcours_jury'), 10)){
              case constants.CONSULT_DEUX_OPINION :
              case constants.CONSULT_UNE_OPINION :
              {
                // C'EST LA Qu(EST LE BUG) - TIENT PAS COMPTE DU NUMERO DE CONSULT
                if(i === 0) {
                  render.push(
                    <OpinionCard
                      id_consultation={id_consultation}
                      opinion_detail={current_opinion}
                      author_detail={user_list[current_opinion.id_author]}
                      clickable={true}
                      highlighted={true}
                      key={i}/>
                  );
                } else {
                  render.push(
                    <OpinionCard
                      id_consultation={id_consultation}
                      opinion_detail={current_opinion}
                      author_detail={user_list[current_opinion.id_author]}
                      clickable={false}
                      highlighted={false}
                      key={i}/>
                  );
                }
              }
              break;
              case constants.CONSULT_DEUX_OPINION_DETAIL_UN_RETOUR:
              case constants.CONSULT_UNE_OPINION_DETAIL_UN_RETOUR:
              {
                  if(i === 0) {
                    render.push(
                      <OpinionCard
                        id_consultation={id_consultation}
                        opinion_detail={current_opinion}
                        author_detail={user_list[current_opinion.id_author]}
                        clickable={true}
                        highlighted={false}
                        key={i}/>
                    );
                  } else if (i === 1){
                    render.push(
                      <OpinionCard
                        id_consultation={id_consultation}
                        opinion_detail={current_opinion}
                        author_detail={user_list[current_opinion.id_author]}
                        clickable={true}
                        highlighted={true}
                        key={i}/>
                    );
                  }  else {
                    render.push(
                      <OpinionCard
                        id_consultation={id_consultation}
                        opinion_detail={current_opinion}
                        author_detail={user_list[current_opinion.id_author]}
                        clickable={false}
                        highlighted={false}
                        key={i}/>
                    );
                  }
                }
              break;
              case constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_RETOUR:
              case constants.CONSULT_UNE_OPINION_DETAIL_DEUX_RETOUR:
              {
                if(i === 2) {
                  render.push(
                    <OpinionCard
                      id_consultation={id_consultation}
                      opinion_detail={current_opinion}
                      author_detail={user_list[current_opinion.id_author]}
                      clickable={true}
                      highlighted={true}
                      key={i}/>
                  );
                } else {
                  render.push(
                    <OpinionCard
                      id_consultation={id_consultation}
                      opinion_detail={current_opinion}
                      author_detail={user_list[current_opinion.id_author]}
                      clickable={true}
                      highlighted={false}
                      key={i}/>
                  );
                }
              }
              break;
              default:
              render.push(
                <OpinionCard
                  id_consultation={id_consultation}
                  opinion_detail={current_opinion}
                  author_detail={user_list[current_opinion.id_author]}
                  clickable={true}
                  highlighted={false}
                  key={i}/>
              );
            }
      } else {
        render.push(
          <OpinionCard
            id_consultation={id_consultation}
            opinion_detail={current_opinion}
            author_detail={user_list[current_opinion.id_author]}
            clickable={true}
            highlighted={false}
            key={i}/>
        );
      }
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
    console.log(props.cookies.get('parcours_jury'))
    this.state = {
      id_consultation: props.id_consultation,
      cookies: props.cookies,
    };
  }

  componentDidMount() {
      switch (this.state.id_consultation) {
        case 0:
            this.setState({
              number_of_opinions: data.consultation_id_0_opinions_number,
              opinion_list: data.consultation_id_0_opinions_details,
              user_list: data.authors_list,
            });
          break;
        case 1:
            this.setState({
              number_of_opinions: data.consultation_id_1_opinions_number,
              opinion_list: data.consultation_id_1_opinions_details,
              user_list: data.authors_list,
            });
          break;
          case 2:
              this.setState({
                number_of_opinions: data.consultation_id_2_opinions_number,
                opinion_list: data.consultation_id_2_opinions_details,
                user_list: data.authors_list,
              });
            break;
          case 3:
              this.setState({
                number_of_opinions: data.consultation_id_3_opinions_number,
                opinion_list: data.consultation_id_3_opinions_details,
                user_list: data.authors_list,
              });
            break;
          case 4:
              this.setState({
                number_of_opinions: data.consultation_id_4_opinions_number,
                opinion_list: data.consultation_id_4_opinions_details,
                user_list: data.authors_list,
              });
            break;
        default:

      }
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row stretched className="margin_opinion_row">
            <SearchBlock/>
            <OpinionListAsCard state={this.state}/>
            <Reactions/>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

class ConsultationDetail extends React.Component {
  constructor(props){
    super(props);
    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);
    console.log(props)
    this.state = {
      current_navigation: "Description",
      cookies: props,
      id: parseInt(parsed.id, 10),
      consultation_details: {},
      organisator_photo: "./profile_pic/sami.jpg",
      parcours_jury: parseInt(props.cookies.get('parcours_jury'), 10),
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  componentDidMount() {
      var consultation_info = data.consultation_detail_list_data[this.state.id];
      this.setState({
        consultation_details: consultation_info,
        organisator_photo: data.authors_list[consultation_info.consultation_organisator_id].photo,
      });

      var new_state_jury = parseInt(this.state.cookies.cookies.get('parcours_jury'), 10);
      var tmp_view= "Description";
      switch(this.state.parcours_jury){
        case constants.MODALE_VALIDE:
          new_state_jury=constants.CONSULT_UNE_DESC;
        break;
        case constants.CONSULT_UNE_OPINION_DETAIL_UN_VALIDE:
          new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_UN_RETOUR;
          this.handleNavigationClick('Opinions');
        break;
        case constants.CONSULT_UNE_OPINION_DETAIL_DEUX_VALIDE:
          new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_DEUX_RETOUR;
          this.handleNavigationClick('Opinions');
        break;
        case constants.CONSULT_UNE_OPINION_DETAIL_TROIS_VALIDE:
          new_state_jury=constants.CONSULT_UNE_OPINION_DETAIL_TROIS_RETOUR;
          this.handleNavigationClick('Opinions');
        break;

        case constants.CONSULT_UNE_RETOUR:
          if(this.state.id === 1) new_state_jury=constants.CONSULT_DEUX_OPINION;
        break;
        case constants.CONSULT_DEUX_OPINION_DETAIL_UN_VALIDE:
          new_state_jury=constants.CONSULT_DEUX_OPINION_DETAIL_UN_RETOUR;
          this.handleNavigationClick('Opinions');
        break;
        case constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_VALIDE:
          new_state_jury=constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_RETOUR;
          this.handleNavigationClick('Opinions');
        break;
        case constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_VALIDE:
          new_state_jury=constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_RETOUR;
          this.handleNavigationClick('Opinions');
        break;

        case constants.CONSULT_DEUX_RETOUR:
          if(this.state.id === 2) new_state_jury=constants.CONSULT_TROIS_OPINION_ET_FINAL;
        break;
        default:
      }

        const { cookies } = this.state.cookies;
        const d = new Date();
        d.setTime(d.getTime() + (constants.ONE_DAY));
        cookies.set('parcours_jury', new_state_jury ,{expires : d});
        this.setState({
          parcours_jury: new_state_jury,
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
      });
      if(this.state.parcours_jury === constants.CONSULT_UNE_DESC){
        const { cookies } = this.state.cookies;
        const d = new Date();
        d.setTime(d.getTime() + (constants.ONE_DAY));
        cookies.set('parcours_jury', constants.CONSULT_UNE_OPINION ,{expires : d})
        this.setState({
          parcours_jury: constants.CONSULT_UNE_OPINION,
        });
      }
      break;
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
          <NavigationBar active={this.state.current_navigation} cookies={this.state.cookies.cookies}
          id_consultation={this.state.id} onClick={(e) => this.handleNavigationClick(e)}/>
          {/* <Divider /> */}
          { this.state.current_navigation === "Description" ?
            <DescriptionView desc={this.state.consultation_details.consultation_description}/> : null }
          { this.state.current_navigation === "Opinions" ?
            <OpinionView id_consultation={this.state.id} cookies={this.state.cookies.cookies} /> : null }
          { this.state.current_navigation === "Vote" ?
            <VoteView id_consultation={this.state.id} cookies={this.state.cookies.cookies} /> : null }
        </Body>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(ConsultationDetail)
