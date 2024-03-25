import React from 'react'

export default function CharmCross(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 16 16"
      fill={'#82C785'}
      color="#82C785"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
      ></path>
    </svg>
  )
}
