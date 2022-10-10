import { Title } from "@components/atoms";
import {styled, css} from "~stitches";

const Wrapper = styled('section', {
  minHeight: "100vh",
  width: "100%",
})

const SponsorsWrapper = styled('div', css({
  display: "flex",
  maxWidth: "1142px",
  minHeight: "744px",
  background: "linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)",
  boxSizing: "border-box",
  boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(20px)",
  margin: "0 auto",
  borderRadius: "10px",
}))


export const Sponsors = (props) => {

  return(
    <Wrapper>
      <Title align="center">Sponsors</Title>
      <SponsorsWrapper></SponsorsWrapper>
    </Wrapper>
  )
}