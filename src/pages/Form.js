import React, {Component} from 'react';

export default class Form extends Component{
    constructor (props){
        super(props)
        this.state = {  user: null,
                        email: null,
                        subject: null,
                        messages: null,
                        errors: {
                            user: '',
                            email: '',
                            subject: '',
                            messages: '',
                        }
            };
    }
    
    // handle = (event) => {
    //     this.setState({ [event.target.name]:event.target.value })
    // }

    handlesubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(this.state)) ;
        let name = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;
    

  switch (name) {
      case 'fullname':
            errors.fullname =
            value.length < 5 
             ? 'Full Name must be 5 characters long'
            : '';

          break;
  
      default:
          break;
  }

 this.setState({errors,[name]: value}, () =>{
    alert(errors)
 })


}
 render(){
return <div>

<form onSubmit = {this.handlesubmit}>
    <div className="contactForm">
        <div className="row">
            <div className="offset-md-2 col-md-8 ">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                        <input className="form-control" name="fullname" type="text" value={this.state.user}          onChange={this.handle} placeholder="Name"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                        <input className="form-control" name="email" type="email" value={this.state.email}       onChange={this.handle} placeholder="Email Address"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <input className="form-control" name="subject" type="text" value={this.state.subject}       onChange={this.handle} placeholder="Subject" />
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <textarea className="form-control" name="messages" rows="4"  type="text" value={this.state.messages}     onChange={this.handle} placeholder="Messages here"/>
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
      </div>                  
       
    }
}

