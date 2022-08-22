import { Svg } from 'components/atoms'
import { FC, memo } from 'react'
import { animations, styled } from 'theme'

type Props = typeof Svg['defaultProps']

const Path = styled('path')

const BgHome: FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width="2560"
      height="530"
      viewBox="0 0 2560 530"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1350_25)">
        <circle cx="256" cy="-2" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="286" cy="-2" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="316" cy="-2" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="346" cy="-2" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="256" cy="36" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="286" cy="36" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="316" cy="36" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="346" cy="36" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="256" cy="74" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="286" cy="74" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="316" cy="74" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="346" cy="74" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="256" cy="112" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="286" cy="112" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="316" cy="112" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <circle cx="346" cy="112" r="10" fill="#F9F9F9" fillOpacity="0.2" />
        <Path
          d="M202.61 290.781L218.307 275.207L239.644 281.014L245.284 302.396L229.586 317.971L208.249 312.163L202.61 290.781Z"
          stroke="#F9F9F9"
          stroke-opacity="0.2"
          stroke-width="5"
          css={{
            animation: `${animations.swing} 2s linear infinite`
          }}
        />
        <Path
          d="M2244.21 61.7416L2259.91 46.1667L2281.25 51.974L2286.89 73.356L2271.19 88.9309L2249.85 83.1237L2244.21 61.7416Z"
          stroke="#F9F9F9"
          stroke-opacity="0.2"
          stroke-width="5"
          css={{
            animation: `${animations.swing} 4s linear infinite`
          }}
        />
        <Path
          d="M-0.180518 134.323L26.0975 127.645L45.0197 147.064L37.6638 173.16L11.3858 179.838L-7.53638 160.419L-0.180518 134.323Z"
          stroke="#F9F9F9"
          stroke-opacity="0.2"
          stroke-width="5"
        />

        <g clipPath="url(#clip1_1350_25)">
          <Path
            d="M272.493 225.501L268.493 213.21L280.776 209.217L279.544 205.425L267.26 209.424L263.263 197.143L259.478 198.354L263.476 210.655L251.185 214.655L252.397 218.44L264.706 214.44L268.701 226.733L272.493 225.501Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
        </g>
        <g clipPath="url(#clip2_1350_25)">
          <Path
            d="M114.656 377.548L100.343 367.95L109.939 353.65L105.525 350.687L95.932 364.993L81.6305 355.402L78.6582 359.789L92.977 369.399L83.3791 383.713L87.7655 386.685L97.3837 372.357L111.693 381.962L114.656 377.548Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
        </g>
        <g clipPath="url(#clip3_1350_25)">
          <Path
            d="M2415.14 117.282L2416.65 122.049L2450.02 111.488L2448.51 106.721L2415.14 117.282Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M2419.59 115.946L2414.82 117.455L2425.74 151.963L2430.51 150.454L2419.59 115.946Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M2435.28 78.1598L2436.79 82.9268L2470.15 72.365L2468.65 67.5981L2435.28 78.1598Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M2439.73 76.8235L2434.96 78.3323L2445.88 112.841L2450.65 111.332L2439.73 76.8235Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
        </g>
        <g clipPath="url(#clip4_1350_25)">
          <Path
            d="M149.446 463.368L150.24 465.877L167.803 460.318L167.009 457.809L149.446 463.368Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M151.788 462.664L149.279 463.458L155.028 481.621L157.536 480.827L151.788 462.664Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M160.045 442.777L160.839 445.286L178.401 439.727L177.607 437.218L160.045 442.777Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
          <Path
            d="M162.386 442.074L159.877 442.868L165.626 461.03L168.135 460.236L162.386 442.074Z"
            fill="#F9F9F9"
            fillOpacity="0.2"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1350_25">
          <rect width="2560" height="530" fill="white" />
        </clipPath>
        <clipPath id="clip1_1350_25">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(260.826 195.837) rotate(27.2501)"
          />
        </clipPath>
        <clipPath id="clip2_1350_25">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(78 356.039) rotate(-10.8776)"
          />
        </clipPath>
        <clipPath id="clip3_1350_25">
          <rect
            width="95"
            height="30"
            fill="white"
            transform="translate(2402.89 140.099) rotate(-62.5636)"
          />
        </clipPath>
        <clipPath id="clip4_1350_25">
          <rect
            width="50"
            height="15.7895"
            fill="white"
            transform="translate(143 475.376) rotate(-62.5636)"
          />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default memo(BgHome)
