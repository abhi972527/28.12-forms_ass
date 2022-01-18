import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({
        username: "",
        age: "",
        address: "",
    });

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="username" type="text" placeholder="enter name" />
            <input onChange={handleChange} name="age" type="number" placeholder="enter age" />
            <input onChange={handleChange} name="address" type="text" placeholder="enter address" />
            <input type="submit" value="submit" />
        </form>
    );
};