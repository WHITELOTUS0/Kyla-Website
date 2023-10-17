// SignUpLogin.js
import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './SignUpLogin.css'; // Importing CSS file for styling

const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const validateForm = () => {
    if (!email || !password) {
      setError('Email and Password are required');
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setError("");
      setLoading(true);
      // Here, you'd make a call to your backend service depending on the action
      if(isLogin) {
        // Perform login operation
      } else {
        // Perform signup operation
      }
      history.push("/"); // Navigate to home page after successful operation
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="signup-login-form">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            {!isLogin && (
              <Form.Group id="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </Form.Group>
            )}
            <Button disabled={loading} className="w-100" type="submit">
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUpLogin;

