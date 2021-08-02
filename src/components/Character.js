// Write your Character component here
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Styles = styled.div`

color: white;

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

li {
    list-style: none;
    width: 65%;
    border: 1px solid green;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    padding-left: 4px;
}

h2 {
    font-size: 30px;

}

button {
    width: 10%;
    padding: 3%;
}

`
const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(res => {
                console.log(res.data);
                setCharacters(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Styles className='character-container'>
            <ul>
                {characters.map(character => (
                    <li key={character.created}>
                        <h2>{character.name}</h2>
                        <button>{character.birth_year}</button>
                    </li>
                ))}
            </ul>
        </Styles>
    )
};

export default Character;