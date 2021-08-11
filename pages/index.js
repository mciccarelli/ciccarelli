import { getAllProjects } from '../lib/api'
import { Layout } from '../components'

export default function Index({ projects }) {
  return <Layout projects={projects} />
}

export async function getStaticProps() {
  const data = await getAllProjects()
  return {
    props: { projects: data || null },
    revalidate: 1,
  }
}
