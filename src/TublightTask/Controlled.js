import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      city: '',
      userList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      city: this.state.city
    };
    this.setState(prevState => {
      const userList = [...prevState.userList, newUser].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return {
        userList,
        name: '',
        email: '',
        number: '',
        city: ''
      };
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <br />
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email: <br />
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number: <br />
            <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            City: <br />
            <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <UserList users={this.state.userList} />
      </div>
    );
  }
}

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      searchTerm: value
    });
  }

  render() {
    const filteredUsers = this.props.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div style={{textAlign:"center"}}> <br />
        <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleSearchChange} placeholder="Search by name" />
        <ul>
          {filteredUsers.map(user => (
            <li key={user.name}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Number: {user.number}</p>
              <p>City: {user.city}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ControlledForm;
