import { useState } from "react";
import person from '../images/person.jpeg';
import lock from '../images/lock.png';
import pencil from '../images/pencil.png';
import deleted from '../images/delete.png';
import Select from "react-select";
import Side from "./SideMenu";
import Top from "./Header";
import Switch from "../components/Switch";
import SingleRangeSlider from "../components/SingleRangeSlider";
import { Slider } from "@mui/material";
import { useNavigate } from "react-router-dom";


function LinkedIn() {

  const [valOfSlider1, setValOfSlider1] = useState([10, 15]);
  const [valOfSlider2, setValOfSlider2] = useState([40, 50]);
  const [valOfSlider3, setValOfSlider3] = useState([10, 15]);
  const [valOfSlider4, setValOfSlider4] = useState([40, 50]);
  const [valOfSlider5, setValOfSlider5] = useState([10, 15]);
  const [valOfSlider6, setValOfSlider6] = useState([40, 50]);
  const [valOfSlider7, setValOfSlider7] = useState([10, 15]);

  const [singleSlider, setSingleSlider] = useState(0);
  const navigate = useNavigate();

  const update = () => {
    navigate('/user-setting')
  }

  const onChangeSingleSlider = (e, val) => {
    setSingleSlider(val)
  }

  const onChangeDoubleSlider1 = (e, val) => {
    setValOfSlider1(val)
  }
  const onChangeDoubleSlider2 = (e, val) => {
    setValOfSlider2(val)
  }
  const onChangeDoubleSlider3 = (e, val) => {
    setValOfSlider3(val)
  }
  const onChangeDoubleSlider4 = (e, val) => {
    setValOfSlider4(val)
  }
  const onChangeDoubleSlider5 = (e, val) => {
    setValOfSlider5(val)
  }
  const onChangeDoubleSlider6 = (e, val) => {
    setValOfSlider6(val)
  }
  const onChangeDoubleSlider7 = (e, val) => {
    setValOfSlider7(val)
  }

  const country = [
    { label: 'Indian' },
    { label: 'Argentina' }]

  return (<>
    <div className="w-100 minWidth">
      <Side select={`setting`}></Side>
      <Top heading={`Account Settings`}></Top>
      <div className={`h-[93vh] overflow-x-auto`}>

        {/* this is the below part where all account is created  */}
        <div className="flex w-[97%] ml-[1.4%] mr-[1.6%] mt-[1.4%]  px-[1.7%] pt-[1.8%] pb-[2%] max-mb:py-[4%] max-mb:px-[4%]  justify-start bg-bgLightBlue  rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-[48.9%] max-mb:w-[100%] float-left  mr-[2.2%] ">

              {/* left side upper part  */}
              <div className="w-100 pl-[3.63%] pr-[3.2%] pt-[2.7%] pb-[10px] rounded-[8px] bg-white drop-shadow-settingBox">

                {/* user is and dp part  */}
                <div className="w-100 flex pb-[2.9%] borderBottom">
                  <img className="w-[13.006%] max-md:w-[15.4%] mr-[2.75%] rounded-[50%]" src={person} alt='user'></img>
                  <span className="pt-[1.8%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] medium">millie.bob@gmail.com <br />
                    <span className=" text-[1.06vw] max-md:text-[1.4vw] max-mb:text-[2.1vw] text-[#2A83EC] medium cursor-pointer">Connected to LinkedIn</span></span>
                </div>

                {/* account is active or not part  */}
                <div className="w-100 borderBottom pb-[4.3%]">
                  <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] text-[#2A83EC] regular mt-[3.3%]">Status</div>
                  <div className="w-100 mt-[1.89%]" >
                    <Switch written={'Account is active'}></Switch>
                  </div>
                </div>

                {/* account data is here  */}
                <div className="w-100 borderBottom pb-[3%]">
                  <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] text-[#2A83EC] regular mt-[2.3%]">Account Data</div>
                  <div className="w-100 pt-[1.95%] flex">
                    <img className="w-[5.87%] max-md:w-[6.7%] max-mb:w-[8%] mr-[3%]" src={lock} alt='user'></img>
                    <span className="text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pt-[.5%] regular">Password is correct</span>
                  </div>
                  <div className="w-100 pt-[1.95%] flex" onClick={update}>
                    <img className="w-[5.87%] max-md:w-[6.7%] max-mb:w-[8%] mr-[3%]" src={pencil} alt='user'></img>
                    <span className="text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pt-[.5%] text-[#9A48F7] regular">Update LinkedIn account password</span>
                  </div>
                  <div className="w-100 pt-[1.95%] flex">
                    <img className="w-[5.87%] max-md:w-[6.7%] max-mb:w-[8%] mr-[3%]" src={deleted} alt='user'></img>
                    <span className="text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pt-[.5%] text-[#EE675B] regular">Delete account</span>
                  </div>
                </div>

                {/* inbox sync interval part  */}
                <div className="w-100  pb-[4.3%]">
                  <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] text-[#2A83EC] regular mt-[1.6%]">Inbox Sync Interval</div>

                  {/* LinkedIn Inbox Sync Interval part 1 */}
                  <div className="w-100 mt-[2.4%]" >
                    <div className="w-100 regular">
                      <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] ">LinkedIn Inbox Sync Interval</div>
                      <div className="w-[50%] float-left text-right text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">0h 20min</div>
                    </div>
                    <div className="w-100">
                      <SingleRangeSlider value={2}></SingleRangeSlider>
                    </div>
                  </div>

                  {/* LinkedIn Inbox Sync Interval part 2 */}
                  <div className="w-100 " >
                    <div className="w-100 regular">
                      <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] ">LinkedIn Inbox Sync Interval</div>
                      <div className="w-[50%] float-left text-right text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">0h 20min</div>
                    </div>
                    <div className="w-100">
                      <SingleRangeSlider value={50}></SingleRangeSlider>
                    </div>
                  </div>

                </div>

              </div>

              {/* left side below part  */}
              <div className="w-100 mt-[3.1%] pl-[3.63%] pr-[3.2%] pt-[1.7%] pb-[10px] rounded-[8px] bg-white drop-shadow-settingBox">

                <div className="w-100 " >
                  <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pl-[.4%] text-[#2A83EC] leading-[] regular">Account Limits</div>
                  <div className="w-100">
                    <Select required className='mt-[1%] max-md:text-[1.6vw] max-mb:text-[2.4vw]'
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          padding: '1% 0%',
                        }),
                      }} placeholder='Australia'
                      options={country} />
                  </div>
                </div>
                <div className="w-100 mt-[1.55%]" >
                  <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pl-[.4%] text-[#2A83EC] leading-[] regular">Account Limits</div>
                  <div className="w-100">
                    <Select required className='mt-[1%] max-md:text-[1.6vw] max-mb:text-[2.4vw]'
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          padding: '1% 0%',
                        }),
                      }} placeholder='Australia'
                      options={country} />
                  </div>
                </div>
              </div>
            </div>

            {/* right hand side part  */}
            <div className="w-[48.9%] max-mb:w-[100%] max-mb:mt-[3.5%] regular pl-[2%] pr-[1.9%] pt-[1.1%] pb-[10px] rounded-[8px] float-left bg-white drop-shadow-settingBox  ">
              <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] text-[#2A83EC] regular">Account Limits</div>
              <div className="w-100 mt-[1.89%]" >
                <Switch written={'Run on weekend'}></Switch>
              </div>
              <div className="w-100 mt-[1.89%]" >
                <Switch written={'Run on weekend'}></Switch>
              </div>

              {/*  right hand side slider part 1 */}
              <div className="w-100 mt-[3.1%]" >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] ">Views of Profiles per day</div>
                  <div className="w-[50%] float-left text-right text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider1[0]} - {valOfSlider1[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider1}
                    onChange={onChangeDoubleSlider1}
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

              {/*  right hand side slider part 2 */}
              <div className="w-100 " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">Connections by email Per Day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider2[0]} - {valOfSlider2[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider2}
                    onChange={onChangeDoubleSlider2}
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
              {/*  right hand side slider part 3 */}
              <div className="w-100 " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">Connection Requests Per Day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider3[0]} - {valOfSlider3[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider3}
                    onChange={onChangeDoubleSlider3}
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
              {/*  right hand side slider part 4 */}
              <div className="w-100 " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">Messages per day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider4[0]} - {valOfSlider4[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider4}
                    onChange={onChangeDoubleSlider4}
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
              {/*  right hand side slider part 5 */}
              <div className="w-100 " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">InMails per day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider5[0]} - {valOfSlider5[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider5}
                    onChange={onChangeDoubleSlider5}
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
              {/*  right hand side slider part 6 */}
              <div className="w-100 " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">Searches Per Day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider6[0]} - {valOfSlider6[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider6}
                    onChange={onChangeDoubleSlider6}
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
              {/*  right hand side slider part 7 */}
              <div className="w-100 borderBottom pb-[2.3%] " >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] leading-[110%]">Emails per day</div>
                  <div className="w-[50%] float-left text-right leading-[110%] text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{valOfSlider7[0]} - {valOfSlider7[1]}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={valOfSlider7}
                    onChange={onChangeDoubleSlider7}
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

              <div className="w-100 text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] pt-[1.8%] text-[#2A83EC] leading-[] regular">For LinkedIn Premium accounts only</div>

              {/* right hand side single slider bar  */}
              <div className="w-100 mt-[2.4%]" >
                <div className="w-100 regular">
                  <div className="w-[50%] float-left text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw] ">InMail credits per month</div>
                  <div className="w-[50%] float-left text-right text-[1.195vw] max-md:text-[1.6vw] max-mb:text-[2.4vw]">{singleSlider}</div>
                </div>
                <div className="w-100">
                  <Slider
                    value={singleSlider}
                    onChange={onChangeSingleSlider}
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

              <div className="w-100 text-[1.06vw] max-md:text-[1.4vw] max-mb:text-[2.1vw] text-[#727272]">Inmail credits left: 0</div>
              <div className="w-100 text-[1.06vw] max-md:text-[1.4vw] max-mb:text-[2.1vw] text-[#727272]">Inmail credits used this month: 0</div>


            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}


export default LinkedIn