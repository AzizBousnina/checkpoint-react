import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import BTN from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  return ( 
    <div className="App">
      {/* NAVBAR */}
<Navbar className='nav' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <img src='https://help.unicef.org/themes/custom/unicef_bs3/logo.svg' alt='pic' />
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Activities</Nav.Link>
              <Nav.Link href="#pricing">Contact us</Nav.Link>
              <div className='txt'>
              <h2>|     pour chaque enfant</h2>
              </div>
            </Nav>
          </Container>
        </Navbar>



  
  
                {/* FORMS */}
              

  <div className='sign'>
    <h2>Donate now</h2>
  <h6>Join UNICEF in doing whatever it takes to <br/> save and protect the world’s most <br/> vulnerable children. </h6>
  <div className='first'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='email'>First Name :</Form.Label>
          <Form.Control className='em' type="email" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='email'>Last Name :</Form.Label>
          <Form.Control className='em' type="email" />
        </Form.Group>
      
  </div>
  <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='email'>Email address :</Form.Label>
          <Form.Control className='em' type="email" placeholder="name@example.com" />
        </Form.Group>
        </Form>
  <Form>
  
        <Form.Label className='pass' htmlFor="inputPassword5">Password :</Form.Label>
        <Form.Control className='pa'
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          <p className='mdp'>Your password must be 8-20 characters long,contain letters and numbers</p>
        </Form.Text>
        </Form>
    <br/>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='mobile'>Mobile number :</Form.Label>
          <Form.Control className='phone' type="email" />
        </Form.Group>
   
   

    <BTN>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Oui, je souhaite être informé(e) par téléphone du travail formidable accompli par l’UNICEF en faveur des enfants à travers le monde et de la manière dont je peux aider, si cette option est disponible dans ma région.`}
          />
        </div>
      ))}
    </BTN>
    <div className="mb-2">
        <Button variant="primary" size="lg">
          DONATE NOW
        </Button>{' '}
        </div>




</div>
  
</div>



  );
}

export default App;

