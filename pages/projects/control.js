import Layout from '../components/layout'
import { Flex, Box, Image } from 'rebass'
import { Project, ProjectContainer, ProjectPhoto } from './components/Project'
import styles from '../../styles/Arrogance.module.scss'




export const ControlContent = ({displayType}) => {
  return (
    <Project projectName="Control" projectPhotos={[
      '../media/projects/control/CONTROL.png',
      '../media/projects/control/3.jpg',
      '../media/projects/control/5.jpg',
      '../media/projects/control/10.jpg',
      '../media/projects/control/11.jpg'
    ]} displayType={displayType}/>
  )

}

export default function Control(){
  return(
    <Layout>
      <ControlContent />
    </Layout>
  )
}





