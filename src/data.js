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
    days_left: 18,
    vote: true,
  },
  {
    image: "./consultation_vignette/3_Restructuration fonctionnelle de la direction R&D.jpeg",
    header: "Restructuration fonctionnelle de la direction R&D",
    description: "Pour répondre à la demande grandissante, la direction évolue",
    link:"/consultation_detail?id=4",
    popularity: 68,
    days_left: 30,
    vote: false,
  },
  {
    image: "./consultation_vignette/8_Fermeture de lentreprise sur le pont du 11 Novembre.jpeg",
    header: "Fermeture de l'entreprise sur le pont du 11 Novembre?",
    description: "",
    link:"/consultation_detail?id=10",
    popularity: 15,
    days_left: 42,
    vote: true,
  },
  {
    image: "./consultation_vignette/5_Campagne publicitaire télévision - Printemps 2019.jpeg",
    header: "Campagne publicitaire télévision - Printemps 2019",
    description: "La campagne veut promouvoir l'image de marque de l'entreprise",
    link:"/consultation_detail?id=7",
    popularity: 37,
    days_left: 31,
    vote: false,
  },
  {
    image: "./consultation_vignette/7_Conseil d'Administration - Modification des statuts - Octobre 2018.jpeg",
    header: "Conseil d'Administration - Modification des statuts - Novembre 2018",
    description: "",
    link:"/consultation_detail?id=9",
    popularity: 82,
    days_left: 47,
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
    days_left: 55,
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
    first_name: "Mélissa",
    last_name: "Benali-Richard",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/melissa.jpg",
  },
  {
    id: 2,
    first_name: "Karine",
    last_name: "Gras [CFDT]",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/karine.jpeg",
  },
  {
    id: 3,
    first_name: "Mathieu",
    last_name: "Duclas",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/mathieu.jpeg",
  },
  {
    id: 4,
    first_name: "Robin",
    last_name: "Poinçon",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/robin.jpeg",
  },
  {
    id: 5,
    first_name: "Mathilde",
    last_name: "Crès",
    entity_name: "",
    email: "sami.yacoubi@hotmail.fr",
    password: "sami",
    photo : "./profile_pic/mathilde.jpeg",
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
            <List.Item>In our current society, the <b> public institutions don’t really
            involve the citizen.</b> To get involved personally demands lot of time and
            contacts. Our system of representation <b>hasn’t really changed in a century</b>
              (vote for a house representant every 5 years or so) although our technology
              allows us to be directly informed and implicated. All this combined can
              partially explain the French’s disinterest in politics. </List.Item>

            <List.Item>At the same time, traditional companies are in turmoil.
             France has the <b>lowest percentage of engaged workers</b>, big companies have trouble
             engaging their employees, and can’t keep the new recruits,
             especially the millenials <i>(Steelcase & Ipsos, 2016)</i>. <br/>
             This affect their innovation capacity, and puts them in jeopardy.
            </List.Item>
          </List>
          <br/>
          <div style={{
            textAlign: "center",
            fontSize: "18px"}}>
          <b>
          We firmly believe that both these things can and must change.
          </b>
          </div>
        </p>


        <Image src={images("./report.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}> <b> Our conclusion </b> </p>
        <br/>
          <div>
          For us, engagement is the key problem here. Whether in politics or in
          professional life, the current system is made so that the individual has
          little or no feeling of having an impact, thus disengaging themselves.
          This new generation of workers
          is in search of meaning and impact in their life, and want to be actor of
          change, not just spectator.
          </div>
          <br/>
          <div>
            We are confident that these issues could be solved through <b>a more
            consultative system. </b>This is something that has been growing in the
            last few years, and has been getting more and more traction <i>(Observatoire
            de l'engagement, 2014)</i>. Of course,
            it will take a long time for it to happen in politics, but
            it can already be started in companies.
          </div>
          <br/>
          <div>
             A consultative system would help the employees feeling valued and
             useful, therefore providing several benefits for the company:
             <br/>
             <List bulleted>
               <List.Item>Inscrease in employee engagement</List.Item>
               <List.Item>Better idea generation</List.Item>
               <List.Item>Better high-potential employees detection</List.Item>
               <List.Item>And a better public image</List.Item>
             </List>
             <br/>
             And this would
              also help for our first observation. If a citizen uses a consultative
              system in his workplace, where he goes everyday and is engaged, he
               will quickly ask himself why such a system isn’t implemented in
               his public life, and will ask that it is done.
          </div>
          <br/>

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
          <p style={{color:'rgb(49, 202, 202)'}}>
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
      <br/>
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
        <Image src={images("./coin.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}> <b> Business Model </b> </p>
        <br/>
        <div>
          In our opinion, the best way to monetize this service is to use two channels:
        </div>
        <List bulleted>
          <List.Item>A subscription for the usage of the software (on the SaaS model)
          </List.Item>
          <List.Item>Standard fees for the counselling in the form of “packs”,
          that provide all the necessary help to get set-up, and some additionnel
          services if the company doesn’t have the internal resources to run it
          itself.</List.Item>
        </List>
        <p style={{color:'rgb(49, 202, 202)'}}> <b>
          You know what to do now :) Go have a look in the Opinions
          </b>
        </p>
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
        <br/>
        <p style={{fontSize: '25px'}}> <b> Our team </b> </p>
        <br/><br/>
        <p>
        <Image src={images("./equipe.png")}  size='huge'/>
        </p>
        <br/>
        <p style={{fontSize: '25px'}}> <b> And of course, you'll be able to post videos</b> </p>
        <iframe width="853" height="480"
        src="https://www.youtube.com/embed/OadyF_JhKJ8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <p style={{color:'rgb(49, 202, 202)'}}> <b>
          Thanks again for your attention! The tour is now over, but you can go discover
          two examples on the Consultation List page. And remember:
          <br/><br/>
          </b>
          <div style={{
            textAlign: "center",
            fontSize: "20px"}}>
          <b>
          To make Pnyx a reality we will have to dare changing the way companies work,
          one at a time.
          </b>
          </div>
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 0,
    days_left: 3,
    popularity: 9002,
    detail_image: "./team_large.png",
  },
  {
    consultation_name: "Election des délégués du personnel - 2018",
    consultation_pitch_sentence: "Elisez vos futurs représentants pour l'année 2018 - 2020",
    consultation_description: [
      <React.Fragment>
        <br/>
        <p>
        En	 application	 des	 textes	 législatifs	 et	 réglementaires
        relatifs	 aux	 élections	 professionnelles,	 il	 sera	 organisé
        prochainement	les	élections	des	délégués	du	personnel.
        </p>
        <div>
        Les	sièges	à	pourvoir	sont	les	suivants	:
        </div>
        <List bulleted>
          <List.Item>3	délégués	titulaires</List.Item>
          <List.Item>3	délégués	suppléants</List.Item>
        </List>
        <p>
        Il est envisagé	qu'avant le premier tour, qui aura lieu entre le 15/11/2018 et
        le 17/11/2018, une session de débat ait lieu sur cette plateforme. Tous les
        candidats présentés	par	les	organisations	syndicales sont invités à détailler
        leur programme et les empoyés sont invités à échanger directement avec eux au
        travers de la palteforme.
        </p>
        <p>
        Conformément	aux	articles	L2314-3	et	L2324-4	du	Code	du	travail,
        les	organisations	syndicales	qui	satisfont	aux	critères	de	respect	des
        valeurs	républicaines	et	d'indépendance,	légalement	constituées	depuis
        au	moins	deux	ans	 et	 dont	 le	 champ	 professionnel	 et	 géographique
        couvre	 l'entreprise	 ou	 l'établissement	 concernés,	 sont
        invitées	à	négocier	le	protocole	d'accord	préélectoral	et	à	établir	les	listes
        de	leurs	candidats	aux	fonctions	de	délégués	du	personnel	et	de
        représentants	du	personnel	au	comité	d'entreprise.
        </p>
        <p>
        Par	ailleurs,	les	organisations	syndicales	reconnues	représentatives
        dans	l'entreprise,	celles	ayant	constitué	une	section	syndicale	dans
        l'entreprise,	ainsi	que	les	syndicats	affiliés	à	une	organisation
        syndicale	 représentative	au	niveau	national	et	interprofessionnel
        y	sont	également	invités	par	courrier.
        </p>
        <p>
        En	 l'absence	 de	 candidature	 syndicale,	 ou	 si	 à	 l'issue
        du	 premier	 tour	 le	 quorum	 n'est	 pas	 atteint	 ou	 des
        sièges	 restent	 vacants,	 un	 deuxième	 tour	 sera	 organisé.
        Des	 candidatures	 libres	 pourront	 alors	 être
        présentées	en	plus	des	candidatures	syndicales.
        </p>
        <p>
        Le second tour eventuel est envisagé entre le 01/12/2018 et le 03/12/2018.
        </p>
        <p>
        Si	 à	 la	 date	 du	 17/06/2014,	 aucune	 organisation	 syndicale
        ne	 s'était	 manifestée,	 la	 direction	 fixerait
        conformément	à	la	loi	les	conditions	de	déroulement	des	opérations
        électorales	et	les	porterait	aussitôt	à	la	connaissance	du	personnel.
        </p>
        <p>
        Madame Mathilde Crès <br/>
        Directrice des Ressources Humaines
        </p>

      </React.Fragment>
    ],
    consultation_organisator_id: 5,
    days_left: 18,
    popularity: 150,
    detail_image: "./meeting.jpeg",
  },
  {
    consultation_name: "Restructuration fonctionnelle de la direction R&D",
    consultation_pitch_sentence: "Pour répondre à la demande grandissante, la direction évolue",
    consultation_description: [
      <React.Fragment>
        <br/>
        <p>
        Bonjour à tous, <br/><br/>
        Comme vous le savez tous, notre département R&D est la fierté de notre
        entreprise et représente une source d'innovation inépuisable qui a fait
        de nous le leader de notre secteur depuis plus de 30 ans.
        </p>
        <p>
        Dans l'optique de maintenir cette position dominante, il nous semble indispensable
        de changer nos façons de travailler ainsi que notre organisation. Comme vous le
        savez, l'arrivée de la blockchain et du cloud a fortement disrupté notre coeur
        de métier, et notre actuelle organisation n'est plus adaptée aux nouvelles façons
        de faire. <br/>
        Nous faisons donc appel à vous afin de nous aider à imaginer notre département R&D
        de demain.
        </p>
        <p>
        Le but de cette consultation est de vous permettre de faire remonter vos idées, vos
        ressentis sur ce qu'il faudrait que nous modifions. Votre expertise ainsi que votre
        vision quotidienne du département est une donnée précieuse et nous aidera à nous
        restructurer de la façon la plus optimale possible.
        </p>
        <p>
        Cette consultation durera 30 jours, durant lesquels vous pouvez vous exprimer, poser
        des questions auxquelles nous tenterons de répondre. Au terme de ces 30 jours, nous
        allons prendre toutes vos idées pour essayer de construire un plan de restructuration
        pertinent, qui vous sera présenté en janvier.
        </p>
        <p>
        Je souhaitais encore vous remercier pour ces 30 années d'engagement auprès de cette
        entreprise, et vous rappeler qu'une entreprise n'est que le produit de l'ambition
         et le travail collectif de ses employés. Ce n'est donc pas un hasard si nous sommes
         toujours à la pointe de la technologie.
        </p>
        <p>
        Mathieu Duclas <br/>
        Directeur R&D et innovation
        </p>
      </React.Fragment>
    ],
    consultation_organisator_id: 3,
    days_left: 30,
    popularity: 68,
    detail_image: "./restruct.png",
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
      <br/>
        <div>
        Pnyx is a Saas platform allowing a company’s executive management
        to interact with its employees and to consult them on strategic
        questions (employees representatives elections, strategy shift, cost
          reduction, quality of life…). The employees have the possibility to
          vote, voice their opinions, exchange and debate between them on a given
          subject, directly from their computers.
        </div>
        <br/>
        <div>
        Pnyx aspires to be a consultation tool at all levels of a company,
        giving the opportunity to top executives to have a real representation
        of the different points of view in their organisation. Additionally, it
        will help them engage their employees, identify high-potential coworkers
        and source better ideas.
        </div>
        <br/>
        <div>
        The mains features for the <b>management</b> are:
        <List bulleted>
          <List.Item>Create consultations</List.Item>
          <List.Item>Create votes</List.Item>
          <List.Item>Post news articles about a consultation</List.Item>
          <List.Item>Ineract with employees</List.Item>
          <List.Item>Analyze engagement and interaction through a dashboard</List.Item>
        </List>
        </div>
        <br/>
        <div>
        And the mains features for the <b>employees</b> are:
        <List bulleted>
          <List.Item>Create consultations (depending on the company policy)</List.Item>
          <List.Item>See all opinions about a consultation</List.Item>
          <List.Item>React on a consultation</List.Item>
          <List.Item>Vote on certain subjects</List.Item>
          <List.Item>Upvote ideas that he shares</List.Item>
          <List.Item>Ineract with employees and management</List.Item>
          <List.Item>Analyze engagement and interaction through a dashboard</List.Item>
        </List>
        </div>
        <br/>
        <p style={{color:'rgb(49, 202, 202)'}}>
          You will find two examples at the end of the tour to get a better idea :).
          Go back to Opinions with the button on top
        </p>
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
      <Image src={images("./client.png")} size='tiny' circular floated='left'/>
      <br/>
      <br/>
        <div> <b>
          We have two main client segments at first: </b>
        </div>
        <br/><br/>
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
        <Image src={images("./user.png")} size='tiny' circular floated='left'/>
        <br/>
        <br/>
          <div> <b>
            As for our users, they are of two types: </b>
          </div>
          <br/><br/>
        <List bulleted>
          <List.Item>The executive management, which will be able to create new
          discussions.</List.Item>
          <List.Item>The employees, who will be able to debate between them and
          with the management about the subject and then potentially vote on it.
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
            comment: "The goal after that is to get all the other big companies, the unions and the companies cooperatives. " +
            "All combined, it represents more than 7000 potentials clients, just in France"
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
      <br/>
        <p>
        This platform is only one piece of the more global dynamic that will
        transform companies toward a more open and flexible way of functioning.
        We are aware that changing habits is harduous and takes time. This is why
        we will also offer a personalized counsel service, to help the company to
        integrate the tool into their culture and their processes.
        <br/><br/>
        It is still early to have a definite idea, but we plan to offer "packs"
        of counselling, for different purposes:
        <List bulleted>
          <List.Item>Installation pack (mandatory)</List.Item>
          <List.Item>Strategy enforcement pack</List.Item>
          <List.Item>And many others</List.Item>
        </List>
        <br/>
        In addition, we plan to offer free counsel (or at least included in the subscription fee)
        every trimester, to ensure that our tool is used in a correct way and help
        out if it is not the case.
        </p>
        <p style={{color:'rgb(49, 202, 202)'}}> <b>
          Congratulations, you've reached the end of the first consultation! You can now check
          out the second, which talks about business model and budget. To access it, simply
          click on the "Consultation List" button on the navigation bar at the top.
          </b>
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
        <Image src={images("./timeline-icon.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}><b> Timeline </b> </p>
        <p>
        <br/>
        <Image src={images("./timeline.png")}  size='huge' centered/>
        </p>

        <Image src={images("./gotomarket.png")} size='tiny' circular floated='left'/>
        <br/>
        <p style={{fontSize: '25px'}}><b> Go to market </b></p>
        <p>
        <br/>
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
            comment: "Philippe Mondan, HEC advisor and past CEO of 'Fnac' is following the project. He has contacts there, and will make introductions."
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
      <br/>
        <p>
          To find a rough budget we need, in addition of the growth prediction
          from the previous session, a pricing. It is very rough at this point,
          and inspired by similar models of start-ups:
        </p>
        <List bulleted>
          <List.Item>Mensual subscription: 1 000€</List.Item>
          <List.Item>“Installation Pack”: 10 000€</List.Item>
        </List>
        <br/>
        <p style={{fontSize: '16px'}}> <b> Budget chart </b></p>
        <p>
        <Image src={images("./budget.png")}  size='huge' centered/>
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
    title: "Market opportunities",
    content: [
      <React.Fragment>
      <br/>
        <p>
          We are observing a change that is coming over the way big companies
          are doing management. The HR start-ups are at an all-time high and the
          question of satisfaction at the workplace is a key topic in every event
          oriented toward innovation or HR.
        </p>
        <p>
        And at the same time, a consultative system is still a far fetched idea
        for most people. So the competition on this market is not yet existing
        (a few companies are doing similar things, but nothing so evolved).
        </p>
        <p>
        So we will benefit from the evangelizing that all others start-ups are
        doing about well-being at work and engagement, while going further than
        what is offered now, and thus carving our own market, in which we will
        have at least several months of advance.
        </p>
        <br/>
        <p style={{color:'rgb(49, 202, 202)'}}> <b>
          You finished the Opinions of this consultation. Time to check out the
          voting interface before discovering our team.
          </b>
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

export const consultation_id_2_opinions_number=0;
export const consultation_id_2_opinions_details = []

export const consultation_id_3_opinions_number=2;
export const consultation_id_3_opinions_details = [
  {
    id: 0,
    id_author: 2,
    title: "CFDT: Une vidéo vaut mieux qu'un long discours",
    content: [
      <React.Fragment>
        <iframe width="853" height="480"
        src="https://www.youtube.com/embed/U2LAqF2azFU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      </React.Fragment>
    ],
    post_date: "2018-11-04T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 2,
        comments_list: [
          {
            id: 1,
            id_author: 4,
            comment: "Jolie video, mais ça ne mentionne absolument pas les programmes..."
          },
          {
            id: 2,
            id_author: 2,
            comment: "Bonjour Robin :) Le post arrive aujourd'hui, nous voulions juste nous présenter avant!"
          }
        ]
      }
  },
  {
    id: 1,
    id_author: 4,
    title: "Appel aux syndicats: Prise en charge médicale",
    content: [
      <React.Fragment>
      <br/><br/>
        <p>
          Bonjour, <br/>
          Je profite de cette période electorale pour mettre en avant un sujet
          qui est bien trop souvent mis de côté et retardé par la direction
          ET les syndicats: La question sur la prise en charge médicale des
          membres de la famille atteints de pathologies sévères.
          <br/>
          Jusqu'à maintenant j'ai lutté pour obtenir de réponses, et aucune
          satisfaisante. Je profite donc de cette période pour demander publiquement
          le positionnement des différents groupes de représentants du personnel
          leur plan pour cette question.
          <br/>
          En vous souhaitant une bonne journée,<br/>
          Robin Poinçon
        </p>
        <p>
        </p>
      </React.Fragment>
    ],
    post_date: "2018-11-05T10:20:30Z",
    likes: 12,
    comments: {
        number_of_comments: 0,
        comments_list: []
      }
  },
]

export const consultation_id_4_opinions_number=1;
export const consultation_id_4_opinions_details = [
  {
    id: 0,
    id_author: 4,
    title: "L'importance d'une gouvernance de l'IA",
    content: [
      <React.Fragment>
      <br/>
        <p>
          Bonjour à tous <br/>
          Je trouve cette initiative excellente et indispensable. Pour moi un des
          points majeurs de cette restructuration doit être la création d'une
          entitée dédiée à l'IA, et à sa gouvernance au sein de nos différents projets.
          <br/>
          Aujourd'hui il y a a ma connaissance 16 projets engagés qui comportent
          une composante d'IA. C'est une très bonne chose, mais en y regardant de plus
          près, on observe que chaque équipe utilise ses outils propres, ses
          méthodologies et ses bonnes pratiques. Cela rend les projets impossible
          à fusionner ou à rapprocher dans le futur et fait perdre beaucoup de
          ressources humaines à développer des outils, alors qu'une entitée dédiée
          pourrait mettre des outils disponibles à tous, sous forme de toolbox avec
          du conseil en cas de nécessité.
        </p>
        <p>
        J'espère que cette idée sera mise en place rapidement!<br/>
        Bonne journée et encore bravo pour la démarche <br/>
        Robin
        </p>
      </React.Fragment>
    ],
    post_date: "2018-10-01T10:20:30Z",
    likes: 21,
    comments: {
        number_of_comments: 1,
        comments_list: [
          {
            id: 1,
            id_author: 3,
            comment: "Salut Robin, c'est en effet une excellente idée que nous avions commencé à envisager. J'ai entendu par Nathalie que tu étais très impliqué dans tous les projets d'IA" +
            ". Je te propose donc de rejoindre le groupe de réflexion qui va être crée sur le sujet, pour participer aux discussions! Bonne journée"
          }
        ]
      }
  }
]
