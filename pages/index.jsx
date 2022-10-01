import React from 'react';
import VectorLights from '@components/VectorLights';
import { styled } from '@stitches/react';
import { Button, Body, DisplayText, Title, Header, Subtitle } from '@components/atoms';

const Wrapper = styled('main', {
  minHeight: "100vh",
  minWidth: "100%",
  margin: "0",
  backgroundColor: '#0D0D0D',
  // backgroundColor: 'white',
})

export default function Home() {
  return (
    <Wrapper>
      <Button>Hello</Button>
      <Button type="cta" title="test"></Button>
      <DisplayText>UofTHacks</DisplayText>
      <Title>There's no place like home</Title>
      <Header type="h1"></Header>
      <Header type="h2"></Header>
      <Subtitle>Subtitle</Subtitle>
      <Body size="large">Body Large</Body>
      <Body>Body Regular</Body>
      <Body size="small">Body Small</Body>
      <VectorLights></VectorLights>
      test
    </Wrapper>
  );
}
