import { BiSun } from "react-icons/bi"; 
import { BsFillMoonFill } from "react-icons/bs"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { HiOutlineLogout } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMoon } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Heading, IconButton, Image, Text } from "@chakra-ui/react";

const Header = ({ click, setClick, toggleColorMode, colorMode }) => {
    const [handlerClick, setHandlerClick] = useState(false);
    const settingsRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                settingsRef.current &&
                !settingsRef.current.contains(event.target) &&
                !event.target.closest('button')
            ) {
                setHandlerClick(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <Box
                position={"sticky"}
                top={"0px"}
                zIndex={"999"}
                background={colorMode === 'dark' ? '#1A202C' : 'white'}
                width={"97%"}
                marginX={"auto"}
                paddingY={"15px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box className="flex items-center gap-[20px]">
                    <Heading fontSize={'18px'} display={{base:'none', md:'block'}}>Logo</Heading>
                    <Button
                        onClick={() => {
                            setClick(!click);
                        }}
                        padding={"0px"}
                        borderRadius={"10px"}
                        background={"rgba(249, 115, 22, 0.7)"}
                        textColor={"white"}
                        _hover={{ background: "rgb(249, 115, 22)" }}
                    >
                        <GiHamburgerMenu />
                    </Button>
                </Box>
                <ul className="flex items-center gap-[15px]">
                    <li>
                        <IconButton 
                        onClick={() => toggleColorMode()}
                        icon={colorMode === 'light' ? <BsFillMoonFill /> : <BiSun />}/>
                    </li>
                    <li className="relative">
                        <Button
                            
                            onClick={() => setHandlerClick(!handlerClick)}
                            display={"flex"}
                            borderRadius={"10px"}
                            justifyContent={"center"}
                            gap={"10px"}
                            alignItems={"center"}
                            padding={"10px"}
                            _hover={{ background: "" }}
                            background={handlerClick ? "rgb(249, 115, 22)" : "rgba(249, 115, 22, 0.6)"}
                        >
                            <Image
                                width={"30px"}
                                height={"30px"}
                                borderRadius={"full"}
                                src="https://picsum.photos/400"
                            />
                            <AiOutlineUser color={'white'}/>
                        </Button>
                        <Box
                            ref={settingsRef}
                            display={handlerClick ? "block" : "none"}
                            position={"absolute"}
                            top={"50px"}
                            right={"0px"}
                            boxShadow={"2px 2px 9px silver"}
                            borderRadius={"10px"}
                            background={"#fff"}
                            padding={"10px"}
                        >
                            <Text
                                display={"flex"}
                                alignItems={"center"}
                                gap={"10px"}
                                textColor={'#222'}
                            >
                                <HiOutlineLogout /> Logout
                            </Text>
                        </Box>
                    </li>
                </ul>
            </Box>
        </>
    );
};

export default Header;
