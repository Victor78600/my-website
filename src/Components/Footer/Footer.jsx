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
                        <img src="images/logo-vd.png" alt="Logo Victor Duveau"/>
                    </div>
                    <div className="reseau">
                        <a target="_blank" href="https://www.linkedin.com/" class="lien-icone">
                        <img src="images/logo-linkedin.png" alt="Logo Linkedin"/></a>
                        <a target="_blank" href="https://www.instagram.com/" class="lien-icone">
                        <img src="images/instagram.png" alt="Logo instagram"/></a>
                        <a target="_blank" href="https://www.facebook.com/" class="lien-icone">
                        <img src="images/facebook.png" alt="Logo facebook"/></a>
                        <a target="_blank" href="https://twitter.com/" class="lien-icone">
                        <img src="images/x.png" alt="Logo x"/></a>
                    </div>
                    <div>
                        <a href="mailto:duveauvic@gmail.com">duveauvic@gmail.com</a>
                    </div>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer