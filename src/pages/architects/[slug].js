import NavBar from "@/components/NavBar"
import Page from "@/components/Page"
import { getAllArchitects, getArchitect } from "@/data/architects"

export async function getStaticProps({ params }) {
    const architect = await getArchitect(params.slug)
    return {
      props: {
        architect,
      }
    }
}

export async function getStaticPaths() {
    const fileNames = await getAllArchitects()

    return {
      paths: fileNames.map(slug => ({ params: { slug }})),
      fallback: false,
    }
}

export default function Architects({ architect }) {
  return (
    <Page>
        <NavBar />
        {JSON.stringify(architect)}
    </Page>
  )
}