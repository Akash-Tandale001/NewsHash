import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const Newsfetch = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalresult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);

 
  useEffect(() => {
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let res = await fetch(url);
        let data = await res.json();
        setArticles(data.articles);
        setTotalResult(data.totalresult);
        setLoading(false);
      };
    updateNews();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  const fetchmore = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    setArticles(articles.concat(data.articles));
    setTotalResult(data.totalresult);
    setLoading(false);
  };

  return (
    <div>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchmore}
        hasMore={articles.length !== totalresult}
        loader={<Spinner />}>
        <div className="container" style={{ marginTop: "100px" }}>
          <h1 className="text-center">Welcome to News-Hash</h1>
          <div className="row">
            {articles.map((info) => {
              return (
                <div className="col-md-3" key={info.url}>
                  <Newscard title={info.title ? info.title : ""} description={info.description ? info.description : ""} imageurl={info.urlToImage} newsurl={info.url} author={info.author} date={info.publishedAt}/>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};



export default Newsfetch;
