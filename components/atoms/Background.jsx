import { styled } from "~stitches";

const image = {
  starWithLights: "url('/img/bg/StarsWithLights.svg')",
  starsOnly: "url('/img/bg/StarsOnly.svg')",
}

const Wrapper = styled("div", {
  position: 'absolute',
  top: '0',
  left: '0',
  minWidth: '100%',
  minHeight: '100%',
  pointerEvents: 'none',
  background: '#0D0D0D',
  backgroundRepeat: "repeat-y",
  zIndex: '-1',
  margin: "0",
  variants: {
    bg: {
      main: {
        backgroundImage: image.starWithLights,
        backgroundRepeat: "no-repeat",
      },
      starsOnly: {
        backgroundImage: image.starsOnly,
      }
    }
  },
  defaultVariants: {
    bg: "main"
  }
})

/**
 * 
 * Background with Stars and Lights vectors
 * 
 */
export const MainBackground = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export const StarsBackground = (props) => {
  return (
    <Wrapper bg="starsOnly">
      {props.children}
    </Wrapper>
  )
}