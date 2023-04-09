import React from 'react'
import ReactDOM from 'react-dom'

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();
   
    return (
        <footer className="footer">
            <p>Copyright &Copyright {year}</p>
        </footer>
        
    )
}

export default Footer;