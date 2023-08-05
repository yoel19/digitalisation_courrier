import React from 'react'
import'./style.css'

export default function Connexion() {
  return (
    <div>
        <div className='form'>
        <form className= "all.form">
          <div class='text-3xl'>
            <h1>Connectez Vous</h1>
          </div>
        
            <div classe="form-group"> 
                <label  for=" exampleInputEmail"> Email:</label>
                <input
                 type='email'
                 class="form-control" 
                />
            </div>
            <div  classe="form-group">
                <label for=" exampleInputPassword1">Mot de passe:</label>
                <input 
                type='password'
                class="form-control"


                />
            </div>
            <br/>
            <button type="submit" classe= "bg-slate-900 ">
              Se Connecter{ " "}
            </button>
            
        </form>
        </div>
        
    </div>
  )
}
