import react, { useEffect, useState} from 'react';
import axios from 'axios';
import {Configuration, OpenAIApi} from 'openai';

const Chat = (props) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  let choices = props

  const fetchData = async () => {
    try {
      const API_KEY = process.env.REACT_APP_OPENAI_KEY;
      const configuration = new Configuration({apiKey: API_KEY});
      const openai = new OpenAIApi(configuration);
        
      const data = {
        messages: [
          {role: 'assistant', content: "You are a overenthusiastic dog lover"},
          {role: "user", content: `give me 3 dog breed choices based on a ${choices.lifestyle} lifestyle living in a ${choices.home} composing of ${choices.household} looking for a dog size of ${choices.size} that sheds a ${choices.shedding} amount living in a ${choices.climate} climate. Please place each suggestion on a new line`}
        ],
        model: "gpt-3.5-turbo",
      };

      const response = await openai.createChatCompletion(data);
      setData(response.data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const API_KEY = process.env.REACT_APP_OPENAI_KEY;
  //     const data = {
  //       messages: [
  //         {role: "system", content: "you are a entusiastic dog lover"},
  //         {role: "user", content: `give me 3 dog breed choices based on a ${choices.lifestyle} lifestyle living in a ${choices.home} composing of ${choices.household} looking for a dog size of ${choices.size} that sheds a ${choices.shedding} amount living in a ${choices.climate} climate. Please place each suggestion on a new line`}
  //       ],
  //       model: "gpt-3.5-turbo",
  //     };
  //     const headers = {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${API_KEY}`
  //     }
  //     const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {headers: headers});
  //     setData(response.data.choices[0].message.content);
  //     console.log(response.data.choices[0].message.content);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <h1>AI Answer</h1>
      <p>{data}</p>
    </div>
  );
};
 
export default Chat;