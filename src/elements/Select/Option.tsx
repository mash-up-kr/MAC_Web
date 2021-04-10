import React, { useCallback } from 'react'
import { noop } from 'lodash-es'

import * as Styled from './Option.styled'

interface OptionProps {
  className?: string
  value?: any
  optionKey?: any
  selected?: boolean
  children: React.ReactNode
  onSelectOption?: (value: any, optionKey: any) => any
}

function Option({
  className,
  value,
  optionKey,
  selected = false,
  children,
  onSelectOption = noop,
}: OptionProps) {
  const handleSelectOption = useCallback(() => {
    onSelectOption(value, optionKey)
  }, [value, optionKey, onSelectOption])

  return (
    <Styled.Option
      className={className}
      selected={selected}
      onClick={handleSelectOption}
    >
      {children}
    </Styled.Option>
  )
}

Option.displayName = 'Option'

export default Option
