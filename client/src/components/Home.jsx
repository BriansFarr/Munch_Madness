import React from 'react'
import "../css/Home.css"

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Munch Madness</h1>
      <h3>Munch Madness is a Fast-Food Social Media Site. Create and Rate Fast Food Items. Save Items to Favorites. Compete in our Community events. </h3>
      <p>Sign up for our community events</p>
      <h2>Competitions:</h2>
      <ul className="list">
        <li>MunchMadness Tournament of CHOMP-ions</li>
        <li>The Bang-Bang</li>
        <li>Value Menu Minute</li>
      </ul>
    </div>
  )
}
