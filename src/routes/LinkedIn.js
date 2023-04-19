import { useState } from "react";
import newAccount from '../images/newAccount.png';
import person from '../images/person.jpeg';
import realComment from '../images/realCooment.png';
import cancel from '../images/cancel.png';
import realLinkedIn from '../images/realLinkedIn.png';
import loading from '../images/loading.png';
import Modal from 'react-modal';
import Select from "react-select";
import Side from "./SideMenu";
import Top from "./Header";

function LinkedIn() {

  const [step1ModalIsOpen, setStep1ModalIsOpen] = useState(false);
  const [step2ModalIsOpen, setStep2ModalIsOpen] = useState(false);
  const [step3ModalIsOpen, setStep3ModalIsOpen] = useState(false);
  const [step4ModalIsOpen, setStep4ModalIsOpen] = useState(false);
  const [step5ModalIsOpen, setStep5ModalIsOpen] = useState(false);

  const userInfo = [
    {
      msg: 0,
      user: 'Active',
      gmail: 'millie.bob@gmail.com'
    },
    {
      msg: 10,
      user: 'Inactive',
      gmail: 'millie.bob@gmail.com'
    },
    {
      msg: 32,
      user: 'Inactive',
      gmail: 'millie.bob@gmail.com'
    },
  ]

  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(217, 217, 217, 0.4)',
      height: '100%'
    },
    content: {
      position: 'absolute',
      margin: 'auto',
      width: '56.25%',
      height: 'auto',
      top: '304px',
      left: '40px',
      right: '40px',
      bottom: '298px',
      border: 'none',
      background: 'rgba(255, 255 ,255 ,1)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      backgroundSize: '30px 30px, 30px 30px',
      borderRadius: '10px',
    }
  }

  const country = [
    { label: 'Indian' },
    { label: 'Argentina' }]

  return (<>
    <div className="w-100 minWidth">
      <Side select={`linkedIn`}></Side>
      <Top heading={`LinkedIn Accounts`}></Top>
      <div className={`pt-[3.8%] mx-[1.2%] pl-[1.2%] h-[93vh] overflow-x-auto`}>

        {/* this row is used for add new account button */}
        <div className="flex w-[100%] justify-end  float-left">
          <button className="w-[13.6%] max-md:w-[17%] max-mb:w-[24%] cursor-pointer" onClick={() => { setStep1ModalIsOpen(true) }}><img src={newAccount} alt='new-account'></img></button>
        </div>

        {/* this is the below part where all account is created  */}
        <div className="w-[100%] mt-[1.4%]  px-[20px] pt-[21px] pb-[5.2%] justify-start bg-bgLightBlue rounded-[15px] float-left">

          {
            userInfo.map((ele, index) => {
              return (
                <div key={index} className="w-[19.5%] float-left max-md:w-[30%] max-mb:w-[45%] max-mb:mr-[5%] max-mb:mb-[5%] mr-[3.1%] mb-[3.1%] drop-shadow-linkedInProfile rounded-[8px] pb-[1.9%] bg-white">

                  {/* this part holds user dp and pending msg */}
                  <div className="w-100  float-left">
                    {/* this part holds dp  */}
                    <div className="w-[100%] mt-[6%] relative flex justify-center">
                      <div className="rounded-[100%] overflow-hidden w-[30.4%] max-md:w-[35%]"><img src={person} alt='user'></img></div>

                      {/* this parts holds pending messages  */}
                      {ele.msg > 0 ? (
                        <div className="w-[24%] rounded-[8px] max-md:rounded-[6px] max-mb:rounded-[4px] border-[#2A83EC] border pt-[2.4%] pb-[1.2%] top-0 right-[2.3%] z-50 absolute">
                          <div className="w-[50%] flex justify-center  float-left"><img className="w-[65.5%] " src={realComment} alt='comment'></img> </div>
                          <div className="w-[50%] text-center text-[1.06vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] medium  text-[#2A83EC] float-left">{ele.msg}</div>
                        </div>
                      ) : ''}
                    </div>

                    {/* this part holds user is active or not */}
                    <div className="w-100 mt-[4.1%] text-center text-[#434343] leading-none text-[1.06vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] medium"><button className="w-[6.1%] text-black rounded-[100%] leadind-none mr-[2.7%]"
                      style={{ backgroundColor: ele.user === 'Active' ? '#49E76C' : '#FFB444', color: ele.user === 'Active' ? '#49E76C' : '#FFB444' }}
                    >.</button>{ele.user}</div>
                    <div className="w-100 mt-[14px] text-center text-[#000] text-[1.2vw] max-md:text-[1.8vw] max-mb:text-[2.5vw] medium">{ele.gmail}</div>
                    <div className="w-100 mt-[1px] text-center text-[#2A83EC] text-[1.06vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] medium">Connected to LinkedIn</div>
                    <div className="w-100 mt-[13%] flex justify-center"><button className=" text-white text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] leading-none px-[4.98%] py-[4.1%] bg-[#2A83EC] rounded-[8px] max-md:rounded-[6px] max-mb:rounded-[4px]"
                      style={{ backgroundColor: ele.user === 'Active' ? '#E0E0E0' : '#2A83EC' }}
                    >Switch Account</button></div>
                  </div>
                </div>
              )
            })
          }

        </div>


        {/* step 1 modal  */}
        <Modal isOpen={step1ModalIsOpen} onRequestClose={() => setStep1ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep1ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add New LinkedIn Account</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              Please add a LinkedIn account you would like to run campaigns from.<br />
              Your LinkedIn credentials are used only to connect your account to Newson. We do not have direct<br />
              access to your account and can not change your profile info. You can disconnect your LinkedIn<br />
              account anytime.<br />
              Also, we recommend that you do not use a connected LinkedIn account on your device parallelly<br />
              while using it in the application because it increases the probability of your LinkedIn account getting<br />
              temporarily restricted.<br />
            </div>
            <div className="w-[98%] flex justify-end mt-[6.5%]  "> <button onClick={() => {
              setStep2ModalIsOpen(true)
              setStep1ModalIsOpen(false)
            }} className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] px-[2.2%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Get Started</button> </div>
          </div>
        </Modal>

        {/* step 2 modal  */}
        <Modal isOpen={step2ModalIsOpen} onRequestClose={() => setStep2ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep2ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add New LinkedIn Account</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">Your regular login location </div>
            <div className="w-100 text-left regular mt-[1%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.39% 0%',
                    marginRight: '1.8%',
                    paddingLeft: '2%'
                  }),
                }} placeholder='Select Country'
                options={country} />
            </div>
            <div className="w-100 text-left regular mt-[2.3%]">
              <input type='checkbox' id="linkedInChechbox" className="linkedInChechbox p-[1.025%] max-md:p-[1.6%]"></input>
              <span className="p-0 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Use my own proxy</span>
            </div>
            <div className="w-[98%] flex justify-end mt-[9.8%] max-md:mt-[18%]  "> <button onClick={() => {
              setStep3ModalIsOpen(true)
              setStep2ModalIsOpen(false)
            }} className="text-[1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] max-md:text-[1.5vw] max-mb:text-[2.1vw] px-[2.2%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Next</button> </div>
          </div>
        </Modal>

        {/* step 3 modal  */}
        <Modal isOpen={step3ModalIsOpen} onRequestClose={() => setStep3ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep3ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add New LinkedIn Account</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">Your regular location timezone </div>
            <div className="w-100 text-left regular mt-[1%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.39% 0%',
                    marginRight: '1.8%',
                    paddingLeft: '2%'
                  }),
                }} placeholder='Select Timezone'
                options={country} />
            </div>
            <div className="w-100 text-left regular mt-[1.5%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">Your regular work hours </div>
            <div className="w-100 text-left regular mt-[1%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <div className="w-[49%] max-mb:w-[100%] mr-[1%] float-left">
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      padding: '1.39% 0%',
                      marginRight: '1.8%',
                      paddingLeft: '2%'
                    }),
                  }} placeholder='Select Timezone'
                  options={country} />
              </div>

              <div className="w-[49%] max-mb:w-[100%] max-mb:mt-[3.4%] float-left"><Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.39% 0%',
                    marginRight: '1.8%',
                    paddingLeft: '2%'
                  }),
                }} placeholder='Select Timezone'
                options={country} /></div>
            </div>
            <div className="w-[98%] flex justify-end mt-[10.9%] max-md:mt-[20%] max-mb:mt-[60%] mr-[1%]  ">
              <button onClick={() => {
                setStep2ModalIsOpen(true)
                setStep3ModalIsOpen(false)
              }} className="text-[1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] max-md:text-[1.5vw] max-mb:text-[2.1vw] px-[2.2%] mr-[1.5%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Back</button>
              <button onClick={() => {
                setStep3ModalIsOpen(false)
                setStep4ModalIsOpen(true)
              }} className="text-[1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] max-md:text-[1.5vw] max-mb:text-[2.1vw] px-[2.2%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Next</button>
            </div>
          </div>
        </Modal>

        {/* step 4 modal  */}
        <Modal isOpen={step4ModalIsOpen} onRequestClose={() => setStep4ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep4ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add New LinkedIn Account</div>

            <div className="w-100 text-left regular mt-[1.5%] text-[1vw] float-left ">
              <div className="w-[9%] max-mb:w-[10%]  float-left"> <img className="w-[82.5%] max-mb:w-[100%]" src={realLinkedIn} alt='linkedIn'></img> </div>
              <div className="w-[89%] text-[1.6vw] max-md:text-[2.4vw] max-mb:text-[3.2vw] pt-[.8%] float-left">LinkedIn Sign In </div>
            </div>
            <div className="w-100 text-left regular mt-[3.3%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] float-left">
              <div className="w-[49%] max-mb:w-[100%] mr-[1%] float-left"><Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.39% 0%',
                    marginRight: '1.8%',
                    paddingLeft: '2%'
                  }),
                }} placeholder='Enter LinkedIn Email'
                options={country} /></div>

              <div className="w-[49%] max-mb:w-[100%]  max-mb:mt-[3.4%] float-left"><Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: '1.39% 0%',
                    marginRight: '1.8%',
                    paddingLeft: '2%'
                  }),
                }} placeholder='End LinkedIn Password'
                options={country} /></div>
            </div>
            <div className="w-[98%] flex justify-end mt-[11.25%] max-md:mt-[23%] mr-[1%] float-left">
              <button onClick={() => {
                setStep3ModalIsOpen(true)
                setStep4ModalIsOpen(false)
              }} className="text-[1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] max-md:text-[1.5vw] max-mb:text-[2.1vw] px-[2.2%] mr-[1.5%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Back</button>
              <button onClick={() => {
                setStep4ModalIsOpen(false)
                setStep5ModalIsOpen(true)
              }} className="text-[1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] max-md:text-[1.5vw] max-mb:text-[2.1vw] px-[2.2%] py-[1%] max-md:px-[3%] max-mb:py-[1.6%] medium text-white cursor-pointer bg-[#2A83EC]">Next</button>
            </div>
          </div>
        </Modal>

        {/* step 5 modal  */}
        <Modal isOpen={step5ModalIsOpen} onRequestClose={() => setStep5ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep5ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add New LinkedIn Account</div>

            <div className="w-100 text-left regular mt-[1.5%] text-[1vw] float-left ">
              <div className="w-[100%] text-[1.6vw] max-md:text-[2.4vw] max-mb:text-[3.2vw] pt-[.8%] float-left">PIN Verification</div>
              <div className="w-[100%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[.8%] float-left ">Syncing your account</div>
              <div className="w-[100%] flex justify-center pt-[1%] max-mb:mt-[15%] float-left "><img className="w-[13.58%] max-md:w-[25%] max-mb:w-[33%]" src={loading} alt='loading'></img></div>
            </div>

          </div>
        </Modal>



      </div>
    </div>
  </>
  )
}

export default LinkedIn