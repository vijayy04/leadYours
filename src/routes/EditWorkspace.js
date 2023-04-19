import { useState } from "react";
import person from '../images/person.jpeg';
import realDelete from '../images/realDelete.png';
import editPencil from '../images/editPencil.png';
import plus from '../images/plus.png';
import cancel from '../images/cancel.png';
import Modal from 'react-modal';
import Side from "./SideMenu";
import Top from "./Header";

function EditWorkspace() {

  const [step1ModalIsOpen, setStep1ModalIsOpen] = useState(false);
  const [step2ModalIsOpen, setStep2ModalIsOpen] = useState(false);

  const modalStyle1 = {
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
      padding: '15px 15px',
      margin: 'auto',
      width: '56.25%',
      height: 'auto',
      top: '304px',
      left: '40px',
      right: '40px',
      bottom: '383px',
      border: 'none',
      background: 'rgba(255, 255 ,255 ,1)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      backgroundSize: '30px 30px, 30px 30px',
      borderRadius: '10px',
    }
  }
  const modalStyle2 = {
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
      padding: '15px 15px',
      margin: 'auto',
      width: '56.25%',
      height: 'auto',
      top: '304px',
      left: '40px',
      right: '40px',
      bottom: '358px',
      border: 'none',
      background: 'rgba(255, 255 ,255 ,1)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      backgroundSize: '30px 30px, 30px 30px',
      borderRadius: '10px',
    }
  }

  return (<>
    <div className="w-100 minWidth">
      <Side select={`setting`}></Side>
      <Top heading={`Edit Workspace`}></Top>
      <div className={`pt-[2.1%] mr-[1.46%] pl-[1.65%] regular overflow-auto`}>
        {/* this is the below part where all account is created  */}
        <div className="flex w-[100%] regular  px-[2.51%] pt-[2.8%] pb-[14%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100 drop-shadow-userSettting bg-white rounded-[8px] px-[1.805%] pt-[1.74%] pb-[1.8%]">
            <div className="w-100 float-left pb-[2.59%] borderLightGrey">

              {/* left hand side input boxes */}
              <div className="w-[49.2%] max-mb:w-100 float-left ">
                <div className="w-100 float-left">
                  <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw]">Workspace Name</span>
                  <input className="w-100 mt-[2.065%] pt-[1.6%] pb-[2.23%] px-[2.55%]  text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="My Workspace" />
                </div>
              </div>

              {/* right hand side input boxes */}
              <div className="w-[38.5%] max-mb:w-100 max-mb:mt-[3%] ml-[1.7%] max-mb:ml-[0%] float-left ">
                <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw]">Invite Code</span>
                <input className="w-100 mt-[2.624%] max-mb:mt-[2.065%] pt-[2.02%] pb-[2.87%] px-[3.27%]  text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="roihv83437fb" />
              </div>

              {/* button part */}
              <div className="w-[9.4%] max-md:w-[100%] max-md:ml-[0%] max-md:mt-[0%] ml-[1.2%] mt-[2.94%] float-left ">
                <button className="w-100 max-md:w-[17%] max-mb:w-[25%] mt-[2.065%] py-[12.6%] max-mb:py-[3%] max-md:py-[1.3%] px-[2.55%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] text-white  bg-[#2A83EC] rounded-[6px] ">Reset Code</button>
              </div>

            </div>

            <div className="w-100 float-left flex justify-end">
              <button onClick={() => setStep1ModalIsOpen(true)} className="w-[11%] max-md:w-[15%] max-mb:w-[23%] max-mb:py-[2%] mt-[2.065%] flex pt-[.91%] pb-[.6%] pl-[1.02%]  text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] text-white  bg-[#2A83EC] rounded-[6px] ">Invite User <img className="w-[16%] ml-[7%]" src={plus} alt='load' /> </button>
            </div>

            <div className="w-100 float-left flex justify-end ">
              <div className="w-100">
                <div className="w-[100%] mt-[1.9%] rounded-[5px]  pt-[1.1%] px-[1.65%] float-left">
                  <div className="w-[100%] float-left">

                    <div className="w-[25%] pl-[3%] float-left text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw]  regular">
                      Email
                    </div>

                    <div className="w-[25%] flex justify-center float-left text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw]">
                      Allowed LinkedIn Accounts
                    </div>

                    <div className="w-[25%] pl-[4%] float-left text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] switchs1">
                      Has Admin Rights
                    </div>

                    <div className="w-[16.6%] float-left text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] text-end pr-[1%] ">
                      Actions
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="w-100 float-left flex justify-end ">
              <div className="w-100">
                <div className="w-[100%] mt-[1.4%] bg-white rounded-[5px] drop-shadow-campaign  py-[1.1%] px-[1.65%] float-left">
                  <div className="w-[100%] float-left">

                    <div className="w-[25%] float-left regular text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw]">
                      <span className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] regular">user@example.com</span>
                    </div>

                    <div className="w-[25%] flex justify-center float-left">
                      <img className="w-[14.6%] rounded-[50%]" src={person} alt='arrow-up' />
                    </div>

                    <div className="w-[25%] pt-[.7%] pl-[7%] float-left switchs1">
                      <input type='checkbox' id='check' class='toggle' checked='false' />
                      <label for='check' className='text-[1.2vw] font-[400] '></label>
                    </div>

                    <div className="w-[16.6%] float-left flex justify-end ">
                      {/* edit button  */}
                      <button className="ml-[1.5%] w-[2.65vw] h-[2.65vw] max-md:w-[3.2vw] max-md:h-[3.2vw] max-mb:w-[4vw] max-mb:h-[4vw] max-md:rounded-[6px] max-mb:rounded-[4px] bg-lightBlue1 flex justify-center rounded-[8px] py-[3.5%]" >
                        <img className="w-[62.3%]" src={editPencil} alt='arrow-up' />
                      </button>
                      {/* delete button  */}
                      <button className="ml-[6%] w-[2.65vw] h-[2.65vw] max-md:w-[3.2vw] max-md:h-[3.2vw] max-mb:w-[4vw] max-mb:h-[4vw] max-md:rounded-[6px] max-mb:rounded-[4px] bg-[#FFD4D4] flex justify-center rounded-[8px] py-[3.5%]" >
                        <img className="w-[62.3%]" src={realDelete} alt='arrow-up' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] mt-[1%] bg-white rounded-[5px] drop-shadow-campaign  py-[1.1%] px-[1.65%] float-left">
                  <div className="w-[100%] float-left">

                    <div className="w-[25%] float-left regular text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw]">
                      <span className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] regular">user@example.com</span>
                    </div>

                    <div className="w-[25%] flex justify-center float-left">
                      <img className="w-[14.6%] rounded-[50%]" src={person} alt='arrow-up' />
                      <img className="w-[14.6%] ml-[2%] rounded-[50%]" src={person} alt='arrow-up' />
                    </div>

                    <div className="w-[25%] pt-[.7%] pl-[7%] float-left switchs2">
                      <input type='checkbox' id='check' class='toggle' />
                      <label for='check' className='text-[1.2vw] font-[400] '></label>
                    </div>

                    <div className="w-[16.6%] float-left flex justify-end ">
                      {/* edit button  */}
                      <button className="w-[2.65vw] h-[2.65vw] max-md:w-[3.2vw] max-md:h-[3.2vw] max-mb:w-[4vw] max-mb:h-[4vw] max-md:rounded-[6px] max-mb:rounded-[4px] ml-[1.5%] bg-lightBlue1 flex justify-center rounded-[8px] py-[3.5%]" >
                        <img className="w-[62.3%]" src={editPencil} alt='arrow-up' />
                      </button>
                      {/* delete button  */}
                      <button className="w-[2.65vw] h-[2.65vw] max-md:w-[3.2vw] max-md:h-[3.2vw] max-mb:w-[4vw] max-mb:h-[4vw] max-md:rounded-[6px] max-mb:rounded-[4px] ml-[6%] bg-[#FFD4D4] flex justify-center rounded-[8px] py-[3.5%]" >
                        <img className="w-[62.3%]" src={realDelete} alt='arrow-up' />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="w-100 mt-[6.9%] float-left">
              <div className="w-[50%] float-left flex ">
                <button className="flex mr-[2.5%] px-[2.6%] pt-[2%] pb-[1%] bg-[#FFD4D4] text-[#FF4444] rounded-[6px] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium max-mb:px-[5%] max-mb:py-[2.2%]"><span className="">Delete Workspace</span></button>
              </div>
              <div className="w-[50%] float-left flex justify-end">
                <button className="flex mr-[2.5%] px-[2.6%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium max-mb:px-[5%] max-mb:py-[2.2%]"><span className="">Cancel</span></button>
                <button onClick={() => setStep2ModalIsOpen(true)} className="flex px-[2.6%] pt-[2%] pb-[1%]  bg-[#2A83EC] rounded-[6px] text-white text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium max-mb:px-[5%] max-mb:py-[2.2%]"><span className="">Save</span></button>
              </div>
            </div>

          </div>

        </div>

        {/* step 1 modal  */}
        <Modal isOpen={step1ModalIsOpen} onRequestClose={() => setStep1ModalIsOpen(false)}
          style={modalStyle1} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep1ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Invite User</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] ">Member’s Email</div>
            <div className="w-100 text-left regular mt-[1%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] ">
              <input className="w-[97.9%] py-[2.2%] px-[2.1%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] border border-[#B3B3B3] rounded-[5px]" type='text' placeholder='Enter Member’s Email' />
            </div>
            <div className="w-[98%] mt-[1.5%]  "> <button className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] rounded-[6px] px-[2.2%] py-[1%] max-mb:px-[3.1%] max-mb:py-[2%] medium text-white cursor-pointer bg-[#2A83EC]">Add Another</button> </div>
            <div className="w-[98%] flex justify-end  "> <button onClick={() => {
              setStep1ModalIsOpen(false)
            }} className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] rounded-[6px] px-[2.2%] py-[1%] max-mb:px-[3.1%] max-mb:py-[2%] medium text-white cursor-pointer bg-[#2A83EC]">Invite</button> </div>
          </div>
        </Modal>

        {/* step 2 modal  */}
        <Modal isOpen={step2ModalIsOpen} onRequestClose={() => setStep2ModalIsOpen(false)}
          style={modalStyle2} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep1ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Invite User</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] ">
              <div className="w-[30.35%] max-md:w-[48%] max-mb:w-[100%] max-mb:mt-[4%] max-md:mr-[4%] float-left  border border-[#B3B3B3] rounded-[5px]" >
                <div className="w-100 relative text-center">
                  <div className="w-100 semiBold pt-[20.7%] text-[1.323vw] max-md:text-[2.1vw] max-mb:text-[2.7vw]">Space 1</div>
                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] py-[9.6%]">10 Members</div>
                  <div className="w-[24.5%] max-md:w-[25%] absolute right-[4%] top-[7.8%] border-[2px] border-[#2A83EC] rounded-[5px] py-[1.4%] semiBold text-[#2A83EC] text-[.865vw] max-md:text-[1.1vw] max-mb:text-[1.7vw]">Active</div>
                </div>
              </div>

              <div className="w-[30.35%] max-md:w-[48%] max-mb:w-[100%] max-mb:mt-[4%] max-md:ml-[0%] float-left ml-[2%] border border-[#2A83EC] rounded-[5px]" >
                <div className="w-100 text-center">
                  <div className="w-100 semiBold pt-[20.7%] text-[1.323vw] max-md:text-[2.1vw] max-mb:text-[2.7vw]">Space 1</div>
                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] py-[9.6%]">10 Members</div>
                </div>
              </div>

              <div className="w-[30.35%] max-md:w-[48%] max-mb:w-[100%] max-mb:mt-[4%] max-md:ml-[0%] max-md:mt-[4%] float-left ml-[2%] border border-[#B3B3B3] rounded-[5px]" >
                <div className="w-100 text-center">
                  <div className="w-100 pt-[27.15%] pb-[24.7%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw]">Create New +</div>
                </div>
              </div>

            </div>
          </div>
        </Modal>

      </div>
    </div>
  </>
  )
}

export default EditWorkspace