const InfluencersCarousel = () => {
  const images = [
    "images/ItsJustIzzy_7392900885472464133-no-watermarkonline-video-cutter.com-ezgif.com-optimize.gif",
    "images/studytipsbyreea_7384370765250006305-no-watermarkonline-video-cutter.com-ezgif.com-optimize.gif",
    "images/TecHow_7392344612624436485-no-watermarkonline-video-cutter.com-ezgif.com-optimize.gif",
    "images/bgr.gif"
  ];

  return (
    <div className="influencers top">
      {images.map((src, index) => (
        <div key={index} data-w-id={`c97d9827-0841-0592-93af-eeb51352406${String.fromCharCode(104 + index)}`} className="carousel-item">
          <img loading="lazy" src={src} alt="" className="image-58" />
        </div>
      ))}
    </div>
  );
};

export default InfluencersCarousel;
