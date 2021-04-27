import React from 'react'
import { MainLayout, Wrapper } from './Layout.styled'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout>
      <Wrapper>{children}</Wrapper>
    </MainLayout>
  )
}
export default Layout
