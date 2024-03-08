import React from "react";
import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";

import dataSidebarEl from "../constants/sidebarEl";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";
const Sidebar = ({ clickBurgerMenu, click, setClick, colorMode }) => {
    return (
        <Box
            position={{ base: "absolute", md: "relative" }}
            zIndex={"1000"}
            top={{base:'0px'}}
            transition={"all 0.3s"}
            marginLeft={clickBurgerMenu ? "0px" : "-320px"}
            width={"300px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            padding={"10px"}
            height={"100vh"}
            background={colorMode === 'dark' ? '#1A202C' : 'white'}
        >
        
            <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >

                <Text
                    marginTop={"25px"}
                    width={"90%"}
                    paddingBottom={"5px"}
                    borderBottom={"1px solid silver"}
                >
                    DASHBOARD
                </Text>
                <Button
                    display={{ md: "none", base: "flex" }}
                    onClick={() => {
                        setClick(!click);
                    }}
                    padding={"0px"}
                    borderRadius={"10px"}
                    background={"rgba(249, 115, 22, 0.7)"}
                    textColor={"white"}
                    _hover={{ background: "rgb(249, 115, 22)" }}
                >
                    <BiX />
                </Button>
            </Box>

            <Box display={"flex"} width={"100%"} flexDirection={"column"}>
                {dataSidebarEl.map((element) => (
                    <Button
                        _hover={{
                            background: "rgb(249, 115, 22)",
                            color: "white",
                        }}
                        textColor={"rgb(249, 115, 22)"}
                        background={"none"}
                        width={"90%"}
                        padding={"10px"}
                        key={element.id}
                        display={"flex"}
                        gap={"15px"}
                        alignItems={"center"}
                        marginTop={"15px"}
                        justifyContent={"start"}
                    >
                        <Icon as={element.icon} />
                        <Text>{element.title}</Text>
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default Sidebar;
