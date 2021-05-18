import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pages: React.ComponentClass[]
}

const indexPage: React.FC<Props> = ({ pages }) => (
  <section>
    <h1>Top page</h1>
    <ul>
      {pages.map((page) => (
        <li key={page.name}>
          <Link to={`/${page.name}`}>{page.name}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default indexPage;
