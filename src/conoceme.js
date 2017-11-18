import React, { Component } from 'react';
import './css/conoceme.css';
import { NavLink } from 'react-router-dom';
import { connect } from "redux-zero/react";


const Conoceme=()=>{
  return (
      <section>
          <div className="container-conoceme">
            <div className=" row row-conoceme" >
                <div className="col-md-6 row-conoceme-1">
                    <img src="http://fannymyard-design.com/static-99be6f2b892e54877b425708fe6d16d3/textures/common/covers/cover-andre-maelle.jpg" width="100%" />
                </div>
                <div className="col-md-6 row-conoceme-2">
                
                    <div className="about__wraper">
                      <div className="about__container">
                        <div>
                        <h3 class="about__heading">
                    Hola,Mi nombre es Evelyn <br/> Tengo 23 años,Soy de Ica.<br/>Egresada de Laboratoria,Bachiller en Ingenieria de Sistemas.
                        </h3>
                        </div>
                        <div class="about__description">
                        <p class="about__paragraph">
                        Me apasiona la tecnología y cómo a través de ella podemos dar distintas soluciones digitales a los problemas sociales del área de la salud, educación,economía.
                        </p>        
                        <p class="about__paragraph">           
                        </p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
  
      </section>
  );
}

export default Conoceme;