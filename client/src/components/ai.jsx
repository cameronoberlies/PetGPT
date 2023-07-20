import react, { useEffect, useState} from 'react';
import axios from 'axios';

const Chat = (props) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  let choices = props

  const fetchData = async () => {
    try {
      const API_KEY = process.env.REACT_APP_OPENAI_KEY;
      const data = {
        messages: [{role: "user", content: `give me 3 dog breed choices based on a ${choices.active} lifestyle living in a ${choices.home} home size ${choices.size} in a ${choices.climate} climate`}],
        model: "gpt-3.5-turbo",
      };
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
      const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {headers: headers});
      setData(response.data.choices[0].message.content);
      console.log(response.data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <p>{data}</p>
    </div>
  );
};
 
export default Chat;