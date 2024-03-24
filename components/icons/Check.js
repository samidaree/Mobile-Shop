import React from 'react'

export default function TablerCheck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.6em"
      height="1.6em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 12l5 5L20 7"
      ></path>
    </svg>
  )
}
