import React, { useState } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

const AppHook = () => {
    const [personsState, setPersonsState] = useState({

        persons: [{ name: 'Richa', age: 20 },
        { name: 'Dewan', age: 22 }],

    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const clickHandler = () => {
        setPersonsState({
            persons: [{ name: 'Richa Dewan', age: 20 },
            { name: 'Dewan', age: 22 }]
        });
    }

    return (
        <div className="App">
            <h1>React app demo-Hooks!!</h1>
            <p>React is working!</p>
            <button on onClick={clickHandler}>Click Me</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My Hobbies : Racing</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
        </div>
    );
}

export default AppHook;
