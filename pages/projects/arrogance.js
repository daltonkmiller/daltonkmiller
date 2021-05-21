import Layout from '../components/layout'
import { Flex, Box, Image } from 'rebass'
import { Project, ProjectContainer, ProjectPhoto } from './components/Project'
import styles from '../../styles/Arrogance.module.scss'




export const ArroganceContent = ({displayType}) => {
  return (
    <Project projectName="Arrogance" projectPhotos={[
      '../media/projects/arrogance/1.png',
      '../media/projects/arrogance/3_1.jpg',
      '../media/projects/arrogance/5.jpg',
      '../media/projects/arrogance/6.jpg',
      '../media/projects/arrogance/3_1.jpg',
      '../media/projects/arrogance/5.jpg',
    ]} displayType={displayType}/>
  )

}

export default function Arrogance(){
  return(
    <Layout>
      <ArroganceContent />
    </Layout>
  )
}