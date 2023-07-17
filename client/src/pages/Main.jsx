import React from 'react';
import { Text } from '@chakra-ui/react';
import { chat } from '../utils/ai';
const testprompt = {
    lifestyle : "energetic",
    home: "apartment",
    household: "1"
}

function Main () {
    return (
        <Text>
            {chat(testprompt)}
        </Text>
    )
};

export default Main;