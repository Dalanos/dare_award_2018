import React from 'react'
import {
  Container,
  Menu,
  Grid,
  Image,
  Header,
  Item,
  Loader,
  Divider,
  Comment,
  Form,
  Button,
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

import "./../ConsultationDetail/ConsultationDetail.css"
import "./OpinionDetail.css"

import * as data from '../data';
import * as constants from '../CONSTANTS';

var images = require.context('../img', true);

const getDaysSincePosting = ( currenDate, postingDate ) => {
  var one_day=1000*60*60*24;
  // Convert both dates to milliseconds
  var date1_ms = currenDate.getTime();
  var date2_ms = postingDate.getTime();
  // Calculate the difference in milliseconds
  var difference_ms = date1_ms - date2_ms;
  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

const InfoBar = props => {
  var image = props.info.dataLoaded ? props.info.user_list[props.info.consultation_details.consultation_organisator_id].photo : "./profile_pic.jpg";
  return (
    <Container>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={3}>
            <Image src={images(image)} size='tiny' circular/>
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

const ReturnBar = props => {
  var parcours_jury = parseInt(props.cookies.get('parcours_jury'), 10);
  var highlighted = parcours_jury === constants.CONSULT_UNE_OPINION_DETAIL_UN_VALIDE ||
    parcours_jury === constants.CONSULT_UNE_OPINION_DETAIL_DEUX_VALIDE ||
    parcours_jury === constants.CONSULT_UNE_OPINION_DETAIL_TROIS_VALIDE ||
    parcours_jury === constants.CONSULT_DEUX_OPINION_DETAIL_UN_VALIDE ||
    parcours_jury === constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_VALIDE ||
    parcours_jury === constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_VALIDE;
  return (
    <Menu pointing secondary >
      <Menu.Item
        style={highlighted? constants.style : {}}
        name= " Return to consultation"
        icon='arrow left'
        active={false}
        as={Link}
        to={'/consultation_detail?id=' + props.consultation_id}/>
    </Menu>
  );
};

const WaitingDisplay = props => {
  return(
    <Container>
       <Loader active inline content='Chargement' />
    </Container>
  );
}

const AuthorBar = props => {
  return(
    <Item.Group>
      <Item>
        <Item.Image size='tiny' circular src={images(props.author.photo)} />
        <Item.Content className="author_bar_alignement" verticalAlign="middle">
          <Item.Header as='a'>{props.author.first_name + " " + props.author.last_name}</Item.Header>
          <Item.Meta>Position and department</Item.Meta>
          <Item.Extra>{"Posté il y a " + getDaysSincePosting(new Date(), new Date(props.opinion_posting_date)) + " jours"}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

class CommentFeed extends React.Component {
  render() {
    var render = [];
    if(this.props.state.dataLoaded) {
      var i=0;
      for(i=0; i< this.props.state.opinion_details.comments.number_of_comments; i++) {
        var commentaire = this.props.state.opinion_details.comments.comments_list[i];
        render.push(
          <Comment key={i}>
            <Comment.Avatar src={images(data.authors_list[commentaire.id_author].photo)} />
            <Comment.Content>
              <Comment.Author as='a'>{data.authors_list[commentaire.id_author].first_name + " "+
                      data.authors_list[commentaire.id_author].last_name}</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>{commentaire.comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        );
      }
    }
    return(
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        {render}

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
    );
  }
}

class OpinionPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opinion: this.props.opinion,
      author: this.props.user_list[this.props.opinion.id_author],
    };
  }

  render() {
    return (
      <Container>
        <AuthorBar author={this.state.author} opinion_posting_date={this.state.opinion.post_date}/>
        <Header as='h1' textAlign="left">{this.state.opinion.title || ""}</Header>

        <Divider/>
        {this.state.opinion.content}
      </Container>
    );
  }
}

class OpinionDetail extends React.Component {
  constructor(props){
    super(props);
    const { cookies } = props;
    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);
    this.state = {
      dataLoaded: false,
      id_consultation: parsed.id_consultation,
      id_opinion: parsed.id_opinion,
      consultation_details: {},
      organisator_photo: cookies.get('user_info').photo,
      cookies: cookies,
    };


    var parcours_jury = parseInt(cookies.get("parcours_jury"), 10);
    var new_state=false;
    var new_state_parcours;

    switch(parcours_jury){
      case constants.CONSULT_UNE_OPINION:
        if(this.state.id_opinion === "0"){
          new_state=true;
          new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_UN_VALIDE;
        }
        break;
      case constants.CONSULT_UNE_OPINION_DETAIL_UN_RETOUR:
        if(this.state.id_opinion === "1"){
          new_state=true;
          new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_DEUX_VALIDE;
        }
        break;
      case constants.CONSULT_UNE_OPINION_DETAIL_DEUX_RETOUR:
        if(this.state.id_opinion === "2"){
          new_state=true;
          new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_TROIS_VALIDE;
        }
        break;
        case constants.CONSULT_DEUX_OPINION:
          if(this.state.id_opinion === "0"){
            new_state=true;
            new_state_parcours=constants.CONSULT_DEUX_OPINION_DETAIL_UN_VALIDE;
          }
          break;
        case constants.CONSULT_DEUX_OPINION_DETAIL_UN_RETOUR:
          if(this.state.id_opinion === "1"){
            new_state=true;
            new_state_parcours=constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_VALIDE;
          }
          break;
        case constants.CONSULT_DEUX_OPINION_DETAIL_DEUX_RETOUR:
          if(this.state.id_opinion === "2"){
            new_state=true;
            new_state_parcours=constants.CONSULT_DEUX_OPINION_DETAIL_TROIS_VALIDE;
          }
          break;
        default:
    }

    if(new_state){
      const d = new Date();
      d.setTime(d.getTime() + (constants.ONE_DAY));
      cookies.set('parcours_jury', new_state_parcours ,{expires : d})
    }
  }

  componentDidMount() {
    var consult_detail;
    var opinion_details;

    switch(parseInt(this.state.id_consultation, 10)){
      case 0:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_0_opinions_details[this.state.id_opinion];
        break;
      case 1:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_1_opinions_details[this.state.id_opinion];
        break;
      case 2:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_2_opinions_details[this.state.id_opinion];
        break;
      case 3:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_3_opinions_details[this.state.id_opinion];
        break;
      case 4:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_4_opinions_details[this.state.id_opinion];
        break;
      default:
    }
    var tmp_state = {
      consultation_name: consult_detail.consultation_name,
      consultation_pitch_sentence: consult_detail.consultation_pitch_sentence,
      consultation_organisator_id: consult_detail.consultation_organisator_id,
      days_left: consult_detail.days_left,
      detail_image: consult_detail.detail_image,
    }
    this.setState({
      consultation_details: tmp_state,
      dataLoaded: true,
      user_list: data.authors_list,
      opinion_details: opinion_details,
    });



  }


  render() {
    let display;
    if(this.state.dataLoaded) {
      display = <OpinionPanel
        opinion={this.state.opinion_details}
        user_list={this.state.user_list}/>;
    } else {
      display = <WaitingDisplay/>
    }
    return (

      <React.Fragment>
        <HeaderBar/>
        <TopPanel
          image={this.state.consultation_details.detail_image}/>
        <Body>
          <InfoBar info={this.state}/>
          <ReturnBar consultation_id={this.state.id_consultation} cookies={this.state.cookies}/>
          <Container>
            {display}
            <CommentFeed state={this.state}/>
          </Container>

        </Body>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(OpinionDetail)
