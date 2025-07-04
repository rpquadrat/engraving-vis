import * as React from "react"
import bgImage from "./assets/images/deepwave-boden.jpg"
function VizCanvas(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 136.1 136.1"
      style={{
        enableBackground: "new 0 0 136.1 136.1",
      }}
      xmlSpace="preserve"
    >

        <image
          style={{
            overflow: "visible",
          }}
          width={800}
          height={800}
          href={bgImage}
          transform="translate(-.776 -.239) scale(.171)"
          {...props.image}
        />

      <g id="g-vis-engraving">
        <text
          id="g-vis-text-1"
          className={`align-${props.align.style} font-type-1 text-prop`}
          >
        <tspan id="g-vis-text-line-1" x={props.align.value} y="55">
          {props.firstLine}
        </tspan>
        <tspan id="g-vis-text-line-2" x={props.align.value} y="60.5">
          {props.secondLine}
        </tspan>
        <tspan id="g-vis-text-line-3" x={props.align.value} y="66">
          {props.thirdLine}
        </tspan>
      </text>
    </g>
</svg>
)
}
export default VizCanvas
