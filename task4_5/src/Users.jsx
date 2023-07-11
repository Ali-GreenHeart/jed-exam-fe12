import axios from "axios"
import { useEffect, useState } from "react"

const url = 'https://jsonplaceholder.typicode.com/users'

const Users = ({ }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            console.log(data)
            setUsers(data)
        })
    }, [])

    return (
        <>
            {
                users.map((user) => {
                    return (
                        <a href={`/users/${user.id}`} key={user.id}>
                            <h3>{user.name} - {user.email}</h3>
                        </a>
                    )
                })
            }

        </>
    )
}
export default Users
