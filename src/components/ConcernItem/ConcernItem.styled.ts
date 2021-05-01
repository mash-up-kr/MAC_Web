/* External dependencies */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ConcernWrapper = styled(Link)`
  display: flex;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  padding: 8px 0;
`

export const CategoryImage = styled.img`
  width: 44px;
  height: 44px;
`

export const Category = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 20px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 12px;
  border-radius: 8px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Title = styled.p`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CommentNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 8px;
  font-weight: bolder;
  border-radius: 50%;
`

export const CommentCount = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.point};

  & > span {
    font-weight: bold;
  }
`

export const Content = styled.p`
  display: -webkit-box;
  height: 40px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  line-height: 20px;
`

export const CreatedAt = styled.p`
  margin-top: auto;
  color: ${({ theme }) => theme.colors.purpleGray};
  font-size: 12px;
`
