import React, { useState } from 'react'
import { Flex, Text, Button, Icon, Card, CardBody, CardHeader, Heading, CardFooter, Divider } from '@chakra-ui/react';
import { AiFillPicture } from "react-icons/ai";
import { MdAudiotrack } from "react-icons/md";
import { FaVideo, FaFileUpload } from "react-icons/fa";
import { Center } from '@chakra-ui/react'

function LeftPanel() {

    const [isLoading, setisLoading] = useState(false);

    return (
        <Flex border="2px solid black" m={2} width="20%" flexDirection="column" justifyContent="space-between" >
            <Flex as="ul" direction="column" listStyleImage="none" width="100%" textAlign="left" gap={3} p={2}>
                <Button rightIcon={<Icon as={FaFileUpload} />} colorScheme='blackAlpha' isLoading={isLoading} loadingText='Uploading' onClick={()=>{setisLoading(!isLoading)}} >
                    Upload Custom Doc
                </Button>
                <Button rightIcon={<Icon as={AiFillPicture} />} colorScheme='whiteAlpha' variant="outline" textAlign="left">
                    Generate Pictures
                </Button>
                <Button rightIcon={<Icon as={FaVideo} />} colorScheme='whiteAlpha' variant='outline'>
                    Generate Videos
                </Button>
                <Button rightIcon={<Icon as={MdAudiotrack} />} colorScheme='whiteAlpha' variant='outline' >
                    Generate Audio
                </Button>
            </Flex>
            <Card m={2} size="sm" bg="linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)" alignItems="center">
                <CardHeader>
                    <Heading size='md' > Premium Plan</Heading>
                </CardHeader>
                <Divider orientation='horizontal' width="80%"/>
                <CardBody textAlign="center">
                    <Text>Now get our Pro version at much discounted price, only this January.</Text>
                    <Text>At Just</Text>
                    <Heading size='lg'>$199/month</Heading>
                </CardBody>
                <CardFooter  justifyContent="center">
                    <Button  textColor="whitesmoke" background="#1a202c" _hover={{ bgColor:'rgb(55, 68, 93)'}}>Get Pro</Button>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default LeftPanel