import { Link, useNavigate } from 'react-router-dom';

function ResetPassword() {
  let navigate = useNavigate();

  const onSubmitResetPassword = () => {
    navigate('/new-password');
  }

  return (<>
    <div className="w-screen h-screen">
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 float-left h-full bg-no-repeat bg-center bg-welcomeBackImg bg-lighterBlue bg-resetPassword"></div>
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 max-md:w-100 float-left h-full md:h-screen flex justify-center content-center">

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left h-full"></div>

        <div className="grid items-center xl:w-logins2 lg:w-logins2 md:w-logins2 max-md:w-[75%]  h-full md:h-screen ">
          <form onSubmit={onSubmitResetPassword}>
            <div className="w-100 font-bold text-center text-[2.12vw] max-md:text-[4.24vw]">Reset Password</div>
            <div className="text-center text-[.995vw] max-md:text-[2vw] font-medium">We’ll send an email to you so you can reset <br /> your password</div>
            <div className="mt-[7.5%]"><span className="text-[.995vw] max-md:text-[2vw] regular">Email Address</span><br /> <input required className="input text-[.995vw] max-md:text-[2vw]" type='email' placeholder='Enter Email Address'></input> </div>
            <div className=""><button className="semiBold loginBtn text-[.995vw] max-md:text-[2vw]"> Reset </button></div>
            <div className="text-center font-medium text-[.927vw] max-md:text-[1.84vw] mt-[4.5%]">Don't want to reset? <Link to='/login'><span className="text-mainColor hover:underline hover:cursor-pointer">Login</span></Link> </div>
          </form>
        </div>

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left "></div>
      </div>
    </div>
  </>)
}

export default ResetPassword