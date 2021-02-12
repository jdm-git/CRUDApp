import React, { Component } from 'react';
import Pagination from './pagination';
import { getClients } from '../services/dataService';
import {paginate} from '../utils/paginate';

class Clients extends Component {
    state = { 
        clients: [],
        currentPage: 1,
        pageSize: 8
        }
     componentDidMount(){
         this.setState({clients: getClients()});
     }
     handleDelete(client){
        const clients = this.state.clients.filter(c => c.id !== client.id);
        this.setState({clients});
     }
     handlePageChange = (page) => {
         this.setState({currentPage: page});
     }
     
     
    render() { 
        const {clients: allClients, currentPage, pageSize} = this.state;

        const clients = paginate(allClients, currentPage,pageSize);

        return ( 
            <React.Fragment>
                <p className="m-2">Showing {clients.length} clients from database...</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Adress</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.adress}</td>
                        <td>{client.gender}</td>
                        <td>{client.age}</td>
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
            itemsCount={clients.length}
            />
            </React.Fragment>
         );
    }
}
 
export default Clients;