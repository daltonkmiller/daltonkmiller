import Layout from './components/layout'
import { Flex, Box, Image } from 'rebass'
import { ArroganceContent } from './projects/arrogance'
import { ControlContent } from './projects/control'
import Nav from './components/nav'
import styles from '../styles/Home.module.css'
import { TexasContent } from './projects/texas'

export default function Home() {
  return (
    <Layout title="Home">
      <ControlContent displayType='home' />
      <ArroganceContent displayType='home' />
      <TexasContent displayType='home' />
    </Layout>
  )
}
