import React from 'react'
import "../css/Home.css"

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Munch Madness</h1>
      <p>Sign up for our community events</p>
      <h2>Competitions:</h2>
      <ul>
        <a href="/">MunchMadness Tournament of CHOMP-ions</a>
        <a href="/">The Bang-Bang</a>
        <a href="/">Value Menu Minute</a>
      </ul>
    </div>
  )
}
