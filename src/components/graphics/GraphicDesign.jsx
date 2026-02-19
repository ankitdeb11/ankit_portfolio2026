import './graphicdesign.css';

import design1 from '../../assets/graphicdesign/design 1.webp';
import design2 from '../../assets/graphicdesign/design 2.webp';
import design3 from '../../assets/graphicdesign/design 3.webp';
import design4 from '../../assets/graphicdesign/design 4.webp';
import design5 from '../../assets/graphicdesign/design 5.webp';
import design6 from '../../assets/graphicdesign/design 6.webp';
import design7 from '../../assets/graphicdesign/design 7.webp';
import design8 from '../../assets/graphicdesign/design 8.webp';
import design9 from '../../assets/graphicdesign/design 9.webp';
import design10 from '../../assets/graphicdesign/design 10.webp';

const GraphicDesign = () => {
  const imageList = [
    design1, design2, design3, design4, design5,
    design6, design7, design8, design9, design10,
  ];

  return (
    <section className="graphicdesign section" id="graphicdesign">
      <h2 className="section__title">Graphic Design</h2>
      <span className="section__subtitle">
        Posters - Branding - Digital Illustrations <i className="bx bxs-palette"></i>
      </span>

      <div className="graphicdesign__bento container">
        {imageList.map((src, index) => (
          <div className={`graphicdesign__item graphicdesign__item--${index + 1}`} key={index}>
            <img
              src={src}
              alt={`Graphic Design ${index + 1}`}
              className="graphicdesign__image"
            />
          </div>
        ))}
      </div>

      <p className="graphicdesign__more-link">
        Want to see more?{' '}
        <a
          href="https://drive.google.com/drive/folders/1_kVQ2Q4lHDf7PPKtfcZ_JoL7LRMg8wS-?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="graphicdesign__link"
        >
         Graphic Design
        </a>
      </p>
    </section>
  );
};

export default GraphicDesign;