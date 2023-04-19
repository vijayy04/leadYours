import React, { useState } from 'react';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './Firebase'
import { data } from 'autoprefixer';

function SignUp() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    referrel: '',
    password: '',
  });

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [referrel, setreferrel] = useState('');
  const [password, setpassword] = useState('');

  const [packageName, setPackageName] = useState({ value: 200, label: 'Silver' });
  const [amount, setAmount] = useState(200);

  const industry = [
    { value: 200, label: 'Silver' },
    { value: 400, label: 'Golden' },
    { value: 600, label: 'Platinum' }
  ]

  const onChangePackage = (value) => {
    setAmount(value.value);
    setPackageName(value)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "signUp"), {
        name: name,
        email: email,
        phone: Number(phone),
        packageName: packageName.label,
        amount: packageName.value,
        referrel: referrel,
        password: password,
        timeStamp: serverTimestamp(),
      });

      navigate("/login")

    } catch (error) {
      console.log(error)
    }
  }

  return (<>
    <div className="w-screen h-screen">
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 float-left h-full fixed bg-no-repeat bg-center bg-SignUp bg-welcomeBackImg bg-[#ebebeb]"></div>
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 float-left h-full  "></div>
      <div className=" xl:w-2/4 lg:w-2/4 md:w-2/4 max-md:w-100  float-left h-full md:h-screen flex justify-center content-center">

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left h-full"></div>

        <div className="xl:w-logins2 lg:w-logins2 md:w-logins2 max-md:w-[75%]  h-full md:h-screen ">
          <form onSubmit={onSubmitForm} method='POST'>
            <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] font-bold text-center pr-[12.5%] pt-[20.5%] mb-[9px]">Create Account</div>
            <div className=""><span className="text-[.995vw] max-md:text-[2vw] regular">Name</span><br />
              <input required className="input text-[.995vw] max-md:text-[2vw]"
                type='text' name='name'
                id="name"
                placeholder='Enter Your Name'
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mt-[4%]">
              <span className="text-[.995vw] max-md:text-[2vw] regular">Email Address</span><br />
              <input required className="input text-[.995vw] max-md:text-[2vw]"
                type='email' name='email'
                id="email"
                placeholder='Enter Email Address'
                onChange={e => setemail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mt-[4.9%]">
              <span className="text-[.995vw] max-md:text-[2vw] regular">Phone Number</span><br />
              <input required className="input text-[.995vw] max-md:text-[2vw]"
                type='number' minLength={10} name='phone'
                id="phone"
                placeholder='Enter Phone'
                onChange={e => setphone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="mt-[4.06%] "><span className="text-[.995vw] max-md:text-[2vw] regular">Package Name</span><br />
              <Select required className='mt-[2%] text-[.995vw] max-md:text-[2vw]'
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.6% 0%',
                  }),
                }}
                onChange={onChangePackage}
                placeholder='Select Package'
                options={industry}
                value={packageName}
              />
            </div>
            <label id='error-package' className='error'></label>
            <div className="mt-[6.5%]"><span className="text-[.995vw] max-md:text-[2vw] regular">Amount</span><br /> <input name='amount' value={packageName.value} required disabled className="input text-[.995vw] max-md:text-[2vw]" type='text'
              id="amount"
              placeholder=''></input> </div>
            <label id='error-amount' className='error'></label>
            <div className="mt-[6.5%]">
              <span className="text-[.995vw] max-md:text-[2vw] regular">Referrel Code</span><br />
              <input required className="input text-[.995vw] max-md:text-[2vw]"
                type='text' name='referrel'
                id="referrel"
                placeholder='Enter Your Referrel Code'
                onChange={e => setreferrel(e.target.value)}
                value={referrel}
              />
            </div>
            <div className="mt-[4%]">
              <span className="text-[.995vw] max-md:text-[2vw] regular">Password</span><br />
              <input required className="input text-[.995vw] max-md:text-[2vw]"
                type='password' name='password'
                id="password"
                placeholder='Create Password'
                onChange={e => setpassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mt-[4.9%] regular w-100 ">
              <div className='float-left checkbox w-[6%]'><input required id='regula-checkbox' type='checkbox'></input></div>
              <div className='text-[.995vw] max-md:text-[2vw] float-left w-[94%]'>I have read  and accept the <span onClick={() => navigate('/privacy-policy')} className='forLink text-[.995vw] max-md:text-[2vw]'>Privacy Policy</span> <br /> and <span className='forLink text-[.995vw] max-md:text-[2vw]'>Terms of Service</span></div>
            </div>
            <div className=""><button className="semiBold text-[.995vw] max-md:text-[2vw] loginBtn">Pay Now</button></div>
            <div className="text-center pb-[56px] text-[.927vw] max-md:text-[1.84vw] mt-[4.5%]">Already have an account? <Link to='/login'><span className="text-mainColor hover:underline hover:cursor-pointer">Login</span></Link> </div>
          </form>
        </div>

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left "></div>
      </div>
    </div>
  </>)
}

export default SignUp