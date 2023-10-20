import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Home() {
const navigate =useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://passwordresetvk.onrender.com/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			toast.success("Login Successful");
			navigate("/welcome");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				toast.error("Invalid Login Credentials")
			}
		}
	};


  return (
 <>
    
    <div className='logbody'>
        <div class="shadow p-3 mb-5 bg-white rounded logcd">
        <form>
		<ToastContainer  
				position="top-right"
				 autoClose={5000}
				 hideProgressBar={false}
				 newestOnTop={false}
				 closeOnClick
				 rtl={false}
				 pauseOnFocusLoss
				 draggable
				 pauseOnHover />


        <img src="./image/psbn.png" className='psbn' alt="psbn" /> 
  <div class="form-group">

  <h3 className='frm'>Login</h3>
    <input type="email" class="form-control frm" id="email" placeholder='Email' name='email' value={data.email} onChange={handleChange}/>
    </div>
  <div class="form-group">
    <input type="password" placeholder='Password' class="form-control" id="password" name='password' value={data.password} onChange={handleChange}/>
  </div>
  
  <div class="form-group">
  <button class="btn btn-success logbt" onClick={handleSubmit}>Login</button >
  <Link to='/register' class="btn btn-primary logbt">Register</Link>
</div>
<Link to='/rp/forgotpassword' className='logbt fpt'>Forgot Password ?</Link>
   </form>
        </div>
    </div>
 </>

  )
}

export default Home