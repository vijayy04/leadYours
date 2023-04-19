import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from '../components/Users.json';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase'
import { async } from '@firebase/util';

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        const userInfo = {
          "mail": email,
          "pass": password
        }
        localStorage.setItem(
          "userDetails",
          JSON.stringify(userInfo)
        );
        navigate('/home-campaign');

      })
      .catch((error) => {
        setError(true)
      });



    // console.log('email', email.value, typeof (email.value));
    // console.log('password', password.value, typeof (password.value));
    // console.log('mail', users.user.mail, typeof (users.user.mail));
    // console.log('pass', users.user.pass, typeof (users.user.pass));

    // if ((email.value === users.user.mail && password.value === users.user.pass) || (email.value === users.admin.mail && password.value === users.admin.pass)) {
    //   if (email.value === users.user.mail && password.value === users.user.pass) {
    //     localStorage.setItem(
    //       "userDetails",
    //       JSON.stringify(users.user)
    //     );
    //     localStorage.setItem(
    //       "adminDetails",
    //       JSON.stringify('')
    //     );
    //   } else if (email.value === users.admin.mail && password.value === users.admin.pass) {
    //     localStorage.setItem(
    //       "adminDetails",
    //       JSON.stringify(users.admin)
    //     );
    //     localStorage.setItem(
    //       "userDetails",
    //       JSON.stringify('')
    //     );
    //   }

    //   navigate('/home-campaign');
    // } else {
    //   console.log('email', email.value);
    //   console.log('password', password.value);
    //   alert('email and password is wrong')
    // }

  }

  return (<>
    <div className="w-screen h-screen">
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 float-left h-full bg-no-repeat bg-center bg-welcomeBackImg bg-lighterBlue bg-login"></div>
      <div className=" xl:w-2/4 lg:w-2/4 md:w-2/4 max-md:w-100  float-left h-full md:h-screen flex justify-center content-center">

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left h-full"></div>

        <div className="grid items-center xl:w-logins2 lg:w-logins2 md:w-logins2 max-md:w-[75%]  h-full md:h-screen ">
          <div className='w-100'>
            <div className="w-100 font-bold text-center text-[2.12vw] max-md:text-[4.24vw] mb-[9.74%]">Welcome Back</div>
            <form onSubmit={onSubmitForm} >
              <div className=""><span className="text-[.995vw] max-md:text-[2vw] regular">Email Address</span><br />
                <input id='email'
                  className="input text-[.995vw] max-md:text-[2vw]"
                  required type='email'
                  placeholder='Enter Email Address'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mt-[5.9%]"><span className="text-[.995vw] max-md:text-[2vw] regular">Password</span><br />
                <input id='password'
                  className="input text-[.995vw] max-md:text-[2vw]"
                  required minLength={6} type='password'
                  placeholder='Enter Password'
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="forLink regular text-right max-md:text-[1.84vw]"><Link to='/reset-password'> Forgot Password? </Link></div>
              <div className=""><button className="semiBold loginBtn text-[.995vw] max-md:text-[2vw]">Login</button></div>
              {error && <div className="w-100 text-center text-[1vw] font-medium pt-[2%] max-md:text-[4.24vw] mb-[2.4%] text-[red]">Wrong Email & Password*</div>}
              <div className="text-center mt-[4.5%] text-[.927vw] max-md:text-[1.84vw]">Don't have an account? <Link to='/sign-up'><span className="text-mainColor hover:underline hover:cursor-pointer">Signup</span></Link> </div>
            </form>
          </div>
        </div>

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left "></div>
      </div>
    </div>
  </>)
}

export default Login