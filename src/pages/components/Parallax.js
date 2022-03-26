import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Photography() {
  return (
    <ParallaxProvider>
      <div scrollAxis="vertical">
        <Parallax y={[20, -20]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
        <Parallax y={[-20, 20]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
        <Parallax y={[20, -20]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
        <Parallax y={[-10, 10]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
        <Parallax y={[10, -10]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
        <Parallax y={[30, -30]}>
          <img src="https://picsum.photos/200/300" />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
