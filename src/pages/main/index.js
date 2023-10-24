import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from './Hero'
import LatestProjects from './LatestProjects'
import WhyTraditional from './WhyTraditional'
import Footer from '@/components/Footer'
import Page from '@/components/Page'

export default function Home() {
  return (
    <>
      <Page>
        <NavBar />
        <Hero />
        <LatestProjects />
        <WhyTraditional />
        <Footer />
      </Page>
    </>
  )
}
