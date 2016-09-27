/* eslint-disable arrow-body-style */

import React from 'react';
import { Link } from 'react-router';

import athletes from '../data/athletes';

const AthletesMenu = function AthletesMenu() {
  return (
    <nav className="athletes-menu">
      {athletes.map((menuAthlete) => {
        return (
          <div className="container">
            <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
              {menuAthlete.name}
            </Link>
          </div>
      );
      })}
    </nav>
  );
};

module.exports = AthletesMenu;
