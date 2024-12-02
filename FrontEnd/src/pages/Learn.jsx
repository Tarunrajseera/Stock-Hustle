import React from "react";
import "../css/Learn.css";

export default function Learn() {
  const youtubeVideos = [
    { id: "HNPbY6fSeo8", title: "STOCK MARKET INVESTING for BEGINNERS! | Investment Tips 2023 | Warikoo Hindi" },
    { id: "p5ORIeMULIg", title: "Stock Market Basics 2024 Beginners Complete Video" },
    { id: "x0G4WtO0LCQ", title: "Stock Market Basics for Beginners " },
    { id: "i9uBI34wrOs", title: "Raw Talks with @MoneyPurse on Stock Market | Crypto" },
    { id: "ZCFkWDdmXG8", title: "Explained | The Stock Market | FULL EPISODE | Netflix" },
  ];

  const articles = [
    {
      title: "Common Stock Investing Mistakes to Avoid as a Beginner",
      link: "https://groww.in/blog/common-stock-investing-mistakes-to-avoid-as-a-beginner",
      thumbnail: "https://wp-asset.groww.in/wp-content/uploads/2020/04/22114820/5-Common-Stock-Investing-Mistakes-to-Avoid-as-a-Beginner.jpg" // Replace with actual thumbnail image URL
    },
    {
      title: "Stock Market Basics for Beginners",
      link: "https://www.bankrate.com/investing/stock-market-basics-for-beginners/",
      thumbnail: "https://www.bankrate.com/brp/2023/10/16124824/Investments-Stock-market-basics_9-tips-for-beginners.jpg?auto=webp&optimize=high&crop=16:9&width=912" // Replace with actual thumbnail image URL
    },
    {
      title: "Stock Market Basics: Everything Beginner Investors Need to Know",
      link: "https://www.nerdwallet.com/article/investing/stock-market-basics-everything-beginner-investors-know",
      thumbnail: "https://www.nerdwallet.com/tachyon/2017/06/GettyImages-653901746.jpg?resize=1920%2C1152" // Replace with actual thumbnail image URL
    },
    {
      title: "Stock Market Basics",
      link: "https://groww.in/p/stock-market-basics",
      thumbnail: "https://imgs.search.brave.com/4hPvDbpuBBriJcp8ifaH6yyeIpTiLqc560uMHwnf-ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGQuY29tL2NhL2Vu/L2ludmVzdGluZy9k/aXJlY3QtaW52ZXN0/aW5nL2FydGljbGVz/L3doYXQtaXMtc3Rv/Y2stbWFya2V0L19q/Y3JfY29udGVudC9y/b290L2NvbnRhaW5l/ci9yZXNwb25zaXZl/Z3JpZC9jb250YWlu/ZXJfNjIyOTQ1Mzg4/Xy9pbWFnZV9jb3B5/LmNvcmVpbWcuanBl/Zy8xNjQ3MDAxODc2/ODI4L3N0b2NrLW1h/cmtldHMtYXJ0aWNs/ZS1sZWFkLWltYWdl/LWVuLmpwZWc" // Replace with actual thumbnail image URL
    },
    {
      title: "How to Invest $1,000 in the Stock Market",
      link: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
      thumbnail: "https://imgs.search.brave.com/uMX8VbOkR9JkqUMPUgwoEA5C4A1fXF0ZTVzt9xpAKpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iL0Vt/MFZvRU1SV01mY3I3/YjNnZUFZS1EzbTVX/MD0vNDAwMHgyNjY3/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpL1ByaW1hcnkt/SW1hZ2UtaG93LXRv/LWJ1eS1hbHRlcm5h/dGl2ZS1pbnZlc3Rt/ZW50cy03MzY5Njk0/LTBlYmM0YWRkNTdh/ODRmODVhYjEwNWUy/NWQ2YTc5YmNmLmpw/Zw" // Replace with actual thumbnail image URL
    }
  ];

  return (
    <div className="learn">
      <h2 className="youtubeheader">
        Videos
      </h2>
      <div className="youtube-scroll">
        {youtubeVideos.map((video, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="video-card-link"
          >
            <div className="video-card">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <h3>{video.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <h2 className="article-header">Articles</h2>
      {articles.length > 0 ? (
        <div className="article-scroll">
          {articles.map((article, index) => (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="article-card-link"
            >
              <div className="article-card">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="article-thumbnail"
                />
                <h3>{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p>No articles available at the moment.</p>
      )}
    </div>
  );
}
