import React from 'react'
import {styled, css} from "~stitches";

const h1Styles = {
  fontWeight: "500",
  fontSize: "$header"
};

const h2Styles = {
  fontWeight: "500",
  fontSize: "$subheader"
};


const SubtitleStyles = css({
  color: "$primary-text",
  fontWeight: "500",
  fontSize: "$subtitle",
});

const bodyStyles = {
  fontWeight: "400",
  fontSize: "1rem",
};
const smallStyles = {
  fontWeight: "400",
  fontSize: "0.8rem",
};
const largeStyles = {
  fontWeight: "400",
  fontSize: "1.25rem",
};

const DisplayStyles = css({
  '& span': {
    fontWeight: "500",
    fontSize: "$display",
    backgroundImage: 'linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)',
    backgroundClip: 'text',
    color: 'transparent',
  }
});

const TitleStyles = css({
  color: "$secondary",
  fontWeight: "500",
  fontSize: "$title",
})

const HeaderStyles = css({
  color: "$primary-text",
  variants: {
    type: {
      h1: {...h1Styles},
      h2: {...h2Styles}
    }
  },
  defaultVariants: {
    type: 'h1'
  }
})

const TextStyles = css({
  color: "$primary-text",
  variants: {
    size: {
      body: {...bodyStyles},
      small: {...smallStyles},
      large: {...largeStyles},
    }
  },
  defaultVariants: {
    type: 'body'
  }
});

export const DisplayText = (props) => {
  const StyledDisplay = styled("h1", DisplayStyles);

  return (
    <StyledDisplay><span>{props.children}</span></StyledDisplay>
  )
}

export const Title = (props) => {
  
  const StyledTitle = styled("h1", TitleStyles);

  return (
    <StyledTitle>{props.children}</StyledTitle>
  )

}

export const Header = (props) => {
  
  const StyledHeader = styled(props.type || "h1", HeaderStyles);

  return (
    <StyledHeader type={props.type}>{props.children}</StyledHeader>
  )

}


export const Subtitle = (props) => {

  const StyledSubtitle = styled("h3", SubtitleStyles);

  return (
    <StyledSubtitle>{props.children}</StyledSubtitle>
  )
}


export const Body = (props) => {

  const StyledBody = styled("p",TextStyles)

  return (
    <StyledBody size={props.size}>{props.children}</StyledBody>
  )
}