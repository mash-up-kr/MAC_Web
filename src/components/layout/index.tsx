import React from 'react'
import { MainLayout, Header } from './Layout.styled'

const Layout = ({
  title = '',
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <MainLayout>
      <Header>{title}</Header>
      {children}
    </MainLayout>
  )
}

export default Layout
