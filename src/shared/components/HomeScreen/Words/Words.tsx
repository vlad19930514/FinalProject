import React from 'react';

import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'

interface IWordsProps {}

const Words: React.FC<IWordsProps> = () => {
  return (
    <div>
    <NavLink to="/editwords" activeClassName="selected">
              редактор слов
    </NavLink>

    <NavLink to="/trainings" activeClassName="selected">
              Тренировка
    </NavLink>
    </div>
  );
};

export default Words;
