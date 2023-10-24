import NavBar from "@/components/NavBar"
import Page from "@/components/Page"
import { getAllArchitects } from "./data"
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
        {architects.map(slug => <Link href={`/architects/${slug}`}>{slug}</Link>)}
    </Page>
  )
}