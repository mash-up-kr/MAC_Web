import React, { useCallback } from 'react'

import * as Styled from './Option.styled'

interface OptionProps {
  value?: any
  key?: any
  selected?: boolean
  children: React.ReactNode
  onSelectOption: (value: any, key: any) => any
}

function Option({
  value,
  key,
  selected = false,
  children,
  onSelectOption,
}: OptionProps) {
  const handleSelectOption = useCallback(() => {
    onSelectOption(value, key)
  }, [value, key, onSelectOption])

  return (
    <Styled.Option selected={selected} onClick={handleSelectOption}>
      {children}
    </Styled.Option>
  )
}

export default Option
