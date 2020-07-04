import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h3>oops! it's a dead end</h3>
        <Link to="/" className="btn">
          back to home
        </Link>
      </main>
    </Layout>
  );
};

export default Error;
