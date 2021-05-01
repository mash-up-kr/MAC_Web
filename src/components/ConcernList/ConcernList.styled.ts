import styled, { css } from 'styled-components'

import { ConcernWrapper } from 'components/ConcernItem/ConcernItem.styled'
import { Select, Option } from 'elements/Select'
import SVGIcon from 'elements/SVGIcon'

interface ArrowIconProps {
  opened: boolean
}

interface FilterWrapperProps {
  width: string
}

interface FilterSelectProps {
  width: string
}

export const ConcernListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  overflow-y: scroll;
`

export const ConcernListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  margin-bottom: 16px;
  overflow: hidden;
`

export const HeaderMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: 50%;
  cursor: pointer;
`

export const HeaderLeftMenu = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderRightMenu = styled.div`
  display: flex;
  align-items: center;

  ${HeaderMenuItem} + ${HeaderMenuItem} {
    margin-left: 12px;
  }
`

export const HeaderLocationName = styled.p`
  max-width: 80%;
  margin-left: 8px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
`

export const FilterListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FilterWrapper = styled.div<FilterWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
`

export const FilterLabel = styled.label`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray03};
`

export const FilterInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  cursor: pointer;
`

export const FilterInput = styled.input`
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.gray11};
  border: 0;
  cursor: pointer;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`

export const ArrowIcon = styled(SVGIcon)<ArrowIconProps>`
  transition: transform 0.1s;

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(-180deg);
    `}
`

export const FilterSelect = styled(Select)<FilterSelectProps>`
  width: ${({ width }) => width};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #aaaaaa;
  border-radius: 4px;
`

export const FilterOption = styled(Option)`
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray01};
  }
`

export const ConcernListWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;

  ${ConcernWrapper} + ${ConcernWrapper} {
    margin-top: 12px;
  }
`

FilterOption.displayName = 'Option'
