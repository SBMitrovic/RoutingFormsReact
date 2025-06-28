import { useState } from "react";

function Form() {
    // Initial users state
    const [users, setUsers] = useState([
        {
            userName: "sckara",
            email: "sbmitrovic@gmail.com"
        },
        {
            userName: "sckara2",
            email: "sbmitrovic12@gmail.com"
        },
        {
            userName: "sckara3",
            email: "sbmitrovic3@gmail.com"
        }
    ]);

    // State for input fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    // Function to add new user
    const addNewUser = (e) => {
        e.preventDefault(); // prevent form submit reload

        console.log("Adding new user:", username, email);

        // Add new user to users list
        setUsers([
            ...users, // keep old users
            { userName: username, email: email }
        ]);

        // Clear input fields
        setUsername("");
        setEmail("");
    };

    return (
        <>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        User name: {user.userName} ----- Email: {user.email}
                    </li>
                ))}
            </ul>

            <form className="addUserForm" onSubmit={addNewUser}>
                Username:{" "}
                <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                Email:{" "}
                <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Add user</button>
            </form>
        </>
    );
}

export default Form;