import { Container, Flex } from 'components/atoms'
import { Title } from 'components/molecules'
import { forwardRef } from 'react'
import { styled } from 'theme'

const Card = styled(Flex, 'article', {
  display: 'flex',
  flex: 1,
  borderRadius: '$xxxs',
  backgroundColor: '$black600',
  padding: '$xs',
  color: '$light'
})

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  // const { translate } = useTranslate()

  return (
    <Flex
      as="section"
      ref={ref}
      direction="column"
      css={{
        py: '12rem',
        position: 'relative',
        '@tablet': {
          px: '$xxs',
          textAlign: 'center'
        }
      }}
    >
      <Container>
        <Title>Skills</Title>

        <Flex css={{ mt: '$xs', gap: '$xxs' }}>
          <Card>Hello world</Card>
          <Card>Hello world</Card>
          <Card>Hello world</Card>
        </Flex>
      </Container>
    </Flex>
  )
})

export default Skills
