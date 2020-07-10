import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbnail from './../components/Thumbnail';
import Image from 'react-bootstrap/Image';
import illustrations from './../illustrations';

class Work extends Component {
  

  render(){

    // create the illustrations array
    // for every illustration, create a thumbnail with props
    const illustrationsArr = illustrations.map(illustration => 
      <Thumbnail
        id={illustration.id} 
        src={illustration.src}
        alt={illustration.alt}
      />
    );

    return(
      <Container>

          <Navbar />
        
        <Row>
          <Col>
            <p className="Work-header">Illustrations</p>
            
            {/* render the illustrations array */}
            {illustrationsArr}
            
            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail className="Work-image" />
            </a>

            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail className="Work-image" />
            </a>

            <a href="https://randomuser.me/api/portraits/men/88.jpg">
              <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail className="Work-image" />
            </a>
          </Col>

          <Col>
            <p className="Work-header">Graphic Design</p>
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Work;

// sample column
/* <Col xs={3} md={2}>
  <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
</Col> */