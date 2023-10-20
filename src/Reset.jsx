import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reset() {
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://passwordresetvk.onrender.com/rp/reset/:token`;
			const { data } = await axios.post(url,{password});
            toast.success("Password Reset Sucsessful");
			navigate('/login');
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
                toast.error("Invalid Entry");
			}
		}
	};

  return (
    <div className='jcc'>
         <div class="shadow p-3 mb-5 bg-white rounded fpf">
                <h2>Reset Password</h2>
                <br></br>
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
                <div className="form-group">
                    <input type="password" className='form-control' placeholder='Enter New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button onClick={handleSubmit} className='btn btn-info form-control'> Submit </button>
                </div>
            </form>
         </div>
    </div>    
    )
}

export default Reset