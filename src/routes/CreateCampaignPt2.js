import buttonSide from '../images/buttonSide.png';
import userLogo from '../images/userLogo.png';
import selectSearches from '../images/selectSearch.png';
import addSearch from '../images/addSearch.png';
import message from '../images/message.png';
import mail from '../images/mail.png';
import extra from '../images/extra.png';
import Side from "./SideMenu";
import Top from "./Header";
import Select from "react-select";
import Switch from "../components/Switch";
import { useState } from 'react';
import { Slider } from "@mui/material";

function CreateCampaign() {

  const [valOfSlider, setValOfSlider] = useState(1000);

  // these is for buttons 
  const [isSettingClick, setIsSettingClick] = useState(true);
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [isStepClick, setIsStepClick] = useState(false);

  // this is for dropdown for campaign searched
  const [isSendConnectionOpen, setIsSendConnectionOpen] = useState(false);
  const [isSendMessageOpen, setIsSendMessageOpen] = useState(false);
  const [isSendInMailOpen, setIsSendInMailOpen] = useState(false);

  // this is for dropdown for campaign steps
  const [isSearchUrlOpen, setIsSearchUrlOpen] = useState(false);
  const [isLinkedInSearchOpen, setIsLinkedInSearchOpen] = useState(false);
  const [isNavigatorSearchOpen, setIsNavigatorSearchOpen] = useState(false);


  const onChangeDoubleSlider = (e, val) => {
    setValOfSlider(val)
  }

  // this is for buttons 
  const onClickSetting = () => {
    setIsSettingClick(true)
    setIsSearchClick(false)
    setIsStepClick(false)
  }

  const onClickSearched = () => {
    setIsSettingClick(false)
    setIsSearchClick(true)
    setIsStepClick(false)
  }
  const onClickSteps = () => {
    setIsSettingClick(false)
    setIsSearchClick(false)
    setIsStepClick(true)
  }

  // this is for dropdown for campaign searches
  const onClickArrowUpForSearchUrl = () => {
    setIsSearchUrlOpen(false)
  }

  const onClickArrowDownForSearchUrl = () => {
    setIsSearchUrlOpen(true)
  }

  const onClickArrowUpForLinkedInSearch = () => {
    setIsLinkedInSearchOpen(false)
  }

  const onClickArrowDownForLinkedInSearch = () => {
    setIsLinkedInSearchOpen(true)
  }

  const onClickArrowUpForNavigatorSearch = () => {
    setIsNavigatorSearchOpen(false)
  }

  const onClickArrowDownForNavigatorSearch = () => {
    setIsNavigatorSearchOpen(true)
  }

  // this is for dropdown for campaign steps
  const onClickArrowUpForSendConnection = () => {
    setIsSendConnectionOpen(false)
  }

  const onClickArrowDownForSendConnection = () => {
    setIsSendConnectionOpen(true)
  }

  const onClickArrowUpForSendMessage = () => {
    setIsSendMessageOpen(false)
  }

  const onClickArrowDownForSendMessage = () => {
    setIsSendMessageOpen(true)
  }

  const onClickArrowUpForSendInMail = () => {
    setIsSendInMailOpen(false)
  }

  const onClickArrowDownForSendInMail = () => {
    setIsSendInMailOpen(true)
  }

  return (<>
    <div className="w-100 minWidth">
      <Side select={`campaign`}></Side>
      <Top heading={`Create Campaign`}></Top>

      <div className={`pt-[1.1%] regular mr-[1.3%] h-[93vh] overflow-x-auto`}>

        {/*   create campaign part is here */}
        <div className="flex w-[98.2%] regular mt-[.4%] px-[1.7%] pt-[2.3%] pb-[1.1%] justify-start bg-bgLightBlue ml-[1.7%] rounded-[15px] float-left">

          <div className="w-100 regular">
            <div className="w-100 float-left">

              <div className="w-[98.32%] mr-[2.18%]  rounded-[8px] drop-shadow-campaign pb-[1.1%] float-left">
                <button onClick={onClickSetting} className={isSettingClick ? `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] text-white px-[1%] py-[.8%] border border-[#2A83EC] bg-[#2A83EC] rounded-[5px]` :
                  `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] text-[#8F8F8F] px-[1%] py-[.8%] border border-[#8F8F8F] rounded-[5px]`}>Campaign Settings</button>
                <button onClick={onClickSearched} className={isSearchClick ? `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ml-[1%] text-[white] px-[1%] py-[.8%] border bg-[#2A83EC] border-[#2A83EC] rounded-[5px]` :
                  `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ml-[1%] text-[#8F8F8F] px-[1%] py-[.8%] border border-[#8F8F8F] rounded-[5px]`}>Campaign Searches</button>
                <button onClick={onClickSteps} className={isStepClick ? `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ml-[1%] text-[white] px-[1%] py-[.8%] border bg-[#2A83EC] border-[#2A83EC] rounded-[5px]` :
                  `text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] ml-[1%] text-[#8F8F8F] px-[1%] py-[.8%] border border-[#8F8F8F] rounded-[5px]`}>Campaign Steps</button>
              </div>

              {isSettingClick ? (
                <div className="w-[98.32%] mr-[2.18%] max-mb:mt-[2%]  bg-white rounded-[8px] max-mb:rounded-[6px] drop-shadow-campaign px-[2%] max-mb:px-[4%] pt-[2.1%] max-mb:py-[3%] pb-[2%] float-left">
                  <div className="w-100">

                    <div className='w-[47.5%] max-mb:w-[100%] mr-[4.7%] float-left'>
                      {/* input of text part is here  */}
                      <div className="w-100">
                        <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Campaign Name</div>
                        <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                          <input type='text' className="w-100 py-[2.93%] max-md:py-[2.69%] border border-[#B3B3B3] rounded-[5px] px-[3%] max-md:px-[5.2%]" placeholder='Enter Campaign Name' />
                        </div>
                      </div>

                      {/* input of select part is here  */}
                      <div className="w-100 pt-[4.3%]">
                        <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Campaign Type</div>
                        <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] mt-[1.6%] regular ">
                          <Select
                            className="w-[100%] py-[1.66%] max-md:py-0 border border-[#B3B3B3] rounded-[5px] "
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                padding: '0%',
                                marginRight: '1.8%',
                                paddingLeft: '2%',
                                width: '100%',
                                border: 'none',
                              }),
                            }} placeholder='Select Type' />
                        </div>
                      </div>
                    </div>

                    <div className='w-[47.5%] max-mb:w-100 max-mb:mt-[3%] float-left'>
                      {/* switch on off part  */}
                      <div className="w-100 ">
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
                        <div className="w-100 text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] pl-[12.3%]">are found</div>
                      </div>
                      <div className='w-100  pt-[3.3%]'>
                        <input type='checkbox' id='check' class='toggle' checked='false' />
                        <label for='check' className='text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] font-[400] '>Include prospects I've contacted on LinkedIn</label>
                        <div className="w-100 text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] pl-[12.3%]">before</div>
                      </div>
                    </div>


                  </div>

                </div>
              ) : ''}

              {isSearchClick ? (
                <div className="w-[98.32%] mr-[2.18%] max-mb:mt-[3%]  bg-white rounded-[8px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left">
                  <div className="w-100">

                    <div className='w-[100%] float-left'>
                      {/* input of text part is here  */}
                      <div className="w-100 flex justify-end">
                        <div className='float-right mr-[.9%] w-[24.7%] max-md:w-[30.38%] max-mb:w-[40%]'>
                          <img className='w-[100%]' src={selectSearches} alt='load' />
                        </div>
                        <div className='float-right w-[13%] max-md:w-[16%] max-mb:w-[21.1%]'>
                          <img className='w-[100%]' src={addSearch} alt='load' />
                        </div>
                      </div>

                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.7%]'>Search URL</div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isSearchUrlOpen ? (
                              <button onClick={onClickArrowUpForSearchUrl} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForSearchUrl} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isSearchUrlOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            <div className='w-[50%] max-mb:w-[100%] float-left'>
                              <div className="w-100">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Add URL</div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] max-mb:pt-[1%] regular "><input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Enter Campaign Name' /></div>
                              </div>
                            </div>
                            <div className='w-[48.3%] max-mb:w-[97%] max-mb:mt-[2.4%] ml-[1.7%] float-left'>
                              <div className="w-100">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                  <div className='w-[50%] float-left'>Number of People</div>
                                  <div className='w-[50%] float-left text-right'>{valOfSlider}</div>
                                </div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
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
                              </div>
                            </div>
                          </div>
                        ) : ''}

                      </div>


                      {/* drop down 2 is here  */}
                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.7%]'>LinkedIn Search</div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isLinkedInSearchOpen ? (
                              <button onClick={onClickArrowUpForLinkedInSearch} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForLinkedInSearch} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isLinkedInSearchOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            <div className='w-[50%] max-mb:w-[100%] float-left'>
                              <div className="w-100">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">URL</div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                  <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add LinkedIn or Sales Navigator Search Link' />
                                </div>
                              </div>
                              <div className="w-100 pt-[2.2%]">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Current Company</div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                  <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add Current Company' />
                                </div>
                              </div>
                            </div>
                            <div className='w-[48.3%] max-mb:w-[100%] max-mb:ml-[0%] ml-[1.7%] float-left'>
                              <div className="w-100">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Location</div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                  <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add Location' />
                                </div>
                              </div>
                              <div className="w-100 pt-[2.3%]">
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Connections</div>
                                <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                  <div className='w-[33%] max-md:w-[50%] max-mb:w-[33%] float-left'>
                                    <div className="w-[15.4%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left w-[84%] pl-[7.2%] pt-[1.2%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pr-[2%]'>1st Connection</div>
                                  </div>
                                  <div className='w-[33%] max-md:w-[50%] max-mb:w-[33%] float-left'>
                                    <div className="w-[15.4%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left w-[84%] pl-[7.2%] pt-[1.2%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pr-[2%]'>2nd Connection</div>
                                  </div>
                                  <div className='w-[33%] max-md:w-[50%] max-mb:w-[33%] max-md:mt-[1%] max-mb:mt-[0%]  float-left'>
                                    <div className="w-[15.4%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left w-[84%] pl-[7.2%] pt-[1.2%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pr-[2%]'>3rd Connection</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : ''}

                      </div>


                      {/* drop down 3 is here  */}
                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.7%]'>Sales Navigator Search</div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isNavigatorSearchOpen ? (
                              <button onClick={onClickArrowUpForNavigatorSearch} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForNavigatorSearch} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isNavigatorSearchOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            <div className='w-100'>
                              <div className='w-[50%] max-mb:w-[100%] float-left'>
                                <div className="w-100">
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Geography</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                    <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add Location' />
                                  </div>
                                </div>
                                <div className="w-100 pt-[2.2%]">
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Current Job Title</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                    <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add Current Job Title' />
                                  </div>
                                </div>
                              </div>
                              <div className='w-[48.3%] max-mb:w-[100%] max-mb:ml-[0%] ml-[1.7%] float-left'>
                                <div className="w-100">
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Industry</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                    <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Add Industry' />
                                  </div>
                                </div>
                                <div className="w-100 pt-[2.2%]">
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Past Job Title</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1.6%] regular ">
                                    <input type='text' className="w-100 py-[3.5%] max-mb:py-[2.2%] border border-[#B3B3B3] rounded-[5px] px-[3%]" placeholder='Past Job Title' />
                                  </div>
                                </div>

                              </div>

                              <div className='w-100 float-left'>
                                <div className="w-100 pt-[1.6%]">
                                  <div className="w-100 text-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Connections</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1%] regular ">
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>Self-employed</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>1 - 10</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>11 - 50</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>51 - 200</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>201 - 500</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>501 - 1000</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>1001 - 5000</div>
                                  </div>
                                </div>

                                <div className="w-100 pt-[1.6%] float-left">
                                  <div className="w-100 text-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Connections</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1%] regular ">
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>1st Degree Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>2nd Degree Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>3rd Degree+ Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>Group members</div>
                                  </div>
                                </div>

                                <div className="w-100 pt-[1.6%] float-left">
                                  <div className="w-100 text-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Connections</div>
                                  <div className="w-100 text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pt-[1%] regular ">
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>1st Degree Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' checked />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>2nd Degree Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>3rd Degree+ Connections</div>
                                    <div className="w-[3%]  campaignCheckbox1 float-left medium text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">
                                      <input className="w-[100%]" type='checkbox' />
                                    </div>
                                    <div className='float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[1.1%] pr-[1.76%] pt-[.5%]'>Group members</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : ''}

                      </div>

                    </div>




                  </div>

                </div>
              ) : ''}


              {isStepClick ? (
                <div className="w-[98.32%] mr-[2.18%]  bg-white rounded-[8px] drop-shadow-campaign px-[2%] pt-[2.1%] pb-[2%] float-left">
                  <div className="w-100">

                    <div className='w-[100%] float-left'>
                      {/* input of text part is here  */}
                      <div className="w-100 flex justify-end">
                        <div className='float-right mr-[.9%] w-[24.7%] max-md:w-[30.38%] max-mb:w-[40%]'>
                          <img className='w-[100%]' src={selectSearches} alt='load' />
                        </div>
                        <div className='float-right w-[13%] max-md:w-[16%] max-mb:w-[21.1%]'>
                          <img className='w-[100%]' src={addSearch} alt='load' />
                        </div>
                      </div>

                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left ' >
                            <div className='w-[6.5%] max-md:w-[8.2%] max-mb:w-[11%] float-left pl-[1.7%]'>
                              <img className='w-100' src={userLogo} alt='logo' />
                            </div>
                            <div className='w-[37%] max-md:w-[55%] max-mb:w-[79%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[3%]'>Send Connection Request</div>
                            <div className='w-[3.15%] max-md:w-[5%] max-mb:w-[7%] pt-[.4%] float-left '>
                              <img className='w-[100%]' src={extra} alt='logo' />
                            </div>
                          </div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isSendConnectionOpen ? (
                              <button onClick={onClickArrowUpForSendConnection} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForSendConnection} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isSendConnectionOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            <div className='w-[50%] max-md:w-[63%] max-mb:w-[82%] float-left'>
                              <Switch written={`Include Text Message`} />
                            </div>
                            <div className='w-[100%] ml-[%] mt-[1.7%] float-left'>
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
                                <div className='w-[100%] text-[#2A83EC] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] float-left mt-[1.4%]'>Wait after prevoius step</div>
                                <div className='w-[100%] text-[#2A83EC] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] float-left mt-[.8%]'>
                                  <div className='w-[3%] float-left'>
                                    <button className='w-100 bg-minus bg-center bg-no-repeat bg-30 py-[50%] max-mb:py-[55%] max-mb:rounded-[3px] rounded-[5px] bg-[#D9D9D9]' > </button>
                                  </div>
                                  <button className='px-[1.1%] float-left text-black pt-[.8%]'>0d</button>
                                  <div className='w-[3%] mr-[2%] float-left'>
                                    <button className='w-100 bg-plus bg-center bg-no-repeat bg-30 py-[50%] max-mb:py-[55%] max-mb:rounded-[3px] rounded-[5px] bg-[#D9D9D9]' > </button>
                                  </div>

                                  <div className='w-[3%] float-left'>
                                    <button className='w-100 bg-minus bg-center bg-no-repeat bg-30 py-[50%] max-mb:py-[55%] max-mb:rounded-[3px] rounded-[5px] bg-[#D9D9D9]' > </button>
                                  </div>
                                  <button className='px-[1.1%] float-left text-black pt-[.8%]'>0h</button>
                                  <div className='w-[3%] mr-[1.1%] float-left'>
                                    <button className='w-100 bg-plus bg-center bg-no-repeat bg-30 py-[50%] max-mb:py-[55%] max-mb:rounded-[3px] rounded-[5px] bg-[#D9D9D9]' > </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : ''}

                      </div>


                      {/* drop down 2 is here  */}
                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left ' >
                            <div className='w-[6.5%] max-md:w-[8.2%] max-mb:w-[11%] float-left text-[1vw] pl-[1.7%]'>
                              <img className='w-100' src={message} alt='logo' />
                            </div>
                            <div className='w-[24%] max-md:w-[35%] max-mb:w-[48%] pr-[2.2%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[3%]'>Send Message</div>
                            <div className='w-[3.15%] max-md:w-[5%] max-mb:w-[7%] pt-[.4%] float-left text-[1vw]'>
                              <img className='w-[100%]' src={extra} alt='logo' />
                            </div>
                          </div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isSendMessageOpen ? (
                              <button onClick={onClickArrowUpForSendMessage} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForSendMessage} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isSendMessageOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            Testing purpose only..
                          </div>
                        ) : ''}

                      </div>


                      {/* drop down 3 is here  */}
                      <div className='w-100 regular mt-[1.6%] border border-[#2A83EC] rounded-[5px] float-left pt-[1.7%] pb-[1.3%]'>
                        <div className='w-100 float-left'>
                          <div className='w-[50%] float-left ' >
                            <div className='w-[6.5%] max-md:w-[8.2%] max-mb:w-[11%] float-left text-[1vw] pl-[1.7%]'>
                              <img className='w-100' src={mail} alt='logo' />
                            </div>
                            <div className='w-[20%] max-md:w-[29%] max-mb:w-[40%] pr-[2.2%] pt-[.4%] float-left text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[3%]'>Send InMail</div>
                            <div className='w-[3.15%] max-md:w-[5%] max-mb:w-[7%] pt-[.4%] float-left text-[1vw]'>
                              <img className='w-[100%]' src={extra} alt='logo' />
                            </div>
                          </div>
                          <div className='w-[50%] float-left flex justify-end'>
                            {isSendInMailOpen ? (
                              <button onClick={onClickArrowUpForSendInMail} className='bg-arrowUp bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            ) : (
                              <button onClick={onClickArrowDownForSendInMail} className='bg-arrowDown bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-lightBlue' > </button>
                            )}
                            <button className='bg-delete2 mr-[5%] ml-[2%] bg-center bg-no-repeat bg-btn p-[3%] max-md:p-[4%] max-mb:p-[5.1%] rounded-[5px] max-md:rounded-[4px] max-mb:rounded-[3px] bg-[#FFE1E1]' > </button>
                          </div>
                        </div>

                        {isSendInMailOpen ? (
                          <div className='w-100 borderTopGrey2 float-left mt-[1.8%] px-[1.65%] py-[1.6%]'>
                            Testing purpose only...
                          </div>
                        ) : ''}

                      </div>

                    </div>




                  </div>

                </div>
              ) : ''}

            </div>
            <div className="w-100 float-left mt-[25%] ">
              <div className="w-[50%] float-left">
                <button className="flex px-[2.1%] max-mb:px-[5%] max-mb:py-[3.1%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] max-mb:rounded-[4px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium"><span className="">Save as Draft</span></button>
              </div>
              <div className="w-[50%] flex justify-end float-left">
                <button className="flex mr-[2.5%] px-[2.1%] max-mb:px-[4%] max-mb:pt-[3.8%] max-mb:pb-[1.9%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] max-mb:rounded-[4px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium"><span className="">Cancel</span></button>
                <button className="flex px-[2.1%] max-mb:px-[4%] max-mb:pt-[3.8%] max-mb:pb-[1.9%] pt-[2%] pb-[1%] w-[28.5%] max-md:w-[40%] max-mb:w-[58%] bg-[#2A83EC] rounded-[6px] max-mb:rounded-[4px] text-white text-[1vw] max-md:text-[1.5vw] max-mb:text-[2vw] medium">
                  <span className="max-md:pt-[.7%]">Start Campaign</span>
                  <img className="ml-[3%] max-md:ml-[0%] max-mb:ml-[0%] w-[12%] max-md:w-[16%] max-mb:w-[14%]" src={buttonSide} alt='button' /> </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </>
  )
}

export default CreateCampaign
