import React from 'react'

function Bomberland() {
  return (
    <div className='projectPages'>
      <h1>
      Bomberland - Une Aventure Explosive !"

</h1>
<p>Bienvenue dans Bomberland, un jeu passionnant basé sur une grille où vous devez vous frayer un chemin à travers le labyrinthe, placer stratégiquement des bombes et détruire les murs orange dans un laps de temps donné. Soyez prudent, car les murs gris sont indestructibles, et vous devrez faire attention aux explosions de vos propres bombes !
</p>
<h2>Comment Jouer</h2>
<h3>Objectif</h3>
<p>
Votre but dans Bomberland est de marquer autant de points que possible dans la limite de temps impartie en détruisant les murs orange avec vos bombes.
</p>
<h3>Commandes</h3>
<li>
Déplacer votre personnage : Utilisez les touches fléchées.
</li>
<li>
Placer une bombe : Appuyez sur la barre d'espace.
</li>
<li>
Déclencher une bombe : Les bombes exploseront automatiquement après 2 secondes.
</li>
<h3>Règles du Jeu</h3>
<li>
Vous pouvez déplacer votre personnage d'une case de grille à la fois.
</li>
<li>
Vous disposez d'un nombre illimité de bombes.
</li>
<li>
Lorsqu'une bombe explose, tous les murs orange à l'intérieur de l'explosion seront détruits, et vous gagnerez 1 point pour chaque mur détruit.
</li>
<li>
Les murs gris ne peuvent pas être détruits.
</li>
<li>
Soyez prudent de ne pas vous faire prendre dans l'explosion de vos propres bombes, car cela entraînera la perte du jeu.
</li>
<li>
Vous devez détruire tous les murs orange avant que le temps ne s'épuise pour remporter le jeu.
</li>
<h3>Scoring</h3>
<p>
Gagnez 1 point pour chaque mur orange que vous détruisez.
</p>
<h3>Victoire et Défaite</h3>
<p>
Victoire : Vous remportez le jeu en détruisant avec succès tous les murs orange dans la limite de temps.
</p>
<p>
Défaite : Vous perdez le jeu si :
</p>
<li>
Vous êtes pris dans l'explosion de votre propre bombe.
</li>
<li>
Le temps s'écoule avant que vous n'ayez détruit tous les murs orange.
</li>

<a href="https://victor78600.github.io/Bomberland/" target="_blank"  className="ctc">Cliquez ici pour jouer</a>
<img src="images/bomberland.png" alt="Photo Bomberland"/>
    </div>
  )
}

export default Bomberland