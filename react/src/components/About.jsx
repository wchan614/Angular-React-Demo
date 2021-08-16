import React from "react";
import {Jumbotron, Image} from "react-bootstrap";
import staff from "./assets/images/staff.jpg";

function About() {
  return (
    <div className="about">
      <div className="container-flex container-home">
        <Jumbotron className="text-center">
          <h1 className="mb-5">Cloud Storage - The Privacy Company</h1>
          <div className="container mb-n5">
            <p className="mt-2 text-left">
              Our core uses post-quantum end-to-end encrypted cloud storage and communication. In the future, we will continue to develop
              innovative products and features that complement its exisiting platform for both individuals and businesses to help them improve their security on the Internet
              without compromising on usability.
            </p>
          </div>
        </Jumbotron>
        <Jumbotron>
          <div className="container">
            <div className="row text-center">
              <div className="col-sm">
                <h1 className="large-heavy-font blue-font">222M+</h1>
                <p className="heavy-font">registered users</p>
              </div>
              <div className="col-sm">
                <h1 className="large-heavy-font blue-font">10M+</h1>
                <p className="heavy-font">daily active users</p>
              </div>
              <div className="col-sm">
              <h1 className="large-heavy-font blue-font">98B+</h1>
                <p className="heavy-font">files uploaded</p>
              </div>
              <div className="col-sm">
                <h1 className="large-heavy-font blue-font">200+</h1>
                <p className="heavy-font">countries have users with us</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <br></br>
        <div className="container-flex text-center">
          <Image src={staff} alt="picture of our staff" fluid></Image>
        </div>

        <Jumbotron className="text-center">
          <div className="container">
          <h1 className="m-3">Our History</h1>
          <p className="text-left pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in iaculis velit, vel molestie purus. Aliquam dignissim at ligula ut suscipit. Aenean condimentum diam leo, ut egestas nunc molestie in. Duis sed rhoncus erat, eu venenatis enim. Sed et auctor nunc. Quisque ornare luctus dolor, eu ultrices mi tempor ac. Donec feugiat sodales quam, et dapibus lacus malesuada sit amet. Mauris quis cursus mi, quis fermentum ligula. Aliquam at ante tincidunt, sagittis felis at, convallis mi. Phasellus at posuere magna. Curabitur cursus aliquet magna.
          </p>
          <p className="text-left">
          Nullam feugiat, metus at tempor pellentesque, mauris libero cursus felis, in aliquam leo nisl eu lacus. Nulla sit amet nisi eu lacus scelerisque convallis. Morbi suscipit turpis sit amet lorem vehicula, vel posuere nulla ullamcorper. Phasellus nec dolor lacus. Proin ultrices libero eget ultricies hendrerit. Sed ornare et mauris nec semper. Morbi fringilla felis vel lacinia euismod. Mauris luctus eget erat sit amet bibendum.
          </p>
          <p className="text-left">
          Nam ut suscipit velit, non interdum orci. Vivamus vulputate, lorem varius luctus luctus, turpis justo sodales justo, ac fringilla magna magna quis mi. Morbi scelerisque metus a fermentum suscipit. Nunc sollicitudin, est eget efficitur ultricies, ligula eros dictum lacus, quis commodo nibh erat at sem. Nulla ullamcorper vehicula urna, in rutrum leo suscipit vel. Ut quis commodo nunc, non feugiat leo. Nam nec rutrum quam, vitae mollis orci. 
          </p>
          <p className="text-left">
          Donec ex ante, finibus quis vitae, gravida faucibus justo. Nulla sodales venenatis mi, varius tempus tellus suscipit eu. Praesent tempus pellentesque mi in aliquet. Pellentesque interdum eget nunc non ultrices.
          </p>
          </div>
        </Jumbotron>
        <br></br>

      </div>
    </div>
  );
}

export default About;