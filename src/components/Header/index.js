import React , {useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button,Modal} from 'react-bootstrap'
import './style.css';
function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
 
    <div>

{/* modal start here */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
{/* modal ends here */}


{/* navbar starts from here */}

<Navbar className="navbar"  sticky="top" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link onClick={handleShow}>Active</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>
{/* navbar ends here */}
    </div>
  )
}

export default Header
