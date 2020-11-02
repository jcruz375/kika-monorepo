import React from 'react';
import PageRoot from '../../components/PageRoot';

import './styles.css';


function ContactPage() {
    return (
        <PageRoot>
            <div id="contactPage-content" className="container">
                <h1>Nossos contatos:</h1>
                <ul>
                    <li> 
                        WhatsApp pelo número: (11)96802-5673 ou pelo 
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511968025673">Link</a> 
                    </li>
                    <li>
                        Instagram: @hamburgueria_kika
                        <a href="http://localhost:3000/static/media/instagram.f8c4f0c1.svg">Link</a>
                    </li>
                    <li>
                        E-mail: hamburgueriakika@gmail.com
                    </li>
                </ul>
                <br/>
                <hr/>
                <br/>
                <br/>
                
                <h1>Site desenvolvido por João Vitor Oliveira Cruz</h1>
                <ul>
                    <li>
                        WhatsApp: (11)98840-6431
                    </li>
                    <li>
                        Linkedin: João Vitor Oliveira Cruz
                        <a href="https://www.linkedin.com/in/joao-cruz375/">Linkedin</a>
                    </li>
                    <li>
                        GitHub: jcruz375
                        <a href="https://github.com/jcruz375">GitHub</a>
                    </li>
                    <li>
                        E-mail: joaocruz375@gmail.com
                    </li>
                </ul>

            </div>
        </PageRoot>
    );
};


export default ContactPage;