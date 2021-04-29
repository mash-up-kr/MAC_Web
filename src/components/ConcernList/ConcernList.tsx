/* External dependencies */
import React, { useMemo, useState } from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import Concern from 'models/Concern'
import useIsShow from 'hooks/useIsShow'
import Category, { categoryList } from 'constants/Category'
import Distance, { distanceList } from 'constants/Distance'
import Emotion, { emotionList } from 'constants/Emotion'
import { QueryProps } from 'containers/ConcernListContainer'
import ConcernItem from 'components/ConcernItem'
import * as Styled from './ConcernList.styled'

export type Value = Category | Distance | Emotion

interface ConcernListProps {
  concernList: Immutable.List<Concern>
  query: QueryProps
  onChangeValue: (key: string, value: Value) => void
}

function ConcernList({ concernList, query, onChangeValue }: ConcernListProps) {
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

  const CategoryFilter = useMemo(
    () => (
      <Styled.FilterWrapper>
        <Styled.FilterLabel>고민</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setCategoryTargetRef}
          onClick={handleShowCategorySelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.category ?? ''}
            readOnly={true}
          />
          <Styled.ArrowIcon
            name="small-arrow"
            size={18}
            opened={showCategorySelect}
          />
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          showSelect={showCategorySelect}
          target={categoryTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Category) => onChangeValue('category', value)}
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
      onChangeValue,
    ],
  )

  const DistanceFilter = useMemo(
    () => (
      <Styled.FilterWrapper>
        <Styled.FilterLabel>거리</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setDistanceTargetRef}
          onClick={handleShowDistanceSelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.distance ? `${query.distance}km` : ''}
            readOnly={true}
          />
          <Styled.ArrowIcon
            name="small-arrow"
            size={18}
            opened={showDistanceSelect}
          />
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          showSelect={showDistanceSelect}
          target={distanceTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Distance) => onChangeValue('distance', value)}
          onHide={handleHideDistanceSelect}
        >
          {distanceList.map(distance => (
            <Styled.FilterOption
              value={distance}
              key={distance}
              optionKey={distance}
            >
              {distance}
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
      onChangeValue,
    ],
  )

  const EmotionFilter = useMemo(
    () => (
      <Styled.FilterWrapper>
        <Styled.FilterLabel>감정</Styled.FilterLabel>
        <Styled.FilterInputWrapper
          ref={setEmotionTargetRef}
          onClick={handleShowEmotionSelect}
        >
          <Styled.FilterInput
            type="text"
            value={query.emotion ?? ''}
            readOnly={true}
          />
          <Styled.ArrowIcon
            name="small-arrow"
            size={18}
            opened={showEmotionSelect}
          />
        </Styled.FilterInputWrapper>
        <Styled.FilterSelect
          showSelect={showEmotionSelect}
          target={emotionTargetRef}
          container={filterListWrapperRef}
          marginY={4}
          marginX={1}
          onSelect={(value: Emotion) => onChangeValue('emotion', value)}
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
      onChangeValue,
    ],
  )

  const concerns = useMemo(() => {
    return concernList.map(concern => (
      <ConcernItem key={concern.id} concern={concern} />
    ))
  }, [concernList])

  return (
    <Styled.ConcernListContainer>
      <Styled.FilterListWrapper ref={setFilterListWrapperRef}>
        {CategoryFilter}
        {DistanceFilter}
        {EmotionFilter}
      </Styled.FilterListWrapper>
      <Styled.ConcernListWrapper>{concerns}</Styled.ConcernListWrapper>
    </Styled.ConcernListContainer>
  )
}

export default ConcernList
