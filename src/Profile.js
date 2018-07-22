import React, { Component } from 'react';
import queryString from 'query-string';
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
      params: queryString.parse(this.props.location.search)
    });
    console.log(this.state.params);
    await axios({
      method: 'post',
      url: 'https://secure-reaches-84828.herokuapp.com/auth/linkedin/fetchuser',
      data: {
        token: this.state.params
      }
    }).then(res => {
      this.setState({ name: res.details.name });
      this.setState({ nickname: res.details.nickname });
      this.setState({ picture: res.details.picture });
      this.setState({ familyName: res.details.family_name });
      this.setState({ givenName: res.details.given_name });
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
