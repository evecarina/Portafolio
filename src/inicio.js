import React, { Component } from 'react';
import './css/inicio.css';
import { NavLink } from 'react-router-dom';
import { connect } from "redux-zero/react";

const Portada=()=>{
  return(
    <section>
    <nav className="navbar navbar-default">
      <div className="container-fluid">        
        <ul className="nav navbar-nav" > 
          <li className="col-md-6 " ><a href="#" ></a></li>        
          <li className="col-md-1.5 c-nav-link"><NavLink to="/portafolio">PORTAFOLIO</NavLink></li>
          <li className="col-md-1.5 c-nav-link "><NavLink to="/portada">SKILLS</NavLink></li>
          <li className="col-md-1.5 c-nav-link "><NavLink to="/portada">CV</NavLink></li>
        </ul>
      </div>     
      </nav>  
    <section className="contportada" align="center"> 
        <div id="start">
        <p>a</p>
        {/* <img src="https://assets.awwwards.com/awards/sites_of_the_day/2017/10/Fanny-Myard-cover.jpg"/> */}
          <div className="collection_container">
            <h2 className="collection_title">
            <span className="collection_title-text">EVELYN GUEVARA</span>
            </h2>     
            <strong className="collection_subtitle">
            <span className="collection_subtitle-text" >FROND-END DEVELOPER</span>
            </strong>
          </div>
          <div className="collection-cta__container">            
            <NavLink to="/conoceme" className="collection-cta__text"><button>Sobre Mi</button></NavLink>
           </div>
        </div>
    </section>
    
      <footer className="t-site-footer">
        <div className="o-container">
          <div className="o-corset u-clearfix" align="center">
            <div className="t-site-footer__offices">
               <div class="c-contactable">
                  {/* <strong class="c-contactable__title">
                      EVELYN
                   </strong> */}
                  <p class="c-contactable__info">                    
                    <a href="tel:01522 528246">997660302</a><br/>               
                    <a href="mailto:design@rootstudio.co.uk">carina120794@gmail.com</a><br/>                               
                    Los Martires 464-La Tinguiña                  
                 </p>
               </div>
               
            </div>
            <div class="t-site-footer__social">
              <div class="c-contactable">    
                <strong class="c-contactable__title">
                  
                </strong>
              <div class="c-contactable__info">
               <div class="o-group" >            
                <div class="o-group__item">
                    <a href="https://facebook.com/rootstudiouk" target="_blank" class="c-btn-social c-btn-social--facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.3 23.3">
                            <path d="M22,0H1.3A1.3,1.3,0,0,0,0,1.3V22a1.3,1.3,0,0,0,1.3,1.3H12.5v-9h-3V10.8h3V8.2c0-3,1.8-4.7,4.5-4.7h2.7V6.8H17.8c-1.5,0-1.7.7-1.7,1.7v2.2h3.5l-.5,3.5h-3v9H22A1.3,1.3,0,0,0,23.3,22V1.3A1.3,1.3,0,0,0,22,0Z"></path>
                        </svg>
                    </a>
                </div>                    
                <div class="o-group__item">
                    <a href="https://instagram.com/rootstudiouk" target="_blank" class="c-btn-social c-btn-social--instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.3 23.3">
                            <path d="M11.7,2.1h4.7a3.9,3.9,0,0,1,2.1.4,3.5,3.5,0,0,1,1.3.9,3.5,3.5,0,0,1,.9,1.3A10.7,10.7,0,0,1,21.1,7a42.3,42.3,0,0,1,.1,4.7,42.3,42.3,0,0,1-.1,4.7,3.9,3.9,0,0,1-.4,2.1,4.1,4.1,0,0,1-2.2,2.2,10.7,10.7,0,0,1-2.1.4H7a3.9,3.9,0,0,1-2.1-.4,3.5,3.5,0,0,1-1.3-.9,3.5,3.5,0,0,1-.9-1.3,10.7,10.7,0,0,1-.4-2.1,42.3,42.3,0,0,1-.1-4.7A42.3,42.3,0,0,1,2.2,7a3.9,3.9,0,0,1,.4-2.1,3.5,3.5,0,0,1,.9-1.3,3.5,3.5,0,0,1,1.3-.9A10.7,10.7,0,0,1,7,2.2h4.7m0-2.1H6.9A8.1,8.1,0,0,0,4.1.7,6.1,6.1,0,0,0,2,2,6.1,6.1,0,0,0,.7,4.1,8.7,8.7,0,0,0,.1,6.9,44.8,44.8,0,0,0,0,11.7a44.8,44.8,0,0,0,.1,4.8,8.1,8.1,0,0,0,.6,2.8A6.1,6.1,0,0,0,2,21.3a6.1,6.1,0,0,0,2.1,1.3,8.7,8.7,0,0,0,2.8.6h9.5a8.1,8.1,0,0,0,2.8-.6,5.7,5.7,0,0,0,3.4-3.4,8.7,8.7,0,0,0,.6-2.8,44.8,44.8,0,0,0,.1-4.8,44.8,44.8,0,0,0-.1-4.8,8.1,8.1,0,0,0-.6-2.8A6.1,6.1,0,0,0,21.3,2,6.1,6.1,0,0,0,19.2.7,8.7,8.7,0,0,0,16.4.1Zm0,5.7a6,6,0,1,0,6,6A6,6,0,0,0,11.7,5.7Zm0,9.9a3.9,3.9,0,0,1,0-7.8,3.9,3.9,0,1,1,0,7.8ZM17.9,4.1a1.4,1.4,0,1,0,1.4,1.4A1.4,1.4,0,0,0,17.9,4.1Z"></path>
                        </svg>
                    </a>
                </div>                    
                <div class="o-group__item">
                    <a href="https://twitter.com/rootstudiouk" target="_blank" class="c-btn-social c-btn-social--twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.6 23.3">
                            <path d="M28.6,2.8a13.8,13.8,0,0,1-2.9,3.1v.7a17.2,17.2,0,0,1-1.1,5.9,17,17,0,0,1-3.2,5.4,16.5,16.5,0,0,1-5.2,3.9A16.1,16.1,0,0,1,9,23.3a15.9,15.9,0,0,1-4.8-.7,17.8,17.8,0,0,1-4.3-2H1.4a11.2,11.2,0,0,0,7.3-2.5,5.8,5.8,0,0,1-5.5-4.1H5.9a6,6,0,0,1-3.4-2A5.6,5.6,0,0,1,1.1,8.3h0l1.2.5,1.5.2a5.3,5.3,0,0,1-2-2A5.9,5.9,0,0,1,1.2,4a6.1,6.1,0,0,1,.8-3A16.6,16.6,0,0,0,7.3,5.4a15.8,15.8,0,0,0,6.8,1.8A5.2,5.2,0,0,1,13.9,6a6,6,0,0,1,1.7-4.2A6.1,6.1,0,0,1,17.5.5,5.6,5.6,0,0,1,19.8,0a5.5,5.5,0,0,1,2.4.5,6.8,6.8,0,0,1,1.9,1.3l2-.5L27.9.5a6.5,6.5,0,0,1-2.6,3.2L27,3.4Z"></path>
                        </svg>
                    </a>
                </div>        
                <div class="o-group__item">
                    <a href="https://dribbble.com/rootstudio" target="_blank" class="c-btn-social c-btn-social--dribbble">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.3 23.3">
                            <path d="M0,11.7A11.4,11.4,0,0,1,1.6,5.8,11.6,11.6,0,0,1,5.8,1.6,11.4,11.4,0,0,1,11.7,0a11.4,11.4,0,0,1,5.9,1.6,11.6,11.6,0,0,1,4.2,4.2,11.4,11.4,0,0,1,1.6,5.9,11.4,11.4,0,0,1-1.6,5.9,11.6,11.6,0,0,1-4.2,4.2,11.4,11.4,0,0,1-5.9,1.6,11.4,11.4,0,0,1-5.9-1.6,11.6,11.6,0,0,1-4.2-4.2A11.4,11.4,0,0,1,0,11.7Zm1.9,0a9.4,9.4,0,0,0,2.4,6.4,13.3,13.3,0,0,1,3.5-4.2,11.6,11.6,0,0,1,4.7-2.5L12,9.9a28.3,28.3,0,0,1-8.7,1.3H2v.5Zm.3-2.4H3.8a25.6,25.6,0,0,0,7.4-1A23.6,23.6,0,0,0,7.3,3,9.5,9.5,0,0,0,4.1,5.6,10,10,0,0,0,2.2,9.3ZM5.7,19.3a9.5,9.5,0,0,0,9.4,1.4A34.2,34.2,0,0,0,13.3,13a9.9,9.9,0,0,0-4.3,2.4A13.2,13.2,0,0,0,5.7,19.3ZM9.3,2.3a24.8,24.8,0,0,1,3.8,5.3,11.6,11.6,0,0,0,4.8-3.4,9.5,9.5,0,0,0-6.2-2.2A8.9,8.9,0,0,0,9.3,2.3Zm4.6,6.9.8,1.9,3.8-.2h2.9A9.4,9.4,0,0,0,19,5.4,11.5,11.5,0,0,1,13.9,9.2Zm1.4,3.5a33.5,33.5,0,0,1,1.6,7.1,9.7,9.7,0,0,0,3-3.1,9.4,9.4,0,0,0,1.4-4h-6Z"></path>
                        </svg>
                    </a>
                </div>           
                <div class="o-group__item">
                    <a href="https://linkedin.com/pub/tom-bradley/16/471/42" target="_blank" class="c-btn-social c-btn-social--linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.2 23.3">
                            <path d="M21.5,0H1.7A1.7,1.7,0,0,0,0,1.7v20a1.7,1.7,0,0,0,1.7,1.7H21.5a1.7,1.7,0,0,0,1.7-1.7V1.7A1.7,1.7,0,0,0,21.5,0ZM7,19.5H3.5V9H7ZM5.3,7.6h0a1.8,1.8,0,1,1,0-3.6,1.8,1.8,0,1,1,0,3.6Zm14.4,12H16.1V13.9c0-1.4-.5-2.4-1.8-2.4a1.9,1.9,0,0,0-1.8,1.3,2.4,2.4,0,0,0-.1.9v5.9H9S9,10,9,9h3.5v1.5a3.5,3.5,0,0,1,3.2-1.7c2.3,0,4,1.5,4,4.7Z"></path>
                        </svg>
                    </a>
                </div>            
              </div>
          </div>
        </div>
        </div>
    </div>
        </div>
      </footer>
</section>
  );
}


// const Contact=()=>{
//   return(
//   <section className="contacto" align="center">
//     <p align="center">CONTACT ME</p>
// 		<p align="center"></p>
// 		<div>
// 			<input id="nombre" type="text" placeholder="name" required/><br/>
// 			<input id="email" type="text" placeholder="Email Adress"/><br/>
// 			<input  id="numero" type="text" placeholder="Phone Number"/><br/>
// 			<input id="mensaje" type="text" placeholder="Message "/><br/>
// 			<button id="enviar">Send</button>
// 		</div>
//     </section>
// );
// }

export default Portada;