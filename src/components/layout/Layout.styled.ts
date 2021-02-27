import styled from 'styled-components'

export const MainLayout = styled.div`
  min-width: 360px;
  max-width: 640px;
  min-height: 640px;
  background-color: ${props => props.theme.colors.background};
`
export const Header = styled('div')`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  text-align: center;
  color: #ffffff;
  padding: 18px 0 20px;
`
