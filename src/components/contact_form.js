import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    render(){
        const {firstName, lastName} = this.state;
        
        return (
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input name='firstName' type='text' className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input name='lastName' type='text' className='form-control'/>
                </div>
            </form>
        )
    }

}

export default ContactForm;