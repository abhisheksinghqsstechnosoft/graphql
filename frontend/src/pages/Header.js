
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'

function NavScrollExample ()
{
    return (
        <>

            <Navbar bg="primary" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">AdminBoard</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />

        </>
    );
}

export default NavScrollExample;