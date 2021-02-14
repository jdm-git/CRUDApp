import React, { Component } from 'react';

class Form extends Component { 
    render() { 
        const {columns: allColumns, onSubmit, onChange} = this.props;
        const columns = allColumns.filter(c => c.key !== 'delete');
        return ( 
            <form onSubmit={(event) => onSubmit(event)} className="m-2">
                {columns.map(column => 
                <div key={column.path || column.key} className="form-group">
                    <label>{column.label}</label>
                    <input 
                    type={column.type} 
                    name={column.path}
                    className="form-control" 
                    placeholder={"Enter " + column.label.toLowerCase()}
                    required
                    />
                </div> 
                )}
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
         );
    }
};
 
export default Form;