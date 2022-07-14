import React from 'react';

import { ReactComponent as Line } from '../../icons/Line.svg';

import Animation from '../../components/animation/Animation';
import Browse from '../../components/browse/Browse';
import End from '../../components/end/End';
import Intro from '../../components/Intro/Intro';
import Preview from '../../components/preview/Preview';
import Share from '../../components/share/Share';
// import Timer from '../../components/timer/Timer'

import './main.css';
import Footer from '../../components/footer/Footer';
import CarouselBanner from '../../components/Intro/CarouselBanner';

const Main = () => {
  return (
    <div className="main">
      {/* <div className="dontshowOnMobile">
        <CarouselBanner />
      </div> */}
      <CarouselBanner />
      {/* <div className="showOnMobile"> */}
      {/* <div className="textMainDiv">
          <p>
            Fine the best <span className="spanMainText">services </span>for
            your business.
          </p>
        </div> */}

      {/* <div className="frontPageInputEmail">
          <input type="email" placeholder="Lets join now" />{' '}
        </div>
        <div className="frontPageJoinButton">
          <button type="button">Join</button>{' '}
        </div> */}
      {/* </div> */}

      <div></div>
      <div id="heroSectionL">
        <div id="heroSecFunc">
          <input
            type="text"
            id="heroSecInput"
            placeholder="Join us with your email..."
          />
          <button>
            <div>Join</div>
          </button>
        </div>
      </div>
      <div className="componentFirst">
        <div className="componentSecondMain">
          <div className="elapse" />
          <Line className="Line1" />
          <Line className="Line2" />
          <Line className="Line3" />
          {/* <Timer /> */}
          <Preview />
          <Share />
          <Browse />
          <Intro />
        </div>
      </div>
      <End />
      <Footer />
      <Animation />
    </div>
  );
};

export default Main;
