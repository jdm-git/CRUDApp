import React, { Component } from 'react';
import Pagination from './pagination';
import { getClients } from '../services/dataService';
import {paginate} from '../utils/paginate';
import Form from './form';

class Clients extends Component {
    state = { 
        clients: [],
        currentPage: 1,
        pageSize: 8,
        hasError: false
        }

    columns = [
        {path: 'name', label: 'Name', type: 'text'},
        {path: 'surname', label: 'Surname', type: 'text'},
        {path: 'email', label: 'E-mail', type: 'email'},
        {path: 'gender', label: 'Gender', type: 'text'},
        {path: 'age', label: 'Age', type: 'number'},
        {key: 'delete'}
    ];
     componentDidMount(){
         this.setState({clients: getClients()});
     }
     handleDelete(client){
        const clients = this.state.clients.filter(c => c.id !== client.id);
        this.setState({clients});
        //calling data services to apply them
     }
     handlePageChange = (page) => {
         this.setState({currentPage: page});
     }
     handleSubmit = (event) => {
        event.preventDefault();
        const clients = [...this.state.clients];
        const e = event.target;
        if(!Number(e.age.value) || e.age.value < 0 || e.age.value >= 100)
            this.setState({hasError: true});
        else{
            const newClient = 
                {
                    id: clients[clients.length-1].id + 1,
                    firstName: e.name.value,
                    lastName: e.surname.value,
                    email: e.email.value,
                    gender: e.gender.value,
                    age: e.age.value
                };
            clients.push(newClient);
            //call dataService to sync with database
            this.setState({clients, hasError: false});
        }
     }
     handleChange = (event, client) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        const clients = [...this.state.clients];
        const index = clients.findIndex((c => c.id == client.id));

        clients[index][name] = value;
        
        this.setState({clients});
        //call dataService to sync with database
        //or add Save btn to apply local changes to prevent connecting with DB every change
     }

     
    render() { 
        const {clients: allClients, currentPage, pageSize, hasError} = this.state;

        const clients = paginate(allClients, currentPage, pageSize);

        return ( 
            <React.Fragment>
                {hasError ? 
                <div className="alert alert-danger" role="alert">
                    Age needs to be a number between 0 and 100
                    </div> 
                    : ''
                    }
                <p className="m-2">Showing {clients.length} clients from database...</p>
                
            <table className="table">
                <thead>
                    <tr>
                        {this.columns.map((column) => <th key={column.path || column.key}>{ column.label }</th>)}
                    </tr>
                </thead>
                <tbody>
                    { clients.map((client) => (
                    <tr key={client.id}>
                        <td><input name="firstName" className="borderless" onChange={(event) => this.handleChange(event, client)} type="text" value={client.firstName}></input></td>
                        <td><input name="lastName" className="borderless" onChange={(event) => this.handleChange(event, client)} type="text" value={client.lastName}></input></td>
                        <td><input name="email" className="borderless" onChange={(event) => this.handleChange(event, client)} type="email" value={client.email}></input></td>
                        <td><input name="gender" className="borderless" onChange={(event) => this.handleChange(event, client)} type="text" value={client.gender}></input></td>
                        <td><input name="age" className="borderless" onChange={(event) => this.handleChange(event, client)} type="number" value={client.age}></input></td>
                        <td>
                            <button onClick={() => this.handleDelete(client)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                    )) }
                </tbody>
            </table>
            <Pagination 
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            itemsCount={allClients.length}
            pageSize={pageSize}
            />
            <Form
            columns={this.columns}
            onSubmit={this.handleSubmit}
            />
            </React.Fragment>
         );
    }
}
 
export default Clients;