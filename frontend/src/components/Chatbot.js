import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Flex, Text, Avatar, useMediaQuery } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import Loader from './Loader';
import robimg from "../assets/robot.png"


const API_KEY = process.env.REACT_APP_APIKEY;

const systemMessage = {
    "role": "system", "content": "You are a Chat bot made by Next Ai, You are a general purpose chatbot, and your name is Genos"
}

const styledBtn = {
    color: "#1a202c",

}

const styledMsgBox = {
    h: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: "column",
    border: "2px solid black",
    w: '100%',
    mt: 5,
    bg: '#566b8f',
    overflowY: "scroll"
}
const Chatbot = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [isTyping, setisTyping] = useState(false)
    const [messages, setMessages] = useState([
        {
            message: "Hey there! I am your chatbot. How can I help you today?",
            sender: "ChatGPT"
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async (message) => {

        if(inputValue.trim() === "")
        {
            return;
        }
        const newMessage = {

            message: inputValue,
            sender: 'user'
        }

        const newMsgs = [...messages, newMessage];
        setMessages([...messages, newMessage]);

        setisTyping(true);

        console.log(newMsgs)

        await processMessageToChatGPT(newMsgs);
    };

    async function processMessageToChatGPT(chatMessages) {

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setisTyping(false);
                setInputValue("");
            });
    }

    useEffect(() => {
       let comp =  document.querySelector(".box1");
       comp.scrollTop = comp.scrollHeight;
    }, [messages])
    

    const handlekeydown = (e) =>{
        if (e.code === 'Enter') {
            handleSendMessage();
        }
    }
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" width={`${!isLargerThan600 ? "90%" : "60%"}`} >
            <Box sx={styledMsgBox} className="box1" scrollBehavior="smooth" css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: "aqua",
                    borderRadius: '24px',
                },
            }}>

                {messages.map((message, index) => {

                    return <Flex w="100%" justifyContent={`${message.sender === "user" ? "end" : "start"}`} alignItems="baseline" >

                        {message.sender !== "user" && <Avatar name='bot' src={robimg} border="2px solid black" bgColor="#1a202c" position="center" size="sm" mt={2} ml={2} />}
                        <Text
                            key={index}
                            color={`${message.sender === "user" ? "lightblue" : "darkblue"}`}
                            fontSize="1rem"
                            bgColor={`${message.sender === "user" ? "darkblue" : "lightblue"}`}
                            borderRadius="10px"
                            m={2}
                            px={2}
                            py={1}
                            className={index}
                        >
                            {message.message}
                        </Text>
                        {message.sender === "user" && <Avatar mt={2} size="sm" bg="teal" mr={2} />}

                    </Flex>
                }
                )}
                {isTyping && <Flex m={2} bottom={0}> <Loader /></Flex>}
            </Box>
            <Flex mt={2} mb={2} gap="10px" width="100%" justifyContent="center" >

                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    w="100%"
                    onKeyDown={handlekeydown}
                />

                <Button sx={styledBtn} onClick={handleSendMessage}   >
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </Flex>
    );
};

export default Chatbot;