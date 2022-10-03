import { styled } from "~stitches";

const image = {
  starWithLights: "url('/img/bg/StarsWithLights.svg')",
  starsOnly: "url('/img/bg/StarsOnly.svg')",
}

const Wrapper = styled("div", {
  minWidth: '100%',
  minHeight: '100%',
  background: '#0D0D0D',
  backgroundRepeat: "repeat",
  margin: "0",
  variants: {
    bg: {
      main: {
        backgroundImage: image.starWithLights
      },
      starsOnly: {
        backgroundImage: image.starsOnly,
      }
    },
  },
  defaultVariants: {
    bg: "main"
  }
})

const Padding = styled("main", {
  padding: "0 12.76vw",
})

/**
 * 
 * Background with Stars and Lights vectors
 * 
 */
export const MainBackground = (props) => {
  return (
    <Wrapper>
      {props.padded ? <Padding>{props.children}</Padding> : props.children}
    </Wrapper>
  )
}

export const StarsBackground = (props) => {
  return (
    <Wrapper bg="starsOnly">
      {props.padded ? <Padding>{props.children}</Padding> : props.children}
    </Wrapper>
  )
}