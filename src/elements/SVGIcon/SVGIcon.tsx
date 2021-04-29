/* External dependencies */
import React, { useMemo } from 'react'
import { endsWith } from 'lodash-es'

/* Internal dependencies */
import * as Styled from './SVGIcon.styled'

interface SVGIconProps {
  className?: string
  name: string
  size: number
}

function SVGIcon({ className, name, size }: SVGIconProps) {
  const src = useMemo(() => {
    const fileName = endsWith(name, '.svg') ? name : `${name}.svg`
    try {
      return require(`assets/${fileName}`).default
    } catch (e) {
      console.error(
        `cannot find icon name ${name}. Please check again. error message : ${e.message}`,
      )
    }
  }, [name])

  return (
    <Styled.SVGIconWrapper className={className} size={size}>
      <Styled.SVGIcon src={src} />
    </Styled.SVGIconWrapper>
  )
}

export default SVGIcon
