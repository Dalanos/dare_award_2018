import React from 'react'
import axios from 'axios';
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

const ReturnBar = props => {
  console.log(props)
  var style = {
    border: 'red',
    borderStyle: 'solid',
    borderWidth: 'thick',
  };

  return (
    <Menu pointing secondary >
      <Menu.Item
        style={true? style : {}}
        name= " Retour à la consultation"
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
          <Item.Meta>Poste et département</Item.Meta>
          <Item.Extra>{"Posté il y a " + getDaysSincePosting(new Date(), new Date(props.opinion_posting_date)) + " jours"}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

class CommentFeed extends React.Component {
  render() {
    return(
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={images(data.authors_list[0].photo)} />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src={images(data.authors_list[0].photo)} />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={images(data.authors_list[0].photo)} />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src={images(data.authors_list[0].photo)} />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

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
        <Header as='h1' textAlign="left">{this.state.opinion.title || ""}</Header>
        <AuthorBar author={this.state.author} opinion_posting_date={this.state.opinion.post_date}/>
        <Divider/>
        <div dangerouslySetInnerHTML={{ __html: this.state.opinion.content }} />
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
      current_navigation: "Description",
      id_consultation: parsed.id_consultation,
      id_opinion: parsed.id_opinion,
      consultation_details: {},
      organisator_photo: cookies.get('user_info').photo,
      cookies: cookies,
    };


    var parcours_jury = parseInt(cookies.get("parcours_jury"));
    var new_state=false;
    var new_state_parcours;
    console.log(parcours_jury)
    switch(parcours_jury){
      case constants.CONSULT_UNE_OPINION:
        new_state=true;
        new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_UN_VALIDE;
        break;
      case constants.CONSULT_UNE_OPINION_DETAIL_UN_RETOUR:
        new_state=true;
        new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_DEUX_VALIDE;
        break;
      case constants.CONSULT_UNE_OPINION_DETAIL_DEUX_RETOUR:
        new_state=true;
        new_state_parcours=constants.CONSULT_UNE_OPINION_DETAIL_TROIS_VALIDE;
        break;
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

    switch(parseInt(this.state.id_consultation)){
      case 0:
          consult_detail = data.consultation_detail_list_data[this.state.id_consultation];
          opinion_details = data.consultation_id_0_opinions_details[this.state.id_opinion];
        break;
      default:
    }
    var tmp_state = {
      consultation_name: consult_detail.consultation_name,
      consultation_pitch_sentence: consult_detail.consultation_pitch_sentence,
      consultation_organisator_id: consult_detail.consultation_organisator_id,
      days_left: consult_detail.days_left,
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
        <Body>
          {/* <TopPanel
            image={this.state.consultation_details.detail_image}/> */}
          <InfoBar info={this.state}/>
          <ReturnBar consultation_id={this.state.id_consultation} cookies={this.state.cookies}/>
          {display}
          <CommentFeed/>
        </Body>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default withCookies(OpinionDetail)
