import { Calendar, Loader2, User } from "lucide-react";
import contentImage from "../assets/Frame 202.png";
import { useQuery } from "@tanstack/react-query";
import { newsCardData } from "../services/api";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [newsData, setnewsData] = useState([]);

  useEffect(() => {
    fetch("https://pokimon-server.onrender.com/api/news")
      .then((response) => response.json())
      .then((data) => setnewsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(newsData);

  const news = (newsData as any)?.news || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="sm:max-w-294 px-2 mx-auto py-10 min-h-screen">
      <div className="flex sm:flex-row flex-col justify-between gap-5">
        {/* Main News Feed */}
        <div className="sm:w-2/3">
          <h1 className="text-[#101828] font-bold text-2xl sm:text-4xl">
            News & Articles
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {newsData?.news?.slice(0,10).map((item: Record<string, string | number | undefined>) => (
              <Link to={`/news/${encodeURIComponent(item.title as string)}`} key={item._id as string}>
                <div className="border border-[#e4e2e2] rounded-xl overflow-hidden hover:shadow-md transition-shadow h-[470px]">
                  <div className="rounded-t-lg overflow-hidden">
                    <img
                      src={item.image as string}
                      alt={item.title as string}
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <div className="mt-4 p-3 sm:p-6">
                    <span className="bg-[#DBEAFE] text-blue-700 px-3 py-1 rounded-full text-sm">
                      {item.source}
                    </span>
                    <div className="flex flex-col gap-y-3 mt-3">
                      <h1 className="text-lg sm:text-2xl font-bold">
                        {item.title}
                      </h1>
                      <p className="text-[12px] sm:text-sm text-[#364153]">
                        {item.summary}
                      </p>
                      <div className="flex gap-x-3 text-[#4A5565]">
                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                          <Calendar size={16} />
                          <h1 className="text-[12px] sm:text-[14px]">
                            {formatDate(item?.published_at)}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar: Popular Content */}
        <div className="sm:w-1/3">
          <h2 className="text-2xl font-bold">Popular Content</h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {newsData?.news?.slice(10,50).map((item: Record<string, string | number | undefined>) => (
              <Link to={`/news/${item.slug}`} key={item._id as string}>
                <div
                  className="bg-cover bg-center rounded-xl overflow-hidden h-32 flex flex-col justify-end p-2"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${(item.image as string) || contentImage})`,
                  }}
                >
                  <h1 className="text-white text-[12px] sm:text-[13px] font-semibold leading-tight line-clamp-2">
                    {item.title}
                  </h1>
                  <div className="text-[#CFCFCF] flex items-center gap-x-1 mt-1">
                    <User size={12} />
                    <h1 className="text-[11px]">{item.author}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
