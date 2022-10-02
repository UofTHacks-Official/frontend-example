import Image from "next/image";
import { styled } from "~stitches";
import StarBG from "./StarBackground.png";

const Vector = styled("svg", {
  position: "absolute",
  top: "0",
  left: "0",
  minHeight: "100vh",
  minWidth: "100%",
  display: "none",
})

const Wrapper = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  minHeight: "100vh",
  minWidth: "100%",
  backgroundImage: `url(${StarBG})`,
})

export const VectorLights = () => {
  return (
    <Wrapper>
    <Vector fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6" filter="url(#filter0_f_7_41)">
        <path d="M822.55 691.979C858.453 742.378 868.65 803.038 871.874 827.066C876.219 904.416 903.229 870.03 926.129 879.527C954.753 891.398 895.814 795.876 927.697 753.136C959.579 710.396 932.517 699.153 889.199 679.703C845.882 660.254 869.048 604.495 881.176 520.987C893.305 437.478 839.007 428.648 834.589 475.893C830.17 523.139 836.935 522.373 780.763 536.028C724.59 549.684 777.67 628.98 822.55 691.979Z" fill="#F9F9F9"/>
        <path d="M39.601 163.574C-74.1999 203.202 -126.231 -19.2316 -138.021 -135.402C193.09 -112.286 811.965 -65.7319 638.578 -64.4368C421.846 -62.8179 433.109 89.2818 278.423 69.3275C123.737 49.3732 181.852 114.039 39.601 163.574Z" fill="#B487EE" stroke="black"/>
        <path d="M1110.09 1328.51C1051.19 1333.64 988.854 1329.81 941.692 1323.14L1110.09 1328.51C1218.33 1319.08 1314.99 1279.37 1284.74 1171.31C1226.34 962.724 1096.84 787.217 1502.27 877.736C1826.62 950.151 2105.52 835.777 2204.42 769.538L2001.49 1356.93L1110.09 1328.51Z" fill="#DF7D7D"/>
        <path d="M81.9493 514.234C-132.03 331.044 -171.194 212.946 -87.5584 194.686L-231.711 217.773C-231.711 217.773 235.5 686.5 48.5 923.095C-238.324 1285.99 1218.13 1109.91 1218.13 1109.91C978.824 1036.24 504.61 1035.22 618.651 923.095C761.203 782.937 424.418 807.423 81.9493 514.234Z" fill="#EB9C5C"/>
        <path d="M1001.21 -95.9802C905.234 -215.896 1259.21 -204.724 1441.21 -204.724L2027.23 -204.724L2115.21 631.432C1811.71 553.02 1424.93 720.013 1556.21 592.02C1656.21 494.52 1709.83 355.573 1330.94 366.409C952.056 377.244 1397.21 165.02 1417.21 104.52C1462.9 -33.7124 1121.17 53.914 1001.21 -95.9802Z" fill="#5EA7D5"/>
      </g>
      <defs>
        <filter id="filter0_f_7_41" x="-531.711" y="-505" width="3036.13" height="2161.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_7_41"/>
      </filter>
      </defs>
    </Vector>
    </Wrapper>
  )
}