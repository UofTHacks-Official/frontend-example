import React from 'react';

import { styled, css } from "@stitches/react";

const ButtonStyles = css({
  color: "red",
  variants: {
    type: {
      main: {
        color: "pink"
      },
      cta: {
        color: "blue"
      }
    }
  }
})

const StyledButton = styled("button", ButtonStyles);

export const Button = (props) => {
  return (
    <StyledButton 
      arial-label={props.title}
      type={props.type}
    >{props.children || props.title}</StyledButton>
  );
}