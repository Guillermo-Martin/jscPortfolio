import React from 'react';
import Navbar from './../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Work() {
  return (

      <Container>

        <div>
          <Navbar />
        </div>
        

        <Row>
          <Col>
            <p>Illustrations</p>
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
          </Col>

          <Col>
            <p>Graphic Design</p>
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            {/* <Col xs={3} md={2}> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            {/* </Col> */}
            <Image src="https://randomuser.me/api/portraits/men/88.jpg" thumbnail />
            
          </Col>
        </Row>

      </Container>
    
  )
}

export default Work;