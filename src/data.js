export const consultation_list_data =
[
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
    first_name: "margot",
    last_name: "Boulet-Maurel",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/margot.jpg",
  },
]

export const consultation_detail_list_data = [
  {
    consultation_name: "Présentation",
    consultation_pitch_sentence: "Première partie du projet",
    consultation_description: "C'est dans ce texte que va apparaite notre description<br/>Vision<br/>Constat<br/>Solution en une phrase<br/>Explication du fonctionnement<br/><br/><br/><br/><br/><br/><br/>C'est fou quand même!",
    consultation_organisator_id: 0,
    days_left: 1,
    popularity: 9000,
    detail_image: "./profile_pic.jpg",
  },
]

export const consultation_id_0_opinions_number=1;
export const consultation_id_0_opinions_details = [
  {
    id: 0,
    id_author: 0,
    title: "L'offre / La solution",
    content: "m ligula id sapien commodo sodales sit amet ac est.<br/>Phasellus ac odio mi. Nam id pulvinar tortor. Nulla aliquet nisi id lorem rhoncus, at convallis lectus malesuada. Nam fermentum ante id dolor volutpat, vitae consequat ligula sagittis. Donec magna mi, sodales vitae enim quis, sagittis tincidunt enim. Maecenas porttitor dignissim lacus, eget pharetra tellus bibendum sed. Nulla mauris diam, lobortis sit amet feugiat quis, hendrerit vel est. In facilisis arcu ut accumsan mattis. Curabitur eu elit eu quam varius fringilla. Mauris iaculis lorem nec nibh sollicitudin vulputate. Donec tincidunt varius erat nec consectetur. Vestibulum dignissim at velit rutrum fermentum. Proin suscipit ornare elit, eu feugiat nisl facilisis eu. Nullam a malesuada lacus. Pellentesque ante augue, ullamcorper sit amet nunc eget, congue scelerisque est. Phasellus in dapibus tortor, sit amet hendrerit sapien.<br/>Duis porttitor nisl tortor, eget laoreet orci accumsan eu. Nulla pretium nunc eget efficitu",
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
            id: 2,
            id_author: 1,
            comment: "Je suis pas d'accord avec toi. Je te conseille d'aller voir le post de Clément à ce sujet"
          },
          {
            id: 3,
            id_author: 4,
            comment: "Il me semble néanmoins que c'est une position fortement partagée, notamment au sein de la DSI..."
          }
        ]
      }
  },
]
