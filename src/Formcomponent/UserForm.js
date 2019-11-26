import React, {Component} from "react";
import PersonalDetails from "./PersonalDetails"
export class UserForm extends Component{
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        retypepassword: '',
        pickregion: '',
        pickyourpassion: ''
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render(){
        const {step} = this.state;
        const {name, email, password, retypepassword, pickregion, pickyourpassion} = this.state;
        const values = {name, email, password, retypepassword, pickregion, pickyourpassion} 
     
        switch(step) {
            case 1:
            return (
                <PersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
        return <h1>Welcome narender</h1>

        }
 }  
}

export default UserForm;