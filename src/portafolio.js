import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/inicio.css';

import {Grid, Row, Col, Carousel, Navbar, Nav, NavItem, Media, ProgressBar, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';
const Portafolio = () => 
{
  return (
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
    <div>
    <div className="container-carrusel">    
    <Row className="container-carrusel-row">
      <Col xs={11} xsOffset={1} md={10} mdOffset={1}>
        <h3 className=""></h3>
      </Col>
    </Row>
    <Row>
      <Col xs={12} xsOffset={0} md={10} mdOffset={1}>
        <h3 className=""></h3>
      </Col>
    </Row>
    <Row>
      <Col xs={11} xsOffset={1} md={10} mdOffset={1}>
    <Carousel>
      <Carousel.Item>
        <a href=""><img alt="900x500" src="https://assets.awwwards.com/awards/sites_of_the_day/2017/10/andre-ribeiro-1.jpg"/></a>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href=""><img  alt="900x500" src="https://assets.awwwards.com/awards/sites_of_the_day/2017/10/andre-ribeiro-1.jpg"/></a>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href=""><img  alt="900x500" src="https://assets.awwwards.com/awards/sites_of_the_day/2017/10/andre-ribeiro-1.jpg"/></a>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </div>
  </div>
  </section>
  );
}

export default Portafolio;