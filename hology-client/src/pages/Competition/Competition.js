import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import BackgroundDecoration1 from "../../components/BackgrounDecorations/BackgroundDecoration";
import CompetitionCard from "./Components/CompetitionCard";
import Carousel from "react-elastic-carousel";

import bgDecoration1 from "../../assets/img/background-decorations/bg-decoration-1.png";

import "./Competition.scss";

const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 580, itemsToShow: 2 },
];

const Competition = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const slider = React.useRef();

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  return (
    <>
      <Helmet>
        <title>Competition | HOLOGY 5.0</title>
      </Helmet>

      <div className="container-1">
        <section className="head-container">
          <div className="title">
            <Header noLine>
              WHAT'S ON <span className="competition-title">COMPETITION?</span>
            </Header>
            <Paragraph center responsive marbot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sagittis nulla eu sem sollicitudin, non vulputate nisl
              sollicitudin. Proin nec magna blandit justo pulvinar cursus vel
              vel dui. Dui vitae tempus lectusa.
            </Paragraph>
          </div>
          {windowWidth >= 700 ? <div className="just-an-icon"></div> : ""}
        </section>
        {windowWidth >= 700 ? (
          <BackgroundDecoration1 src={bgDecoration1} justifyContent="right" />
        ) : (
          ""
        )}
        <section className="competitionListContainer">
          <div className="col1">
            <Carousel
              breakPoints={breakPoints}
              pagination={windowWidth >= 600 ? true : false}
              verticalMode={windowWidth < 600 ? true : false}
              transitionMs={550}
              showArrows={false}
              ref={slider}
            >
              <CompetitionCard />
              <CompetitionCard />
              <CompetitionCard />
              <CompetitionCard />
              <CompetitionCard />
            </Carousel>
          </div>
          <div className="col2">
            <div className="textWrapper">
              <Header noLine>
                Competition{" "}
                <span className="competitionSectionHeaderSpan">List</span>
              </Header>
              {windowWidth >= 481 ? (
                <Paragraph center responsive>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Paragraph>
              ) : (
                ""
              )}
            </div>
            {windowWidth >= 601 ? (
              <div className="competitionsSliderNavigator">
                <div
                  className="prev"
                  onClick={() => slider.current.slidePrev()}
                ></div>
                <div
                  className="next"
                  onClick={() => slider.current.slideNext()}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>

          {windowWidth <= 600 ? (
            <div className="competitionsSliderNavigator col3">
              <div
                className="prev"
                onClick={() => slider.current.slidePrev()}
              ></div>
              <div
                className="next"
                onClick={() => slider.current.slideNext()}
              ></div>
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
};

export default Competition;
