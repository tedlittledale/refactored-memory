import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Background = styled.div`
  z-index: ${({ theme }) => theme.zindexes.low};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    min-width: ${({ bgWidth }) => bgWidth}px;
    left: calc(-${({ bgWidth }) => bgWidth / 2}px + 50%);
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 0;
      width: 100%;
      img {
        height: 100%;
      }
    }
    > div {
      width: 100%;
      height: 100%;
    }
  }

  img {
    height: 100%;
    width: auto;
  }
`;

const BgImage = ({ image, alt = "" }) => {
  return (
    <Background bgWidth={image.width}>
      <div>
        <Image
          src={image.url}
          alt={alt}
          width={image.width}
          height={image.height}
        />
      </div>
    </Background>
  );
};

export default BgImage;
