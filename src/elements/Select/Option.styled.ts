import styled, { css } from 'styled-components'

interface OptionProps {
  selected: boolean
}

export const Option = styled.div<OptionProps>`
  width: 100%;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.gray02} !important;
    `}
`
