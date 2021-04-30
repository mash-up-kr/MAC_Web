/* External dependencies */
import styled from 'styled-components'

/* Internal dependencies */
import SVGIcon from 'elements/SVGIcon'

export const ConcernCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`

export const ConcernCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  margin-bottom: 14px;
  line-height: 46px;
  text-align: center;
  font-size: 20px;
  color: white;
`

export const BackButton = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`

export const ConcernCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  height: 475px;
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
  align-items: center;
  color: ${props => props.theme.colors.gray05};
`

export const Distance = styled.p`
  line-height: 24px;
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

  span {
    font-weight: bold;
  }
`

export const ShareArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
export const Title = styled.div`
  max-height: 60px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  margin-top: 18px;
  text-align: center;
`

export const DividerArea = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`
export const Divider = styled.div`
  width: 280px;
  border: 1px solid ${props => props.theme.colors.purpleGray};
`
export const ContentBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  overflow: hidden;
  color: #fff;
`
export const Content = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
  overflow-y: scroll;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  line-height: 130%;
`
export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 16px;
  font-size: 12px;
  width: 80px;
  height: 24px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.purpleGray};
`
