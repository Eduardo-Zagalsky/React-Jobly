import { useState } from "react";
const INITIAL_VAL = { firstName: "", lastName: "", username: "", email: "", password: "" };

const Signup = () => {
    const [formData, setFormData] = useState(INITIAL_VAL);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    useEffect(() => {
        async function register() {
            await axios.post("/users/", json = { "username": formData.username, "password": formData.password });
        }
        register();
    }, [formData])

    const handleSumbit = (e) => {
        e.preventDefault();
        addUser({ ...formData });
        setFormData(INITIAL_VAL);
    }
    return (
        <div>
            <form onSubmit={handleSumbit} >
                <label htmlFor="first-name" >First Name: </label>
                <input type="text" name="first-name" value={formData.firstName} onChange={handleChange} />
                <label htmlFor="last-name" >Last Name: </label>
                <input type="text" name="last-name" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="username" >Username: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                <label htmlFor="email" >Email: </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label htmlFor="password" >Password: </label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </form>
        </div>
    );
}
export default Signup;