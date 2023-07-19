import react, { useEffect, useState} from 'react';
import axios from 'axios';

const Chat = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const API_KEY = "paste key here"
      const data = {
        messages: [{role: "user", content: "this is a test"}],
        model: "gpt-3.5-turbo",
      };
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
      const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {headers: headers});
      setData(response.data.choices[0].message.content);
      console.log(response.data);
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