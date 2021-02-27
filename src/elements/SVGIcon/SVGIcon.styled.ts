/* External dependencies */
import styled from 'styled-components'

interface SVGIconWrapperProps {
  size: number
}

export const SVGIconWrapper = styled.div<SVGIconWrapperProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SVGIcon = styled.img`
  width: 100%;
  height: 100%;
`
