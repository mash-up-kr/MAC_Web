import React, { useCallback, useState, useMemo } from 'react'
import { noop } from 'lodash-es'

import { Overlay, OverlayPosition } from 'elements/Overlay'
import Option from './Option'

interface SelectProps {
  className?: string
  showSelect: boolean
  target: HTMLElement | null
  container?: HTMLElement | null
  placement?: OverlayPosition
  marginX?: number
  marginY?: number
  defaultKey?: any
  children: React.ReactElement[]
  onSelect?: (value: any) => void
  onHide?: () => void
}

function Select({
  className,
  showSelect = false,
  target,
  container,
  placement = OverlayPosition.BottomLeft,
  marginX = 0,
  marginY = 0,
  defaultKey,
  children,
  onSelect = noop,
  onHide = noop,
}: SelectProps) {
  const [currentSelectedKey, setCurrentSelectedKey] = useState(defaultKey)

  const handleSelectOption = useCallback(
    (value: any, key: any) => {
      onSelect(value)
      setCurrentSelectedKey(key)
      onHide()
    },
    [onSelect, onHide],
  )

  const OptionList = useMemo(
    () =>
      React.Children.map(children, child => {
        // @ts-ignore
        if (child.type.displayName !== Option.displayName) {
          return null
        }

        return React.cloneElement(child, {
          selected: currentSelectedKey === child.props.optionKey,
          onSelectOption: handleSelectOption,
        })
      }),
    [children, currentSelectedKey, handleSelectOption],
  )

  return (
    <Overlay
      className={className}
      show={showSelect}
      target={target}
      container={container}
      placement={placement}
      marginX={marginX}
      marginY={marginY}
      onHide={onHide}
    >
      {OptionList}
    </Overlay>
  )
}

export default Select
