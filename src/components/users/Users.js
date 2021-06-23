import {useEffect, useState} from "react";

export default function Users ()
{
    let [usersList, setUsersList] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(respons => {
                console.log(respons);
                setUsersList(respons);
            });
    }, []);




    return(
        <div>
            {
                usersList.map(value => <div>{value.id} {value.name}</div>)
            }
        </div>
    );
}