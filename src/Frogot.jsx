import React,{useState} from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Frogot() {
  const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://passwordresetvk.onrender.com/rp/forgotpassword`;
			const { data } = await axios.post(url,{email});
			toast.success("Email Sent")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				toast.error("Invalid Email");
			}
		}
	};


  return (
    <div className='jcc'>
         <div class="shadow p-3 mb-5 bg-white rounded fpf">
                <h2>Forgot Password</h2>
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
                    <input type="email" className='form-control' placeholder='Enter Email' name='email' 
					onChange={(e) => setEmail(e.target.value)}
          value={email}/>
                </div>
                <div className="form-group">
                    <button onClick={handleSubmit}  className='btn btn-info form-control'> Submit </button>
                </div>
				
            </form>

         </div>
    </div>
  )
}

export default Frogot