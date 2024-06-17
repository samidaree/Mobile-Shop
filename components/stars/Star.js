import React from 'react'
import styled from 'styled-components'
import IconStar from './IconStar'
import { primary } from '@/lib/colors'

const S = {}

S.WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`

S.RatingSpan = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  padding-right: 5px;
  line-height: 0.8rem;
`

S.BackStarsDiv = styled.div`
  position: relative;
  color: #d3d3d3;
`

S.FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${(props) => props.rating};
  color: ${primary};
`

function Stars(props) {
  let rating = 0

  if (props.stars) {
    rating =
      (((Math.round((props.stars * 10) / 5) * 5) / 10) * 20).toString() + '%'
  }

  return (
    <React.Fragment>
      <S.WrapperDiv>
        <S.RatingSpan>{props.stars || 'N/A'}</S.RatingSpan>
        <S.BackStarsDiv>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <S.FrontDiv rating={rating}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </S.FrontDiv>
        </S.BackStarsDiv>
      </S.WrapperDiv>
    </React.Fragment>
  )
}

export default Stars
