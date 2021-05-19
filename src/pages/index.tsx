import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../constants";

const indexPage: React.VFC = () => (
  <section>
    <h1>Top page</h1>
    <ul>
      {PAGES.map((page) => (
        <li key={page.name}>
          <Link to={`/${page.name}`}>{page.name}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default indexPage;
