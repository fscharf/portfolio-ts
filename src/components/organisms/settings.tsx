import {
  FlagBrazil,
  FlagUsa,
  Flex,
  RoundLabel,
  RoundLabelWrapper,
  Text
} from 'components/atoms'
import { Sidebar, SidebarRef } from 'components/molecules'
import { useTranslate } from 'hooks'
import i18next from 'internationalization'
import { useTheme } from 'next-themes'
import { forwardRef, memo, useEffect, useState } from 'react'
import { presets, styled } from 'theme'

const Wrapper = styled(Flex, 'article', {
  gap: '$xxs',
  p: '$sm',
  defaultVariants: {
    direction: 'column'
  }
})

const Title = styled(Text, 'h4', {
  defaultVariants: {
    weight: 'bold',
    size: 'sm'
  }
})

const Section = styled(Flex, 'section', {
  gap: '$xxxs',
  defaultVariants: {
    direction: 'column'
  }
})

const Label = styled(Text, 'p', {
  color: '$light600'
})

const Row = styled(Flex, {
  gap: '$nano'
})

const Settings = forwardRef<SidebarRef>((_, ref) => {
  const { theme, setTheme } = useTheme()
  const { translate } = useTranslate()

  const [selectedTheme, setSelectedTheme] = useState<string>(theme || 'default')

  useEffect(() => {
    setTheme(selectedTheme)
  }, [selectedTheme])

  const languages = [
    { name: 'pt-BR', label: <FlagBrazil /> },
    { name: 'en-US', label: <FlagUsa /> }
  ]

  return (
    <Sidebar ref={ref}>
      <Wrapper>
        <Title>{translate('settings.title')}</Title>

        <Section>
          <Label>{translate('settings.themes')}</Label>
          <Row>
            {presets.map(([theme, color]) => {
              const isSelectedTheme = theme === selectedTheme

              return (
                <RoundLabelWrapper
                  key={Math.random()}
                  active={isSelectedTheme}
                  onClick={() => setSelectedTheme(theme)}
                >
                  <RoundLabel
                    css={{
                      backgroundColor: color
                    }}
                  />
                </RoundLabelWrapper>
              )
            })}
          </Row>
        </Section>
        <Section>
          <Label>{translate('settings.language')}</Label>
          <Row>
            {languages.map(language => {
              const isSelectedLanguage = language.name === i18next.language

              return (
                <RoundLabelWrapper
                  key={Math.random()}
                  active={isSelectedLanguage}
                  onClick={() => i18next.changeLanguage(language.name)}
                >
                  <RoundLabel>{language.label}</RoundLabel>
                </RoundLabelWrapper>
              )
            })}
          </Row>
        </Section>
      </Wrapper>
    </Sidebar>
  )
})

export default memo(Settings)
