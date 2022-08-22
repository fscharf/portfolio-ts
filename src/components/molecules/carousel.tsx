import { CSS } from '@stitches/react'
import { Button, Flex, Stack } from 'components/atoms'
import { useTranslate } from 'hooks'
import React, { FC, memo, ReactNode, useState } from 'react'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import { useSwipeable } from 'react-swipeable'

type CarouselProps = {
  children?: ReactNode
  itemsPerPage?: number
  spacing?: CSS['margin']
  nextLabel?: string
  previousLabel?: string
}

type CarouselItemProps = {
  children?: ReactNode
  width?: CSS['width']
  spacing?: CSS['margin']
}

const Carousel: FC<CarouselProps> = ({
  children,
  itemsPerPage = 1,
  spacing = '$xxxs',
  previousLabel,
  nextLabel
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const { translate } = useTranslate()

  const childrenLength = React.Children.count(children)
  const pagesOffset = childrenLength / itemsPerPage
  const finalPage = Math.round(pagesOffset) - 1

  const handleActiveIndex = (index: number) => {
    if (index < 0 || index >= pagesOffset) index = 0

    setActiveIndex(index)
  }

  const handleNext = () => handleActiveIndex(activeIndex + 1)
  const handlePrevious = () => handleActiveIndex(activeIndex - 1)

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious
  })

  return (
    <Stack {...swipeHandlers} css={{ overflow: 'hidden' }}>
      <Stack
        css={{
          whiteSpace: 'nowrap',
          transition: 'transform .3s',
          transform: `translateX(-${activeIndex * 100}%)`
        }}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(
            child as React.ReactElement<CarouselItemProps>,
            {
              width: `calc(100% / ${itemsPerPage} - ${spacing})`,
              spacing
            }
          )
        })}
      </Stack>
      <Flex
        css={{
          'svg > path': {
            stroke: '$dark'
          }
        }}
      >
        {activeIndex > 0 && (
          <Button onClick={handlePrevious}>
            <GrFormPreviousLink />{' '}
            {previousLabel || translate('carousel.previous')}
          </Button>
        )}

        {activeIndex < finalPage && (
          <Button onClick={handleNext}>
            {nextLabel || translate('carousel.next')} <GrFormNextLink />
          </Button>
        )}
      </Flex>
    </Stack>
  )
}

export const CarouselItem: FC<CarouselItemProps> = ({
  children,
  width,
  spacing
}) => {
  return (
    <Stack
      css={{
        display: 'inline-flex',
        marginRight: spacing,
        width,
        height: '350px'
      }}
    >
      {children}
    </Stack>
  )
}

export default memo(Carousel)
