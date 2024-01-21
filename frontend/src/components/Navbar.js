import React from 'react'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

const styledNav = {
    bg: '#1a202c',
    h:"10%",
    justifyContent:"space-between",
    alignItems:"center",
    px:'20px'
}

function Navbar(props) {
    return (
        <Flex sx={styledNav}>
            <Flex color="white">
                <Text>{props.name}</Text>
            </Flex>
            <Flex>
                <Avatar/>
            </Flex>
        </Flex>
    )
}

export default Navbar