import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const TextLinkExample = () => {
return (

<Container className='nav'>
 <Navbar expand="lg" variant="light" bg="light">
  <Container>
  <Navbar.Brand >Logo</Navbar.Brand>
 </Container>
 </Navbar>
</Container>
);
}