import React, { useMemo, useState } from 'react'

import useIsShow from 'hooks/useIsShow'
import Category, { categoryList } from 'constants/Category'
import Distance, { distanceList } from 'constants/Distance'
import Emotion, { emotionList } from 'constants/Emotion'
import ConcernItem from 'components/ConcernItem'
import * as Styled from './ConcernList.styled'

interface ConcernListProps {
  concernList: any
}

function ConcernList({ concernList }: ConcernListProps) {
  const [currentCtegory, setCurrentCtegory] = useState(Category.Love)
  const [currentDistance, setCurrentDistance] = useState(Distance.D3)
  const [currentEmotion, setCurrentEmotion] = useState(Emotion.Happy)

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
            value={currentCtegory}
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
          defaultKey={Category.Love}
          onSelect={setCurrentCtegory}
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
      currentCtegory,
      filterListWrapperRef,
      handleHideCategorySelect,
      handleShowCategorySelect,
      showCategorySelect,
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
            value={currentDistance}
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
          defaultKey={Distance.D3}
          onSelect={setCurrentDistance}
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
      currentDistance,
      distanceTargetRef,
      filterListWrapperRef,
      handleHideDistanceSelect,
      handleShowDistanceSelect,
      showDistanceSelect,
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
            value={currentEmotion}
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
          defaultKey={Emotion.Happy}
          onSelect={setCurrentEmotion}
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
      currentEmotion,
      emotionTargetRef,
      filterListWrapperRef,
      handleHideEmotionSelect,
      handleShowEmotionSelect,
      showEmotionSelect,
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
