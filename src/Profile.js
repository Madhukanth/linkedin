import React, { Component } from 'react';
import axios from 'axios';
import './profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      name: '',
      nickname: '',
      picture: '',
      familyName: '',
      givenName: ''
    };
  }
  async componentDidMount() {
    await this.setState({
      params: this.props.location.search
    });
    await axios({
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      url: 'https://secure-reaches-84828.herokuapp.com/auth/linkedin/fetchuser',
      data: {
        token: this.state.params.substr(9)
      }
    }).then(res => {
      console.log(res);
      this.setState({ name: res.data.details.name });
      this.setState({ nickname: res.data.details.nickname });
      this.setState({ picture: res.data.details.picture });
      this.setState({ familyName: res.data.details.family_name });
      this.setState({ givenName: res.data.details.given_name });
    });
  }

  render() {
    return (
      <div id="container">
        <img id="profile-img" src={this.state.picture} alt="Profile_Picture" />
        <h2 className="name">{this.state.name}</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2000px-LinkedIn_Logo.svg.png"
          alt="Logo"
          id="logo"
        />
        <hr />
        <table>
          <tbody>
            <tr>
              <td>
                <h3 id="nickname">NickName:</h3>
              </td>
              <td>
                <h3>{this.state.nickname}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 id="family-name">FamilyName:</h3>
              </td>
              <td>
                <h3>{this.state.family_name}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 id="given-name">GivenName:</h3>
              </td>
              <td>
                <h3>{this.state.given_name}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
