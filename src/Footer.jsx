import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5 bg-light">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col>
                       <h5>Dipesh Chaudhary</h5> 
                    </Col>
                    <Col className="d-flex justify-content-end" >
                        <h5>This site is made by Dipesh Chaudhary.</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;