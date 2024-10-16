import React, { useState } from "react";
import NewsNav from "./NewsNav";
import Updateitem from "./Updateitem";
import "./News.css";

const Main = () => {
  const [Category, setCategory] = useState("general");
  return (
    <div className="adff">
      <NewsNav setCategory={setCategory} />
      <Updateitem Category={Category} />
    </div>
  );
};

export default Main;
