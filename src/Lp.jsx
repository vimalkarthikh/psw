import React from 'react'
import { Link } from 'react-router-dom'

function Lp() {
  return (
    <div>
      <img src="./image/pp1.png" alt="lp" className='lpimg'/>
      <div className="lpjc">
      <div class="card border-secondary mb-3 dlp" >
         <div class="card-body text-secondary">
         <h5 class="card-title">About Personal Space</h5>
         <p class="card-text ctn">A personal diary is meant to be private and is typically
          not shared with others. It is a safe and confidential space for individuals to express themselves without fear of judgment.
          <ul>
            <li>Writing in a diary allows you to reflect on your thoughts, feelings, and experiences</li>
            <li>Journaling can help you work through problems and find solutions.</li>
            <li>Keeping a diary can help you improve your communication skills, as you practice articulating your thoughts and feelings</li>
            <li>Expressing your emotions in a diary can be a form of emotional release, which can help reduce stress and promote mental well-being.</li>
            <li>It's a way to reinforce what you've learned or experienced.</li>
            <li>Over time, diary writing can lead to self-discovery. </li>
          </ul>
         </p>
  </div>
</div>
<div class="card mb-3 dlp">
  <h2>Get Started !</h2>

  <Link to='/login' className='btn btn-outline-dark  lpbtn'>Login</Link>
  <Link to='/register' className='btn btn-primary  lpbtn'>Sign Up</Link>
</div>
      </div>
    </div>
  )
}

export default Lp