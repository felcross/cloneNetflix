import React from 'react'
import './style.css'

export default ({black})=>{

   return(
            <header className={black ? 'black':''}>
              <div className='headerlogo'>
              <a href='/'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
              </a>
              </div>
              <div className='headeruser'>
                <a href='/'>
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
                </a>

              </div>


            </header>         
 

   )



}