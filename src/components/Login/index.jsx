import styles from "./styles.module.css"
import { useState } from "react"
import {Link } from "react-router-dom"
import axios from 'axios'



export default function Login ({signModal ,signToggleModal,setSignModal , toggleModal, }){
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
      
 
             <div className={styles.login_container} >
              
            <div className={styles.login_form_container} >
            
                <div className={styles.left}>
               
                <form action="" className={styles.form_container} style={{position:"relative"}}  onSubmit={handleSubmit}>
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
                        <a onClick={signToggleModal} style={{position:"absolute", top:"250px", right:"13px", color:"#335EFF"}}>Бүртгүүлэх</a>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                             Нэвтрэх
                        </button>
                    </form>
                </div>
                <div className={styles.right} >
                 {/* <div >
                 <span  className="close" onClick={toggleModal} style={{color: "white",  fontSize:"40px", cursor: "pointer", marginTop:"-100px", marginRight:"-170px", }}>&times;</span>
                 </div> */}
                <div className="col-lg-8 col-md-12 text-center flex-align justify-center " id="signup-img">
                    <div className="work-box"  id="ico" >
							<div className="work-box-bg my-0  " >
                         
                            </div>
                            <img src="images/bdc-ico-prgoress-5 zass.png" className="rotation-img"  alt="Work Process"/>
						</div>
					</div>
                </div>
            </div>
        </div>
      
    )
}