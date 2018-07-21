import React, { Component } from 'react';
import queryString from 'query-string';
import './profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {}
    };
  }
  async componentDidMount() {
    await this.setState({
      params: queryString.parse(this.props.location.search)
    });
    console.log(this.state.params);
  }

  render() {
    return (
      <div id="container">
        <img
          id="profile-img"
          src={this.state.params.picture}
          alt="Profile_Picture"
        />
        <h2 className="name">{this.state.params.name}</h2>
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
                <h3>{this.state.params.nickname}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 id="family-name">FamilyName:</h3>
              </td>
              <td>
                <h3>{this.state.params.family_name}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3 id="given-name">GivenName:</h3>
              </td>
              <td>
                <h3>{this.state.params.given_name}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
