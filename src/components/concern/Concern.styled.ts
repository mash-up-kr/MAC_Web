import styled from 'styled-components'

export const ConcernCard = styled.div`
  width: 300px;
  height: 435px;
  background-color: ${props => props.theme.colors.darkGray3};
  border: 1px solid ${props => props.theme.colors.point};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`
export const TitleBox = styled.div`
  padding: 10px;
`

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DistanceArea = styled.div`
  font-size: 11px;
  display: flex;
  flex: 1;
  align-items: center;
  color: ${props => props.theme.colors.gray05};
`

export const CategoryArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`

export const AnimalArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const HashtagArea = styled.div`
  display: flex;
`

export const Hashtag = styled.div<{ background?: string }>`
  width: 64px;
  height: 20px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.gray11};
  background: ${props => props.background};
  font-size: 12px;
  align-items: center;
  border-radius: 3px;
  margin: 5px;
`

export const Writer = styled.div`
  color: ${props => props.theme.colors.gray05};
  font-size: 12px;
  margin-top: 8px;
`

export const ShareArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
export const Title = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
`

export const DividerArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`
export const Divider = styled.div`
  width: 280px;
  border: 1px solid ${props => props.theme.colors.PurpleGray};
`
export const ContentBox = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`
export const Content = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
`
export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 80px;
  height: 24px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.PurpleGray};
  margin-top: 16px;
`
