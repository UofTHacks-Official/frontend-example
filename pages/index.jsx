import React from 'react';
import Image from 'next/image';
import { styled, css } from '~stitches';
import { Button, Body, DisplayText, Title, Header, Subtitle, MainBackground, StarsBackground, MLHBanner} from '@components/atoms';
import { About } from "@components/sections";

import AboutUsImg from "@assets/AboutUs.png";

const HeroWrapper = styled('div', {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
})

const AboutWrapper = styled('section', {
  minHeight: "100vh",
  width: "100%",
})

const ContentWrapper = styled('div', css({
  display: 'flex',
  maxWidth: "1440px",
  flexFlow: "row wrap",
  gap: "5vw",
}));

const ImageWrapper = styled('div', css({
  position: "relative",
  maxWidth: "562px",
  maxHeight: "309px",
  minWidth: "300px",
  height: "309px",
  flex: "1",
  overflow: "hidden",
  "& img": {
    boxShadow: "0px 8px 24px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "auto",
  }
}));

const TextWrapper = styled('div', css({
  display: "flex",
  flexDirection: "column",
  minWidth: "300px",
  flex: "1"
}));


export default function Home() {
  return (
    <>
      <MLHBanner />
      <MainBackground padded>
          <HeroWrapper>
            <Subtitle>
              January 20-22, 2023&nbsp;&nbsp;|
              <span
                style={{'color': '#DF7D7D'}}
              >
              &nbsp;&nbsp;Toronto, ON.
              </span>
            </Subtitle>
            <DisplayText>UofTHacks X</DisplayText>
            <Body>Interested in sponsoring?</Body>
          </HeroWrapper>
          <AboutWrapper>
            <Title>About Us</Title>
            <ContentWrapper>
              <TextWrapper>
                <Body>
                Canada's first student-run hackathon, UofTHacks, is back for its 10th consecutive year on January 20-22, 2023!
                </Body>
                <Body>
                To celebrate this milestone, we will be even bigger and better than ever before! Over 600 innovators, developers, designers, and entrepreneurs will participate in a 36-hour competition entirely in-person, where they will build unique and impactful projects.
                </Body>
                <Body>
                We strive to provide a space where hackers can discover their passions, and we want your support in helping these hackers shape the future!
                </Body>
              </TextWrapper>
              <ImageWrapper>
                <Image src={AboutUsImg} layout="fill" objectFit='contain' />
              </ImageWrapper>
            </ContentWrapper>
          </AboutWrapper>
      </MainBackground>
    </>
  );
}
