import React ,{Component} from "react";
export class Pickyourpassion extends Component{
    continue = e => {
        e.preventDefault();
       
   
    };
    render(){
        const {values, handleChange} = this.props;
        return <form> 
            <div className="container">
                 <div className="contact">
                    <div className="contactHeading">
                        <h2>Pick Your Passion</h2>
                    </div>
                 </div>
                <div className="contactForm">
                    <div className="row">
                        <div className="offset-md-4 col-md-4">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                   
                                    <select className="form-control is-valid" defaultValue={values.pickregion} onChange={handleChange('pickregion')}>
                                        <option value="">Pick Your Passion</option>
                                        <option value="TV Shows">TV Shows</option>
                                        <option value="Education">Education</option>
                                    </select>
                                </div>
                            </div>
                           
                        </div> 
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                     <input type="submit" value="Next"  className="btn btn-success" />
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

export default Pickyourpassion;