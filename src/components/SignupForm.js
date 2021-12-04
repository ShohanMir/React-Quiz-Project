import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [error, setError] = useState('');

  const [loading, setLoading] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError('Your confirm password does not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      navigate('/');
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to create an account!');
    }
  }

  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter your name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        required
        placeholder="Enter your email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Enter your password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        required
        text=" I agree to the terms &amp; conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <Button disabled={loading} type="submit">
        Submit Now
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account?
        <Link to="/login">Login</Link>
        instead.
      </div>
    </Form>
  );
}
