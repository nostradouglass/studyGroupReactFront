import React from 'react'
import axios from 'axios'

class User extends React.Component {
constructor(props) {
    super(props)

    this.state = {
        name: "",
        password: "",
        phone: ""
    }

 var currentUser = this.props.match.params.id

    var that = this
    axios.get('http://localhost:3000/users/' + currentUser)
   .then(function (response) {
      that.setState({
          name: response.data.userName, 
          password: response.data.userPassword, 
          phone: response.data.userPhone})
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  showLoading() {
      if (this.state.name.length == 0) {
          return <div>
                <h3>Loading..</h3>
              </div>
      } else {
          return (
            <div>
            <h3>Hello {this.state.name}</h3>
            <h4>Your password is {this.state.password}</h4>
            <h4>You phone is {this.state.phone}</h4>
        </div>
          )
      }
  }

    render() {
        return <div>{this.showLoading()}</div>
    }
}



export default User