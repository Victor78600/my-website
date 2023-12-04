import React from 'react'

function Footer() {
  return (
    <div>
 <footer>
            <section className="pied">
                <div id="container">
                    <div className="footerMessage">
                        <p >N'hésitez pas à me contacter. J'ai hâte d'avoir de vos nouvelles.</p>
                    </div>
                    <div className="logo">
                    <a href="/"><img src="images/logo-vd.png" alt="Logo Victor Duveau"/></a>
                    </div>
                    <div className="reseau">
                        <a target="_blank" href="https://www.linkedin.com/in/victor-duveau/" class="lien-icone">
                        <img src="images/logo-linkedin.png" alt="Logo Linkedin"/></a>
                        <a target="_blank" href="https://www.instagram.com/vic_duveau/" class="lien-icone">
                        <img src="images/instagram.png" alt="Logo instagram"/></a>
                        <a target="_blank" href="https://www.facebook.com/victor.duveau/" class="lien-icone">
                        <img src="images/facebook.png" alt="Logo facebook"/></a>
                        <a target="_blank" href="https://twitter.com/" class="lien-icone">
                        <img src="images/x.png" alt="Logo x"/></a>
                    </div>
                    <div>
                        <a href="mailto:vic.duveau@hotmail.fr">vic.duveau@hotmail.fr</a>
                    </div>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer