import React, { Component } from 'react';
import './inicio.css';
import { NavLink } from 'react-router-dom';
import { connect } from "redux-zero/react";

const BarraNav = () => {   
  return(       
      <nav className="navbar navbar-default">
        <div className="container-fluid">        
          <ul className="nav navbar-nav">         
            <li className="col-md-4 col-xs-4"><a href="#">Conoceme</a></li>
            <li className="col-md-4 col-xs-4"><a href="#">Portafolio</a></li>
            <li className="col-md-4 col-xs-4"><a href="#">Contacto</a></li>
          </ul>
        </div>     
    </nav>      
     );   
}
const About=()=>{
  return (
      <section>
      <header class="c-header u-double-down">
        <h1 class="c-header__title js-greeting">
            Well hello there,
        </h1><br/>
        <h1 class="c-header__title">
            make yourself at home
        </h1>
    </header>

    <div class="o-duo o-duo--limit">
        <div class="o-duo__item">
            <p class="c-lead c-lead--sm">
                We’re a graphic and web design agency working with clients worldwide to deliver unforgettable projects that take established brands to new heights and launch ambitious start-ups towards their goals.
            </p>
        </div>
        <div class="o-duo__item is-quarantine">
            <p>Our team of award winning designers, developers and problem solvers have brought energy and personality to brands of all shapes and sizes over the last 10 years. From branding to print, web design and illustration; our diverse services allow a single point of contact for all your design needs. &nbsp;</p>
<p>
</p>
<p>We like to build close relationships with our clients, priding ourselves on offering the very best customer service with <em>honesty</em>&nbsp;and <em>reliability</em> as valued in our studio as <em>creativity</em> and <em>innovation</em>.</p>
        </div>
    </div>
      </section>
  );
}
const Portada=()=>{
  return(
    <section className="contportada">
      <div id="start" align="center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMyJI3SIy1AqnBS4XUSg-t5DsxgEW2dm1q0aoASOtaDY75RcC" alt=""/>
        <p>Evelyn Guevara</p>
        <p>Frond-End Developer </p>
      </div>
    </section>
  );
}
const Portafolio=()=>{
  return( 
  <section className="portafolios" >
  <p align="center">PORTFOLIO</p>
  <div align="center">
  <div>
  <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
  </div>
  <div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbh35YAoVjAH_39WGnrbi4lkYpx3AfcpsOKAJ7O5wVlZzb7VRY" alt=""/></div>
  </div>
  </div>

</section>
);
}

const Contact=()=>{
  return(
  <section className="contacto" align="center">
    <p align="center">CONTACT ME</p>
		<p align="center"></p>
		<div>
			<input id="nombre" type="text" placeholder="name" required/><br/>
			<input id="email" type="text" placeholder="Email Adress"/><br/>
			<input  id="numero" type="text" placeholder="Phone Number"/><br/>
			<input id="mensaje" type="text" placeholder="Message "/><br/>
			<button id="enviar">Send</button>
		</div>
    </section>
);
}

const App=()=>{
  return(
    <div className="barranav">
      <BarraNav/>
      <Portada/>
      <About/>
     <Portafolio/>
      <Contact/>    
    </div>    
  );
}
export default App;
