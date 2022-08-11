import React from 'react';
import { styled } from '@stitches/react';

const Header = styled('h1', {
  color: 'red',
  margin: '2rem',
});

export default function Home() {
  return (
    <div>
      <Header>Header</Header>
      Test
    </div>
  );
}
