import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailsPageNews = () => {
  const { title } = useParams();

  console.log(title);

  const [newsData, setNewsData] = useState<any>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`https://pokimon-server.onrender.com/api/news/${encodeURIComponent(title)}`);
        if (response.ok) {
          const data = await response.json();
          setNewsData(data);
        } else {
          console.error("Failed to fetch news data");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();
  }, [title]);

  console.log(newsData);

  if (!newsData) return <div>Loading...</div>;

  console.log("ladsjf", title);
  return (
    <div className="max-w-4xl mx-auto my-32 p-6 bg-white shadow-lg rounded-xl">
      <div className="rounded-t-xl overflow-hidden">
        <img
          src={newsData.image}
          alt={newsData.title}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{newsData.title}</h1>
        <p className="text-sm text-gray-500 mt-2">
          Published on {new Date(newsData.published_at).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-700 mt-4">{newsData.description}</p>

        <div className="mt-4 flex items-center justify-between text-blue-600">
          <span className="text-sm">Source: {newsData.source}</span>
          <a
            href={newsData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsPageNews;
