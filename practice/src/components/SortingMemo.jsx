import { useMemo, useState } from "react";
import { generateUsers} from "./helper";
function SortingMemo() {

    let [sortBy, setSortBy] = useState('name')
        let numberOfUser= 100000;

    let users = useMemo(() => {
        return generateUsers(numberOfUser);
    }, [])

    let sortedUsers = useMemo(() => {
        console.log("🌀 Sorting users by", sortBy);
        const sorted = [...users].sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else {
                return a.age - b.age;
            }}) 
            return sorted;
    } 
, [users, sortBy])

    return (
        <div>
            <button onClick={() => setSortBy("name")}>Sort by Name</button>
            <button onClick={() => setSortBy("age")}>Sort by Age</button>

            <ul>
                {sortedUsers.slice(0, 1000).map((user) => (
                    <li key={user.id}>
                        {user.name} - Age {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default SortingMemo;