import React, { useState } from 'react';
import Chat from '../components/ai';

import '../test.css';


function Results ({ answers }) {
   

return (
    <>
    
    
            <div className="final-results">
              <Chat {...answers} />
             
            </div>
         
          
    </>
)
        
    
};

export default Results;