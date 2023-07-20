import React from "react";
import { createContext, useState, useContext } from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  Icon,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const Main = () => {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={`${props.color}.600`}
          _dark={{ color: `${props.color}.100` }}
          bg={`${props.color}.100`}
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          _light={{ color: "gray.900" }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{ color: "gray.900" }}
          >
            Discover your ideal dog breed match by taking our interactive quiz!
          </chakra.p>
          <div>
          {Auth.loggedIn() ? (
            <>
            <Link to="/test">
          <Button colorScheme="blue">Get Started!</Button>
         </Link>
            </>
            ) : (
              <>
          <Link to="/login">
          <Button colorScheme="blue">Get Started!</Button>
          </Link>
              </>
            )}
          </div>
        {/* //  <Flex justifyContent="center" my={10}>
      
        // <Link to="/test">
        //   <Button colorScheme="blue">Get Started!</Button>
        // </Link> */}
    
     
      
        {/* <Link to="/login">
          <Button colorScheme="blue">Get Started!</Button>
        </Link>
      
    </Flex> */}
         
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            Step into a world of tail-wagging possibilities as you explore our
            exceptional app dedicated to finding your ideal dog breed match. Our
            user-friendly interface and insightful questionnaire take into
            account your daily routine, living environment, and personal
            preferences to present you with a curated selection of dog breeds
            perfectly suited to your lifestyle. Get ready to unleash happiness
            and create lifelong memories with the furry companion of your
            dreams. Start your adventure today and discover the perfect furry
            addition to your family!
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
          
        >
          <Feature
            color="red"
            title="Lifestyle"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            The lifestyle of a person plays a crucial role in choosing a
            compatible dog breed. Some breeds require a high level of activity
            and exercise, while others are more suitable for a relaxed and
            low-energy lifestyle.
          </Feature>

          <Feature
            color="pink"
            title="Home Type"
            icon={
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clipRule="evenodd"
              />
            }
          >
            Different dog breeds have different space requirements. Considering
            the person's home type, such as an apartment or a house with a yard,
            helps ensure the selected breed is comfortable and has adequate
            space to move around.
          </Feature>

          <Feature
            color="yellow"
            title="Household"
            icon={
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            }
          >
            Assessing the household composition, including the presence of
            children or other pets, is important to choose a dog breed that is
            known for its compatibility with children or other animals.
          </Feature>

          <Feature
            color="green"
            title="Dog Size"
            icon={
              <>
                <path
                  fillRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </>
            }
          >
            Dog sizes can vary significantly, from small toy breeds to large
            working breeds. Matching the dog's size to the person's preference
            and living arrangements ensures a harmonious fit.
          </Feature>
          
          <Feature
            color="yellow"
            title="Shedding"
           
            icon={
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            }
          >
            Shedding refers to a dog's tendency to lose hair, which can vary
            greatly among different breeds. For individuals with allergies or
            those who prefer minimal shedding, considering a breed with low
            shedding characteristics can be essential.
          </Feature>
          <Feature
            color="yellow"
            title="Climate"
            icon={
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            }
          >
            Some dog breeds are better suited for certain climates due to their
            coat type or heat/cold tolerance. Matching the breed to the person's
            local climate helps ensure the dog's comfort and overall well-being.
          </Feature>
        </SimpleGrid>
        {/* <Flex justifyContent="center" my={10}>
          <Link to="/test">
            <Button colorScheme="blue">Get Started!</Button>
          </Link>
        </Flex> */}
      </Box>
    </Flex>
  );
};
export default Main;
