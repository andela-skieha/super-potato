import React from 'react';

import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

const IndexPage = function IndexPage() {
  return (
    <div className="home">
      <div className="athletes-selector">
        {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
      </div>
    </div>
  );
};

module.exports = IndexPage;
