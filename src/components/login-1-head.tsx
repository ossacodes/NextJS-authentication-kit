import React from 'react';
import { Helmet } from 'react-helmet';

interface Login1HeadProps {
  title: string;
  description: string;
}

const Login1Head: React.FC<Login1HeadProps> = ({ title, description }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://example.com/page" />
        {/* You can add other head elements here */}
      </Helmet>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Login1Head;