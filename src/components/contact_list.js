import React, {Component} from 'react';
import ContactData from './contacts';
import ContactCard from './contact_card';

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts: ContactData
        }
    }
    render(){
        const list = this.state.contacts.map( (item, index)=>{
            return <ContactCard key={index} contact={item} />
        });
        console.log(list);
        return(
        <div className="col-8">
            <div className="row">
                {list}
            </div>
        </div>);
    }
}

export default ContactList;