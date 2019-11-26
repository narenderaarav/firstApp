import React ,{Component} from "react";
export class PersonalDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
   
    };
    render(){
        const {values, handleChange} = this.props;
        return <form> 
            <div className="container">
                 <div className="contact">
                    <div className="contactHeading">
                        <h2>Registration Form</h2>
                    </div>
                 </div>
                <div className="contactForm">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Enter Name" defaultValue={values.name} onChange={handleChange('name')}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Email Address" defaultValue={values.email} onChange={handleChange('email')}/>
                                </div>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="Enter Password" defaultValue={values.password} onChange={handleChange('password')}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="Retype Password" defaultValue={values.retypepassword} onChange={handleChange('retypepassword')}/>
                                </div>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                     <input type="submit" value="Submit"  className="btn btn-success" onClick={this.continue} />
                                </div>
                            </div>
                        </div>     
                        </div>
                    </div>
                </div>
            </div>
        </form>
    }
}

export default PersonalDetails;