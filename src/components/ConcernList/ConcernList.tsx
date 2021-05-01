/* External dependencies */
import React, { useMemo, useState, useCallback } from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import Concern from 'models/Concern'
import useIsShow from 'hooks/useIsShow'
import Category, { categoryList } from 'constants/Category'
import Distance, { distanceList } from 'constants/Distance'
import Emotion, { emotionList } from 'constants/Emotion'
import { QueryProps } from 'containers/ConcernListContainer'
import ConcernItem from 'components/ConcernItem'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './ConcernList.styled'

export type Value = Category | Distance | Emotion

interface ConcernListProps {
  concernList: Immutable.List<Concern>
  query: QueryProps
  onChangeQuery: (key: string, value: Value) => void
  onClearQuery: () => void
}

function ConcernList({
  concernList,
  query,
  onChangeQuery,
  onClearQuery,
}: ConcernListProps) {
  const [
    filterListWrapperRef,
    setFilterListWrapperRef,
  ] = useState<HTMLDivElement | null>(null)

  const [
    categoryTargetRef,
    setCategoryTargetRef,
  ] = useState<HTMLDivElement | null>(null)
  const [
    distanceTargetRef,
    setDistanceTargetRef,
  ] = useState<HTMLDivElement | null>(null)
  const [
    emotionTargetRef,
    setEmotionTargetRef,
  ] = useState<HTMLDivElement | null>(null)

  const [
    showCategorySelect,
    handleShowCategorySelect,
    handleHideCategorySelect,
  ] = useIsShow(false)
  const [
    showDistanceSelect,
    handleShowDistanceSelect,
    handleHideDistanceSelect,
  ] = useIsShow(false)
  const [
    showEmotionSelect,
    handleShowEmotionSelect,
    handleHideEmotionSelect,
  ] = useIsShow(false)

  const handleChangeQuery = useCallback(
    (key: string, value: Value) => {
      onChangeQuery(key, value)
    },
    [onChangeQuery],
  )

  const handleClearQuery = useCallback(() => {
    onClearQuery()
  }, [onClearQuery])

  const CategoryFilter = useMemo(
    () => (
      <Styled.FilterWrapper width="23%">
        <Styled.FilterLabel>고민</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setCategoryTargetRef}
          onClick={handleShowCategorySelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.category ?? '전체'}
            readOnly={true}
          />
          <Styled.IconWrapper>
            <Styled.ArrowIcon
              name="small-arrow"
              size={12}
              opened={showCategorySelect}
            />
          </Styled.IconWrapper>
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          width="23%"
          showSelect={showCategorySelect}
          target={categoryTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Category) => handleChangeQuery('category', value)}
          onHide={handleHideCategorySelect}
        >
          {categoryList.map(category => (
            <Styled.FilterOption
              value={category}
              key={category}
              optionKey={category}
            >
              {category}
            </Styled.FilterOption>
          ))}
        </Styled.FilterSelect>
      </Styled.FilterWrapper>
    ),
    [
      categoryTargetRef,
      query,
      filterListWrapperRef,
      handleHideCategorySelect,
      handleShowCategorySelect,
      showCategorySelect,
      handleChangeQuery,
    ],
  )

  const DistanceFilter = useMemo(
    () => (
      <Styled.FilterWrapper width="47%">
        <Styled.FilterLabel>거리</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setDistanceTargetRef}
          onClick={handleShowDistanceSelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.distance.name}
            readOnly={true}
          />
          <Styled.IconWrapper>
            <Styled.ArrowIcon
              name="small-arrow"
              size={12}
              opened={showDistanceSelect}
            />
          </Styled.IconWrapper>
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          width="47%"
          showSelect={showDistanceSelect}
          target={distanceTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Distance) => handleChangeQuery('distance', value)}
          onHide={handleHideDistanceSelect}
        >
          {distanceList.map(distance => (
            <Styled.FilterOption
              value={distance}
              key={distance.name}
              optionKey={distance}
            >
              {distance.name}
            </Styled.FilterOption>
          ))}
        </Styled.FilterSelect>
      </Styled.FilterWrapper>
    ),
    [
      query,
      distanceTargetRef,
      filterListWrapperRef,
      handleHideDistanceSelect,
      handleShowDistanceSelect,
      showDistanceSelect,
      handleChangeQuery,
    ],
  )

  const EmotionFilter = useMemo(
    () => (
      <Styled.FilterWrapper width="23%">
        <Styled.FilterLabel>감정</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setEmotionTargetRef}
          onClick={handleShowEmotionSelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.emotion ?? '전체'}
            readOnly={true}
          />
          <Styled.IconWrapper>
            <Styled.ArrowIcon
              name="small-arrow"
              size={12}
              opened={showEmotionSelect}
            />
          </Styled.IconWrapper>
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          width="23%"
          showSelect={showEmotionSelect}
          target={emotionTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Emotion) => handleChangeQuery('emotion', value)}
          onHide={handleHideEmotionSelect}
        >
          {emotionList.map(emotion => (
            <Styled.FilterOption
              value={emotion}
              key={emotion}
              optionKey={emotion}
            >
              {emotion}
            </Styled.FilterOption>
          ))}
        </Styled.FilterSelect>
      </Styled.FilterWrapper>
    ),
    [
      query,
      emotionTargetRef,
      filterListWrapperRef,
      handleHideEmotionSelect,
      handleShowEmotionSelect,
      showEmotionSelect,
      handleChangeQuery,
    ],
  )

  const concerns = useMemo(() => {
    return concernList.map(concern => (
      <ConcernItem key={concern.id} concern={concern} />
    ))
  }, [concernList])

  return (
    <Styled.ConcernListContainer>
      <Styled.ConcernListHeader>
        <Styled.HeaderLeftMenu>
          <Styled.HeaderMenuItem>
            <SVGIcon name="header-location" size={24} />
          </Styled.HeaderMenuItem>
          <Styled.HeaderLocationName>서울시 송파구</Styled.HeaderLocationName>
        </Styled.HeaderLeftMenu>
        <Styled.HeaderRightMenu>
          <Styled.HeaderMenuItem>
            <SVGIcon name="map" size={24} />
          </Styled.HeaderMenuItem>
          <Styled.HeaderMenuItem onClick={handleClearQuery}>
            <SVGIcon name="refresh" size={24} />
          </Styled.HeaderMenuItem>
        </Styled.HeaderRightMenu>
      </Styled.ConcernListHeader>
      <Styled.FilterListWrapper ref={setFilterListWrapperRef}>
        {DistanceFilter}
        {CategoryFilter}
        {EmotionFilter}
      </Styled.FilterListWrapper>
      <Styled.ConcernListWrapper>{concerns}</Styled.ConcernListWrapper>
    </Styled.ConcernListContainer>
  )
}

export default ConcernList
