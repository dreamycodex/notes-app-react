import React from 'react' 
import "./Header.css";

export const Header = () => {
  return (
    <header className="d-flex align-center gap-sm">
        <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/4021/4021693.png" alt="logo"/>
        <h1 className="h1">Smart Notes App</h1>
    </header>
  )
}

 