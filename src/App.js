import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center>
          <button style={{ marginTop: 300, backgroundColor: 'Transparent' }}>
            <a href="https://secure-reaches-84828.herokuapp.com/auth/linkedin">
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
