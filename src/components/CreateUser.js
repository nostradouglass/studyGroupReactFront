import React, { Component } from 'react';
import axios from 'axios'

class CreateUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
        userName: "",
        userPassword: "",
        userPhone: ""
    }

    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onPassChange = this.onPassChange.bind(this)
    this.onPhoneChange = this.onPhoneChange.bind(this)
  }

  onSubmitForm(e) {
    e.preventDefault()

    if (this.state.userName.length > 3 && this.state.userPassword.length > 0) { 
    axios({
        method: 'post',
        url: 'http://localhost:3000/new_user',
        data: {
          userName: this.state.userName,
          userPassword: this.state.userPassword,
          userPhone: this.state.userPhone
        }
      });

      this.setState({userName: "", userPassword: "", userPhone: ""})
    } else {

    }

  }

onNameChange(event) {
    this.setState({userName: event.target.value})
}

onPassChange(event) {
    this.setState({userPassword: event.target.value})
}

onPhoneChange(event) {
    this.setState({userPhone: event.target.value})
}

  render() {
    return (
        <div className="container">
        <div className="col-md-5">
            <div className="form-area">  
                <form onSubmit={this.onSubmitForm}>
                <br />
                    <h3 >Contact Form</h3>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"  
                            placeholder="Name"  
                            onChange = {this.onNameChange} 
                            value={this.state.userName}/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control"  
                            placeholder="Password" 
                            onChange = {this.onPassChange} 
                            value={this.state.userPassword}/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"  
                            placeholder="Mobile Number" 
                            onChange = {this.onPhoneChange} 
                            value={this.state.userPhone}/>
                    </div> 
                    <input className="btn btn-success" type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </div>
    );
  }
}

export default CreateUser;