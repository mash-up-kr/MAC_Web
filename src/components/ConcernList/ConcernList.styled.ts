import styled from 'styled-components'

import { ConcernWrapper } from 'components/ConcernItem/ConcernItem.styled'

export const ConcernListWrapper = styled.div`
  padding: 0 16px;

  ${ConcernWrapper} + ${ConcernWrapper} {
    margin-top: 12px;
  }
`
