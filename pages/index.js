import Layout from './components/layout'
import { Flex, Box, Image } from 'rebass'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home">
      <Flex height="100%" justifyContent="center" alignItems="center">
        {/* <Image src="../images/outside.gif" style={{position:'fixed', height:'100vh', width:'100vw'}}/> */}
        <Image src='../images/loading.gif' width="750px"/>
      </Flex>
    </Layout>
  )
}
