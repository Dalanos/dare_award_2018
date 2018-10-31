import React from 'react'
import {
  List,
  Image,
} from 'semantic-ui-react'

var images = require.context('./img', true);

export const consultation_list_data =
[
  {
    image: "./idea.jpeg",
    header: "Our idea",
    description: "Discover our idea and the reasons behind it",
    link:'/consultation_detail?id=0',
    popularity: 9000,
    days_left: 1,
    vote: true,
  },
  {
    image: "./numbers.jpeg",
    header: "How we plan to implement it",
    description: "Business model, timeline and rough budget",
    link:'/consultation_detail?id=1',
    popularity: 9001,
    days_left: 2,
    vote: true,
  },
  {
    image: "./team.jpeg",
    header: "Equipe et originalité",
    description: "Conclusion du projet",
    link:'/consultation_detail?id=2',
    popularity: 9002,
    days_left: 3,
    vote: true,
  },
  {
    image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
    header: "Election des délégués du personnel - 2018",
    description: "Elisez vos futurs représentants pour l'année 2018 - 2020",
    link:'/consultation_detail?id=3',
    popularity: 150,
    days_left: 4,
    vote: true,
  },
  {
    image: "./consultation_vignette/3_Restructuration fonctionnelle de la direction R&D.jpeg",
    header: "Restructuration fonctionnelle de la direction R&D",
    description: "Pour répondre à la demande grandissante, la direction évolue",
    link:"/consultation_detail?id=4",
    popularity: 68,
    days_left: 5,
    vote: false,
  },
  {
    image: "./consultation_vignette/8_Fermeture de lentreprise sur le pont du 11 Novembre.jpeg",
    header: "Fermeture de l'entreprise sur le pont du 11 Novembre?",
    description: "",
    link:"/consultation_detail?id=10",
    popularity: 15,
    days_left: 12,
    vote: true,
  },
  {
    image: "./consultation_vignette/5_Campagne publicitaire télévision - Printemps 2019.jpeg",
    header: "Campagne publicitaire télévision - Printemps 2019",
    description: "La campagne veut promouvoir l'image de marque de l'entreprise",
    link:"/consultation_detail?id=7",
    popularity: 37,
    days_left: 25,
    vote: false,
  },
  {
    image: "./consultation_vignette/7_Conseil d'Administration - Modification des statuts - Octobre 2018.jpeg",
    header: "Conseil d'Administration - Modification des statuts - Novembre 2018",
    description: "",
    link:"/consultation_detail?id=9",
    popularity: 82,
    days_left: 7,
    vote: true,
  },
  {
    image: "./consultation_vignette/6_Recherche du nom du nouveau logiciel de ventes.jpeg",
    header: "Recherche du nom du nouveau logiciel de ventes",
    description: "Appel à contributions",
    link:"/consultation_detail?id=8",
    popularity: 101,
    days_left: 37,
    vote: true,
  },
  {
    image: "./consultation_vignette/4_Renouvellement du prestataire du restaurant dentreprise.jpeg",
    header: "Renouvellement du prestataire du restaurant d'entreprise",
    description: "Le contrat cadre se termine fin 2018. Donnez vos idées d'améliorations",
    link:"/consultation_detail?id=6",
    popularity: 74,
    days_left: 15,
    vote: false,
  },

];

export const authors_list = [
  {
    id: 0,
    first_name: "Sami",
    last_name: "Yacoubi",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/sami.jpg",
  },
  {
    id: 1,
    first_name: "Margot",
    last_name: "Boulet-Maurel",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/margot.jpg",
  },
]

export const consultation_detail_list_data = [
  {
    consultation_name: "Our idea",
    consultation_pitch_sentence: "Discover our idea and the reasons behind it",
    consultation_description: [
      <React.Fragment>
        <Image src={images("./microscope.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}> <b> Observation </b> </p>
        <br/>
        <p>
          <div>
            We made two main observations:
          </div>
          <List bulleted>
            <List.Item>In our current society, the public institutions don’t really
            involve the citizen. To get involved personally demands lot of time and
            contacts. Our system of representation hasn’t really changed in a century
             (vote for a house representant every 5 years or so) although our technology
              allows us to be directly informed and implicated. All this combined can
              partially explain the French’s disinterest in politics. </List.Item>
            <List.Item>At the same time, traditional companies are in turmoil.
             France is the european country with the lowest percentage of workers
             happy about their jobs. Big companies have trouble engaging their
             employees, and can’t keep the new recruits, especially the millenials.
              The reason: a desengagement of the employees who don’t see their
              impact in the company. New generations are in search of meaning and
              feeling of belonging to a community, and to something that is greater
              than just “selling products, making money”, something that big companies
              can rarely provide. Furthermore, they have troubles keeping up their
              level of innovation with start-ups, and can’t really attract the talents
              necessary to do so.
            </List.Item>
          </List>
          <br/>
          <b>
          We firmly believe that this can and must change.
          </b>
        </p>


        <Image src={images("./report.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}> <b> Our conclusion </b> </p>
        <br/>
          <div>
          For us, engagement is the key problem here. Whether in politics or in
          professional life, the current system is made so that the individual has
           little or no feeling of having an impact. This new generation of workers
            is in search of meaning and impact in their life, and want to be actor of
             change, not just spectator. And they’ll need tools to make it happen.
          </div>
          <div>
            We are confident that these issues could be solved through a more
            consultative system. This is something that has been growing in the
            last few years, and has been getting more and more traction.
          </div>
          <div>
            Of course, it will take a long time for it to happen in politics
            (although you can already see a few examples here and there), but
            it can already be started in companies. A consultative system would
             help the employees feeling valued and useful, therefore increasing
             engagement, smart business decisions and public image. And this would
              also help for our first observation. If a citizen uses a consultative
              system in his workplace, where he goes everyday and is engaged, he
               will quickly ask himself why such a system isn’t implemented in
               his public life.
          </div>
          <p>
          Whether they like it or not, companies and public institutions will
          have to change to take into account the aspirations of their employees
           and citizens. And it is starting right now. All we need now, is a tool.
          </p>

          <Image src={images("./target.png")} size='tiny' circular floated='left'/>
          <br/>
          <p style={{fontSize: '25px'}}> <b> Solution in one sentence </b> </p>
          <br/>
          <p>
            An online consultative and voting platform, available for company
            executive management, allowing them to consult their employees on a
            wide variety of topics going from strategic decisions, to day-to-day
            improvements.
          </p>
          <p>
            <b>
            For our application for the Dare Award Challenge, we choose to
            present our project with this current form, being a first idea of
            what this platform could be for an employee.
            So you’ll find our presentation under the form of 3 consultations,
            with an additional two examples unlocked at the end of the tour.
            <br/>
            <br/>
            You are now in the Description part of a consultation, usually written
            by the executive management, and sets the foundation of the discussion.
            You can now go to Opinions, to check out what people are saying!
            <br/>
            We hope you’ll enjoy our project!
            </b>
          </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 1,
    popularity: 9000,
    detail_image: "./Pich-Idea-Bulb.jpeg",
  },
  {
    consultation_name: "How we plan to implement it",
    consultation_pitch_sentence: "Business model, timeline and rough budget",
    consultation_description: [
      <React.Fragment>
        <div>
          In this consultation, we will talk more about several elements:
        </div>
        <List bulleted>
          <List.Item>The business model</List.Item>
          <List.Item>A rough budget</List.Item>
          <List.Item>The timeline</List.Item>
          <List.Item>And the oppotunities that the market is showing</List.Item>
        </List>
        <div>
        And we will finally see the voting page at the end of the consultation.
        </div>
        <br/>
        <p style={{fontSize: '25px'}}> Business Model </p>
        <div>
          In our opinion, the best way to monetize this service is to use two channels:
        </div>
        <List bulleted>
          <List.Item>A subscription for the usage of the software (on the SaaS model)
          </List.Item>
          <List.Item>Standard fees for the counselling in the form of “packs”,
          that provide all the necessary help to get set-up, and some additionnel
          services if the company doesn’t have the internal resources to run it
          themselves.</List.Item>
        </List>
      </React.Fragment>
    ],
    consultation_organisator_id: 1,
    days_left: 1,
    popularity: 9001,
    detail_image: "./numbers.jpeg",
  },
  {
    consultation_name: "Equipe et originalité",
    consultation_pitch_sentence: "Conclusion du projet",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Equipe et vidéo </p>
        <p>
        [Image de présentation de l'équipe]
        </p>
        <p>
        [Vidéo finale de nous]
        </p>
        <iframe width="560" height="315"
        src="https://www.youtube.com/embed/Jyk6zwHcfK0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 3,
    popularity: 9002,
    detail_image: "./team.jpeg",
  },
  {
    consultation_name: "Election des délégués du personnel - 2018",
    consultation_pitch_sentence: "Elisez vos futurs représentants pour l'année 2018 - 2020",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Bla bla bla les emplois </p>
        <p>
          Ca a l'air génial
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 1,
    days_left: 4,
    popularity: 150,
    detail_image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
  },
  {
    consultation_name: "Restructuration fonctionnelle de la direction R&D",
    consultation_pitch_sentence: "Pour répondre à la demande grandissante, la direction évolue",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Trouver un texte</p>
        <p>
        Qui représente bien ce que ça pourrait être
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 5,
    popularity: 68,
    detail_image: "./consultation_vignette/3_Restructuration fonctionnelle de la direction R&D.jpeg",
  },
]

export const consultation_id_0_opinions_number=3;
export const consultation_id_0_opinions_details = [
  {
    id: 0,
    id_author: 1,
    title: "Solution",
    content: [
      <React.Fragment>
        <div>
        Pnyx is a Saas platform allowing a company’s executive management
        to interact with it’s employees and to consult them on strategic
        questions (employees representatives elections, strategy shift, cost
          reduction, quality of life…). The employees have the possibility to
          vote, voice their opinions, exchange and debate between them on a given
          subject, directly from their computers.
        </div>
        <div>
        Pnyx aspires to be a consultation tool at all levels of a company,
        giving the opportunity to top executives to have a real representation
        of the different points of view in their organisation. Additionally, it
        will help them engage their employees, identify high-potential coworkers
        and source better ideas.
        </div>
        <br/>
        <div>
        Let’s take an example: The R&D department of a big company is realizing
        that the way they are organized doesn’t work that well anymore. It was
        set up around 2003 and wasn’t really taking into account the shift that
        internet created in the way business was done. So the head of department
        decided to restructure the department.
        </div>
        <div>
        So he creates a consultation on Pnyx, to consult all their R&D employees,
        as well as a few other departments, to ask them how they would do it.
        This way he can save time and money on consultants and quickly get clear
        and pertinent ideas on how to do it. And doing so, he’ll also save some
        time and trouble in restructuring, since the idea comes directly from the
        employee. He removes the manager-employee confrontation.
        </div>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 38,
    comments: {
        number_of_comments: 1,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "And we also plan to add a blockchain vote plugin at some point, allowing for better transparency on certain votes that need more security insurances."
          },
        ]
      }
  },
  {
    id: 1,
    id_author: 0,
    title: "Our clients and users",
    content: [
      <React.Fragment>
        <div>
          We have to main client segments at first:
        </div>
        <List bulleted>
          <List.Item>Big companies (+5000 employees) that have trouble keeping
          their employees engaged (we plan to start with industrial companies,
            that can’t rely on the “flashy” component that fashion or tech companies
            still have).</List.Item>
          <List.Item>Medium companies (+300 employees) that have trouble keeping
          their employees engaged of that want to develop a more inclusive company
          culture.
          </List.Item>
        </List>
        <div>
          As for our users, they are of two types:
        </div>
        <List bulleted>
          <List.Item>The executive management, which will be able to create new
          discussions.</List.Item>
          <List.Item>The employees, who will be able to debate about the theme
          and then vote on it.
          </List.Item>
        </List>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 47,
    comments: {
        number_of_comments: 2,
        comments_list: [
          {
            id: 1,
            id_author: 1,
            comment: "The goal after that is to get all the others big companies, the unions and the companies cooperatives."
          },
          {
            id: 0,
            id_author: 1,
            comment: "And in the long term, we plan to do toward public institutions with city halls, NGO, governments…"
          },
        ]
      }
  },
  {
    id: 2,
    id_author: 1,
    title: "Personalized counsel",
    content: [
      <React.Fragment>
        <p>
        This platform is only one piece of the more global dynamic that will
        transform companies toward a more open and flexible way of functioning.
        We are aware that changing habits is harduous and takes time. This is why
        we will also offer a personalized counsel service, to help the company to
        integrate the tool into their culture and their processes.

        PARLER AUSSI DES PACKS ET AVANTAGES GRATUITS QU'ON VEUT METTRE EN PLACE
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 87,
    comments: {
        number_of_comments: 1,
        comments_list: [
          {
            id: 0,
            id_author: 0,
            comment: "We won’t be able to do it internally at first, so we’ll create a partnership with a strategy counselling agency to help us out."
          },
        ]
      }
  },
]


export const consultation_id_1_opinions_number=3;
export const consultation_id_1_opinions_details = [
  {
    id: 0,
    id_author: 1,
    title: "Timeline and Go to market",
    content: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Timeline  </p>
        <p>
          [Integrer graphe]
        </p>
        <br/>
        <p style={{fontSize: '25px'}}> Go to market </p>
        <p>
        It is still very early to tell, but we currently have two main options:
        </p>
        <List bulleted>
          <List.Item>A partnership with the NGO Rotary, to test the beta and find
          influencal business leaders (Sami is a member since 2016).</List.Item>
          <List.Item>Contact "Entreprise & Progrès" a think tank of influencal
          leaders that want to change the way the current system works.</List.Item>
        </List>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 1,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "Philippe Mondan, HEC advisor has contacts there, and will make introductions."
          }
        ]
      }
  },
  {
    id: 1,
    id_author: 0,
    title: "Rough budget",
    content: [
      <React.Fragment>
        <p>
          To find a rough budget we need, in addition of the growth prediction
          from the previous session, a pricing. It is very rough at this point:
        </p>
        <List bulleted>
          <List.Item>Mensual subscription: 1000€</List.Item>
          <List.Item>“Installation Pack”: 10 000€</List.Item>
        </List>
        <br/>
        <p style={{fontSize: '16px'}}> Budget chart </p>
        <p>
        <Image src={images("./budget.png")}  size='huge'/>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 32,
    comments: {
        number_of_comments: 1,
        comments_list: [
          {
            id: 1,
            id_author: 1,
            comment: "In addition to the information in this chart, it’s worth mentioning that we have a positive result in the third year and a low point in cash flow of -60 000€ that need to be countered with investment."
          }
        ]
      }
  },
  {
    id: 2,
    id_author: 0,
    title: "Tendances, challenges et opportunités marché",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de marché gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 12,
    comments: {
        number_of_comments: 0,
        comments_list: []
      }
  },
]

export const consultation_id_2_opinions_number=1;
export const consultation_id_2_opinions_details = [
  {
    id: 0,
    id_author: 0,
    title: "Petite blague de fin",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de budget gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 2,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 3,
            id_author: 0,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
]

export const consultation_id_3_opinions_number=3;
export const consultation_id_3_opinions_details = [
  {
    id: 0,
    id_author: 0,
    title: "Budget",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de budget gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 2,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 3,
            id_author: 0,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
  {
    id: 1,
    id_author: 1,
    title: "Timeline",
    content: [
      <React.Fragment>
        <p>
          Un schéma via photo serait le plus adapté
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 32,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 1,
            id_author: 3,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 0,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 1,
            id_author: 4,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
  {
    id: 2,
    id_author: 0,
    title: "Tendances, challenges et opportunités marché",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de marché gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 12,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 0,
            id_author: 3,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 1,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 0,
            id_author: 4,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
]

export const consultation_id_4_opinions_number=2;
export const consultation_id_4_opinions_details = [
  {
    id: 0,
    id_author: 0,
    title: "Avis 1",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de budget gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 2,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 3,
            id_author: 0,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
  {
    id: 0,
    id_author: 0,
    title: "Avis 2",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc de budget gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 3,
        comments_list: [
          {
            id: 1,
            id_author: 0,
            comment: "Carrément. Je trouve que l'on retrouve de plus en plus ça dans la boite, et ça risque de nous jouer des tours"
          },
          {
            id: 2,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 3,
            id_author: 0,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
]
