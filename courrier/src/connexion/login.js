import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import IMAGE from '../image'

export default function Connexion() {
  const navigate = useNavigate()
  const connect = () => {
    navigate("/dashboard/navbar")
  }

  return (
    <div className='sign-in-page'>
      <div className='signin-image' >


        <img className='auth-image' style={{ maxWidth: '100%', maxHeight: '100%' }} src={IMAGE.imgOne} alt="" />

        <br></br>

      </div>
      <div style={{ width: '50%' }} className='form'>
        <form className="all.form" onSubmit={connect}>
          <div class='text-3xl'>
            <h1>Connectez Vous</h1>
          </div>

          <div classe="form-group">
            <label for=" exampleInputEmail"> Email:</label>
            <input
              type='email'
              class="form-control"
            />
          </div>
          <div classe="form-group">
            <label for=" exampleInputPassword1">Mot de passe:</label>
            <input
              type='password'
              class="form-control"


            />
          </div>
          <br />
          <button type="submit" classe="bg-slate-900 ">
            Se Connecter{" "}
          </button>

        </form>
      </div>

    </div>
  )
}
