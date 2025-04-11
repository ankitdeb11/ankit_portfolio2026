import './crafts.css';
import { useState } from 'react';

const Crafts = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setPopupVideo(videoSrc);
  };

  const closePopup = () => {
    setPopupVideo(null);
  };

  const videoList = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
    '/videos/video5.mp4',
    '/videos/video6.mp4',
  ];

  return (
    <div>
      <section className="crafts section" id="crafts">
        <h2 className="section__title">VE Craftsmanship</h2>
        <span className="section__subtitle">
          Video Editing projects - Motion Graphics - Filmmaking <i className="bx bxs-videos"></i>
        </span>

        <div className="crafts__container container grid">
          {videoList.map((src, index) => (
            <div className="crafts__item" key={index} onClick={() => handleVideoClick(src)}>
              <video src={src} autoPlay muted loop playsInline></video>
            </div>
          ))}
        </div>

        {/* Video Popup */}
        {popupVideo && (
          <div className="video-popup" onClick={closePopup}>
            <div className="video-popup__content" onClick={(e) => e.stopPropagation()}>
              <span className="video-popup__close" onClick={closePopup}>&times;</span>
              <video src={popupVideo} autoPlay controls></video>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Crafts;
