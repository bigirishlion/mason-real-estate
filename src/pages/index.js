import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import '../assets/scss/main.scss'
import Header from "../components/Header"
import Footer from '../components/Footer';
import Main from '../components/Main';

const IndexPage = () => {
  const [timeoutId, setTimeoutId] = useState(0);
  const [timeout, setTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    setTimeoutId(setTimeout(() => {
      setLoading('');
  }, 100));
  
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
    }
    }
  }, [])
  

  const handleOpenArticle = (article) => {
    setIsArticleVisible((prevIsArticleVisible) => !prevIsArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeout(true);
    }, 325)

    setTimeout(() => {
      setArticleTimeout((prevArticleTimeout) => !prevArticleTimeout);
    }, 350)

  }

  const handleCloseArticle = () => {
    setArticleTimeout((prevArticleTimeout) => !prevArticleTimeout);

    setTimeout(() => {
      setTimeout(false);
    }, 325)

    setTimeout(() => {
      setIsArticleVisible((prevIsArticleVisible) => !prevIsArticleVisible);
      setArticle('');
    }, 350)

  }
  
  return (
    <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
        <Main
          isArticleVisible={isArticleVisible}
          timeout={timeout}
          articleTimeout={articleTimeout}
          article={article}
          onCloseArticle={handleCloseArticle}
        />
        <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
  )
}

export default IndexPage

export const Head = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return <title>{data.site.siteMetadata.title}</title>
}
