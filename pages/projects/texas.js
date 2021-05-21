import Layout from '../components/layout'
import { Flex, Box, Image } from 'rebass'
import { Project, ProjectContainer, ProjectPhoto } from './components/Project'





export const TexasContent = ({displayType}) => {
  return (
    <Project projectName="Texas" projectPhotos={[
      '../media/projects/texas/Texas.png',
      '../media/projects/texas/1.jpg',
      '../media/projects/texas/3.jpg',
      '../media/projects/texas/5.jpg',
      '../media/projects/texas/4.jpg',
    ]} displayType={displayType}/>
  )

}

export default function Texas(){
  return(
    <Layout>
      <TexasContent />
    </Layout>
  )
}