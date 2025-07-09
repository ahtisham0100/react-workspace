import { NavLink } from "react-router-dom";


function Topics(params) {
    return (
        <div>
            <h1>Topics</h1>
            <p>Topics are a way to organize content in a meaningful way.</p>
           <NavLink to='topics/react' > 
            <p>React</p>
           </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/topics/1">Topic 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics/2">Topic 2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics/3">Topic 3</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Topics;
