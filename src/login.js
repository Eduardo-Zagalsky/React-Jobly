import { useState, useEffect } from "react";
import axios from "axios";
const INITIAL_VAL = { username: "", password: "" };

const Login = () => {
    const [formData, setFormData] = useState(INITIAL_VAL);

    useEffect(() => {
        async function validate() {
            await axios.post("/users/", json = { "username": formData.username, "password": formData.password });
            setFormData(INITIAL_VAL)
        }
        validate();
    }, [formData])

    const handleSumbit = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    return (
        <div>
            <form onSubmit={handleSumbit} >
                <label htmlFor="username" >Username: </label>
                <input type="text" name="username" value={formData.username} />
                <label htmlFor="password" >Password: </label>
                <input type="password" name="password" value={formData.password} />
            </form>
        </div>
    );
}
export default Login;