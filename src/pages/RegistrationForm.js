import React, {Component} from "react";
export default class RegiForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            user: null,
            email: null,
            password: null,
            retypepassword: null
        }
    } 

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }


    handleChange = (event) => {
        this.setState ( { [event.target.name]: event.target.value } )
    }

    handlesubmit = (event) =>{
        event.preventDefault()
        alert(`
            User Name: ${this.state.fullname} 
            Email Id: ${this.state.email}
            Password: ${this.state.password}
            Retype Password: ${this.state.repassword}`
        )
    }

    render(){
        return<form onSubmit = {this.handlesubmit}>
        <div className="contactForm">
            <div className="row">
                <div className="offset-md-2 col-md-8 ">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                            <input className="form-control" name="fullname" type="text" placeholder="Name" value={this.state.uesr} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input className="form-control" name="email" type="email"  placeholder="Email Address" value={this.state.mail} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" name="password" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>

                         <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" name="repassword" type="password" placeholder="Retype Password" value={this.state.retypepassword} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <input type="submit" value="Submit"  className="btn btn-success" />
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        
    </form>
    }
}

