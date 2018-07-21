import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop: '300px' }}>
        <center>
          <button
            style={{
              backgroundColor: 'Transparent',
              border: 0
            }}
          >
            <a href="https://madhu051196.auth0.com/authorize?client_id=R7q5KY4SECsEcqZ4v4bjL9uqGjNXuwZd&response_type=code&connection=linkedin&scope=openid%20profile&redirect_uri=https://secure-reaches-84828.herokuapp.com/auth/linkedin/callback">
              <img
                src="https://wheebox.com/LOGIN-2/assest/images/linkedinlogin.png"
                alt="signin"
              />
            </a>
          </button>
        </center>
      </div>
    );
  }
}

export default App;
