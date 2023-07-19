import React from 'react';
import Chat from '../components/ai';

 const choices =  {
    lifestyle: "active",
    home: "apartment",
    people: "1",
}

function Test () {
    return (
       <>
        <div>
            <h1>Test</h1>
            <Chat {...choices} />

        </div>
       </>
    )
};

export default Test;