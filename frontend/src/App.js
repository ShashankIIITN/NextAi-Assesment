import Chatbot from "./components/Chatbot";
import React from "react";
import Navbar from "./components/Navbar";
import "./base.css"
import LeftPanel from "./components/LeftPanel";
import { Flex, useMediaQuery, useDisclosure, IconButton, Button } from '@chakra-ui/react'
import RightPanel from "./components/RightPanel";
import LeftPanelDrawer from "./components/LeftPanelDrawer";
import {ChevronLeftIcon} from "@chakra-ui/icons"
import RightPanelDrawer from "./components/RightPanelDrawer";

function App() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const { isOpen: isOpenDrawer1, onOpen: onOpenDrawer1, onClose: onCloseDrawer1 } = useDisclosure();
  const { isOpen: isOpenDrawer2, onOpen: onOpenDrawer2, onClose: onCloseDrawer2 } = useDisclosure();

  return (

    <div className="App" style={{ height: '100vh', width: "100%", backgroundColor: '#37445d' }}>
      <Navbar name="Next Ai" onOpen={onOpenDrawer1} />
      <Flex width="100%" justifyContent="space-evenly" height="90%" gap="10px" px="5px" >
        {isLargerThan1000 ? <LeftPanel /> : <LeftPanelDrawer isOpen={isOpenDrawer1} onOpen={onOpenDrawer1} onClose={onCloseDrawer1} placement={"left"} />}
        <Chatbot />
        {isLargerThan600 ? <RightPanel /> : <IconButton
          colorScheme='blue'
          aria-label='Search database'
          fontSize="2rem"
          icon={<ChevronLeftIcon  />}
          position={"absolute"}
          bottom="50%"
          right="0px"
          bgColor="rgb(90, 90, 90, 0.5)"
          h="4rem"
          size="sm"
          color="black"
          variant="outline"
          onClick={onOpenDrawer2}
        />}
       <RightPanelDrawer isOpen={isOpenDrawer2} onOpen={onOpenDrawer1} onClose={onCloseDrawer2} placement={"right"}/>
      </Flex>


    </div>

  );
}

export default App;
