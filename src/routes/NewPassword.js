function NewPassword() {
  const onClickReset = (e) => {
    e.preventDefault()

    let newPassword = document.getElementById('new-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
      alert('Your confirm password does not match')
    }
  }

  return (<>
    <div className="w-screen h-screen">
      <div className="xl:w-2/4 lg:w-2/4 md:w-2/4 float-left h-full bg-no-repeat bg-center bg-newPassword bg-welcomeBackImg bg-lighterBlue"></div>
      <div className=" xl:w-2/4 lg:w-2/4 md:w-2/4 max-md:w-100  float-left h-full md:h-screen flex justify-center content-center">

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left h-full"></div>

        <div className="grid items-center xl:w-logins2 lg:w-logins2 md:w-logins2 max-md:w-[75%]  h-full md:h-screen ">
          <form onSubmit={onClickReset}>
            <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] font-bold text-center mb-[9.74%]">Reset Password</div>
            <div className=""><span className="text-[.995vw] max-md:text-[2vw] regular">New Password</span><br /> <input className="input text-[.995vw] max-md:text-[2vw]" minLength={6} required id='new-password' type='password' placeholder='Create New Password'></input> </div>
            <div className="mt-[5.9%]"><span className="text-[.995vw] max-md:text-[2vw] regular">Confirm Password</span><br /> <input required className="input text-[.995vw] max-md:text-[2vw]" id='confirm-password' type='password' placeholder='Repeat Password'></input> </div>
            <div className=""><button className="semiBold loginBtn text-[.995vw] max-md:text-[2vw]">Reset</button></div>
          </form>
        </div>

        <div className="xl:w-logins1 lg:w-logins1 md:w-logins1 max-md:w-logins1 float-left "></div>
      </div>
    </div>
  </>)
}

export default NewPassword