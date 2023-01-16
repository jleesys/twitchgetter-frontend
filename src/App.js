import { useState } from 'react';

function App() {

  return (
    <div className="App">
      hmm?
      <div>
        <a href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=2neu10boac0rm819dtozub32wj1yaf&redirect_uri=http://localhost:3001/&scope=user%3Aread%3Afollows&state=c3ab8aa609ea11e793ae92361f002671/">
          Connect with Twitch
          Grants An Authorization Code
        </a>
        <div>
          <a href="https://id.twitch.tv/oauth2/token?client_id=2neu10boac0rm819dtozub32wj1yaf&client_secret=f1imepjq84xmrmv2cfi30340e6riu3&code=jd538t5yy46aux5n1hms3zut6yxj6k&grant_type=authorization_code&redirect_uri=http://localhost:3001">
            Get Authorization Token
          </a>
        </div>
      </div>


    </div>
  );
}

export default App;
