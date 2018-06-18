import React from 'react';
import Table from './table';

function App (){
    return (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    );
}

const students = [
    {student:'Bob',
    course: 'programming',
    grade: '99'
    },{student:'Tom',
    course: 'Arch',
    grade: '88'
    },{student:'Tim',
    course: 'programming',
    grade: '66'
}];

export default App;
