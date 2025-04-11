import './crafts.css';

const Crafts = () => {
  const videoList = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
    '/videos/video5.mp4',
    '/videos/video6.mp4',
  ];

  return (
    <section className="crafts section" id="crafts">
      <h2 className="section__title">Visual Craftsmanship</h2>
      <span className="section__subtitle">
        Video Editing Projects - Motion Graphics - Filmmaking <i className="bx bxs-videos"></i>
      </span>

      <div className="crafts__container container grid">
        {videoList.map((src, index) => (
          <div className="crafts__item" key={index}>
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className="crafts__video"
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crafts;
