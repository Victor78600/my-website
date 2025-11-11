import React from 'react'

function Sportsconnect() {
  return (
    <div className='projectPages'>
        <h1>
            SportsConnect Application
        </h1>
        <p>
           Bienvenue sur l'application SportsConnect ! Cette application web est construite avec React.js, Node.js, MongoDB, Express.js, HTML et CSS. Elle sert de plateforme sociale pour les passionnés de sport, permettant aux utilisateurs de se connecter en fonction de leurs activités communes. Dotée de fonctionnalités telles que la création, la lecture, la mise à jour et la suppression d'activités ou d'utilisateurs, ainsi que la possibilité de laisser des commentaires, cette application vise à améliorer l'expérience communautaire dans le domaine du sport.
        </p>
        
          <h2>
Authentification basée sur les jetons
</h2>
<p>
L'application SportsConnect met en œuvre une authentification basée sur les jetons JSON Web Tokens (JWT) côté serveur pour une sécurité renforcée.
</p>
<h3>
Comment ça fonctionne
</h3>
<p>
Connexion de l'utilisateur :
Les utilisateurs peuvent se connecter au site en fournissant leurs informations d'identification. Le serveur vérifie les informations fournies et, en cas d'authentification réussie, génère un JWT contenant les informations de l'utilisateur.
</p><p>
Génération de jeton :
Le serveur utilise la bibliothèque jsonwebtoken pour créer un JWT avec une clé secrète et inclut les informations de l'utilisateur dans la charge utile.
</p>
<p>
Stockage du jeton :
Le JWT généré est généralement stocké côté client, par exemple dans le localStorage ou le sessionStorage du navigateur.
</p>
<p>
Routes protégées :
Certaines routes sur le serveur sont protégées et nécessitent un JWT valide pour y accéder. Le serveur vérifie le JWT sur les routes protégées, assurant ainsi que l'utilisateur est authentifié.
</p>
<p>
Expiration du jeton :
Le JWT inclut une heure d'expiration pour renforcer la sécurité. Les utilisateurs doivent se réauthentifier et obtenir un nouveau jeton après l'expiration du précédent.
</p>
<h2>
Fonctionnalités
  </h2>
<h3>
Gestion des utilisateurs
</h3>
<li>
Création : Les utilisateurs peuvent s'inscrire et créer leur profil en fournissant des informations essentielles.
</li>
<li>
Lecture : Consultez les profils d'utilisateurs pour découvrir leurs activités et commentaires.
</li>
<li>
Mise à jour : Les utilisateurs peuvent modifier leur profil et mettre à jour les informations.
</li>
<h3>
Gestion des activités
</h3>
<li>
Création : Les utilisateurs peuvent créer de nouvelles activités en spécifiant des détails tels que le sport, la durée, la ville et la description.
</li>
<li>
Lecture : Explorez une variété d'activités créées par les utilisateurs sur la plateforme.
</li>
<li>
Mise à jour : Les créateurs d'activités peuvent modifier les détails de leurs activités.
</li>
<li>
Suppression : Supprimez les activités qui ne sont plus pertinentes.
</li>
<h3>
Interaction sociale
</h3>
<li>
Suivre des utilisateurs : Les utilisateurs peuvent suivre d'autres passionnés de sport pour rester informés de leurs activités.
</li>
<li>
Participer : Rejoignez des activités créées par d'autres utilisateurs.
</li>
<li>
Mur d'accueil : La page d'accueil présente un mur déroulant mettant en avant des activités et des mises à jour d'utilisateurs suivis.
</li>
<h3>
Commentaires
</h3>
<li>
Ajouter des commentaires : Les utilisateurs peuvent laisser des commentaires sur les activités, favorisant ainsi l'engagement et l'interaction.
</li>
<h2>
Technologies utilisées
</h2>
<li>
Frontend : React.js pour construire une interface utilisateur réactive et dynamique.
</li>
<li>
Backend : Node.js et Express.js pour gérer la logique côté serveur et les points d'API.
</li>
<li>
Base de données : MongoDB pour stocker les profils d'utilisateurs, les activités et les commentaires.
</li>
<li>
Style : HTML et CSS pour un design attrayant et convivial.
</li>
<p>
Le serveur gratuit peut prendre du temps avant de démarrer (1 ou 2 minutes)
</p>
<h2>
Actuellement le serveur ne fonctionne pas
</h2>
                    <a href="https://sportsconnect.netlify.app/" target="_blank"  className="ctc">Cliquez ici pour accéder au site</a>
                    <img src="images/sportsconnectWebsite.png" alt="Photo SportsConnect"/>
        </div>
  )
}

export default Sportsconnect