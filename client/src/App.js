import './App.css';
import {useQuery, useMutation} from "@apollo/client"
import {GET_ALL_USERS} from "./query/user"
import React, {useEffect, useState} from 'react';
import { CREATE_USER } from './mutations/user'

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)



  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  const addUser =() => {
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({data}) => console.log(data))
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <form>
      <input value={username} onChange={e => setUsername(e.target.value)} type="text"/>
      <input value={age} onChange={e => setAge(e.target.value)} type="number"/>
      <div className="btns">
        <button>Создать</button>
        <button>Получить</button>
      </div>
      </form>
      <div>
        {users.map(user => 
          <div className="user">{user.id}. {user.username}</div>
        )}
      </div>
    </div>
  );
}

export default App;
