import { useState } from "react";
import "./index.css";
import logo from "../../assets/navLogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="" />
        </div>


        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("hero")}>
            Home
          </button>

          <button onClick={() => scrollToSection("planets")}>
            Explore the Data
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
          <button onClick={() => scrollToSection("contact form")}>
            Contact <form action=""></form>
          </button>
        </div>
      </div>
      import{ useState } from 'react'
      import'./'index.css';
      export defalut function ContactForm() {
        const[success, setsucess]=useState('');
        const handleSubmit=(e)=> {
          e.preventDefault()
          const fullname=document.getElementbyid('fname').value;
           const email=document.getElementbyid('email').value;
           const phone=document.getElementbyid('tel').value;
           const message=document.getElementbyid('message').value;
           if(!fullname|| !email|| !phone|| !message){
            alert('Please fill all fields');
            try{
              //whitebricks.com/tsacademy.php
              const response = await fetch('whitebricks.com/tsacademy.php',) {
               method:'POST',
               headers:{
                'content-type':'application/json',{
            }
          if(response.ok){
           setsucess('Form submitted successfully');
           e.target.reset();
          } else {
            alert('Submission failed');
          } 
        } catch(console.error){
        alert('an error occurred');
        console.error(error);{
        }
     }
  );
}

export default Navbar;