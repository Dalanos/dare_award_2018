import React from 'react'
import {
  List
} from 'semantic-ui-react'

export const consultation_list_data =
[
  {
    image: "./idea.jpeg",
    header: "The idea",
    description: "Discover our idea and the reasons behind it",
    link:'/consultation_detail?id=0',
    popularity: 9000,
    days_left: 1,
    vote: true,
  },
  {
    image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
    header: "Implémentation",
    description: "Deuxième partie du projet",
    link:'/consultation_detail?id=1',
    popularity: 9001,
    days_left: 2,
    vote: true,
  },
  {
    image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
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
    consultation_name: "The idea",
    consultation_pitch_sentence: "Discover our idea and the reasons behind it",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> <b> Observation </b> </p>
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
            <List.Item>At the same time, traditional companies are in turmoil as well.
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
        <br/><br/>

        <p style={{fontSize: '25px'}}> <b> Our conclusion </b> </p>
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
          <p style={{fontSize: '25px'}}> <b> Solution in one sentence </b> </p>
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
    consultation_name: "Implémentation",
    consultation_pitch_sentence: "Deuxième partie du projet",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Business Model </p>
        <p>
          Détail du fonctionnement du business model
          et indication de ce qu'il y a en opinions
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 1,
    days_left: 1,
    popularity: 9001,
    detail_image: "./profile_pic.jpg",
  },
  {
    consultation_name: "Equipe et originalité",
    consultation_pitch_sentence: "Conclusion du projet",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Equipe et vidéo </p>
        <p>
        Présenter nos trucs classes et la vidéo
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 3,
    popularity: 9002,
    detail_image: "./profile_pic.jpg",
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
    title: "L'offre / La solution",
    content: [
      <React.Fragment>
        <p>
          XXX est une plateforme SaaS permettant à la direction d'une
          entreprise d'interagir avec ses employés et de les consulter sur
          les questions stratégiques de l'entreprise (élections, changement
            de stratégie, réduction de coûts, QVT…). Les employés ont ainsi
            la possibilité de voter, donner leur opinions, échanger entre
            eux/débattre sur un sujet donné, directement depuis leur ordinateur
             professionnel.
        </p>
        <p>
          XXX se veut être un véritable outil de consultation de toutes les
          strates de l’entreprise, qui permette aux dirigeants d’avoir une
          représentation la plus réelle possible des différents points de vue
          dans l’organisation, pour faciliter les sources d’innovation et
          augmenter l’engagement des salariés envers l’entreprise.
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 38,
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
    id_author: 0,
    title: "Nos clients",
    content: [
      <React.Fragment>
        <p>
          Nous nous adressons particulièrement aux grandes entreprises, plus
          particulièrement : trouver un critère plus précis ? Ce sont en effet
          les premières concernées par le désengagement des individus au travail.
        </p>
        <div>
          Les utilisateurs de notre plateforme sont de deux types :
        </div>
        <List bulleted>
          <List.Item>Les directions des entreprises, qui ouvriront un sujet de
            discussion sur un thème stratégique de l’entreprise</List.Item>
          <List.Item>Les employés de l’entreprise, qui pourront débattre de ce
            thème en ligne sur l’espace dédié et voter pour les mesures
            auxquelles ils adhèrent.
          </List.Item>
        </List>
        <div>
          Un accompagnement personnalisé pour un meilleur
          changement des habitudes :
        </div>
        <p>
          Cette plateforme s’inscrit dans une dynamique plus globale
          d’évolution du contexte organisationnel de l’entreprise vers un
          fonctionnement plus ouvert et flexible. Nous avons conscience que
          changer des habitudes est complexe et prend du temps, c’est pourquoi
          nous proposerons également un service d’accompagnement à
          l’entreprise, pour lui permettre d’intégrer au mieux la plateforme
          dans ses habitudes de travail.
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 47,
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
    id_author: 1,
    title: "Offre d'accompagnement",
    content: [
      <React.Fragment>
        <p>
          Il faut un super truc d'accompangment gna gna gna
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-08-01T10:20:30Z",
    likes: 87,
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


export const consultation_id_1_opinions_number=3;
export const consultation_id_1_opinions_details = [
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
