import React from 'react'
import emailjs from '@emailjs/browser'

const sendEmail = (e) => {
e.preventDefault()
emailjs.sendForm('service_24yznel', 'template_b64msu2', e.target, 'mAsbwAoeVks8dzWHv')
nom.value = ''
email.value= ''
message.value = ''
}

function HomePage() {
  return (
    <div>
        <div className="presentation">    
        <div>
        <h1>
                Bonjour à tous ! Je suis<br/><strong>Victor Duveau, <br/>Développeur Web <br/>situé à Paris, France</strong>
            </h1>
            <p>
                Passionné et créatif, spécialisé dans la conception d'applications web sur mesure pour améliorer l'expérience utilisateur et booster la performance commerciale.
            </p>
            <a href="/#motivation" className="cta">EN SAVOIR PLUS</a>
        </div>
        <img src="images/victorduveau.png" alt="Photo Victor Duveau"/>
        </div>
        <div id="projets" className="projets">
            <div className="projetsa">
                    <h2>
                        Mes Projets
                    </h2>
                    <p className="soustitre">Voici une liste de mes différents projets</p>
                    <div className="sportsconnect">
                        <div className="sportsconnecta">
                    <h3>
                    SportsConnect Application
                    </h3>
                    <p>
                    Cette application Web est construite à l'aide de React.js, Node.js, MongoDB, Express.js, HTML et CSS. Elle sert de plateforme sociale pour les amateurs de sport, permettant aux utilisateurs de se connecter en fonction de leurs activités partagées. Avec des fonctionnalités telles que la création, la lecture, la mise à jour et la suppression d'activités ou d'utilisateurs, ainsi que la possibilité de créer des commentaires, cette application vise à améliorer l'expérience de la communauté sportive...                    </p>
                    <a href="/sportsconnect" className="ctc">VOIR PLUS</a>
                    </div>
                    <img src="images/sportsconnect.jpg" alt="Photo SportsConnect"/>
                </div>
            </div>
            <div className="bonapp">
                <div className="bonappa">
                    <h3>Bon App'</h3>
                    <p>
                    Bon App' est votre compagnon de cuisine ultime, proposant un vaste catalogue de plus de 300 délicieuses recettes du monde entier. Que vous soyez un chef chevronné ou un novice en cuisine, cette application est votre livre de cuisine en ligne incontournable, offrant une expérience conviviale pour découvrir et préparer des plats appétissants...
                    </p>
                    <a href="/bonapp" className="ctc">VOIR PLUS</a>
                </div>
                <img src="images/bonapp.jpg" alt="Photo Bonapp"/>
            </div>
            <div className="bomberland">
                <div className="bomberlanda">
                    <h3>Bomberland</h3>
                    <p>
                    Il s'agit d'un jeu passionnant basé sur une grille dans lequel vous devez naviguer dans le labyrinthe, poser stratégiquement des bombes et détruire des murs orange dans un temps donné. Attention, les murs gris sont indestructibles et vous devrez faire attention à l'explosion de vos propres bombes ! Bonne Chance !
                    </p>
                    <a href="/bomberland" className="ctc">VOIR PLUS</a>
                </div>
                <img src="images/bomb.jpg" alt="Photo Bomberland"/>
            </div>
        </div>
     <div id="motivation" className="fondblanc">
        <div className="motivation">
            <div>
            <h3> "Je m'engage à créer des expériences numériques innovantes et impactantes"
            </h3>
            <p>
                En tant que développeur web, je suis un professionnel passionné par la création de sites web et d'applications interactives. Fort d'une solide expérience dans le domaine, je possède une expertise approfondie des langages de programmation tels que HTML, CSS, JavaScript, ainsi que le frameworks populaire React. J'ai aussi acquis des compétences avancées en Node.js et Express.js. Pour la gestion de versions et le travail d'équipe, j'utilise Git et GitHub et pour la conception de bases de données, MongoDB.
                <br/>
                <br/>Mon objectif est de concevoir des solutions digitales intuitives et esthétiques, tout en assurant une expérience utilisateur fluide et conviviale. J'ai développé des compétences en optimisation des performances, en intégration responsive pour une navigation optimale sur tous les appareils, ainsi qu'en SEO pour maximiser la visibilité des projets en ligne.
                <br/>
                <br/>En outre, je suis constamment à l'affût des dernières tendances et évolutions technologiques, ce qui me permet de proposer des solutions innovantes et adaptées aux besoins spécifiques de chaque projet. Je suis également à l'aise en collaboration avec des équipes pluridisciplinaires, car je crois fermement à l'importance de la communication et de la coordination pour aboutir à des résultats de qualité.
            </p>
            <a href="CV-Victor-DUVEAU.pdf" className="ctb">VOIR MON CV</a>
            </div>
            <img src="images/motivation.jpg" alt="Developpement web" />
        </div>
     </div>
        <div className="experience">
        <div className="ironhack">
                <div className="ironhacka">
                    <h2>Formations</h2>
                    <h3>IRONHACK (2023)</h3>
                    <p>
                    Mon programme de formation a compris l'apprentissage de JavaScript, HTML, CSS, Git, GitHub, ReactJS, NodeJS, ExpressJS, MongoDB, ainsi que la manipulation du DOM
                    </p>
                </div>
            </div>
        <div className="yschool">
                <div className="yschoola">
                    <h3>Yschool Troyes (2014 - 2018)</h3>
                    <p>
                        Master 2 : Business school
                        Marketing International and Business Development
                    </p>
                </div>
            </div>
            <div className="voyage">
                <div className="voyagea">
                    <h2>
                        Expériences
                    </h2>
                    <p className="soustitre">Voici une liste de mes différentes expériences</p>
                    <h3>
                        Voyage autour du monde 
                    </h3>
                    <h4>
                        Brésil et Argentine (3 mois)
                        <br/> Australie (Working Holiday Visa - 11 mois) 
                        <br/>Thaïlande, Laos, Vietnam et Philippines (3 mois)
                        <br/>Janvier 2022 - Juin 2023
                    </h4>
                    <p>
                        Pendant une période de 17 mois, j'ai eu l'opportunité incroyable d'explorer diverses cultures et de vivre des aventures inoubliables à travers plusieurs pays...
                    </p>
                    <a href="/voyages" className="ctc">VOIR PLUS</a>
                </div>
            </div>
            <div className="cbp">
                <div className="cbpa">
                    <h3>Chargé de Marketing et Communication</h3>
                    <h4>
                        CBP COUSSINETS BAGUES DE PRÉCISION (Sartrouville, France)
                        <br/>Octobre 2018 - Janvier 2022
                    </h4>
                    <p>
                        Mise en place de la stratégie d'entreprises et sa réalisation
                    </p>
                    <a href="/cbp" className="ctc">VOIR PLUS</a>
                </div>
            </div>
            <div className="limra">
                <div className="limraa">
                    <h3>Assistant Manager Opérationnel et Marketing Évènementiel</h3>
                    <h4>
                        LIMRA EMEA (Barcelone, Espagne)
                        <br/>Mai 2017 - Novembre 2017
                    </h4>
                    <p>
                        Organisation de conférences et leur mise en place
                    </p>
                    <a href="/limra" className="ctc">VOIR PLUS</a>
                </div>
            </div>
            <div className="letudiant">
                <div className="letudianta">
                    <h3>Assistant Chef de projet Évènementiel</h3>
                    <h4>
                        L’Etudiant (Paris, France)
                        Avril 2015 - Juin 2015
                    </h4>
                    <p>
                        Mise en place d’événements : Prospection, Powerpoint, Enquêter sur
                        le terrain, Etude de marché, Compte rendu
                    </p>
                    <a href="/letudiant" className="ctc">VOIR PLUS</a>
                </div>
            </div>
        </div>
        <div className="devweb">
            <div className="devweba">
                <h3>Développement web</h3>
                <p>Le développement web est le processus de création, de conception, de programmation et de maintenance de sites web et d'applications web. Il englobe toutes les étapes nécessaires pour faire fonctionner un site web, de la conception graphique et de l'architecture de l'information à la programmation des fonctionnalités interactives, en passant par l'intégration du contenu et la gestion des bases de données.</p>
                <img src="images/devweb.png" alt="devweb" />
            </div>
        </div>
        <div className="citation">
            <div className="citationa">
                <p><em>"Un problème bien posé est un problème à moitié résolu"</em></p>
                <h2>Henri Bergson</h2>
            </div>
        </div>
        <div className="competences">
            <div className="competencesa">
                <h2>Profil</h2>
                <p>Je suis un développeur full stack 
basé en région parisienne avec 
une expérience en marketing et en 
développement commercial.
Passionné par l'apprentissage 
continu, je m'efforce constamment 
d'écrire un code propre et de me 
familiariser avec de nouvelles 
techniques de programmation.</p>
            </div>
            <div className="centres">
                <h2>Centres d'intérêts</h2>
                <p>Passionné de sport, je m'épanouis dans des activités variées comme le badminton en club, la course à pied, la natation, et le football. En parallèle, ma soif d'aventure et de découverte m'a conduit à vivre des expériences inoubliables, allant d'un séjour Erasmus en Finlande à un stage de fin d'études en Espagne, ainsi qu'un voyage enrichissant autour du monde, explorant l'Amérique du Sud, l'Australie et l'Asie du Sud-Est. Ces moments sportifs et culturels ont véritablement sculpté ma personnalité, renforçant mes compétences sociales et mon adaptabilité </p>
            </div>
        </div>
        <div className="form">
            <div className="forma">
                <form method="get" onSubmit={sendEmail}>
                    <h3>Parlons de votre projet</h3>
                        <fieldset>
                        <label htmlFor="nom">Nom</label>
                        <input type="text" name="nom" id="nom"/>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email"/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </fieldset>
                    <fieldset>
                        <input type="submit" value="Envoyer"/>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HomePage