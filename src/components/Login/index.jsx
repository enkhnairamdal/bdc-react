import styles from "./styles.module.css"
import { useState } from "react"
import {Link } from "react-router-dom"
import axios from 'axios'

import { Navbar } from "../Home/navbar"

export default function Login (){
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return(
        <div>
            <Navbar/>
             <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form action="" className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Нэвтрэх</h1>
                        <input 
                            type="email"
                            placeholder="Имэйл хаягаа оруулна уу"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}

                        />
                        <input 
                            type="password"
                            placeholder="Нууц үгээ оруулна уу"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}

                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                             Нэвтрэх
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    
                <h1>Бүртгүүлэх</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                        Бүртгүүлэх
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}