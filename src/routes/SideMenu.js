import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { GoBook } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Side({ select }) {

  const [applyHomeHover, setApplyHomeHover] = useState(false);
  const [applySpeakerHover, setApplySpeakerHover] = useState(false);
  const [applyBookHover, setApplyBookHover] = useState(false);
  const [applyInboxHover, setApplyInboxHover] = useState(false);
  const [applyMentionHover, setApplyMentionHover] = useState(false);
  const [applyLinkedInHover, setApplyLinkedInHover] = useState(false);
  const [applySettingHover, setApplySettingHover] = useState(false);
  const [applyAdminHover, setApplyAdminHover] = useState(false);

  const [applyScale, setApplyScale] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(true);

  const navigate = useNavigate();

  const onClickHome = () => {
    navigate('/home-campaign')
  }
  const onClickCampaign = () => {
    navigate('/campaign')
  }
  const onClickInbox = () => {
    navigate('/inbox')
  }
  const onClickLinkedIn = () => {
    navigate('/linkedIn');
  }
  const onClickSetting = () => {
    navigate('/setting')
  }
  const onClickAdmin = () => {
    navigate('/admin')
  }

  const hoverInHome = () => {
    setApplyHomeHover(true)
  }
  const hoverInSpeaker = () => {
    setApplySpeakerHover(true)
  }
  const hoverInBook = () => {
    setApplyBookHover(true)
  }
  const hoverInInbox = () => {
    setApplyInboxHover(true)
  }
  const hoverInMention = () => {
    setApplyMentionHover(true)
  }
  const hoverInLinkdeIn = () => {
    setApplyLinkedInHover(true)
  }
  const hoverInSetting = () => {
    setApplySettingHover(true)
  }
  const hoverInAdmin = () => {
    setApplyAdminHover(true)
  }

  const hoverOutHome = () => {
    setApplyHomeHover(false)
  }
  const hoverOutSpeaker = () => {
    setApplySpeakerHover(false)
  }
  const hoverOutBook = () => {
    setApplyBookHover(false)
  }
  const hoverOutInbox = () => {
    setApplyInboxHover(false)
  }
  const hoverOutMention = () => {
    setApplyMentionHover(false)
  }
  const hoverOutLinkedIn = () => {
    setApplyLinkedInHover(false)
  }
  const hoverOutSetting = () => {
    setApplySettingHover(false)
  }
  const hoverOutAdmin = () => {
    setApplyAdminHover(false)
  }

  const scaleOpen = () => {
    setApplyScale(true)
    setHideRightArrow(false)
  }
  const scaleClose = () => {
    setApplyScale(false)
    setHideRightArrow(true)
  }

  return (
    <>
      {/* sidebar icons  */}
      <div className={`float-left 
        ${hideRightArrow ? "shadow-[0_4px_4px_3px_rgba(42,131,236,0.1)]" : ' shadow-none'}
      `}>
        <div className="relative left-0 top-0  h-half  text-mainColor flex flex-col ">
          <div className="lu" >LU.</div>
          <div className={`absolute  right-7 z-30 bottom-[260px] cursor-pointer 
           text-black hover:text-darkBlue duration-200 ease-linear font-bold
            ${hideRightArrow ? 'block duration-300 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
           `} onClick={scaleOpen} ><AiOutlineRight size={22} className='ico' /></div>
          <div className=" absolute bottom-3 group">
            <div className={select === 'home' ? `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-lightBlue bg-homeBlue` : `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-home hover:bg-homeBlue`} onMouseEnter={hoverInHome} onMouseLeave={hoverOutHome} onClick={onClickHome} ></div>

            <div className={select === 'campaign' ? `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-lightBlue bg-speakerBlue` : `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-speaker hover:bg-speakerBlue`} onMouseEnter={hoverInSpeaker} onMouseLeave={hoverOutSpeaker} onClick={onClickCampaign}></div>

            <div className="sidebar-icon mt-5 " onMouseEnter={hoverInBook} onMouseLeave={hoverOutBook} ><GoBook size={35} className='ico' /></div>
            <div className={select === 'inbox' ? `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-lightBlue bg-commentBlue` : `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-comment hover:bg-commentBlue`} onMouseEnter={hoverInInbox} onMouseLeave={hoverOutInbox} onClick={onClickInbox}></div>
            <div className=" borderr1 mt-6 " >  </div>
          </div>

        </div>
        <div className="relative left-0 top-0  h-half   text-mainColor flex flex-col">
          <div className="absolute w-7 h-7 ml-5 bottom-9 bg-no-repeat bg-center bg-icon bg-switch" ></div>
          <div className=" absolute top-0 ">
            <div className="sidebar-icon bg-icon bg-no-repeat bg-center bg-mention hover:bg-mentionBlue" onMouseEnter={hoverInMention} onMouseLeave={hoverOutMention}></div>
            <div className={select === 'linkedIn' ? `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-lightBlue bg-inBlue` : `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-in hover:bg-inBlue`} onMouseEnter={hoverInLinkdeIn} onMouseLeave={hoverOutLinkedIn} onClick={onClickLinkedIn} ></div>
            <div className={select === 'setting' ? `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-lightBlue bg-settingBlue` : `sidebar-icon mt-5 bg-icon bg-no-repeat bg-center bg-setting hover:bg-settingBlue`} onMouseEnter={hoverInSetting} onMouseLeave={hoverOutSetting} onClick={onClickSetting} ></div>
            <div className={select === 'admin' ? `sidebar-icon mt-5 text-darkBlue bg-lightBlue` : `sidebar-icon mt-5 `} onMouseEnter={hoverInAdmin} onMouseLeave={hoverOutAdmin} onClick={onClickAdmin}><RiAdminLine size={23} className='' /></div>
          </div>
        </div>

      </div>

      {/* sidebar task  */}
      <div className="float-left w-[236px] max-md:absolute max-md:left-[76px] max-md:z-50">

        <div className="">
          <div className={`relative left-0 top-0  h-half  lg:w-[100%] bg-[#eef6fe] text-mainColor flex flex-col 
           ${applyScale ? 'block opacity-100 duration-700' : 'hidden opacity-0 duration-700'} `}>
            <div className={` absolute right-6 top-8 cursor-pointer 
           text-black hover:text-darkBlue duration-200 font-bold
           `} onClick={scaleClose}>
              <AiOutlineLeft size={19} />
            </div>
            <div className=" absolute bottom-3">
              <div className={`sideTask p-sideTask tried ${applyHomeHover ? 'onHover' : ''} `} > Home </div>
              <div className={`sideTask p-sideTask tried ${applySpeakerHover ? 'onHover' : ''} `}> Campaigns </div>
              <div className={`sideTask p-sideTask tried ${applyBookHover ? 'onHover' : ''} `}> Prospects</div>
              <div className={`sideTask p-sideTask tried pb-9 ${applyInboxHover ? 'onHover' : ''} `}> Inbox </div>
              <div className=" borderr2 "> </div>
            </div>
          </div>

          <div className={`relative  left-0 top-0 h-half bg-[#eef6fe]  text-mainColor flex flex-col 
            ${applyScale ? 'block opacity-100 duration-700' : 'hidden opacity-0 duration-700'}`}>
            <div className="absolute bottom-10 bb lu" ></div>
            <div className=" below-written ">
              <div className={`sideTask pd-sideTask ${applyMentionHover ? 'onHover' : ''}  p-email`} > Email integration </div>
              <div className={`sideTask pd-sideTask ${applyLinkedInHover ? 'onHover' : ''} `} > LinkedIn Accounts</div>
              <div className={`sideTask pd-sideTask ${applySettingHover ? 'onHover' : ''} `}> Accounts Settings</div>
              <div className={`sideTask pd-sideTask ${applyAdminHover ? 'onHover' : ''} `}> Admin</div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

export default Side;
