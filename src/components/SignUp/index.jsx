import styles from "./styles.module.css"
import { useState } from "react"
import {Link , useNavigate} from "react-router-dom"
import axios from 'axios'
import { Navbar } from "../Home/navbar"

export default function Signup (){
    const [data , setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({currentTarget:input}) =>{
        setData({...data , [input.name]: input.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const url = "http://localhost:8080/api/users";
            const {data:res} = await axios.post(url, data);
            navigate("/login")
            console.log(res.message)
        }catch(error){
            if(error.response && 
               error.response.status >=400 &&
               error.response.status <= 500
            ){
                setError(error.response.data.message)
            }
        }

    }
    return(
       <div>
        <Navbar/>
         <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Нэвтрэх</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Нэвтрэх
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form action="" className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Бүртгүүлэх</h1>
                        <input 
                            type="text"
                            placeholder="Овог"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}

                        />
                        <input 
                            type="text"
                            placeholder="Нэр"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}

                        />
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
                            Бүртгүүлэх
                        </button>
                    </form>
                </div>
            </div>
        </div>
       </div>
    )
}