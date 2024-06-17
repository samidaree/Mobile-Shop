import FirstHero from '../heros/FirstHero'
import SecondHero from '../heros/SecondHero'
import ThirdHero from '../heros/ThirdHero'
import FourthHero from '../heros/FourthHero'
import Link from 'next/link'

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
              <Link href="/products">
                <FirstHero />
              </Link>
            </div>
            <div className="image-slide">
              <Link href="/products">
                <SecondHero />
              </Link>
            </div>
            <div className="image-slide">
              <Link href="/products">
                <ThirdHero />
              </Link>
            </div>
            <div className="image-slide">
              <Link href="/products">
                <FourthHero />
              </Link>
            </div>
          </div>
        </div>
        <div className="labels">
          <label
            htmlFor="slide1"
            className={`label`}
          ></label>
          <label
            htmlFor="slide2"
            className="label"
          ></label>
          <label
            htmlFor="slide3"
            className="label"
          ></label>
          <label
            htmlFor="slide4"
            className="label"
          ></label>
          <div className="fake-radio ">
            <label
              htmlFor="slide1"
              className="radio-btn"
            ></label>
            <label
              htmlFor="slide2"
              className="radio-btn"
            ></label>
            <label
              htmlFor="slide3"
              className="radio-btn"
            ></label>{' '}
            <label
              htmlFor="slide4"
              className="radio-btn"
            ></label>
          </div>
        </div>
      </div>
    </>
  )
}
