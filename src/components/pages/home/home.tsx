import { Button, Container, Flex, Img, Stack, Text } from 'components/atoms'
import { BgHome, Title } from 'components/molecules'
import { useTranslate } from 'hooks'

import React, { forwardRef, memo } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { scrollTo } from 'utils'

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>
}

const Home = forwardRef<HTMLDivElement, Props>(({ scrollRef }, ref) => {
  const { translate } = useTranslate()

  return (
    <Flex
      as="section"
      ref={ref}
      align="center"
      css={{
        position: 'relative'
      }}
    >
      <Container
        as={Flex}
        css={{
          py: '12rem',
          gap: '$xxl',
          '@desktop': { flexWrap: 'nowrap' },
          '@tablet': {
            py: '8rem',
            px: '$xxs',
            textAlign: 'center'
          }
        }}
      >
        <Flex direction="column" align={{ '@desktop': 'end' }} stretch>
          <Stack
            css={{
              position: 'relative',
              width: 'max-content',
              height: 'auto',
              '&:hover:after': {
                bottom: '-12px',
                right: '-12px',
                border: '2px solid $primary'
              },
              '&:after': {
                transition: '200ms ease',
                zIndex: -1,
                content: '',
                position: 'absolute',
                display: 'block',
                right: '-24px',
                bottom: '-24px',
                width: '100%',
                height: '100%',
                borderRadius: '$nano',
                border: '2px solid $light600'
              }
            }}
          >
            <Img
              src="/images/personal.png"
              css={{
                width: '300px',
                height: '300px',
                borderRadius: '$nano'
              }}
            />
          </Stack>
        </Flex>
        <Flex direction="column" stretch>
          <Title>{translate('home.title')}</Title>
          <Text size="sm" css={{ color: '$light600', mb: '$xs' }}>
            {translate('home.subtitle')}
          </Text>

          <Text>{translate('home.description.paragraph-1')}</Text>
          <Text>{translate('home.description.paragraph-2')}</Text>

          <Button
            onClick={() => scrollTo(scrollRef.current)}
            variant="primary"
            border="pill"
            size="sm"
            css={{
              mt: '$xs',
              width: 'max-content'
            }}
            icon={<HiOutlineChevronDown />}
          >
            See more
          </Button>
        </Flex>
      </Container>
      <BgHome
        css={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: 'auto',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
    </Flex>
  )
})

export default memo(Home)
