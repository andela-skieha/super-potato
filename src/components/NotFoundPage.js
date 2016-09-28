import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/">Back to main page</Link>
      </p>
    </div>
  );
};

module.exports = NotFoundPage;
