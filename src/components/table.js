import React from 'react';

function Table (props){

    const tableRows = props.data.map((student,index)=>{
        return (
            <tr key={index}>
                <td>{student.student}</td>
                <td>{student.course}</td>
                <td>{student.grade}</td>
            </tr>
        );
    });    
    //jsx will take correctly formated [] dynamically.
    
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );
}

export default Table;