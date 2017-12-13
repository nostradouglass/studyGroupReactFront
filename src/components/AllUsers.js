import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AllUsers extends React.Component {
constructor(props) {
    super(props)

    this.state = {
        users: []
    }

    this.mapUsers = this.mapUsers.bind(this)
    this.deleteButtonPressed = this.deleteButtonPressed.bind(this)
 
        var that = this
     axios.get('http://localhost:3000/users')
    .then(function (response) {
      that.setState({users: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
    }

deleteButtonPressed(selectedUser) {
    console.log(selectedUser._id)

    axios.delete(`http://localhost:3000/remove/${selectedUser._id}`, {
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });

}

mapUsers() {
    var {users} = this.state
    return users.map((user) => {
        return (
        <tr key={user._id}>
        <td><Link to={"/User/" + user._id }>{user.userName}</Link></td>
        <td onClick={() => {this.deleteButtonPressed(user)}}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
      </tr>
        )
    })
}
    render() {
        return (
            <table className="table">
            <thead>
              <tr>
                <th>user name</th>
                <th>Remove User</th>
              </tr>
            </thead>
            <tbody>
                {this.mapUsers()}
            </tbody>
          </table>
        )
    }
}
export default AllUsers