import { Route, Routes } from "react-router"
import Users from "./Users"
import User from "./User"
import MuiBadge from "./Mui"

const App = ({ }) => {
    return (
        <div>
            <nav>
                <a href="/users">Users</a>
                <a href="/mui">Mui</a>
            </nav>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/mui" element={<MuiBadge />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </div>
    )
}
export default App
