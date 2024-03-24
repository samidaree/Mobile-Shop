import * as React from 'react'
const SVGComponent = (props) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 326.6 229.25"
    {...props}
  >
    <defs>
      <style>
        {
          '\n      .footer-bus-1 {\n        fill: #2397d4;\n      }\n\n      .footer-bus-1, .footer-bus-2 {\n        stroke-width: 0px;\n      }\n\n      .footer-bus-2 {\n        fill: #fff;\n      }\n    '
        }
      </style>
    </defs>
    <g
      id="Layer_1-2"
      data-name="Layer 1"
    >
      <g>
        <g>
          <polygon
            className="footer-bus-2"
            points="1.86 151.47 1.86 0 0 0 0 151.47 1.86 151.47"
          />
          <polygon
            className="footer-bus-1"
            points="5.58 224.4 1.86 218.05 1.86 151.47 0 151.47 0 218.78 4.63 226.68 57.59 226.68 57.59 224.4 5.58 224.4"
          />
        </g>
        <g>
          <g>
            <rect
              className="footer-bus-2"
              x={324.75}
              y={0}
              width={1.86}
              height={151.47}
            />
            <polygon
              className="footer-bus-1"
              points="321.02 224.4 324.75 218.05 324.75 151.47 326.6 151.47 326.6 218.78 321.97 226.68 269.01 226.68 269.01 224.4 321.02 224.4"
            />
          </g>
          <circle
            className="footer-bus-1"
            cx={269.5}
            cy={225.53}
            r={3.72}
          />
        </g>
      </g>
    </g>
  </svg>
)
export default SVGComponent
