import styled from 'styled-components'

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 640px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background};

  @media ${({ theme }) => theme.media.mobileL} {
    width: 100%;
    height: 100vh;
  }
`
