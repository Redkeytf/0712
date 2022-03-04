import React from 'react'
import "./header.css"
import Elon from "./elon.png"

export default function Header() {
  return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={Elon} alt=""/>
        </div>
  )
}