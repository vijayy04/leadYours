import { useState } from "react";
import blueTick from '../images/blueTick.png';
import whiteTick from '../images/whiteTick.png';
import chart from '../images/chart.png';
import homeCampaign from '../images/homeCampaign.png';
import highPerformance from '../images/highPerformance.png';
import CreateCampaign from '../images/CreateCampaign.png';
import EmailIntegration from '../images/EmailIntegration.png';
import ConnectSMTP from '../images/ConnectSMTP.png';
import AmazingSupport from '../images/AmazingSupport.png';
import FreeUpdates from '../images/FreeUpdates.png';
import blueTriangle from '../images/blueTriangle.png';
import yellowCircle from '../images/yellowCircle.png';
import wholeBarChart from '../images/wholeBarChart.png';
import dotBox from '../images/dotBox.png';
import remove from '../images/remove.png';
import add from '../images/add.png';
import laptopGirl from '../images/laptopGirl.png';
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Main() {

  // for left hand side dropdown
  const [dropDown1, setDropDown1] = useState(true);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const [dropDown5, setDropDown5] = useState(false);

  const [arrowUpDD1, setArrowUpDD1] = useState(true);
  const [arrowUpDD2, setArrowUpDD2] = useState(false);
  const [arrowUpDD3, setArrowUpDD3] = useState(false);
  const [arrowUpDD4, setArrowUpDD4] = useState(false);
  const [arrowUpDD5, setArrowUpDD5] = useState(false);

  const [menuIsActive, setMenuIsActive] = useState(false);

  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login')
  }

  const onClickMenuBar = () => {
    if (menuIsActive) setMenuIsActive(false)
    else setMenuIsActive(true)
  }

  const onClickUpArrowDD1 = () => {
    setDropDown1(false);
    setArrowUpDD1(false);
  }
  const onClickDownArrowDD1 = () => {
    setDropDown1(true);
    setArrowUpDD1(true);
  }
  const onClickUpArrowDD2 = () => {
    setDropDown2(false);
    setArrowUpDD2(false);
  }
  const onClickDownArrowDD2 = () => {
    setDropDown2(true);
    setArrowUpDD2(true);
  }
  const onClickUpArrowDD3 = () => {
    setDropDown3(false);
    setArrowUpDD3(false);
  }
  const onClickDownArrowDD3 = () => {
    setDropDown3(true);
    setArrowUpDD3(true);
  }
  const onClickUpArrowDD4 = () => {
    setDropDown4(false);
    setArrowUpDD4(false);
  }
  const onClickDownArrowDD4 = () => {
    setDropDown4(true);
    setArrowUpDD4(true);
  }
  const onClickUpArrowDD5 = () => {
    setDropDown5(false);
    setArrowUpDD5(false);
  }
  const onClickDownArrowDD5 = () => {
    setDropDown5(true);
    setArrowUpDD5(true);
  }



  return (<>
    <div className="w-100 regular">

      {/* header part */}
      <div className="w-100 relative  bg-bgBlue bg-97.5 max-dt:bg-101 max-mb:bg-141 bg-no-repeat float-left">

        <div className="w-100 float-left bg-vector bg-85 bg-no-repeat">
          {/* navbar part */}
          <div className="w-100 px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%]  pt-[1.823%] float-left">
            <div className="w-[50%] float-left text-[33.54px] max-dt:text-[2.2vw] max-md:text-[3vw] max-mb:text-[4.4vw] text-white bold">LU.</div>

            <div className="hidden w-[50%] float-left max-md:flex justify-end ">
              <AiOutlineMenu size={32} onClick={onClickMenuBar} className="p-[1.6%] border mr-[0%] mt-[0%] border-[#2A83EC] max-mb:border-white max-mb:text-white text-[#2A83EC] rounded-[4px]" />

              {menuIsActive ? (<div className="hidden max-md:flex w-100 absolute pb-[3%] bg-[#eaf3fe] pt-[2%] left-[0%] top-[13%] z-[100] float-left justify-center">
                <div className="w-100 transition-all ease-in-out">
                  {/* login button */}
                  <div className="w-100 float-right max-md:text-center medium text-[#565656] max-md:float-left pt-[1.7%]">Why Choose</div>
                  <div className="w-100 float-right max-md:text-center medium text-[#565656] max-md:float-left pt-[1.7%]">FAQ</div>
                  <div className="w-100 float-right max-md:text-center medium text-[#565656] max-md:float-left pt-[1.7%]">Pricing</div>
                  <div className="w-100 float-right max-md:text-center medium text-[#565656] max-md:float-left mr-[10.13%] pt-[1.7%]">Support</div>
                  <div className=" w-100 float-right flex justify-center pt-[1.7%] max-md:float-left">
                    <button onClick={onClickLogin} className=" px-[2.25%] py-[.9%] text-[16px] text-white bg-[#FFB444] medium rounded-[25px]">BUY NOW</button>
                    <button onClick={onClickLogin} className=" px-[2.25%] py-[.9%] text-[16px] text-white bg-[#FFB444] medium rounded-[25px]">LOGIN</button>
                  </div>
                </div>
              </div>) : ''}

            </div>

            <div className="w-[50%] max-md:hidden float-left text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[white] medium">

              {/* login button */}
              <div className=" float-right">
                <button onClick={onClickLogin} className="w-[130px] h-[44px] max-dt:w-[8.6vw] max-dt:h-[2.9vw] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-white bg-[#FFB444] medium rounded-[25px]">LOGIN</button>
              </div>
              <div className="mr-[2.2%] float-right">
                <button onClick={onClickLogin} className="w-[130px] h-[44px] max-dt:w-[8.6vw] max-dt:h-[2.9vw] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-white bg-[#FFB444] medium rounded-[25px]">BUY NOW</button>
              </div>
              <div className="float-right mr-[10.13%] pt-[1.7%]">Support</div>
              <div className="float-right mr-[4.49%] pt-[1.7%]">Pricing</div>
              <div className="float-right mr-[4.49%] pt-[1.7%]">FAQ</div>
              <div className="float-right mr-[4.49%] pt-[1.7%]">Why Choose</div>
            </div>
          </div>

          {/* header below part */}
          <div className="w-100 px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%] pt-[1.823%] float-left">
            <div className="w-[42.5%] max-mb:w-100 float-left pr-[5.129%]">
              <div className="w-[100%] float-left text-white text-[50px] max-dt:text-[3vw] max-md:text-[3.7vw] max-mb:text-[5.5vw] semiBold">Helping You To Generate 20-100+ Meetings Per Month</div>
              <div className="w-[100%] pr-[4%] pt-[2.575%] float-left text-white text-[16px] max-md:text-[1.4vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular">
                Generating Leads for your business from LinkedIn Profile has never been easier!
              </div>
              <div className="flex w-100 mt-[6.01%] float-left">
                <button className="w-[225px] h-[44px] max-dt:w-[14.6vw] max-dt:h-[2.9vw] max-md:w-[19.6vw] max-md:h-[4.9vw] max-mb:w-[32.6vw] max-mb:h-[6.3vw] border border-[#2A83EC] text-[16px] max-md:text-[1.5vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[#2A83EC] bg-white medium rounded-[25px]">Register for early access</button>
                <button className="w-[130px] ml-[2.58%] h-[44px] max-dt:w-[8.6vw] max-dt:h-[2.9vw] max-md:w-[12.6vw] max-md:h-[4.9vw] max-mb:w-[16.6vw] max-mb:h-[6.3vw] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-white bg-[#FFB444] medium rounded-[25px]">Pricing</button>
              </div>
            </div>
            <div className="w-[57.5%] max-mb:w-[85%] max-mb:ml-[15%] max-mb:mt-[5%] drop-shadow-grey relative float-left">
              <img className="w-[100%] rounded-[35px] max-md:rounded-[29px] max-mb:rounded-[25px]" src={homeCampaign} alt='load' />
              <img className="w-[40.4%] absolute bottom-[-23%] left-[-17.5%] rounded-[35px]" src={chart} alt='load' />
            </div>
          </div>
        </div>

      </div>

      {/* Why Lead Usher? part and 2nd part */}
      <div className="w-100 max-mb:mt-[7%] relative px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%] pt-[9.4%] pb-[5.21%] float-left">

        {/* small images particle */}
        <div className="absolute top-[10%] max-mb:top-[2.4%] left-[25%]">
          <img className="w-[30.87px]" src={blueTriangle} alt='load' />
        </div>

        <div className="absolute top-[69.9%] max-dt:top-[93%] left-[4.9%] max-dt:left-[10%] z-20">
          <img className="w-[31px]" src={yellowCircle} alt='load' />
        </div>

        <div className="absolute top-[27.12%] max-dt:top-[25.3%] right-[6.5%] max-dt:right-[0%] z-0">
          <img className="w-[101px] max-dt:w-[50%]" src={dotBox} alt='load' />
        </div>

        {/* header part */}
        <div className="w-100 float-left text-[40px] max-md:text-[4.1vw] max-mb:text-[5.3vw] max-dt:text-[2.64vw] semiBold text-center">
          <span className="text-black">Why Lead </span>
          <span className="text-[#2A83EC]">Usher?</span>
        </div>

        {/* info part */}
        <div className="w-100 pt-[10px] mb-[2.568%] text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[#999999]">
          With so many tools on the market, why would you pick us? What's different?
        </div>

        {/* department info part */}
        <div className="w-100 float-left">

          {/* Simple & Streamlined part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={highPerformance} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">Simple & Streamlined</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                Designed by a LinkedIn Lead Generation Agency, simplicity & efficiency is key in our design.
              </div>
            </div>
          </div>

          {/* The LinkedIn Inbox - Simplified part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] max-mb:ml-[3.4%] max-mb:mb-[3.4%] ml-[1.895%] mb-[1.895%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={CreateCampaign} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">The LinkedIn Inbox - Simplified</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                When you start any direct response marketing on LinkedIn, your Inbox can get cluttered. Lead Usher allows users to reply, label, segment and manage conversations.
              </div>
            </div>
          </div>

          {/* Scale With Ease part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] max-mb:ml-[0%] max-mb:mb-[3.4%] ml-[1.895%] mb-[1.895%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={EmailIntegration} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">Scale With Ease</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                Manage multiple accounts in one go. Perfect for agencies or business looking to manage their teams performance.
              </div>
            </div>
          </div>

          {/* Flexible Plans part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] max-mb:ml-[3.4%] max-mb:mb-[3.4%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={ConnectSMTP} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">Flexible Plans</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                No monthly rolling retainers here. Add and remove accounts as needed. Great for agencies with project based work or fluctuating levels of clientele.
              </div>
            </div>
          </div>

          {/* White Label Opportunities part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] max-mb:ml-[0%] max-mb:mb-[3.4%] ml-[1.895%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={AmazingSupport} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">White Label Opportunities</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                Are you an agency looking to offer a Done For You Service? White Label our platform and add LinkedIn Lead Gen to your service offering.
              </div>
            </div>
          </div>

          {/* Great Support & Extended Network part */}
          <div className="w-[32.07%] h-[18.5vw] max-dt:h-[20.4vw] max-md:h-[30vw] max-mb:h-[43vw] max-mb:w-[48.3%] max-mb:ml-[3.4%] max-mb:mb-[3.4%] ml-[1.895%] rounded-[10px] max-mb:rounded-[8px] max-mb:px-[2%] drop-shadow-grey bg-white py-[2.951%] px-[1.027%] float-left">
            <div className="w-100 float-left">

              {/* img part */}
              <div className="w-100 flex justify-center">
                <img className="w-[17.1%] max-mb:w-[22%]" src={FreeUpdates} alt='sign' />
              </div>

              {/* title part */}
              <div className="w-100 pt-[6.412%] float-left text-center text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] semiBold">Great Support & Extended Network</div>

              {/* description part */}
              <div className="w-100 pt-[2.13733333%] px-[7.5%] float-left text-center text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular text-[#999999]">
                Meet like minded Agencies, get support and expand your thinking with our team and other businesses that use our system.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* About Us part */}
      <div className="w-100 relative bg-lightBlueBg bg-100 bg-no-repeat pb-[8.3%] max-dt:pb-[4%] float-left overflow-hidden">

        <div className="w-100 float-left px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%]">
          <div className="w-[45.4%] max-mb:w-[100%] float-left">
            <div className="w-100 max-mb:text-center float-left max-mb:pt-[4%] pt-[31.93%]">

              {/* header part */}
              <div className="w-100 float-left text-[40px] pb-[2%] max-md:text-[4.1vw] max-mb:text-[5.3vw] max-dt:text-[2.64vw] semiBold">
                <span className="text-black">About</span>
                <span className="text-[#2A83EC]"> Us</span>
              </div>

              {/* info part */}
              <div className="w-100 pt-[15px] max-mb:pr-[0%] pr-[5.66%] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[#999999]">
                <p>Originally starting as a UK based LinkedIn Lead Generation Agency, we have literally "been there & got the T-shirt".</p><br />
                <p>We have tried hundreds of tools, run countless campaigns and were frustrated that there wasn't an affordable platform which made it easy to run multiple campaigns at once, see stats and manage contacts/conversations.</p><br />
                <p>Lead Usher is an accumulation of all the tools and features we hoped other platforms had, but we got tired of waiting for them so we made our own!</p>
              </div>

            </div>
          </div>
          <div className="w-[54.6%] max-mb:w-[100%] pt-[4.041%] float-left">
            <img src={wholeBarChart} alt='load' />
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions part */}
      <div className="w-100 relative bg-100 pt-[5.21%] float-left overflow-hidden">

        <img className="absolute top-[25%] left-[10%] w-[25px]" src={yellowCircle} alt='load' />

        <div className="w-100 float-left px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%]">
          <div className="w-100 float-left">

            {/* header part */}
            <div className="w-100 float-left text-[40px] max-md:text-[4.1vw] max-mb:text-[5.3vw] max-dt:text-[2.64vw] text-center semiBold">
              <span className="text-black">Frequently Asked  </span>
              <span className="text-[#2A83EC]">Questions</span>
            </div>

            {/* info part */}
            <div className="w-100 pt-[15px] text-center regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[#999999]">
              Some usual questions we come across.
            </div>

          </div>
          <div className="w-100 pt-[2.566%] float-left">

            {/* left side laptop girl image part */}
            <div className="w-[42.53%] max-mb:w-[100%] flex justify-center float-left">
              <img className="w-[83.1%]" src={laptopGirl} alt='load' />
            </div>

            {/* right side drop down */}
            <div className="w-[57.47%] max-mb:w-[100%] max-mb:mt-[5%] float-left">
              <div className="w-100 float-left">

                {/* drop down part 1 */}
                <div className="w-[100%] float-left">
                  <div className="w-100  borderTopGrey py-[3.18%] px-[3.5%] float-left">
                    <div className="w-[90%]  float-left semiBold text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] max-md:pl-[1%]">
                      Do I need Sales Navigator?
                    </div>
                    <div className="w-[10%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpDD1 ? (<img className="w-[15px]" src={remove} onClick={onClickUpArrowDD1} alt='load' />) : (<img className="w-[15px]" src={add} alt='load' onClick={onClickDownArrowDD1} />)}
                    </div>
                  </div>
                  <div className={`w-100 borderTopGrey py-[3.235%] px-[3.5%] text-left float-left text-[#999999] regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]
                         ${dropDown1 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                          `} >
                    Sales Navigator isn't essential with us - however it can help improve your campaigns performance!
                  </div>
                </div>

                {/* drop down part 2 */}
                <div className="w-[100%] float-left">
                  <div className="w-100 borderTopGrey py-[3.18%] px-[3.5%] float-left">
                    <div className="w-[90%]  float-left semiBold text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] max-md:pl-[1%]">
                      Can you overcome LinkedIn Connection Request Limits?
                    </div>
                    <div className="w-[10%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpDD2 ? (<img className="w-[15px]" src={remove} onClick={onClickUpArrowDD2} alt='load' />) : (<img className="w-[15px]" src={add} alt='load' onClick={onClickDownArrowDD2} />)}
                    </div>
                  </div>
                  <div className={`w-100 borderTopGrey py-[3.235%] px-[3.5%] text-left float-left text-[#999999] regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]
                         ${dropDown2 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                          `} >
                    Yes, a typical profile can send around 1,500-2,000 connection requests per month with us.
                  </div>
                </div>

                {/* drop down part 3 */}
                <div className="w-[100%] float-left">
                  <div className="w-100 borderTopGrey py-[3.18%] px-[3.5%] float-left">
                    <div className="w-[90%]  float-left semiBold text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] max-md:pl-[1%]">
                      How easy is it to add/remove accounts and users?
                    </div>
                    <div className="w-[10%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpDD3 ? (<img className="w-[15px]" src={remove} onClick={onClickUpArrowDD3} alt='load' />) : (<img className="w-[15px]" src={add} alt='load' onClick={onClickDownArrowDD3} />)}
                    </div>
                  </div>
                  <div className={`w-100 borderTopGrey py-[3.235%] px-[3.5%] text-left float-left text-[#999999] regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]
                         ${dropDown3 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                          `} >
                    When you sign up, you'll gain admin access to the platform making it really easy to add/remove users and view their usage.
                  </div>
                </div>

                {/* drop down part 4 */}
                <div className="w-[100%] float-left">
                  <div className="w-100 borderTopGrey py-[3.18%] px-[3.5%] float-left">
                    <div className="w-[90%]  float-left semiBold text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] max-md:pl-[1%]">
                      Can I give my clients access to the software?
                    </div>
                    <div className="w-[10%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpDD4 ? (<img className="w-[15px]" src={remove} onClick={onClickUpArrowDD4} alt='load' />) : (<img className="w-[15px]" src={add} alt='load' onClick={onClickDownArrowDD4} />)}
                    </div>
                  </div>
                  <div className={`w-100 borderTopGrey py-[3.235%] px-[3.5%] text-left float-left text-[#999999] regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]
                         ${dropDown4 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                          `} >
                    Yes, this is super easy! Just create your client some log ins, assign them their LinkedIn profiles so that's all they can see and then send them an email to access the dashboard.
                  </div>
                </div>

                {/* drop down part 5 */}
                <div className="w-[100%] float-left">
                  <div className="w-100 borderTopGrey borderBottomGrey py-[3.18%] px-[3.5%] float-left">
                    <div className="w-[90%]  float-left semiBold text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] max-md:pl-[1%]">
                      Can I white label Lead Usher?                    </div>
                    <div className="w-[10%] max-md:pt-[1%] pr-[2%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                      {arrowUpDD5 ? (<img className="w-[15px]" src={remove} onClick={onClickUpArrowDD5} alt='load' />) : (<img className="w-[15px]" src={add} alt='load' onClick={onClickDownArrowDD5} />)}
                    </div>
                  </div>
                  <div className={`w-100 borderTopGrey py-[3.235%] px-[3.5%] text-left float-left text-[#999999] regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]
                         ${dropDown5 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                          `} >
                    Yes, if you are looking to offer this to your own list of clients, just get in touch for a demo!
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing plan part */}
      <div className="w-100 max-mb:pt-[8%] float-left px-[9.4%] max-dt:px-[3%] max-md:px-[2%] max-mb:px-[2%] py-[5.21%]">
        <div className="w-100 float-left">

          {/* header part */}
          <div className="w-100 float-left text-[40px] max-md:text-[4.1vw] max-mb:text-[5.3vw] max-dt:text-[2.64vw] text-center semiBold">
            <span className="text-black">PRICING </span>
            <span className="text-[#2A83EC]">PLAN</span>
          </div>

          {/* info part */}
          <div className="w-100 pt-[10px] text-center regular text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] text-[#999999]">
            It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.
          </div>

          <div className="w-100 pt-[2.566%] float-left">

            {/* free subscription */}
            <div className="w-[32%] max-mb:w-[48.3%] rounded-[20px] pt-[2.566%] px-[2.566%] pb-[2.887%] float-left border-[#ECECEC] border-[2px]">
              <div className="w-[100%] float-left">

                {/* left side part */}
                <div className="w-100 float-left">
                  <button className="text-[18px] max-dt:text-[1.2vw] border border-[#CCE1FA] py-[1.319%] px-[4.65%] rounded-[5px] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold">Free</button>
                </div>

                <div className="w-100 float-left pt-[2.863%] semiBold text-[#2A83EC] text-[60px] max-dt:text-[4vw] max-md:text-[5.6vw] max-mb:text-[6.8vw]">$0</div>
                <div className="w-100 float-left pt-[2.863%] medium text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] ">
                  Free to create an account and explore around <br /> <p className="text-[white]">.</p>
                </div>

              </div>
              <div className="w-[100%] pt-[11.92916%] float-left">

                {/* right side */}
                <div className="w-100 float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Create an account & log in
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Create Workspaces
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    View all Lead Usher Features
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    delete
                  </span>
                </div>
                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    delete                  </span>
                </div>

              </div>

              <div className="w-100 mt-[11.92916%] float-left">
                <button className="w-[218px] h-[60px] max-md:w-[18.6vw] max-md:h-[4.9vw] max-mb:w-[28vw] max-mb:h-[6.9vw] text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] medium medium rounded-[30px] py-[1.775%] text-white bg-[#2A83EC]">Start for free</button>
              </div>
            </div>

            {/* For Professionals & Teams */}
            <div className="w-[32%] max-mb:w-[48.3%] max-mb:ml-[3.4%] ml-[2%] bg-[#2A83EC] rounded-[20px] pt-[2.566%] px-[2.566%] pb-[2.887%] float-left border-[#2A83EC] border-[2px]">
              <div className="w-[100%] float-left">

                {/* left side part */}
                <div className="w-100 float-left">
                  <button className="text-[18px] max-dt:text-[1.2vw] border border-[white] text-white py-[1.319%] px-[4.65%] rounded-[5px] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold">For Professionals & Teams</button>
                </div>

                <div className="w-100 float-left pt-[2.863%] semiBold text-[white] text-[60px] max-dt:text-[4vw] max-md:text-[5.6vw] max-mb:text-[6.8vw]">
                  <div className=" w-[35%] float-left">
                    $50
                  </div>
                  <div className="text-[1vw] w-[65%] pt-[4%] float-left regular">(cross out the $50) Now $10 per LinkedIn Profile</div>
                </div>
                <div className="w-100 float-left pt-[2.863%] medium text-white text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]">
                  Only charged when you add a LinkedIn Profile, charged Monthly.
                </div>

              </div>
              <div className="w-[100%] pt-[11.92916%] float-left">

                {/* right side */}
                <div className="w-100 float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[white]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[white]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[white]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[white]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>
                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[white]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>

              </div>

              <div className="w-100 mt-[11.92916%] float-left">
                <button className="w-[218px] h-[60px] max-md:w-[18.6vw] max-md:h-[4.9vw] max-mb:w-[28vw] max-mb:h-[6.9vw] text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] medium medium rounded-[30px] py-[1.775%] text-[#2A83EC] bg-[white]">Get Premium</button>
              </div>
            </div>

            {/* Professional subscription */}
            <div className="w-[32%] max-mb:w-[48.3%] max-mb:mt-[3.4%] max-mb:ml-[26.7%] ml-[2%] rounded-[20px] pt-[2.566%] px-[2.566%] pb-[2.887%] float-left border-[#ECECEC] border-[2px]">
              <div className="w-[100%] float-left">

                {/* left side part */}
                <div className="w-100 float-left">
                  <button className="text-[18px] max-dt:text-[1.2vw] border border-[#CCE1FA] py-[1.319%] px-[4.65%] rounded-[5px] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold">For Agencies & White Labellers</button>
                </div>

                <div className="w-100 float-left pt-[2.863%] semiBold text-[#2A83EC] text-[60px] max-dt:text-[4vw] max-md:text-[5.6vw] max-mb:text-[6.8vw]">
                  $7
                </div>
                <div className="w-100 float-left pt-[2.863%] medium text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw]">
                  Charged monthly, easy to scale.
                </div>

              </div>
              <div className="w-[100%] pt-[11.92916%] float-left">

                {/* right side */}
                <div className="w-100 float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    All Premium features
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Your Branding
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Admin & re-sell capabilities.
                  </span>
                </div>

                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>
                <div className="w-100 pt-[7.63%] float-left flex">
                  <img className="w-[20px] h-[20px] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                  <span className="ml-[6.15%] medium text-[18px] max-dt:text-[1.14vw] max-md:text-[1.37vw] max-mb:text-[2.4vw] text-[#999999]">
                    Lorem Ipsum is simply dummy text .
                  </span>
                </div>

              </div>

              <div className="w-100 mt-[11.92916%] float-left">
                <button className="w-[218px] h-[60px] max-md:w-[18.6vw] max-md:h-[4.9vw] max-mb:w-[28vw] max-mb:h-[6.9vw] text-[20px] max-md:text-[1.85vw] max-mb:text-[2.7vw] max-dt:text-[1.318vw] medium medium rounded-[30px] py-[1.775%] text-white bg-[#2A83EC]">Get Agency
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* footer part */}
      <div className="w-100 float-left bg-[#eaf3fe] bg-100 bg-center bg-no-repeat bg-vector1 py-[4.636%]">

        <div className="w-100 text-center float-left text-[#2A83EC] text-[58px] max-dt:text-[4vw] bold">LU.</div>
        <div className="w-100 pt-[1.823%] text-center float-left text-[black] text-[18px] max-dt:text-[1.2vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] medium">
          SIMPLE  &nbsp; | &nbsp; EFFECTIVE &nbsp; | &nbsp; EFFICIENT
        </div>
        <div className="w-100 pt-[2.344%] text-center float-left text-[#999999] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] regular">
          Designed by a LinkedIn Lead Generation company, for Lead Generating people and companies.
        </div>
      </div>

      {/* copyright details part */}
      <div className="w-100 float-left py-[13px] text-white bg-[#2A83EC] text-[16px] max-md:text-[1.6vw] max-mb:text-[2.2vw] max-dt:text-[1.06vw] medium text-center">
        Lead Usher Ltd
      </div>

    </div>
  </>
  )
}

export default Main