import React from "react";
import { Box, Flex, HStack, Image, Text, Button } from "@chakra-ui/react";
import { FaEnvelope} from "react-icons/fa";
import {useQuery, gql} from "@apollo/client";
import Auth from "../utils/auth";
import { useFavorites } from "../components/FavoritesContext";
import { Link } from "react-router-dom";



function Profile () {
 
  const { favorites } = useFavorites();


 
  
  
    return (
    <div>

          {Auth.loggedIn() ? (
            <>
            <h1>Hello, {Auth.getProfile().data.username}!</h1>
            <h3>My favorites</h3>
      <ul>
        {favorites.map((breed) => (
          <li key={breed}>{breed}</li>
          
        ))}
      </ul>
             <Flex flexDirection="row">
             
      
      
      <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        shadow="lg"
        rounded="lg"
        bg="#edf3f8"
        _dark={{ bg: "gray.800" }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >  <Image
            // src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            // alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="gray.800"
            _dark={{ borderColor: "gray.200" }}
          />
        </Box>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >Email: {Auth.getProfile().data.email}
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
          Username: {Auth.getProfile().data.username}
          </Text>
          <HStack spacing={3} color="gray.800" _dark={{ color: "gray.200" }}>
          <FaEnvelope size={20} />
          <Text fontSize="lg"></Text>
          </HStack>
        </Box>
        
      </Flex>
    </Flex>
    
    
    </Flex>
            </>
            ) : (
              <>
         <Link to="/login">
          <Button colorScheme="blue">Login</Button>
          </Link>
              </>
            )}
          </div>
      )
        
    
        
 
};

export default Profile;
