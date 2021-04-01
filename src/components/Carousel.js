import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const LEFT = "LEFT";
const RIGHT = "RIGHT";

const CarouselWrap = styled.div`
  width: 100vw;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
  > div {
    display: grid;
    grid: ${({ carouselItems }) => `1fr / repeat(${carouselItems}, 1fr)`};
    grid-gap: ${({ theme }) => theme.spacing.sidePadding};
    transition: ${({ sliding }) => (sliding ? "none" : "transform 10s ease")};
    transform: ${({ itemSize, sliding, direction }) => {
      if (!sliding) return `translateX(-${itemSize}px)`;
      if (direction === RIGHT) return `translateX(${itemSize * 2}px)`;
      return "translateX(0%)";
    }};
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: none;
    }
  }
`;

const CarouselItem = styled.div`
  order: ${({ position }) => position};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    order: ${({ index }) => index};
  }
`;

const config = {
  delta: 10, // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
  trackTouch: true, // track touch input
  trackMouse: true, // track mouse input
  rotationAngle: 0 // set a rotation angle
};

const getPosition = ({ index, carouselPosition, carouselItems }) => {
  return index - carouselPosition < 0
    ? carouselItems - Math.abs(index - carouselPosition)
    : index - carouselPosition;
};

const initialState = { carouselPosition: 0, sliding: false, direction: LEFT };

const Carousel = ({ children, itemSize }) => {
  const carouselItems = children.length;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { carouselPosition, sliding, direction } = state;
  console.log({ carouselPosition });
  const slide = (direction) => {
    dispatch({ type: direction, carouselItems });
    setTimeout(() => {
      dispatch({ type: "end" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(LEFT),
    onSwipedRight: () => slide(RIGHT),
    ...config
  });

  return (
    <CarouselWrap
      carouselItems={carouselItems}
      itemSize={itemSize}
      direction={direction}
      sliding={sliding}
    >
      <div {...handlers}>
        {children.map((child, idx) => (
          <CarouselItem
            key={`carouselItem${idx}`}
            position={getPosition({
              index: idx,
              carouselPosition,
              carouselItems
            })}
            index={idx}
          >
            {child}
          </CarouselItem>
        ))}
      </div>
    </CarouselWrap>
  );
};

const reducer = (state, { type, carouselItems }) => {
  switch (type) {
    case "reset":
      return initialState;
    case LEFT:
      return {
        ...state,
        direction: LEFT,
        sliding: true,
        carouselPosition: Math.min(carouselItems, state.carouselPosition + 1)
      };
    case RIGHT:
      return {
        ...state,
        direction: RIGHT,
        sliding: true,
        carouselPosition: Math.max(0, state.carouselPosition - 1)
      };
    case "end":
      return { ...state, sliding: false };
    default:
      return state;
  }
};

export default Carousel;
