import React from 'react';

const typeMap = {
  G: 'Gold',
  S: 'Silver',
  B: 'Bronze',
};

const Medal = function Medal(props) {
  return (
    <li className="medal">
      <span className={`symbol symbol-${props.type}`} title={typeMap[props.type]}>{props.type}</span>
      <span className="year">{props.year}</span>
      <span className="city">{props.city}</span>
      <span className="event">({props.event})</span>
      <span className="category">{props.category}</span>
    </li>
  );
};

Medal.propTypes = {
  type: React.PropTypes.string,
  year: React.PropTypes.string,
  event: React.PropTypes.string,
  city: React.PropTypes.string,
  category: React.PropTypes.string,
};

module.exports = Medal;
