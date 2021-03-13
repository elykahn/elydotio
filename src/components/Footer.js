import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h3 className="taCenter">
      find me{' '}
      <a href="https://instagram.com/creativ_ely_io/">insta</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://ely.io/">ely kahn</a>.
        </span>
      </div>
    </footer>
  </div>
)
