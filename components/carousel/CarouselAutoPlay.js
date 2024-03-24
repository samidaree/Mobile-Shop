import FirstHero from '../heros/FirstHero'
import SecondHero from '../heros/SecondHero'
import ThirdHero from '../heros/ThirdHero'
import FourthHero from '../heros/FourthHero'

export default function AutoplayCarousel() {
  return (
    <>
      <div
        id="homepage-slider"
        className="st-slider"
      >
        <input
          type="radio"
          className="cs_anchor radio"
          name="slider"
          id="slide1"
        />
        <input
          type="radio"
          className="cs_anchor radio"
          name="slider"
          id="slide2"
        />
        <input
          type="radio"
          className="cs_anchor radio"
          name="slider"
          id="slide3"
        />
        <input
          type="radio"
          className="cs_anchor radio"
          name="slider"
          id="slide4"
        />
        <input
          type="radio"
          className="cs_anchor radio"
          name="slider"
          id="play1"
          defaultChecked={true}
        />

        <div className="images">
          <div className="images-inner">
            <div className="image-slide">
              <FirstHero />
            </div>
            <div className="image-slide">
              <SecondHero />
            </div>
            <div className="image-slide">
              <ThirdHero />
            </div>
            <div className="image-slide">
              <FourthHero />
            </div>
          </div>
        </div>

        <div className="labels">
          <label
            for="slide1"
            className={`label`}
          ></label>
          <label
            for="slide2"
            className="label"
          ></label>
          <label
            for="slide3"
            className="label"
          ></label>
          <label
            for="slide4"
            className="label"
          ></label>
          <div className="fake-radio ">
            <label
              for="slide1"
              className="radio-btn"
            ></label>
            <label
              for="slide2"
              className="radio-btn"
            ></label>
            <label
              for="slide3"
              className="radio-btn"
            ></label>{' '}
            <label
              for="slide4"
              className="radio-btn"
            ></label>
          </div>
        </div>
      </div>
    </>
  )
}
