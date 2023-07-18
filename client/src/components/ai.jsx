import {react, useEffect} from 'react';
import { Configuration, OpenAIApi } from 'openai';
 useEffect () {
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function chatresponse () {
    const testprompt = {
        lifestyle : "energetic",
        home: "apartment",
        household: "1"
    }
    let message = [{role: "user", content: `please give me 3 recommendations for a dog breed based on a ${testprompt.lifestyle} person living in a ${testprompt.home} with ${testprompt.household} people.`}]
    let awnser;
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: message,
        });
        awnser = JSON.stringify(response.data.choices[0].message.content);
    } catch (error){
        awnser = "Error: " + error.response.data.error.message;
        console.log(awnser)
        return awnser;
    }
}
    return (
        <div>
            <p>{chatresponse}</p>
        </div>
    )

    }
export default Chat;