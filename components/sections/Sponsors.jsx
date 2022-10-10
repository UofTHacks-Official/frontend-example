import { Title } from "@components/atoms";
import Image from "next/image";
import {styled, css} from "~stitches";

import Accenture from "/public/img/sponsors/Accenture.svg";

const Wrapper = styled('section', {
  minHeight: "100vh",
  width: "100%",
})

const SponsorsGrid = styled('div', css({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1142px",
  minHeight: "744px",
  background: "linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)",
  boxSizing: "border-box",
  boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(20px)",
  margin: "0 auto",
  borderRadius: "10px",
  padding: "50px",
  gap: "2.5rem",
}))


const InKindTier = styled('div', css({
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  boxSizing: "border-box",
  minHeight: "187.4px",
  maxWidth: "100%",
  margin: "0 auto",
  gap: "5rem",
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  "& a": {
    transition: "all 0.3s ease 0s",
    maxWidth: "150px",
  },
  
  "& a:hover": {
    transition: "all 0.3s ease 0s",
    transform: "scale(1.1)",
  }
}))

const DiamondTier = styled(InKindTier, css({
  "& a": {
    maxWidth: "400px"
  }
}));

const SponsorWrapper = styled('a', css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "400px",
  minHeight: "187px",
}))

const Sponsor = (props) => {
  return(
    <SponsorWrapper href={props.link} target="_blank" rel="noopener">
      <Image src={props.src} layout="fill"
                objectFit="contain" alt={props.name}  />
    </SponsorWrapper>
  )
}


export const Sponsors = (props) => {

  return(
    <Wrapper>
      <Title align="center">Sponsors</Title>
      <SponsorsGrid>
        <DiamondTier>
          <Sponsor src={Accenture} link="" />
          <Sponsor src={Accenture} />
          <Sponsor src={Accenture} />
          <Sponsor src={Accenture} />
        </DiamondTier>
        <InKindTier>
        <Sponsor src={Accenture} />
        </InKindTier>
      </SponsorsGrid>
    </Wrapper>
  )
}