import React, { useEffect, useState } from "react";
import Body from "./Body";

const Updateitem = ({ Category }) => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-02&sortBy=publishedAt&apiKey=41f25e1155e94453a7300b3af2669f14 `;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles))
      .catch((error) => console.error("error fetching data:", error));
  }, [Category]);
  return (
    <div>
      <h2 className="textCenter m-3 text-light">
        Daily <span className="text-bg-danger ">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <>
            <Body
              key={index}
              title={news.title}
              author={news.author}
              src={news.urlToImage}
              url={news.url}
              content={news.content}
            />
          </>
        );
      })}
    </div>
  );
};

export default Updateitem;
