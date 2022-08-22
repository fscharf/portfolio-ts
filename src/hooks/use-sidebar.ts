import { SidebarRef } from 'components/molecules'
import { useCallback, useRef } from 'react'

export const useSidebar = () => {
  const sidebarRef = useRef<SidebarRef>(null)

  const handleOpenSidebar = useCallback(() => {
    if (sidebarRef.current !== null) {
      return sidebarRef.current.onOpen()
    }
  }, [])

  return { handleOpenSidebar, sidebarRef }
}
