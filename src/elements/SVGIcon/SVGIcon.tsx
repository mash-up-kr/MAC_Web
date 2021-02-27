/* External dependencies */
import React, { useMemo } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import * as Styled from './SVGIcon.styled'

interface SVGIconProps {
  name: string
  size: number
}

function SVGIcon({ name, size }: SVGIconProps) {
  const src = useMemo(() => {
    const fileName = _.endsWith(name, '.svg') ? name : `${name}.svg`
    try {
      return require(`assets/${fileName}`)
    } catch (e) {
      console.error(
        `cannot find icon name ${name}. Pleace check again. error message : ${e.message}`,
      )
    }
  }, [name])

  return (
    <Styled.SVGIconWrapper size={size}>
      <Styled.SVGIcon src={src} />
    </Styled.SVGIconWrapper>
  )
}

export default SVGIcon
