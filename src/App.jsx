import React, { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";

const App = () => {
    const [clickBurgerMenu, setClick] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Box position={"relative"}>
            <Header colorMode={colorMode} toggleColorMode={toggleColorMode} click={clickBurgerMenu} setClick={setClick} />
            <Layout >
                <Sidebar colorMode={colorMode} click={clickBurgerMenu} setClick={setClick}  clickBurgerMenu={clickBurgerMenu} />
                <Content clickBurgerMenu={clickBurgerMenu} />
            </Layout>
        </Box>
    );
};

export default App;
