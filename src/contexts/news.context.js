import React, { createContext, useCallback, useState } from "react";
import { fetchNews } from '../services/news.service';

export const NewsContext = createContext();

export const NewsContextProvider = ({ params, children }) => {
  const [data, setData] = useState();

  const getData = useCallback(async (params) => {
    try {
      const news = await fetchNews(params);
      setData(news);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NewsContext.Provider value={{ data, getData }}>
      {children}
    </NewsContext.Provider>
  );
};
