import React, { useState } from 'react';
import { Box, Input, Button, Flex, Icon, Center, Image, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import Loader from './Loader';

const styledBtn = {
    color: "#1a202c",

}

const styledMsgBox = {
    h: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: "column",
    border: "2px solid black",
    w: '80%',
    mt: 5,
    bg: '#566b8f'
}
const Chatbot = () => {
    const [isTyping, setisTyping] = useState(true)
    const [messages, setMessages] = useState([
        {
            message: "Hey there! I am your chatbot. How can I help you today?",
            sender: "ChatGpt"
        },
        {
            message: "what is my name?",
            sender: "user"
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async (message) => {
        const newMessage = {

            message: inputValue,
            sender: 'user'
        }

        setMessages([...messages, newMessage]);
    };

    return (
        <Flex direction="column" alignItems="center" justifyContent="center" h="80%" >
            <Box sx={styledMsgBox} >

                {messages.map((message, index) => {

                    return <Flex w="100%" justifyContent={`${message.sender == "user" ? "end" : "start"}`}>
                        <Text
                            key={index}
                            color={`${message.sender == "user" ? "lightblue" : "darkblue"}`}
                            fontSize="1rem"
                            bgColor={`${message.sender == "user" ? "darkblue" : "lightblue"}`}
                            borderRadius="10px"
                            m={2}
                            px={2}
                            py={1}
                        >
                            {message.message}
                        </Text>
                    </Flex>
                }
                )}
                <Flex  m={2} bottom={0}> <Loader /></Flex>
            </Box>
            <Flex mt={4} gap="10px" width="80%" justifyContent="center" >

                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    w="80%"
                />

                <Button sx={styledBtn} onClick={handleSendMessage}  >
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </Flex>
    );
};

export default Chatbot;