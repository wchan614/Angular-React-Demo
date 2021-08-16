import React from "react";
import {Jumbotron, Carousel, Button, Accordion, Card} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import backup from "./assets/images/backup.png";
import synch from "./assets/images/synch.png";
import share from "./assets/images/share.png";
function Home() {
  return (
    <div className="home">
    <div className="container-home">

    <Carousel fade>
    <Carousel.Item interval={5000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="caption-description">
          <h3>Storage you can rely on.</h3>
          <p>99.999% uptime guaranteed with data backup provided regularly.</p>
        </div>
       
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={6000}>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <div className="caption-description">
          <h3>Quantum End-to-End Encryption</h3>
          <p>Data stored with latest encrpytion to provided maximum security.</p>
        </div>
    
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item interval={5500}>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
      <Carousel.Caption>
        <div className="caption-description">
          <h3>Transparent and Secure Integration</h3>
          <p>Easy automated synchonization between your network and any platform you use.</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

    <Jumbotron>
    <div className='container'>
      <h1 className="text-center">What we can do for you.</h1>
      <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="text-center">Privacy</div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <div className="text-center">
            End-To-End Post Quantum Encryption, we achieve actual privacy by design
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <div className="text-center">
          Powerful
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <div className="text-center">
            Cloud based service which can be used on any major devices and platforms from anywhere with Internet
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        <div className="text-center">  
          Secure
        </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <div className="text-center">
              Carefully engineered to achieve highest level of security to its users. 
            </div>
            </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
        <div className="text-center">
          Transparent
        </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
          <div className="text-center">
            Client apps are Public source. Its cryptographic architecture is specificed in a comprehensive Security Whitepaper.
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
        <div className="text-center">
          Reliable
        </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
          <div className="text-center">
            We own and operate redundant server infrastructures directly around the world, ensuring that your data always remains available.
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5">
        <div className="text-center">
          Generous
        </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
          <div className="text-center">
            We provide 3TB free storage for the first 5 years and ensure easy ways to expand and extend your free storage.
          </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    <br></br>
      <p className="text-center">
        <Button variant="outline-info">
          <Link className="nav-link" to="/products">
                  Learn More.
          </Link>
        </Button>
      </p>
    </div>
    </Jumbotron>
    
    <Jumbotron>
      <div className="container">
        <h1 className="text-center mb-4">What can you do?</h1>
        <p className="text-center">
          <div className="container-flex">
            <div className="row">
              <div className="col-sm">        
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={backup} className="p-5"/>
              <Card.Body>
                <Card.Title>Backup</Card.Title>
                <Card.Text>
                Automatically backup photos and videos from your mobile device with Camera Uploads, 
                and sync your computer data with our Desktop App. 

                Automatically maintains historic versions of your files, 
                allowing you to easily revert when needed.
                </Card.Text>
              </Card.Body>
              </Card>
              </div>

              <div className="col-sm">        
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={synch} className="p-5"/>
              <Card.Body>
                <Card.Title>Synchronize</Card.Title>
                <Card.Text>
                Easy automated synchronization between your computer and our app.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </Card.Text>
              </Card.Body>
              </Card>
              </div>

              <div className="col-sm">        
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={share} className="p-5"/>
              <Card.Body>
                <Card.Title>Share</Card.Title>
                <Card.Text>
                  Export securely keyed links to your files and folders, or share folders directly with your contacts on our App.
                  <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                </Card.Text>
              </Card.Body>
              </Card>
              </div>
            </div>
        </div>
        </p>
      </div>
    </Jumbotron>

   
    <br></br>
    </div>
  </div>
  );
}

export default Home;