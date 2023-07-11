import { Route, Routes } from "react-router"
import Users from "./Users"
import User from "./User"

const App = ({ }) => {
    return (
        <div>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </div>
    )
}
export default App
