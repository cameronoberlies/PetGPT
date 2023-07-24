import React, { useRef } from "react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  chakra,
  Link,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

//import { useViewportScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "@choc-ui/logo";
import Auth from '../utils/auth';

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const myRef = useRef(null);
  const [y, setY] = React.useState(0);
  const height = myRef.current ? myRef.current.getBoundingClientRect() : 0;
  const location = useLocation();
  const activeColor = useColorModeValue("white", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.200");
  const isActive = (path) => {
    return location.pathname === path;
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
//   const { scrollY } = useViewportScroll();
//   React.useEffect(() => {
//     return scrollY.onChange(() => setY(scrollY.get()));
//   }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = (props) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (props) => {
    const hbg = useColorModeValue("gray.50", "brand.400");
    const hbgh = useColorModeValue("gray.100", "brand.500");
    const tcl = useColorModeValue("gray.900", "gray.50");
    return (
      <React.Fragment>
      
      
      </React.Fragment>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
   
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        myRef={myRef}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }} >
                <Popover>
                  <PopoverTrigger>
                    <Button
                      as={RouterLink}
                      to="/"
                      bg={isActive("/") ? activeColor : "transparent"}
                      color={isActive("/") ? "black" : inactiveColor}
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    //   rightIcon={<IoIosArrowDown />}
                    >
                      Home
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{ boxShadow: "md" }}
                  >
                    <Features />
                  </PopoverContent>
                </Popover>
                {/* {isSignedIn ? null : ( // Conditionally render the button if isSignedIn is false
          <li> */}
            <Button
              as={RouterLink}
              to="/test"
              bg={isActive("/test") ? activeColor : "transparent"}
              color={isActive("/test") ? "black" : inactiveColor}
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{ color: cl }}
              _focus={{ boxShadow: "none" }}
            >
              Test
            </Button>
          {/* </li>
        )} */}
                <Button
                  as={RouterLink}
                  to="/breed"
                  bg={isActive("/breed") ? activeColor : "transparent"}
                  color={isActive("/breed") ? "black" : inactiveColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Breed 
                </Button>
                <Button
                  as={RouterLink}
                  to="/adopt"
                  bg={isActive("/adopt") ? activeColor : "transparent"}
                  color={isActive("/adopt") ? "black" : inactiveColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Adopt 
                </Button>
                <Button
                  as={RouterLink}
                  to="/profile"
                  bg={isActive("/profile") ? activeColor : "transparent"}
                  color={isActive("/profile") ? "black" : inactiveColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  My Profile
                </Button>
                <Button
                  as={RouterLink}
                  to="https://buy.stripe.com/test_aEU5lH4DEdA4gaQ8ww"
                  target="_blank"
                  bg={isActive("/donate") ? activeColor : "transparent"}
                  color={isActive("/donate") ? "black" : inactiveColor}
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Donate
                </Button>
              
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
            <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-sm btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <HStack spacing="5" display="flex">
               <Link to="/login">
                <Button as={RouterLink}
                      to="/login"
                      bg={isActive("/") ? activeColor : "transparent"}
                      color={isActive("/") ? "black" : inactiveColor}
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}>
                  Sign in
                </Button>
                  </Link>
                  <Link to="/signup">
               <Button as={RouterLink}
                      to="/signup"
                      bg={isActive("/") ? activeColor : "transparent"}
                      color={isActive("/") ? "black" : inactiveColor}
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}>
                  Sign up
                </Button>
                </Link>
                </HStack>
            </>
          )}
        </div>
             
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
};
export default Header;