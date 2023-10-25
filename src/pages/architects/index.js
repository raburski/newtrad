import NavBar from "@/components/NavBar"
import Page from "@/components/Page"
import { getAllArchitects } from "@/data/architects"
import Link from "next/link"

export async function getStaticProps() {
    const fileNames = await getAllArchitects()

    return {
      props: {
        architects: fileNames,
      }
    }
}

export default function Architects({ architects }) {
  return (
    <Page>
        <NavBar />
        {architects.map(({ slug, name }) => <Link key={slug} href={`/architects/${slug}`}>{name}</Link>)}
    </Page>
  )
}