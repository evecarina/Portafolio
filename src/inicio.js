import React, { Component } from 'react';
import './inicio.css';
import { NavLink } from 'react-router-dom';
import { connect } from "redux-zero/react";

const BarraNav = () => {   
  return(  
     
      <nav class="navbar navbar-default">
        <div class="container-fluid">        
          <ul class="nav navbar-nav">         
            <li className="col-md-4 col-xs-4"><a href="#">Page 1</a></li>
            <li className="col-md-4 col-xs-4"><a href="#">Page 2</a></li>
            <li className="col-md-4 col-xs-4"><a href="#">Page 3</a></li>
          </ul>
        </div>     
    </nav>   
    
 
    );   
}
const Portada=()=>{
  return(
  <div className=" container-fluid portada">
    <div className="portada-name">
      <p>EVELYN GUEVARA <br/>
      FROND-END DEVELOPER
      </p>
    </div>
</div> 
  );

}
const About=()=>{
 

}
const Contact=()=>{
  return(
  <section class="contacto">
    <p align="center">CONTACT ME</p>
		<p align="center"></p>
		<div>
			<input id="nombre" type="text" placeholder="name" required/><br/>
			<input id="email" type="text" placeholder="Email Adress"/><br/>
			<input  id="numero" type="text" placeholder="Phone Number"/><br/>
			<input id="mensaje" type="text" placeholder="Message "/><br/>
			<button id="enviar">Send</button>
		</div>  
    <div id="loc2">
    <div>
				<p>3481 Melrose Place <br/>
				Bervely Hills,Ca902010</p>
		</div>
    </div>  
    <div id="loc2_img">
        <a href="https://www.instagram.com/"><img src="https://github.com/evecarina/freeelancer/blob/master/assets/images/in.png"/></a>
				<a href="https://twitter.com/"><img src="https://raw.githubusercontent.com/evecarina/freeelancer/master/assets/images/twiter.png"/></a>
				<a href="gmail.com"><img src="https://raw.githubusercontent.com/evecarina/freeelancer/master/assets/images/gmail.png"/></a>
				<a href="https://www.facebook.com/"><img src="https://raw.githubusercontent.com/evecarina/freeelancer/master/assets/images/face.png"/></a>
    </div>
     
  </section>
);
}

const App=()=>{
  return(
    <div className="barranav">
      <BarraNav/>,
      <Portada/> 
      <Contact/>    
    </div>    
  );
}
export default App;