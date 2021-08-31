/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';


const SEO = (props) => {
  const {
    title,
    metaDesc,
    metaKeywords,
  } = props;

  const {
    wp: { generalSettings: settings },
    site: {
      siteMetadata: { siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          language
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: 'en-US',
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={metaDesc} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
    </Helmet>
  );
};

export default SEO;