import React from 'react'
import {
  Container,
  Card,
  Grid,
  Image,
  Icon
} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom";

import { withCookies } from 'react-cookie';

import * as constants from '../CONSTANTS';

import "./GenericCSS.css"

var images = require.context('../img', true);

const GenericCard = (props) => {
  var special_situation=false;
  var style;
  var link= props.link;
  switch(parseInt(props.parcours_jury)){
    case constants.MODALE_VALIDE:
        special_situation=true;
        style = {
          opacity: '0.2',
        };
        link= "";
        if(props.popularity === 9000) {
          style = constants.style;
          link = props.link
        }
    break;
    case constants.CONSULT_UNE_RETOUR:
        special_situation=true;
        style = {
          opacity: '0.2',
        };
        link= "";
        if(props.popularity === 9000) {
          link = props.link;
          style = {};
        }
        if(props.popularity === 9001) {
          style = constants.style;
          link = props.link;
        }
    break;
    default:
  }

  return (
    <Card style={special_situation? style : {}}>
      <Image src={images(props.image)} as={Link} to={link} />
      <Card.Content>
        <Card.Header as={Link} to={link} className="text_alignements_cards">{props.header}</Card.Header>
        <Card.Meta as={Link} to={link} className="text_alignements_cards">{props.meta}</Card.Meta>
        <Card.Description className="text_alignements_cards">{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a style={{float: 'left'}}>
          <Icon name='time' />
          {props.days_left} jours restants
        </a>
        <a style={{float: 'right'}}>
          <Icon name='fire' />
          {props.popularity}
        </a>
      </Card.Content>
    </Card>
  );
}

const TripleCardGroup = (props) => {
    return (
     <Grid columns={3}>
       <Grid.Row stretched className="triple_card_row">
         <Grid.Column>
           <GenericCard
             image={props.data_card_1.image}
             header={props.data_card_1.header}
             meta={props.data_card_1.meta}
             description={props.data_card_1.description}
             link={props.data_card_1.link}
             popularity={props.data_card_1.popularity}
             days_left={props.data_card_1.days_left}
             parcours_jury={props.parcours_jury}
           />
         </Grid.Column>
         {props.data_card_2 &&
           <Grid.Column>
             <GenericCard
               image={props.data_card_2.image}
               header={props.data_card_2.header}
               meta={props.data_card_2.meta}
               description={props.data_card_2.description}
               link={props.data_card_2.link}
               popularity={props.data_card_2.popularity}
               days_left={props.data_card_2.days_left}
               parcours_jury={props.parcours_jury}
             />
           </Grid.Column>}
         {props.data_card_3 &&
           <Grid.Column>
             <GenericCard
               image={props.data_card_3.image}
               header={props.data_card_3.header}
               meta={props.data_card_3.meta}
               description={props.data_card_3.description}
               link={props.data_card_3.link}
               popularity={props.data_card_3.popularity}
               days_left={props.data_card_3.days_left}
               parcours_jury={props.parcours_jury}
             />
           </Grid.Column>}
       </Grid.Row>
     </Grid>
    );
}

class CardsDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number_of_cards: 0,
      etape_parcours: props.parcours_jury || 2,
      card_list : [],
    }
    console.log(this.state)
  }

  render () {
    const card_list=this.props.card_list;

    var render = [];
    for (var i = 0; i < card_list.length; i++) {
        if((i % 3) + 1 === 3) {
          render.push(
            <TripleCardGroup
              data_card_1={card_list[i-2]}
              data_card_2={card_list[i-1]}
              data_card_3={card_list[i]}
              key={i}
              parcours_jury={this.state.etape_parcours}
            />
          );
        }else if (i + 1 === card_list.length) {
          if(i % 3 === 1) {
            render.push(
              <TripleCardGroup
                data_card_1={card_list[i-1]}
                data_card_2={card_list[i]}
                key={i}
                parcours_jury={this.state.etape_parcours}
              />
            );
          } else {
            render.push(
              <TripleCardGroup
                data_card_1={card_list[i]}
                key={i}
                parcours_jury={this.state.etape_parcours}
              />
            );
          }
        }
    }

    return (
      <Container>
        {render}
      </Container>
    );
  }
}

export default withCookies(CardsDashboard)
