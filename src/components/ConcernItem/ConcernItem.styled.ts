import styled from 'styled-components'

export const ConcernWrapper = styled.div`
  display: flex;
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  padding: 5px 0;
`

export const CategoryImage = styled.img`
  width: 52px;
  height: 52px;
`

export const Category = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 12px;
  border-radius: 8px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const Content = styled.p`
  height: 32px;
  margin-top: 6px;
  overflow: hidden;
  font-size: 12px;
`

export const CreatedAt = styled.p`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.purpleGray};
  font-size: 12px;
`
