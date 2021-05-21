import { Flex, Box, Image } from 'rebass'
import styles from '../../../styles/projects/components/Project.module.scss'



export const ProjectImage = ({imageName, src, ...props}) => {
    return(
        <Image src={src} {...props}/>
    )
}



export const Project = ({projectName, projectPhotos, projectDesc, children, displayType, ...props}) => {
    return(
        <Box padding="0 1% 0 1%">
          
            <Box className={`${styles.imagesContainer} ${displayType=='home' && styles.homeImagesContainer}`}>
                <Box className={`${styles.mainImageContainer} ${displayType=='home' && styles.homeMainImageContainer}`}>
                    <ProjectImage className={`${styles.projectImage} ${styles.mainImage}`} src={projectPhotos[0]}/>
                </Box>
                <Flex className={`${styles.imageFlex} ${displayType=='home' && styles.homeImageFlex }`}>
                    {projectPhotos.map((url, key) => (
                        key != 0 
                        ? 
                        <Box className={`${styles.imageContainer}`} key={key}>
                            <ProjectImage className={`${styles.projectImage} ${displayType=='home' && styles.homeProjectImage}`} src={url}/>
                        </Box> 
                        : ''
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

