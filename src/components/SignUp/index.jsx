import styles from "./styles.module.css"
import { useState , useEffect } from "react"
import {Link , useNavigate} from "react-router-dom"
import axios from 'axios'


export default function Signup (){
    const [data , setData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        password:"",
    })
    const [cpassword, setCpassword] = useState('');
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const password = data.password;
    let userInput ={}
    const handleChange = ({currentTarget:input}) =>{
        setData({...data , [input.name]: input.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (password.length > 0) {
            if (password === cpassword) {
                userInput ={ ...data}
        try{
            const url = "http://localhost:8080/api/users";  
            const {data:res} = await axios.post(url, data);
            navigate("/login")
            console.log(res.message)
        }
    
        catch(error){
            if(error.response && 
               error.response.status >= 400 &&
               error.response.status <= 500
            ){
                setError(error.response.data.message)
             }
         }
      }
    }
    
    }
    useEffect(() => {
        if (password === cpassword) {
          userInput = { ...data };
          setError(false);
        } else {
          setError(true);
        }
      }, [cpassword, data.password]);
    return(
       
       
         <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                  
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
                         <input 
                            type="password"
                            placeholder="Нууц үгээдахин оруулна уу"
                            onChange={(e)=> setCpassword(e.target.value)}
                            required
                            className={styles.input}

                        />
                        {/* <a href="/login" style={{position:"absolute", top:"495px", right:"5px", color:"#335EFF"}}>Нэвтрэх</a> */}
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Бүртгүүлэх
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
    )
}