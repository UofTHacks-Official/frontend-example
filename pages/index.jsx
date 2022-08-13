import React from 'react';
import VectorLights from '../components/VectorLights';
import { styled } from '@stitches/react';

const Wrapper = styled('main', {
  minHeight: "100vh",
  margin: "0",
  backgroundColor: '#0D0D0D',
})

const Header = styled('h1', {
  color: 'red',
  margin: '2rem',
});

export default function Home() {
  return (
    <Wrapper>
      {/* <Header>Hi this is an example project!</Header> */}
      Test
      <VectorLights></VectorLights>
    </Wrapper>
  );
}
