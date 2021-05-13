import Layout from './components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Home">
        <h1>Home</h1>
      </Layout>
    </div>
  )
}
