import React from 'react'
import { Link } from 'react-router-dom'

export const TodoList = ({ todolists }) => {
  return (
    <div>
      {todolists?.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/todo/${el.id}`}>
              <div>{el.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
