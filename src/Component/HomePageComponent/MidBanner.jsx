import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const MidBanner = () => {
    return (
        <Box h={"auto"}>
            <Box p={"50px"}>
                <Image w={"100%"} h={"500px"} borderRadius={"10px"} src='https://iowaagliteracy.wordpress.com/wp-content/uploads/2017/11/spraying-corn.jpg?w=640' alt='Dan Abramov' />

            </Box>
        </Box>
    )
}

export default MidBanner