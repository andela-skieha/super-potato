import React from 'react';
import { Link } from 'react-router';

const AthletePreview = function AthletePreview(props) {
  return (
    <Link to={`/athlete/${props.id}`}>
      <div className="athlete-preview">
        <img alt="athlete" src={`img/${props.image}`} />
        <h2 className="name">{props.image}</h2>
        <span className="medals-count">
          <img alt="medals" src="/img/medal.png" />
          {props.medals.length}
        </span>
      </div>
    </Link>
  );
};

AthletePreview.propTypes = {
  id: React.PropTypes.string,
  image: React.PropTypes.string,
  medals: React.PropTypes.instanceOf(Array),
};

module.exports = AthletePreview;
