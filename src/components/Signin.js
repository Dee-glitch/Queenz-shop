import { useState } from 'react';
import { signInWithGoogle } from '../firebase';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
  };

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setCredentials({ ...userCredentials, [name]: value });
  // };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Button className="w-100 mt-2" type="submit">
                Sign In
              </Button>
              <Button
                className="w-100 mt-2"
                type="submit"
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Signin;
