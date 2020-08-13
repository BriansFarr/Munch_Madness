import React from 'react';
import { Route } from 'react-router-dom';

export default function Main() {
  return (
    <main>
      <Route path= '/login' component={Login}/>
    </main>
  )
}
