import { CSS } from '@stitches/react'
import { Button, Stack } from 'components/atoms'
import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useMemo,
  useState
} from 'react'
import { HiOutlineX } from 'react-icons/hi'

type SidebarProps = {
  children?: React.ReactNode
  width?: CSS['width']
  backgroundColor?: CSS['backgroundColor']
  hasCloseButton?: boolean
  ref: React.Ref<SidebarRef>
}

export type SidebarRef = {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}

const Sidebar = forwardRef<SidebarRef, SidebarProps>(
  (
    {
      width = '300px',
      children,
      backgroundColor = '$dark',
      hasCloseButton = true
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const transform = useMemo((): CSS => {
      if (isOpen) return { translateX: 0, opacity: 1 }
      return {
        translateX: width,
        opacity: 0
      }
    }, [isOpen])

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    useImperativeHandle(ref, () => ({ onOpen, onClose, isOpen }))

    return (
      <React.Fragment>
        {isOpen && (
          <Stack
            css={{
              position: 'fixed',
              inset: 0,
              height: '100vh',
              backgroundColor: '$black600',
              backdropFilter: 'blur(12px)',
              zIndex: 998,
              overflow: 'hidden'
            }}
            onClick={onClose}
          />
        )}
        <Stack
          as="aside"
          css={{
            position: 'fixed',
            top: 0,
            height: '100vh',
            transition: '400ms',
            zIndex: 999,
            right: 0,
            width,
            backgroundColor,
            ...transform
          }}
        >
          {hasCloseButton && (
            <Button
              css={{ position: 'absolute', right: 0, top: 0, padding: '$xxxs' }}
              onClick={onClose}
            >
              <HiOutlineX size="24px" />
            </Button>
          )}

          {isOpen && children}
        </Stack>
      </React.Fragment>
    )
  }
)

export default memo(Sidebar)
