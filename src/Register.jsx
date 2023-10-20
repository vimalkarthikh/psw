import React,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
const navigate=useNavigate();
  const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://passwordresetvk.onrender.com/register";
			const { data: res } = await axios.post(url, data);

      toast.success("Registeration Successful");
			setMsg(res.message);
      navigate('/login');
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        toast.error("User already Exists");
			}
		}
	};

  return (
    <div>
      <>
    
    <div className='logbody'>
        <div class="shadow p-3 mb-5 bg-white rounded logccd">
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

        <h3 className='frm'>Register</h3>
  <div class="form-group">

    <input type="name" name='name' class="form-control frm" id="name" placeholder='Name' onChange={handleChange} value={data.name}/>
    </div>
  <div class="form-group">

    <input type="email" name='email' class="form-control frm" id="email" placeholder='Email' onChange={handleChange} value={data.email}/>
    </div>
  <div class="form-group">
    <input type="password" name='password' placeholder='Password' class="form-control" id="password" onChange={handleChange} value={data.password}/>
  </div>
   <button type="submit" class="btn btn-success form-control" onClick={handleSubmit}>Register</button>
</form>
<h6>{msg}</h6>
        </div>
    </div>
 </>
    </div>
  )
}

export default Register