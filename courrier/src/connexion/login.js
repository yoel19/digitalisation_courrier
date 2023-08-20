import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import IMAGE from '../image'
import '@fontsource/inter';
import Button from '@mui/joy/Button';
import { apiUrl } from '../config';

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: {
        email: '',
        password: ''
      }
    })
      .then((response) => response.json())
      .then(() => {
      });

    navigate("/dashboard/navbar")
  }

  return (
    <div className='sign-in-page'>
      <div className='signin-image' >


        <img className='auth-image' style={{ maxWidth: '65%', maxHeight: '100%' }} src={IMAGE.imgOne} alt="" />

        <br></br>

      </div>
      <div style={{ width: '50%' }} className='form'>
        <form className="all.form" onSubmit={handleSubmit}>
          <div class='text-3xl'>
            <h1>Connectez Vous</h1>
          </div>

          <div classe="form-group">
            <label for=" exampleInputEmail"> Email:</label>
            <input
              type='email'
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div classe="form-group">
            <label for=" exampleInputPassword1">Mot de passe:</label>
            <input
              type='password'
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <Button type="submit">Connexion</Button>

        </form>
      </div>

    </div>
  );
};
