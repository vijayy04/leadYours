import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import blackSpeaker from '../images/blackSpeaker.jpg';
import time from '../images/time.jpg';
import blueTick from '../images/blueTick.png';
import Side from "./SideMenu";
import Top from "./Header";
import commentBlue from '../images/realCommentBlue.png';
import twoUser from '../images/twoUser.png';

function HomeCampaign() {

  // for left hand side dropdown
  const [LODropDrown, setLODropDrown] = useState(false);
  const [LEDropDrown, setLEDropDrown] = useState(false);
  const [EODropDrown, setEODropDrown] = useState(false);
  const [arrowUpLO, setArrowUpLO] = useState(false);
  const [arrowUpLE, setArrowUpLE] = useState(false);
  const [arrowUpEO, setArrowUpEO] = useState(false);

  // for right hand side dropdown
  const [CADropDrown, setCADropDrown] = useState(false);
  const [PEDropDrown, setPEDropDrown] = useState(false);
  const [CPDropDrown, setCPDropDrown] = useState(false);
  const [arrowUpCA, setArrowUpCA] = useState(false);
  const [arrowUpPE, setArrowUpPE] = useState(false);
  const [arrowUpCP, setArrowUpCP] = useState(false);

  // for left hand side dropdown
  const onClickUpArrowLO = () => {
    setLODropDrown(false)
    setArrowUpLO(false)
  }
  const onClickDownArrowLO = () => {
    setLODropDrown(true)
    setArrowUpLO(true)
  }
  const onClickUpArrowLE = () => {
    setLEDropDrown(false)
    setArrowUpLE(false)
  }
  const onClickDownArrowLE = () => {
    setLEDropDrown(true)
    setArrowUpLE(true)
  }
  const onClickUpArrowEO = () => {
    setEODropDrown(false)
    setArrowUpEO(false)
  }
  const onClickDownArrowEO = () => {
    setEODropDrown(true)
    setArrowUpEO(true)
  }


  // for right hand side dropdown
  const onClickUpArrowCA = () => {
    setCADropDrown(false)
    setArrowUpCA(false)
  }
  const onClickDownArrowPE = () => {
    setPEDropDrown(true)
    setArrowUpPE(true)
  }
  const onClickUpArrowCP = () => {
    setCPDropDrown(false)
    setArrowUpCP(false)
  }
  const onClickDownArrowCA = () => {
    setCADropDrown(true)
    setArrowUpCA(true)
  }
  const onClickUpArrowPE = () => {
    setPEDropDrown(false)
    setArrowUpPE(false)
  }
  const onClickDownArrowCP = () => {
    setCPDropDrown(true)
    setArrowUpCP(true)
  }

  const data = {
    no: 120,
    percent: "50%"
  }

  const statusOfProgressBar = {
    width: data.percent
  }

  const barCharts = [
    {
      bar1: "78.3%",
      bar2: "61.3%",
      date: 'jun 23',
      bgBar1: '#2A83EC',
      bgBar2: '#D9D9D9'
    },
    {
      bar1: "45%",
      bar2: "83%",
      date: 'jun 24',
      bgBar1: '#2A83EC',
      bgBar2: '#2A83EC',
    },
    {
      bar1: "42%",
      bar2: "65%",
      date: 'jun 25',
      bgBar1: '#D9D9D9',
      bgBar2: '#2A83EC'
    },
    {
      bar1: "57%",
      bar2: "63%",
      date: 'jun 26',
      bgBar1: '#D9D9D9',
      bgBar2: '#D9D9D9'
    },
    {
      bar1: "100%",
      bar2: "20%",
      date: 'jun 27',
      bgBar1: '#2A83EC',
      bgBar2: '#2A83EC'
    },
    {
      bar1: "63%",
      bar2: "50%",
      date: 'jun 28',
      bgBar1: '#2A83EC',
      bgBar2: '#2A83EC'
    },

  ]


  return (<>
    <div className="w-100 minWidth">
      <Side select={`home`}></Side>
      <Top heading={`Home`}></Top>

      <div className={`pt-[1.8%] mr-[.1%] h-[93vh] overflow-x-auto`}>

        <div className="flex w-[66.80%] max-mb:w-[99%] px-[3.9%] pt-[3%] pb-[5.2%] justify-start bg-bgLightBlue ml-[1%] rounded-[15px] float-left">

          <div className="w-100">
            <div className="w-[29.74%] max-md:w-[44.6%] bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign mr-[5.39%] pl-[3.7%] pt-[2.57%] pb-[3.35%] pr-[4.8%] float-left">
              <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] max-mb:text-[5.5vw] medium">{data.no}</div>
              <div className="w-100 mt-[2.5%] text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] medium">Compaigns</div>
              <div className="w-100 text-[.8vw] max-md:text-[1.7vw] max-mb:text-[2.7vw] regular mt-[4%]">{data.no}</div>
              <div className="w-100 rounded-[9px] h-[9px] max-md:h-[5px] max-mb:h-[4px] bg-bgProgressBar overflow-hidden">
                <div className={`bg-darkBlue h-[9px] max-md:h-[5px] max-mb:h-[4px] rounded-[9px]`} style={statusOfProgressBar}></div>
              </div>
            </div>
            <div className="w-[29.74%] max-md:w-[44.6%] bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign mr-[5.39%] pl-[3.7%] pt-[2.57%] pb-[3.35%] pr-[4.8%] float-left">
              <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] max-mb:text-[5.5vw] medium">{data.no}</div>
              <div className="w-100 mt-[2.5%] text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] medium">Prospects</div>
              <div className="w-100 text-[.8vw] max-md:text-[1.7vw] max-mb:text-[2.7vw] regular mt-[4%]">{data.no}</div>
              <div className="w-100 rounded-[9px] h-[9px] max-md:h-[5px] max-mb:h-[4px] bg-bgProgressBar overflow-hidden">
                <div className={`bg-darkBlue h-[9px] max-md:h-[5px] max-mb:h-[4px] rounded-[9px]`} style={statusOfProgressBar}></div>
              </div>
            </div>
            <div className="w-[29.74%] max-md:w-100 max-md:mt-[3%] float-left">
              <div className="w-100 max-md:w-[44.6%] max-md:rounded-[13px] bg-white rounded-[23px] drop-shadow-homeCampaign pl-[9%] pb-[3.5%] pt-[4.4%] max-md:pl-[2.5%] float-left">
                <div className="w-[25%] py-[4.1%] rounded-[6px] bg-bgLightGrey flex justify-center bg-62 float-left">
                  <img className="w-[72%]" src={commentBlue} alt='load' />
                </div>
                <div className="w-[75%] float-left pt-[5%] pl-[8.6%]">
                  <div className="w-100 float-left medium leading-[100%] text-[.9vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">New Messages</div>
                  <div className="w-100 float-left medium leading-[100%] text-[1.323vw] max-md:text-[2.5vw] max-mb:text-[3.5vw] max-md:pt-[2%]">{data.no}</div>
                </div>
              </div>
              <div className="w-100 max-md:w-[44.6%] max-md:rounded-[13px] max-md:ml-[5.39%] bg-white mt-[4%] max-md:mt-[0%] rounded-[23px] drop-shadow-homeCampaign pl-[9%] pb-[3.5%] pt-[4.4%] max-md:pl-[2.5%] float-left">
                <div className="w-[25%] py-[4.1%] rounded-[6px] bg-bgLightGrey flex justify-center bg-62 float-left">
                  <img className="w-[72%]" src={twoUser} alt='load' />
                </div>
                <div className="w-[75%] float-left pt-[5%] pl-[8.6%]">
                  <div className="w-100 float-left medium leading-[100%] text-[.9vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Linked Accounts</div>
                  <div className="w-100 float-left medium leading-[100%] text-[1.323vw] max-md:text-[2.5vw] max-mb:text-[3.5vw] max-md:pt-[2%]">{data.no}</div>
                </div>
              </div>
            </div>

            <div className="w-[100%] mt-[4.7%] float-left medium text-[1.59vw] max-md:text-[3.1vw] max-mb:text-[4vw]">Campaigns Performance</div>

            <div className="w-[100%] mt-[4.7%] max-mb:mt-[2%] float-left">
              <div className="w-[46.2%] max-md:w-100 mr-[3.32%] pb-[1.75%]  bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign float-left">
                <div className='medium w-100 pl-[6%] pt-[3.4%] text-[1.23vh] max-md:text-[2.5vw] max-mb:text-[3.2vw]'>New Customers</div>
                <div className='medium w-100 pl-[19.7%] '>

                  {barCharts.map((ele, index) => {
                    return (<div key={index}>
                      <div className="w-[9.9%] float-left ml-[1.5%]">
                        <div className="w-[100%] relative h-[10.88vh] float-left">

                          <div className="w-[42.9%] absolute bottom-0 left-[-15%] ml-[14.2%] float-left"
                            style={{
                              height: ele.bar1,
                              backgroundColor: ele.bgBar1
                            }}></div>

                          <div className="w-[42.9%] absolute bottom-0 right-[0%] h-8 ml-[14.2%] float-left"
                            style={{
                              height: ele.bar2,
                              backgroundColor: ele.bgBar2
                            }}></div>

                        </div>

                        <div className="w-[100%] regular pt-[6px] text-[.59vw] max-md:text-[1.2vw] max-mb:text-[1.7vw] text-center float-left">{ele.date}</div>
                      </div>
                    </div>)
                  })}

                </div>
              </div>

              <div className="w-[44.2%] max-md:w-100 max-md:mt-[2.5%] bg-white pb-[1.75%] rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign  float-left">
                <div className='medium w-100 pl-[6%] pt-[3.4%] text-[1.23vh] max-md:text-[2.5vw] max-mb:text-[3.2vw]'>New Leads</div>
                <div className='medium w-100 pl-[19.7%] '>

                  {barCharts.map((ele, index) => {
                    return (<div key={index}>
                      <div className="w-[9.9%] float-left ml-[1.5%]" >
                        <div className="w-[100%] relative h-[10.88vh] float-left">

                          <div className="w-[42.9%] absolute bottom-0 left-[-15%] ml-[14.2%] float-left"
                            style={{
                              height: ele.bar1,
                              backgroundColor: ele.bgBar1
                            }}></div>

                          <div className="w-[42.9%] absolute bottom-0 right-[0%] h-8 ml-[14.2%] float-left"
                            style={{
                              height: ele.bar2,
                              backgroundColor: ele.bgBar2
                            }}></div>

                        </div>

                        <div className="w-[100%] regular pt-[6px] text-[.59vw] max-md:text-[1.2vw] max-mb:text-[1.7vw] text-center float-left">{ele.date}</div>
                      </div>
                    </div>)
                  })}

                </div>
              </div>

            </div>

            <div className="w-100 ">
              <div className="w-[94%] max-md:w-100 max-md:mt-[7%] mt-[3.85%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[1.6%] float-left">
                <div className="w-100 float-left">
                  <div className="w-[80%] float-left medium text-[1vw] max-md:text-[2vw] max-mb:text-[2.8vw] max-md:my-[.5%] max-md:pl-[1%]">Linkedin Outreach</div>
                  <div className="w-[20%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                    {arrowUpLO ? (<AiOutlineUp onClick={onClickUpArrowLO} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowLO} size={14} />)}
                  </div>
                </div>
                <div className={`w-100 text-left float-left px-[2%] text-black mt-[2%] 
              ${LODropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  testing purpose..
                </div>
              </div>
            </div>
            <div className="w-100 ">
              <div className="w-[94%] max-md:w-100 mt-[3.55%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[1.6%] float-left">
                <div className="w-100 float-left">
                  <div className="w-[80%] float-left medium text-[1vw] max-md:text-[2vw] max-mb:text-[2.8vw] max-md:py-[.5%] max-md:pl-[1%]">Linkedin Outreach</div>
                  <div className="w-[20%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                    {arrowUpLE ? (<AiOutlineUp onClick={onClickUpArrowLE} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowLE} size={14} />)}
                  </div>
                </div>
                <div className={`w-100 text-left float-left px-[2%] text-black mt-[2%] 
              ${LEDropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  testing purpose..
                </div>
              </div>
            </div>
            <div className="w-100 ">
              <div className="w-[94%] max-md:w-100 mt-[3.55%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[1.6%] float-left">
                <div className="w-100 float-left">
                  <div className="w-[80%] float-left medium text-[1vw] max-md:text-[2vw] max-mb:text-[2.8vw] max-md:py-[.5%] max-md:pl-[1%]">Linkedin Outreach</div>
                  <div className="w-[20%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                    {arrowUpEO ? (<AiOutlineUp onClick={onClickUpArrowEO} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowEO} size={14} />)}
                  </div>
                </div>
                <div className={`w-100 text-left float-left px-[2%] text-black mt-[2%] 
              ${EODropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  testing purpose..
                </div>
              </div>
            </div>

          </div>



        </div>

        <div className="flex w-[30.21%] max-mb:w-[99%] max-mb:mt-[3%] ml-[1%] px-[2%] pt-[16px] pb-[5.25%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 regular text-[1.655vw] max-md:text-[3.2vw] max-mb:text-[4.2vw]">Filter</div>

            <div className="w-100">
              <div className="w-100 ">
                <div className="w-100 max-mb:w-[97.5%] mt-[3.85%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[2.5%] float-left">
                  <div className="w-100 float-left">
                    <div className="w-[20%] float-left medium flex justify-center "><img className="w-[37%] max-md:w-[50%] max-mb:w-[30%]" src={blackSpeaker} alt='blackSpeaker'></img> </div>
                    <div className="w-[70%] float-left medium text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] max-mb:pt-[1%]">Campaigns</div>
                    <div className="w-[10%] pr-[3%]  cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpCA ? (<AiOutlineUp onClick={onClickUpArrowCA} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowCA} size={14} />)}
                    </div>
                  </div>
                  <div className={`w-100 first-letter:
                ${CADropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                `}>
                    <div className={`w-[70%] text-left float-left pl-[19%] regular text-[.93vw] max-md:text-[1.5vw] max-mb:text-[2.5vw] mt-[4%]`} >Camp</div>
                    <div className={`w-[30%] text-left float-left pl-[19%] regular text-[.93vw] pb-[2.5%] mt-[4%]`} >
                      <img className="w-[82%]" src={blueTick} alt='blue-tick'></img>
                    </div>
                  </div>
                </div>
                <div className="w-100 max-mb:w-[97.5%] mt-[4.8%] max-mb:mt-[2.5%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[2.5%] float-left">
                  <div className="w-100 float-left">
                    <div className="w-[20%] float-left medium flex justify-center text-[1vw]"><img className="w-[37%] max-md:w-[50%] max-mb:w-[30%]" src={time} alt='time'></img> </div>
                    <div className="w-[70%] float-left medium text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw]">Period</div>
                    <div className="w-[10%] pr-[3%]  cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpPE ? (<AiOutlineUp onClick={onClickUpArrowPE} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowPE} size={14} />)}
                    </div>
                  </div>
                  <div className={`w-100 first-letter:
                ${PEDropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                `}>
                    <div className={`w-[70%] text-left float-left pl-[19%] regular text-[.93vw] max-md:text-[1.5vw] max-mb:text-[2.5vw] mt-[4%]`} >Camp</div>
                    <div className={`w-[30%] text-left float-left pl-[19%] regular text-[.93vw] pb-[2.5%] mt-[4%]`} ><img className="w-[82%]" src={blueTick} alt='blue-tick'></img> </div>
                  </div>
                </div>
                <div className="w-100 max-mb:w-[97.5%] max-mb:mt-[2.5%] mt-[4.8%] bg-white rounded-[12px] max-md:rounded-[5px] drop-shadow-homeCampaign pr-[2%]  pl-[1.9%] pt-[1.8%] pb-[2.5%] float-left">
                  <div className="w-100 float-left">
                    <div className="w-[20%] float-left medium flex justify-center text-[1vw]"><img className="w-[37%] max-md:w-[50%] max-mb:w-[30%]" src={time} alt='time'></img> </div>
                    <div className="w-[70%] float-left medium text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw]">Custom Period</div>
                    <div className="w-[10%] pr-[3%]  cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpCP ? (<AiOutlineUp onClick={onClickUpArrowCP} size={14} />) : (<AiOutlineDown onClick={onClickDownArrowCP} size={14} />)}
                    </div>
                  </div>
                  <div className={`w-100 first-letter:
                ${CPDropDrown ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                `}>
                    <div className={`w-[70%] text-left float-left pl-[19%] regular text-[.93vw] max-md:text-[1.5vw] max-mb:text-[2.5vw] mt-[4%]`} >Camp</div>
                    <div className={`w-[30%] text-left float-left pl-[19%] regular text-[.93vw] pb-[2.5%] mt-[4%]`} ><img className="w-[82%]" src={blueTick} alt='blue-tick'></img> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default HomeCampaign