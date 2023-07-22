import React, { useState } from 'react';
import Chat from '../components/ai';

import '../test.css';


function Results ({ answers }) {
   

return (
    <>
    
    
            <div className="final-results">
              <Chat {...answers} />
              {/* <button className="btn btn-primary d-flex justify-content-center mx-auto"  onClick={() => restartSurvey()}>
                Restart survey
              </button> */}
            </div>
         
          
    </>
)
        
    
};

export default Results;