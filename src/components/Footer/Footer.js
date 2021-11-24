import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
        <div className="wrapper">
      <div className="icon instagram">
        <div className="tooltip">instagram</div>
        <span>
          <a href='https://www.instagram.com/nejah_neji/'><i className="fab fa-instagram"></i></a>
        </span>
      </div>
      <div className="icon github">
        <div className="tooltip">Github</div>
        <span>
          <a href='https://github.com/nejahneji'><i className="fab fa-github"></i></a>
        </span>
      </div>
      <div className="icon facebook">
        <div className="tooltip">Facebook</div>
        <span>
          <a href='https://www.facebook.com/nejahneji23'><i className="fab fa-facebook"></i></a>
        </span>
      </div>
      
      <div className="icon linkedin">
        <div className="tooltip">Linkedin</div>
        <span>
         <a href='https://www.linkedin.com/in/nejah-neji-2b97b7215/'><i className="fab fa-linkedin"></i></a> 
        </span>
      </div>
    </div>
        </footer>
    )
}

export default Footer
