import buttonSide from '../images/buttonSide.png';
import addStep from '../images/addStep.png';
import rightArrow from '../images/rightArrow.png';
import cancel from '../images/cancel.png';
import userLogo from '../images/userLogo.png';
import addSearch from '../images/addSearch.png';
import twoUserGrey from '../images/twoUserGrey.png';
import Side from "./SideMenu";
import Top from "./Header";
import Select from "react-select";
import Switch from "../components/Switch";
import Modal from 'react-modal';
import { useState } from 'react';
import { Slider } from "@mui/material";
import extra from '../images/extra.png';

function CreateCampaign() {

  const [step1ModalIsOpen, setStep1ModalIsOpen] = useState(false);
  const [step2ModalIsOpen, setStep2ModalIsOpen] = useState(false);
  const [step3ModalIsOpen, setStep3ModalIsOpen] = useState(false);
  const [valOfSlider, setValOfSlider] = useState(1000);


  const onChangeDoubleSlider = (e, val) => {
    setValOfSlider(val)
  }

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
      height: '38.7%',
      top: '30.965%',
      left: '40px',
      right: '40px',
      bottom: '30.34%',
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
      margin: 'auto',
      width: '49.145%',
      height: 'auto',
      top: '304px',
      left: '40px',
      right: '40px',
      bottom: '207px',
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
      <Side select={`campaign`}></Side>
      <Top heading={`Create Campaign`}></Top>

      <div className={`pt-[1.1%] regular mr-[1.3%] h-[93vh] overflow-x-auto`}>

        {/*   create campaign part is here */}
        <div className="flex w-[98.2%] regular mt-[.4%] px-[1.7%] max-mb:px-[3%] pt-[2.3%] max-mb:pt-[4%] max-mb:pb-[2.2%] pb-[1.1%] justify-start bg-bgLightBlue ml-[1.7%] rounded-[15px] float-left">

          <div className="w-100">
            <div className="w-100 float-left">
              <div className="w-[49.32%] max-mb:w-[100%] mr-[2.18%]  bg-white rounded-[8px] drop-shadow-campaign px-[2%] max-mb:px-[3.3%] pt-[2.1%] max-mb:pt-[3.5%] pb-[2%] max-mb:pb-[3.3%] float-left">
                <div className="w-100">

                  {/* input of text part is here  */}
                  <div className="w-100">
                    <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.4vw]">Campaign Name</div>
                    <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.4vw] pt-[1.6%] regular "><input type='text' className="w-100 py-[3.5%] max-md:py-[3.2%] max-md:px-[5.5%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Enter Campaign Name' /></div>
                  </div>

                  {/* input of select part is here  */}
                  <div className="w-100 pt-[4.3%]">
                    <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.4vw]">Campaign Type</div>
                    <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.4vw] pt-[1.6%] regular ">
                      <Select
                        className="w-[100%] py-[1.45%] max-md:py-[0%] border border-[#B3B3B3] rounded-[5px] "
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: '0%',
                            marginRight: '1.8%',
                            paddingLeft: '2%',
                            width: '100%',
                            border: 'none'
                          }),
                        }} placeholder='Select Type' />
                    </div>
                  </div>

                  {/* switch on off part  */}
                  <div className="w-100 pt-[5.9%]">
                    <Switch written={'LinkedIn Premium accounts only'}></Switch>
                  </div>
                  <div className="w-100 pt-[3.3%]">
                    <Switch written={'Enable link tracking'}></Switch>
                  </div>
                  <div className="w-100 pt-[3.3%]">
                    <Switch written={'Email only campaign'}></Switch>
                  </div>

                  <div className='w-100  pt-[3.3%]'>
                    <input type='checkbox' id='check' class='toggle' checked='false' />
                    <label for='check' className='text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] font-[400] '>Move prospects from other campaigns if they</label>
                    <div className="w-100 text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw]  pl-[12.3%]">are found</div>
                  </div>
                  <div className='w-100  pt-[3.3%]'>
                    <input type='checkbox' id='check' class='toggle' checked='false' />
                    <label for='check' className='text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] font-[400] '>Include prospects I've contacted on LinkedIn</label>
                    <div className="w-100 text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw]  pl-[12.3%]">before</div>
                  </div>


                </div>

              </div>
              <div className="w-[48.5%] max-mb:w-100 max-mb:mt-[3.5%] bg-white rounded-[8px] drop-shadow-campaign pr-[2%] px-[2%] pt-[2.1%] pb-[43.99%] float-left">
                <div className="w-[50%] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] float-left">Searches</div>
                <div className="w-[50%] flex justify-end float-left"><img onClick={() => setStep1ModalIsOpen(true)} className="w-[55.11%] max-md:w-[65%] max-mb:w-[52%]" src={addSearch} alt='add search' /></div>
              </div>
            </div>

            <div className="w-100 mt-[3.1%] float-left ">
              <div className="w-[28.9%] max-mb:w-[47%] bg-white rounded-[8px] drop-shadow-campaign px-[.8%] pt-[1%] pb-[1.2%] float-left">

                <div className="w-100 float-left">
                  <div className="w-[94.55%]  float-left leading-0">
                    <div className="w-100">
                      <div className="w-[8%] max-md:w-[10.5%] float-left "> <button className="rounded-[50%] bg-[#2A83EC] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] text-[white] px-[42%] py-[10%]">1</button> </div>
                      <div className="w-[11.2%] max-md:w-[16%] pl-[2.55%] float-left"><img className="w-[100%]" src={userLogo} alt='user' /></div>
                      <div className="w-[75.35%] max-md:w-[67%] pl-[4.9%] bg text-[.9vw] max-md:text-[1.3vw] max-mb:text-[2vw] medium pt-[2%] max-md:pt-[4%] float-left">Send Connection...</div>
                    </div>
                  </div>
                  <div className="w-[5.45%] flex justify-end float-left"><img className="w-[100%] opacity-50" src={cancel} alt='add search' /></div>

                </div>
                <div className="w-100 float-left mt-[3%]">
                  <div className="w-100 text-[.86vw] max-md:text-[1.2vw] max-mb:text-[1.8vw] pl-[14%]">
                    Request message goes here
                  </div>
                  <div className="w-100 text-[.8vw] max-md:text-[1.2vw] max-mb:text-[1.8vw] mt-[14%] text-[#2A83EC] pl-[14%]">
                    Wait after previous step
                  </div>
                  <div className="w-100 text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] mt-[1%]  pl-[14%]">
                    0d 1h
                  </div>
                </div>

              </div>

              <div className="w-[4%] max-mb:w-[6%] flex justify-center py-[6.65%] max-mb:py-[11.7%]  float-left">
                <img className="w-[57%] max-mb:w-[75%]" src={rightArrow} alt='arrow' />
              </div>
              <div className="w-[28.9%] max-md:w-[28.9%] max-mb:w-[47%] flex justify-center py-[5.21%] max-md:py-[7.05%] max-mb:py-[10.76%] border border-[#2A83EC] rounded-[8px] float-left">
                <img onClick={() => setStep2ModalIsOpen(true)} className="w-[38%]" src={addStep} alt='arrow' />
              </div>
            </div>

            <div className="w-100 float-left mt-[1.9%] max-mb:mt-[3%]">
              <div className="w-[50%] float-left">
                <button className="flex px-[2.1%] max-mb:px-[5%] max-mb:py-[3.1%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] max-mb:rounded-[4px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium"><span className="">Save as Draft</span></button>
              </div>
              <div className="w-[50%] flex justify-end float-left">
                <button className="flex mr-[2.5%] px-[2.1%] max-mb:px-[4%] max-mb:pt-[3.8%] max-mb:pb-[1.9%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] max-mb:rounded-[4px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium"><span className="">Cancel</span></button>
                <button onClick={() => setStep3ModalIsOpen(true)} className="flex px-[2.1%] max-mb:px-[4%] max-mb:pt-[3.8%] max-mb:pb-[1.9%] pt-[2%] pb-[1%] w-[28.5%] max-md:w-[40%] max-mb:w-[58%] bg-[#2A83EC] rounded-[6px] max-mb:rounded-[4px] text-white text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium">
                  <span className="max-md:pt-[.7%]">Start Campaign</span>
                  <img className="ml-[3%] max-md:ml-[0%] max-mb:ml-[0%] w-[12%] max-md:w-[16%] max-mb:w-[14%]" src={buttonSide} alt='button' /> </button>
              </div>
            </div>
          </div>

        </div>

        <Modal isOpen={step1ModalIsOpen} onRequestClose={() => setStep1ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep1ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add Search</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <button className='text-[#2A83EC] text-[1vw] max-md:text-[1.46vw] max-mb:text-[2.1vw] border border-[#2A83EC] py-[1.12%] px-[1.8%] max-mb:px-[2.5%] rounded-[5px] max-mb:rounded-[3px]'>Add URL</button>
              <button className='text-[#727272] ml-[1.8%] text-[1vw] max-md:text-[1.46vw] max-mb:text-[2.1vw] border border-[#727272] py-[1.12%] px-[1.8%] max-mb:px-[2.5%] rounded-[5px] max-mb:rounded-[3px]'>Add Sales Navigator Search</button>
              <button className='text-[#727272] ml-[1.8%] max-mb:ml-[0%] max-mb:mt-[2%] text-[1vw] max-md:text-[1.46vw] max-mb:text-[2.1vw] border border-[#727272] py-[1.12%] px-[1.8%] max-mb:px-[2.5%] rounded-[5px] max-mb:rounded-[3px]'>Add LinkedIn Search</button>
            </div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <div className='w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]'>Add URL</div>
              <div className='w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]'>
                <input type='text' className='w-[98%] border mt-[.8%] border-[#B3B3B3] rounded-[5px] max-mb:rounded-[3px] px-[2.1%] max-mb:px-[3%] max-mb:py-[3%] py-[2.2%]' placeholder='Enter search link' />
              </div>
            </div>
            <div className="w-100 text-left regular mt-[.6%] max-mb:mt-[1.5%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ">
              <div className='w-[80.1%] ml-[.9%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]'>
                <Slider
                  value={valOfSlider}
                  onChange={onChangeDoubleSlider}
                  max={2000}
                  sx={{
                    width: '100%',
                    padding: '1%',
                    height: '.4vw',
                    borderRadius: '1px',
                    color: '#2A83EC',
                    '& .MuiSlider-thumb': {
                      borderRadius: '50%',
                      padding: '2%',
                      color: 'white',
                      boxShadow: '0 0px 4px 0 rgba(0, 0, 0, 0.25)'
                    },
                    '& .MuiSlider-rail': {
                      color: 'grey'
                    }
                  }}
                />
              </div>
              <div className='w-[19%] pl-[4.5%] max-mb:pt-[4%] pt-[1%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] flex'><img className='w-[24.7%] max-mb:w-[50%]' src={twoUserGrey} alt='load' /> <span className='text-[1.195vw] max-md:text-[1.5vw] max-mb:text-[2.3vw] pt-[3%] pl-[10%]'>{valOfSlider}</span></div>

            </div>
            <div className="w-[98%] flex justify-end mt-[6.5%] max-md:mt-[22%] max-mb:mt-[48%] "> <button onClick={() => {
              // setStep2ModalIsOpen(true)
              // setStep1ModalIsOpen(false)
            }} className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] rounded-[6px] px-[2.2%] max-mb:px-[3.2%] max-mb:py-[1.7%] py-[1%] medium text-white cursor-pointer bg-[#2A83EC]">Add Search</button> </div>
          </div>
        </Modal>

        <Modal isOpen={step2ModalIsOpen} onRequestClose={() => setStep2ModalIsOpen(false)}
          style={modalStyle2} >
          <div className="w-100 regular">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep2ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add Step</div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:[2.1vw] ">
            </div>
            <div className="w-100 text-left regular mt-[3.02%] text-[1vw] max-md:text-[1.5vw] max-mb:[2.1vw] ">

              <div className='w-[48%] max-md:w-[75%] max-mb:w-[100%] mr-[3%] pb-[2.1%] px-[2.2%] pt-[1.2%] float-left bg-lighterBlue rounded-[5px]'>
                <div className='w-100'>
                  <div className='w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] medium'>
                    LinkedIn Automation
                  </div>
                  <div className='w-[100%] mt-[1.8%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                    <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:[2.1vw] pl-[1.7%]'>
                      <img className='w-100' src={userLogo} alt='logo' />
                    </div>
                    <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send Connection Request</div>
                    <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                      <img className='w-[100%]' src={extra} alt='logo' />
                    </div>
                  </div>
                  <div className='w-[100%] mt-[5%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                    <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                      <img className='w-100' src={userLogo} alt='logo' />
                    </div>
                    <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send Message</div>
                    <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                      <img className='w-[100%]' src={extra} alt='logo' />
                    </div>
                  </div>
                  <div className='w-[100%] mt-[5%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                    <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                      <img className='w-100' src={userLogo} alt='logo' />
                    </div>
                    <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send InMail</div>
                    <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                      <img className='w-[100%]' src={extra} alt='logo' />
                    </div>
                  </div>
                  <div className='w-[100%] mt-[5%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                    <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                      <img className='w-100' src={userLogo} alt='logo' />
                    </div>
                    <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Perform Action</div>
                    <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                      <img className='w-[100%]' src={extra} alt='logo' />
                    </div>
                  </div>
                  <div className='w-[100%] mt-[5%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                    <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                      <img className='w-100' src={userLogo} alt='logo' />
                    </div>
                    <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send Connection by Email</div>
                    <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                      <img className='w-[100%]' src={extra} alt='logo' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[48%] max-md:w-[75%] max-mb:w-[100%] max-md:mt-[3.8%] float-left'>
                <div className='w-[100%] pb-[4.1%] px-[4.2%] pt-[3%] float-left bg-lighterBlue rounded-[5px]'>
                  <div className='w-100'>
                    <div className='w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium'>
                      Email Automation
                    </div>
                    <div className='w-[100%] mt-[1.8%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                      <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                        <img className='w-100' src={userLogo} alt='logo' />
                      </div>
                      <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send Email</div>
                      <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                        <img className='w-[100%]' src={extra} alt='logo' />
                      </div>
                    </div>
                    <div className='w-[100%] mt-[5%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                      <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                        <img className='w-100' src={userLogo} alt='logo' />
                      </div>
                      <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Enrich Profile</div>
                      <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[3%]'>
                        <img className='w-[100%]' src={extra} alt='logo' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-[100%] mt-[5%] pb-[4.1%] px-[4.2%] pt-[3%] float-left bg-lighterBlue rounded-[5px]'>
                  <div className='w-100'>
                    <div className='w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium'>
                      LinkedIn Automation
                    </div>
                    <div className='w-[100%] mt-[1.8%] bg-white rounded-[5px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left ' >
                      <div className='w-[13.6%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[1.7%]'>
                        <img className='w-100' src={userLogo} alt='logo' />
                      </div>
                      <div className='w-[74%] pt-[1.2%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] pl-[4%]'>Send Webhook</div>
                      <div className='w-[11.5%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:[2.1vw] pl-[3%]'>
                        <img className='w-[100%]' src={extra} alt='logo' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Modal>

        <Modal isOpen={step3ModalIsOpen} onRequestClose={() => setStep3ModalIsOpen(false)}
          style={modalStyle} >
          <div className="w-100 regular ">
            <div className="w-100 flex justify-end "> <img className="w-[3.2%] max-md:w-[4.1%] max-mb:w-[7.3%] opacity-[50%] cursor-pointer" onClick={() => { setStep3ModalIsOpen(false) }} src={cancel} alt='cancel'></img> </div>
            <div className="w-100 text-left semiBold text-[1.59vw] max-md:text-[2.5vw] max-mb:text-[3.3vw] ">Add Search</div>
            <div className='w-100 float-left mt-[1%]'>
              <div className='w-[50%] max-md:w-[65%] max-mb:w-[80%] float-left'>
                <Switch written={`Include Text Message`} />
              </div>
              <div className='w-[100%] regular mt-[%] float-left'>
                <div className="w-100">
                  <div className="w-100  text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                    <div className='w-[100%] float-left text-right'>0/300</div>
                  </div>
                  <div className="w-100 float-left ">
                    <textarea className='w-[100%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] px-[1.6%] mt-[.7%] border border-[#B3B3B3] rounded-[5px] regular' placeholder='Start Writing Here...' />
                  </div>
                  <div className='w-100 mt-[.5%] float-left'>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>First Name</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Last Name</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Location</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Company Name</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Years in Company</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Total Career Positions Count</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Total Years in Career</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>College Name</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Occupation</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Event Name</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Custom Field 1</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Custom Field 2</button>
                    <button className='text-[.86vw] max-md:text-[1.3vw] max-mb:text-[1.85vw] mt-[.6%] mr-[.6%]  border border-[#000000] rounded-[5px] max-mb:rounded-[3px] pt-[.2%] max-mb:pt-[.4%] pb-[.4%] max-mb:pb-[.5%] px-[.49%] max-mb:px-[.8%]'>Custom Field 3</button>
                  </div>
                  <div className='w-[100%] text-[#2A83EC] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] float-left mt-[1.2%]'>Wait after prevoius step</div>
                  <div className='w-[100%] text-[#2A83EC] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] float-left mt-[.2%]'>
                    <div className='w-[3%] max-md:w-[4%] max-mb:w-[5%] float-left'>
                      <button className='w-100 bg-minus bg-center bg-no-repeat bg-30 py-[50%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#D9D9D9]' > </button>
                    </div>
                    <button className='px-[1.1%] float-left text-black pt-[.8%]'>0d</button>
                    <div className='w-[3%] max-md:w-[4%] max-mb:w-[5%] mr-[2%] float-left'>
                      <button className='w-100 bg-plus bg-center bg-no-repeat bg-30 py-[50%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#D9D9D9]' > </button>
                    </div>

                    <div className='w-[3%] max-md:w-[4%] max-mb:w-[5%] float-left'>
                      <button className='w-100 bg-minus bg-center bg-no-repeat bg-30 py-[50%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#D9D9D9]' > </button>
                    </div>
                    <button className='px-[1.1%] float-left text-black pt-[.8%]'>0h</button>
                    <div className='w-[3%] max-md:w-[4%] max-mb:w-[5%] mr-[1.1%] float-left'>
                      <button className='w-100 bg-plus bg-center bg-no-repeat bg-30 py-[50%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#D9D9D9]' > </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[98%] flex justify-end"> <button onClick={() => {
              // setStep2ModalIsOpen(true)
              // setStep1ModalIsOpen(false)
            }} className="text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.3px] max-md:px-[3.2%] max-md:py-[1.7%]  px-[2.2%] py-[1%] medium text-white cursor-pointer bg-[#2A83EC]">Save</button> </div>
          </div>
        </Modal>


      </div>
    </div>
  </>
  )
}

export default CreateCampaign