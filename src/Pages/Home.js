import React from "react";
import Vcards from "../Components/Vcard";
import weather_img from "../assets/weather.jpg";
import News_img from "../assets/news.jpg";
import ToDO_img from "../assets/to do.jpg";
import "./Home.css";

const Home = () => {
  const sent1 =
    "The weather application will provide users with real-time weather information, forecasts, and other weather-related data, which can help them make better decisions about their day-to-day activities.";
  const sent3 =
    "The News app collects all the stories you want to read, from your favorite sources, about the topics that interest you most.";
  const sent2 =
    " The main purpose of a to do list is to provide yourself with a list of your priorities in order to ensure that you don't forget anything and are able to effectively plan out your tasks so that they are all accomplished in the correct time frame.";

  const path1 = "/Weather";
  const path2 = "/ToDo";
  const path3 = "/News";
  return (
    <div className="cards">
      <Vcards
        title={"Weather App"}
        image={weather_img}
        description={sent1}
        path={path1}
      />
      <Vcards
        title={"ToDo App"}
        image={ToDO_img}
        description={sent2}
        path={path2}
      />
      <Vcards
        title={"News App"}
        image={News_img}
        description={sent3}
        path={path3}
      />
    </div>
  );
};

export default Home;
