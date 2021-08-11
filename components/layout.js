import { Meta, Sidebar } from '../components'

export default function Layout({ preview, children, projects }) {
  return (
    <>
      <Meta />
      <div className="layout min-h-screen">
        <Sidebar projects={projects} />
        <main>{children}</main>
      </div>
    </>
  )
}
