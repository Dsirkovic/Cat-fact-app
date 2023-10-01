import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export const Form = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
  

    const ValidCredentials = {
        username: "username",
        password: "password"
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const userNameInput = e.currentTarget.username.value;
    const passInput = e.currentTarget.password.value;

    if (
        userNameInput === ValidCredentials.username &&
        passInput === ValidCredentials.password
    ){ 
        navigate("/Facts");
    } else {
        setError("Invalid username or password, please try again");
    }
    }

    return (
        <>
        <h1 className="intro">Welcome to the Animal Facts App! Please log in below to proceed</h1>
        <form className = "form" onSubmit={handleSubmit}>
            <input type= "text"  name="username" placeholder = "Username..." />
            <input type = "password" name= "password" placeholder = "Password..."/>
            <input type = "submit" className="submit" value="Login" />
        </form>
        
        {error && <p className="error">{error}</p>}
        <h1> Currently only registered credentials are: Username: username and Password: password, so please use these </h1>
        </>
    )
}