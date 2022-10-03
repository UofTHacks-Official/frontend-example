import React from 'react';
import { styled } from '@stitches/react';
import { Button, Body, DisplayText, Title, Header, Subtitle, MainBackground, StarsBackground} from '@components/atoms';

const Test = styled('div', {
  height: "5000px",
  width: "100%",
})

export default function Home() {
  return (
    <MainBackground>
      <Button>Hello</Button>
      <Button type="cta" title="test"></Button>
      <DisplayText>UofTHacks X</DisplayText>
      <Title>There's no place like home</Title>
      <Header type="h1"></Header>
      <Header type="h2"></Header>
      <Subtitle>Subtitle</Subtitle>
      <Body size="large">Body Large</Body>
      <Body>Body Regular</Body>
      <Body size="small">Body Small</Body>
    </MainBackground>
  );
}
