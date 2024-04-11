import styles from "./styles.module.css"
import { useState } from "react"
import {Link , useNavigate} from "react-router-dom"
import axios from 'axios'
import { Navbar } from "../Home/navbar"

export default function Signup (){
    const [data , setData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
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
               error.response.status >= 400 &&
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
                    {/* <h1>Нэвтрэх</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            <span id="span">Нэвтрэх</span>
                        </button>
                    </Link> */}
                    <div className="col-lg-6 col-md-12 text-center flex-align justify-center wow fadeInLeft" id="signup-img">
                    <div className="work-box" style={{width:"180px" , height:"180px"}} id="ico" >
							<div className="work-box-bg my-0"></div>
							<img src="images/bdc-ico-prgoress-5 zass.png" className="rotation-img"  alt="Work Process"/>
						</div>
					</div>
                  
                </div>
                <div className={styles.right}>
                    <form action="" className={styles.form_container} onSubmit={handleSubmit}>
                        <h1 >Бүртгүүлэх</h1>
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
                            type="text"
                            placeholder="Утасны дугаар"
                            name="phone"
                            onChange={handleChange}
                            value={data.phone}
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
                        <a href="/login">Нэвтрэх</a>
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