import React from 'react'
import { Flex, Box, Text, Avatar, Image, useMediaQuery, Button, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import logo from "../assets/logonextai.png"
import { FaNetworkWired } from 'react-icons/fa'
import { FaCircleInfo } from "react-icons/fa6";
import { IoOptionsSharp } from "react-icons/io5";

import { GiTakeMyMoney } from "react-icons/gi";
const styledNav = {
    bg: '#1a202c',
    h: "10%",
    justifyContent: "space-between",
    alignItems: "center",
    px: '20px'
}

function Navbar(props) {
    const [isLargerThan1000] = useMediaQuery('(max-width: 1000px)')
    return (
        <Flex sx={styledNav}>
            <Flex color="white" alignItems="center" gap={2}>
                <Image
                    borderRadius='full'
                    boxSize='40px'
                    src={logo}
                    alt='Logo'
                    bg="white"
                    filter="invert(100%) "
                />
                <Text fontSize="larger">{props.name}</Text>
            </Flex>
            <Flex color="white" alignItems="center" gap={3}>
                {!isLargerThan1000 && <Button colorScheme='whiteAlpha' variant='ghost' color="white" _hover={{ textDecorationLine: 'underline', textUnderlineOffset: '6px' }}>
                    Pricing
                </Button>}
                {!isLargerThan1000 && <Button colorScheme='whiteAlpha' variant='ghost' color="white" _hover={{ textDecorationLine: 'underline', textUnderlineOffset: '6px' }}>
                    About Us
                </Button>}
                {!isLargerThan1000 && <Button colorScheme='whiteAlpha' variant='ghost' color="white" _hover={{ textDecorationLine: 'underline', textUnderlineOffset: '6px' }}>
                    Services
                </Button>}
                {!isLargerThan1000 ? <Flex gap="5px" alignItems="center"><Avatar bgColor="teal" size="sm" /><Text fontSize=".8rem">User Name</Text></Flex> : <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='ghost'
                        fontSize="2rem"
                        color="white"
                        bgColor="none"
                        _hover={{ bg: 'white' }}
                        _focus={{ bg: 'none' }}
                        _active={{ bg: "none" }}
                    />
                    <MenuList color="black" >
                        <MenuItem >
                            <Flex gap="5px" alignItems="center"><Avatar bgColor="teal" size="sm" /><Text fontSize="1rem">User Name</Text></Flex>
                        </MenuItem>
                        <MenuItem icon={<IoOptionsSharp  color='teal' fontSize="30px" />} onClick={props.onOpen}>
                            <Text fontSize="1rem">Options</Text>
                        </MenuItem>
                        <MenuItem icon={<FaNetworkWired color='teal' fontSize="30px" />} >
                            <Text fontSize="1rem">Services</Text>
                        </MenuItem>
                        <MenuItem icon={<GiTakeMyMoney color='teal' fontSize="30px" />}>
                        <Text fontSize="1rem" >Pricing</Text>
                        </MenuItem>
                        <MenuItem icon={<FaCircleInfo color='teal' fontSize="30px" />}>
                            <Text fontSize="1rem">About Us</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>}
            </Flex>
        </Flex>
    )
}

export default Navbar