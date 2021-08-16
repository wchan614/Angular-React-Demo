import React from "react";
import {Jumbotron, Tooltip, Button, OverlayTrigger, Card} from 'react-bootstrap';

// use cards as components for project
function Products() {
  return (
    <div className="products container-home">
      <Jumbotron className="dark-banner text-center">
        <h1 className="m-4">Looking for the best cloud storage on the market?</h1>
        <h2 className=" m-4">Look no further!</h2>

        <p className="mt-2">Take full advantage of our cloud storage with a Pro account.</p>
        <p>Get 40TB free for a year if you purchase a Pro plan.</p>
      </Jumbotron>

      <Jumbotron>
        <div className="container-fluid text-center"> 

        <Card 
        border="dark"
        style={{ width: '18rem', display: 'inline-block', height: '700px' }} className="m-2 align-top">
          <Card.Body>
            <Card.Title>Pro Lite</Card.Title>
            <Card.Text >
                <div style={{height: "120px"}}>
                  Get started with secure file storage
                </div>


                <p style={{fontSize: "1.3em"}}>
                  $8/month
                </p>
            </Card.Text>
            <Button variant="outline-dark">Get Pro Lite</Button>
            <div style={{height: "200px", fontSize: "0.9em"}} className="mt-5">

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>1TB Storage</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top1"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip1"}>
                      1TB Storage in total.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>4TB Transfer</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top2"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip2"}>
                    4 TB transfer quota per month.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Share easily and privately
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top3"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip3"}>
                    Share folders easily knowing all data will remain private.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Send large files securely
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top4"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip4"}>
                    Send large files to anyone, even if they don't own an account.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Auto back-up
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top5"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip5"}>
                   Back up any device automatically with our centralised and secure solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  File versioning
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    We will save/keep your older versions when you upload new ones.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Private team messaging
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    Ensure your messages, shared files and audio/video calls remain private with our end-to-end quantum encryption.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Secure video conferencing
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top7"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip7"}>
                   Easily collaborate using our P2P private audio and video conferencing solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Custom rubbish bin cleaner
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top8"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip8"}>
                  Set your own rubbish bin clearing schedule to suit your own needs.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


            </div>
          </Card.Body>
        </Card>

        <Card
        border="dark"
        style={{ width: '18rem', display: 'inline-block', height: '700px' }}  className="m-2 align-top">
          <Card.Body>
            <Card.Title>Pro I</Card.Title>
            <Card.Text>
                <div style={{height: "120px"}}>
                  Great value for secure cloud storage, sharing and communication.
                </div>
                <p style={{fontSize: "1.3em"}}>
                  $15/month
                </p>
            </Card.Text>
            <Button variant="outline-success">Get Pro I</Button>
            <div style={{height: "200px", fontSize: "0.9em"}} className="mt-5">

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>4TB Storage</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top1"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip1"}>
                      4TB Storage in total.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>8TB Transfer</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top2"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip2"}>
                    8 TB transfer quota per month.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Share easily and privately
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top3"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip3"}>
                    Share folders easily knowing all data will remain private.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Send large files securely
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top4"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip4"}>
                    Send large files to anyone, even if they don't own an account.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Auto back-up
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top5"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip5"}>
                   Back up any device automatically with our centralised and secure solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  File versioning
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    We will save/keep your older versions when you upload new ones.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Private team messaging
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    Ensure your messages, shared files and audio/video calls remain private with our end-to-end quantum encryption.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Secure video conferencing
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top7"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip7"}>
                   Easily collaborate using our P2P private audio and video conferencing solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Custom rubbish bin cleaner
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top8"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip8"}>
                  Set your own rubbish bin clearing schedule to suit your own needs.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


            </div>      
          </Card.Body>
        </Card>

        <Card
        border="dark"
        style={{ width: '18rem', display: 'inline-block', height: '700px' }}  className="m-2 align-top">
          <Card.Body>
            <Card.Title>Pro II</Card.Title>
            <Card.Text>
            <div style={{height: "120px"}}>
              Rest easy knowing you have plenty of secure cloud storage.
              </div>
              <p style={{fontSize: "1.3em"}}>
                $27/month
              </p>
            </Card.Text>
            <Button variant="outline-success">Get Pro II</Button>
            <div style={{height: "200px", fontSize: "0.9em"}} className="mt-5">

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>9TB Storage</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top1"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip1"}>
                      9TB Storage in total.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>18TB Transfer</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top2"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip2"}>
                    18 TB transfer quota per month.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Share easily and privately
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top3"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip3"}>
                    Share folders easily knowing all data will remain private.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Send large files securely
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top4"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip4"}>
                    Send large files to anyone, even if they don't own an account.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Auto back-up
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top5"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip5"}>
                   Back up any device automatically with our centralised and secure solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  File versioning
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    We will save/keep your older versions when you upload new ones.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Private team messaging
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    Ensure your messages, shared files and audio/video calls remain private with our end-to-end quantum encryption.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Secure video conferencing
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top7"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip7"}>
                   Easily collaborate using our P2P private audio and video conferencing solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Custom rubbish bin cleaner
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top8"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip8"}>
                  Set your own rubbish bin clearing schedule to suit your own needs.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


            </div>
          </Card.Body>
        </Card>

        <Card 
        border="dark"
        style={{ width: '18rem', display: 'inline-block', height: '700px' }}  className="m-2 align-top">
          <Card.Body>
            <Card.Title>Pro III</Card.Title>
            <Card.Text>
            <div style={{height: "120px"}}>
            Rest even easier (and store even more!) with our premium secure cloud storage offering.
            </div>
            <p style={{fontSize: "1.3em"}}>
              $40/month
            </p> 
            </Card.Text>
            <Button variant="outline-warning">Get Pro III</Button>
            <div style={{height: "200px", fontSize: "0.9em"}} className="mt-5">

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>25TB Storage</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top1"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip1"}>
                      25TB Storage in total.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  <b>40TB Transfer</b>
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top2"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip2"}>
                    40 TB transfer quota per month.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Share easily and privately
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top3"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip3"}>
                    Share folders easily knowing all data will remain private.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Send large files securely
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top4"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip4"}>
                    Send large files to anyone, even if they don't own an account.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Auto back-up
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top5"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip5"}>
                   Back up any device automatically with our centralised and secure solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  File versioning
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    We will save/keep your older versions when you upload new ones.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                  Private team messaging
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top6"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip6"}>
                    Ensure your messages, shared files and audio/video calls remain private with our end-to-end quantum encryption.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>

              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Secure video conferencing
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top7"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip7"}>
                   Easily collaborate using our P2P private audio and video conferencing solution.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


              <div className="row m-n3 ml-n4">
                <div className="col m-3 text-left">
                Custom rubbish bin cleaner
                </div>
                <OverlayTrigger
                  className="col"
                  key={"top8"}
                  placement={"top"}
                  overlay= 
                  {<Tooltip id={"tooltip8"}>
                  Set your own rubbish bin clearing schedule to suit your own needs.
                  </Tooltip>}>
                    <div className="m-3">
                    🛈
                    </div>
                </OverlayTrigger>
              </div>


            </div>
          </Card.Body>
        </Card>



        </div>
      </Jumbotron>

      

    <br>
    </br>
    </div>
  );
}

export default Products;