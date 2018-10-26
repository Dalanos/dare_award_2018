import React from 'react'
import {
  List
} from 'semantic-ui-react'

export const consultation_list_data =
[
  {
    image: "./consultation_vignette/1_Election des délégués du personnel - 2018.jpeg",
    header: "Présentation globale",
    description: "Venez découvrir les raisons et le coeur de notre solution",
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
    description: " Elisez vos futurs représentants pour l'année 2018 - 2020",
    link:'/consultation_detail?id=3',
    popularity: 150,
    days_left: 15,
    vote: true,
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
  {
    image: "./consultation_vignette/3_Restructuration fonctionnelle de la direction R&D.jpeg",
    header: "Restructuration fonctionnelle de la direction R&D",
    description: "Pour répondre à la demande grandissante, la direction évolue",
    link:"/consultation_detail?id=5",
    popularity: 68,
    days_left: 15,
    vote: false,
  }
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
    consultation_name: "Présentation globale",
    consultation_pitch_sentence: "Venez découvrir les raisons et le coeur de notre solution",
    consultation_description: [
      <React.Fragment>
        <p style={{fontSize: '25px'}}> Vision </p>
        <p>
          Aujourd’hui, les institutions politiques françaises n’impliquent que très
          faiblement les citoyens. Dans la vie des grandes entreprises, c’est plus ou
           moins pareil : les dirigeants décident des orientations stratégiques de
           l’entreprise, tandis que chaque employé effectue son travail sans avoir
           véritablement une vision d’ensemble ou un impact sur le développement de
           la société. On observe un réel désengagement des citoyens comme des
           employés. La désaffection des français pour la vie politique s’explique
           par l’impression que leurs actions n’ont d’impact direct. Les grandes
           entreprises françaises ont quant à elles du mal à embaucher et retenir
           les jeunes talents au sein de leurs rangs, car ces nouvelles générations
           sont en quête d’un sens que ces sociétés ne sont pas en mesure de fournir,
            tant elles peinent à développer un sentiment d’appartenance à leur
            communauté et à impliquer réellement leurs collaborateurs dans la vie
            organisationnelle.
        </p>
        <p>
          Nous pensons que les nouvelles générations, en quête de sens, vont
          s’emparer de cette problématique pour la rendre centrale : la quête de
          sens des individus va devenir de plus en plus généralisée, ils vont
          progressivement chercher à vraiment avoir un impact et deviendront plus
           acteurs que spectateurs.
        </p>
        <p>
          Nous croyons que nous avons tout à gagner à passer à un modèle plus
          basé sur la consultation, d’autant plus que les entreprises, et les
          institutions en général, vont devoir évoluer pour perdurer : cela
          s’annonce long pour le domaine politique, car cela implique une refonte
           de notre fonctionnement politique, mais peut déjà s’amorcer dans
           l’entreprise, lieu que les citoyens côtoient tous les jours et dans
           lequel ils s’impliquent.
        </p>
        <br/><br/>
        <p style={{fontSize: '25px'}}> Constat </p>
        <p>
          Les grandes entreprises ont de plus en plus de mal à séduire les
          jeunes et à embaucher de nouvelles recrues, ainsi qu’à retenir leurs
           talents. En cause : un désengagement des employés qui ne voient pas
           leur impact direct dans l’entreprise. Les nouvelles générations sont
           à la recherche de sens, ce que les grandes entreprises ne peuvent que
           rarement leur donner.
        </p>
        <p>
          Par ailleurs, pour continuer à maintenir leur niveau d’innovation
          face à la concurrence des start-ups, les entreprises doivent innover
          sans cesse et donc se reposer sur des profils innovants, en s’attachant
           à les retenir au sein de la société.
        </p>
        <p style={{fontSize: '25px'}}> Solution en une phrase </p>
        <p>
          Notre solution : une plateforme de consultation et vote en ligne, à
          disposition des dirigeants d’entreprise, pour leur permettre de consulter
           leurs salariés sur des sujets divers telles que les futures orientations
           stratégiques de la société.
        </p>
        <p>
          Pour notre candidature aux Dare Awards 2018, nous avons choisi de
          présenter notre projet sous la forme de notre plateforme. Vous trouverez
          l’idée principale de chaque sujet dans l’onglet description, qui sera
          approfondie dans l’onglet Opinions.
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 1,
    popularity: 9000,
    detail_image: "./profile_pic.jpg",
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
    likes: 38,
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
    content: "m ligula id sapien commodo sodales sit amet ac est.<br/>Phasellus ac odio mi. Nam id pulvinar tortor. Nulla aliquet nisi id lorem rhoncus, at convallis lectus malesuada. Nam fermentum ante id dolor volutpat, vitae consequat ligula sagittis. Donec magna mi, sodales vitae enim quis, sagittis tincidunt enim. Maecenas porttitor dignissim lacus, eget pharetra tellus bibendum sed. Nulla mauris diam, lobortis sit amet feugiat quis, hendrerit vel est. In facilisis arcu ut accumsan mattis. Curabitur eu elit eu quam varius fringilla. Mauris iaculis lorem nec nibh sollicitudin vulputate. Donec tincidunt varius erat nec consectetur. Vestibulum dignissim at velit rutrum fermentum. Proin suscipit ornare elit, eu feugiat nisl facilisis eu. Nullam a malesuada lacus. Pellentesque ante augue, ullamcorper sit amet nunc eget, congue scelerisque est. Phasellus in dapibus tortor, sit amet hendrerit sapien.<br/>Duis porttitor nisl tortor, eget laoreet orci accumsan eu. Nulla pretium nunc eget efficitu",
    post_date: "2018-08-01T10:20:30Z",
    likes: 38,
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
