import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
const url = `https://jsonplaceholder.typicode.com/users/`

const User = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(url + id).then(({ data }) => {
            setUser(data)
        })
    }, [])


    return (
        <>
            <h3>User name : {user.name}</h3>
            <h3>User username : {user.username}</h3>
            <h3>User email : {user.email}</h3>
            <h3>User company : {user.company?.name}</h3>
        </>
    )
}
export default User
