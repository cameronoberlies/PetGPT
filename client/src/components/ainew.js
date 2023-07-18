import react from 'react';
import axios from 'axios';

function Chat () {
const apikey = "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"

const client = axios.create({
    headers: {
        'Authorization': `Bearer ${apikey}`,
    }
});

const params = {
    prompt: "This is a test",
    model: "gpt-3.5-turbo"
}

client
.post( "https://api.openai.com/v1/chat/completions", params)
.then((response) => {
    console.log(response.data);
}
)
.catch((error) => {
    console.log(error.response.data);
}
);

return (
    <div>
        <h1>{response.data}</h1>
    </div>
)


}

export default Chat;
