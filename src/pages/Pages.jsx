import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Editpages } from './Editpages'
import { Home } from './Home'
import { SingleTodo } from './SingleTodo'

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
        <Route path="/todo/:id/edit" element={<Editpages />} />
      </Routes>
    </div>
  );
}
