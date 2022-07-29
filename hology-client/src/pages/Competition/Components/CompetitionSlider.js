import Carousel, { consts } from "react-elastic-carousel";

import "./CompetitionSlider.scss";

console.log(Carousel.onPrevStart);
const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 580, itemsToShow: 2 },
];

export default function CompetitionSlider({ children }) {
  return (
    <>
      <Carousel breakPoints={breakPoints} pagination={false} transitionMs={550}>
        {children}
      </Carousel>
    </>
  );
}
