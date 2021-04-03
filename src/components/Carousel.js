import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withProp } from "styled-tools";
import { range } from "ramda";
import { useSwipeable } from "react-swipeable";

const CarouselMask = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  ${({ carouselItems, itemSize, theme }) => `
    width:${carouselItems * itemSize}px;
  `}
  left: ${({ itemSize }) => `-${itemSize}px`};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    left: 0;
  }
`;

const CarouselStrip = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  ${({ items, itemSize, theme }) => `
    grid: 1fr / repeat(${items}, 1fr);
  `}
  grid-gap: ${({ theme }) => theme.spacing.sidePadding};
  ${withProp(
    "carouselPosition",
    (carouselPosition) => `
    left:${carouselPosition * 100}%;
  `
  )}

  > div {
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: translateX(0);
    ${withProp(["animate", "speed"], (animate, speed) => {
      if (animate === "left") {
        return css`
          transition: transform ${speed}ms ease-in-out;
          transform: translateX(100%);
        `;
      } else if (animate === "right") {
        return css`
          transition: transform ${speed}ms ease-in-out;
          transform: translateX(-100%);
        `;
      }
    })}
    ${withProp("itemsOrder", (itemsOrder) => {
      return css`
        ${itemsOrder.map(
          (order, idx) => `
            &:nth-child(${order}){
                order:${idx + 1}
            }
          `
        )}
      `;
    })}
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transition: none;
    }
  }
`;

const CarouselItem = styled.div``;

const config = {
  delta: 10, // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
  trackTouch: true, // track touch input
  trackMouse: true, // track mouse input
  rotationAngle: 0 // set a rotation angle
};

const Carousel = ({ children, bgc, speed = 800, itemSize }) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [animate, setAnimate] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const incrementCarouse = (increment) => {
    setCarouselPosition(carouselPosition + increment);
    setTimeout(() => setIsAnimating(false), speed - 200);
  };
  let orderedChildren;
  if (children.length === 2) {
    orderedChildren = [...children, ...children];
  } else {
    orderedChildren = children;
  }
  const items = orderedChildren.length;
  const itemsOrder = range(-1, Math.max(1, items - 1)).map(function (i) {
    const mod = (i - carouselPosition) % items;
    return mod >= 0 ? mod + 1 : items + mod + 1;
  });
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setIsAnimating(true);
      setAnimate("right");
      setTimeout(() => {
        setAnimate(null);
        incrementCarouse(-1);
      }, 1005);
    },
    onSwipedRight: () => {
      setIsAnimating(true);
      setAnimate("left");
      setTimeout(() => {
        setAnimate(null);
        incrementCarouse(1);
      }, 1005);
    },
    ...config
  });
  return (
    <CarouselMask carouselItems={items} itemSize={itemSize}>
      <CarouselStrip
        itemSize={itemSize}
        speed={speed}
        animate={animate}
        items={items}
        carouselPosition={carouselPosition}
        itemsOrder={itemsOrder}
        {...handlers}
      >
        {orderedChildren}
      </CarouselStrip>
    </CarouselMask>
  );
};

export default Carousel;
