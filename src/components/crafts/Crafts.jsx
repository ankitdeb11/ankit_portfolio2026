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

      {/* This part now moved below the videos */}
      <p className="crafts__more-link">
        Wish to have a better look?{' '}
        <a
          href="https://drive.google.com/drive/u/2/folders/1nmr2bOZGvGU2qFzZ5Vx6TmImRfjY2bMI"
          target="_blank"
          rel="noopener noreferrer"
          className="crafts__link"
        >
          Click here for more video editing!
        </a>
      </p>
    </section>
  );
};

export default Crafts;
