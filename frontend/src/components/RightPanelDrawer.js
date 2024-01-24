
import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Radio,
    Stack,
    Button

} from '@chakra-ui/react'
import { Search2Icon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Flex, Text, Icon, InputGroup, InputRightElement, Input, Card, CardBody, CardHeader, Heading, CardFooter, Divider, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, useMediaQuery } from '@chakra-ui/react';

import { IoCreateSharp } from "react-icons/io5";

const chathistory = [
    {
      title: "How to use Chakra ui?"
    },
    {
      title: "How to use useDisclosure ?"
    },
    {
      title: "How to use paint ui?"
    },
    {
      title: "How to use wall crack ui?"
    }
  ]

function RightPanelDrawer({ open, isOpen, onOpen, onClose, placement, setPlacement }) {
    return (
        <>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent border="2px solid black" display="flex" bgColor="rgb(55, 68, 93)" overflow="hidden" >
                    <DrawerCloseButton />
                    <DrawerHeader textAlign="center" fontSize="2rem">Options</DrawerHeader>
                    <Divider />
                    <DrawerBody width="100%" h="100vh">
                        <Flex flexDirection="column" width="100%" justifyContent="space-between" overflowY="auto" overflowX="hidden" css={{
                            '&::-webkit-scrollbar': {
                                width: '2px',
                            },
                            '&::-webkit-scrollbar-track': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: "black",
                                borderRadius: '24px',
                            },
                        }}>
                            <Flex as="ul" direction="column" listStyleImage="none" width="100%" textAlign="left" gap={3} p={2}>
                                <Button rightIcon={<Icon as={IoCreateSharp} />} colorScheme='blackAlpha'  >
                                    Create New Chat
                                </Button>
                                <Accordion allowMultiple defaultIndex={[0]} allowToggle >
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton _expanded={{ bg: '#1a202c' }} borderRight="2px solid grey" borderLeft="2px solid grey">
                                                <Box as="span" flex='1' textAlign='center' color="lightgrey" >
                                                    Click to See previous Chats
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <InputGroup size='md' mb={6}>
                                                <Input
                                                    pr='4.5rem'
                                                    type='text'
                                                    placeholder='Search for Chats'

                                                />
                                                <InputRightElement pr={1}>
                                                    <Button size='sm' onClick="" bg="none">
                                                        <Search2Icon />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <Flex direction="column" alignItems="center" textAlign="center" gap="5px" >
                                                {chathistory.map(el => {

                                                    return <Text p={2} borderRadius="20px" color='lightgrey' border="2px solid black" width="100%" variant='ghost' _hover={{textDecorationLine:'underline', textUnderlineOffset:'5px' , textDecorationColor:'white'}}  cursor="pointer">
                                                    {el.title} <ExternalLinkIcon />
                                                  </Text>
                                                })}
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem >
                                </Accordion >
                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: '#1a202c' }} borderRight="2px solid grey" borderLeft="2px solid grey">
                                                <Box as="span" flex='1' textAlign='center' color="lightgrey">
                                                    Click Here see general history
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            <InputGroup size='md' mb={6}>
                                                <Input
                                                    pr='4.5rem'
                                                    type='text'
                                                    placeholder='Search for history'

                                                />
                                                <InputRightElement pr={1}>
                                                    <Button size='sm' onClick="" bg="none">
                                                        <Search2Icon />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                            <Flex direction="column" alignItems="center" textAlign="center" gap="5px" >
                                                {chathistory.map(el => {

                                                    return <Text p={2} borderRadius="20px" color='lightgrey' border="2px solid black" width="100%" variant='ghost' _hover={{textDecorationLine:'underline', textUnderlineOffset:'5px' , textDecorationColor:'white'}}  cursor="pointer">
                                                    {el.title} <ExternalLinkIcon />
                                                  </Text>
                                                })}
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>

                            </Flex>

                        </Flex >
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default RightPanelDrawer