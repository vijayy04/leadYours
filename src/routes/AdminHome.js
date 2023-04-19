import Side from "./SideMenu";
import Top from "./Header";
import commentBlue from '../images/realCommentBlue.png';
import twoUser from '../images/twoUser.png';
import option from '../images/option.png';
import edit from '../images/edit.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import eye from '../images/eye.png';
import { Outlet } from "react-router-dom";

function AdminHome() {

  const data = {
    no: 120,
    percent: "50%"
  }

  const statusOfProgressBar = {
    width: data.percent
  }

  const userData = [
    {
      userDP: user1,
      userName: 'Jacob Jones',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
    {
      userDP: user2,
      userName: 'Cody Fisher',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
    {
      userDP: user3,
      userName: 'Esther Howard',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
  ]

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
      <Side select={`admin`}></Side>
      <Top heading={`Home`}></Top>

      <div className={`pt-[1.8%] mr-[.1%] h-[93vh] overflow-x-auto`}>

        <div className="flex w-[97.35%] max-mb:w-[99%] px-[3.816%] py-[2.65%] justify-start bg-bgLightBlue ml-[1%] rounded-[15px] float-left">

          <div className="w-100">
            <div className="w-[19.45%] max-md:w-[30%] max-mb:w-[46.35%] max-md:mr-[3.3%] bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign mr-[3.65%] pl-[2.48%] pt-[1.63%] pb-[2.17%] pr-[3.18%] float-left">
              <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] max-mb:text-[5.5vw] medium">{data.no}</div>
              <div className="w-100 mt-[2.5%] text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] medium">Compaigns</div>
              <div className="w-100 text-[.8vw] max-md:text-[1.7vw] max-mb:text-[2.7vw] regular mt-[4%]">{data.percent}</div>
              <div className="w-100 rounded-[9px] h-[9px] max-md:h-[5px] max-mb:h-[4px] bg-bgProgressBar overflow-hidden">
                <div className={`bg-darkBlue h-[9px] max-md:h-[5px] max-mb:h-[4px] rounded-[9px]`} style={statusOfProgressBar}></div>
              </div>
            </div>
            <div className="w-[19.45%] max-md:w-[30%] max-md:mr-[3.3%] max-mb:w-[46.35%] bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign mr-[3.65%] pl-[2.48%] pt-[1.63%] pb-[2.17%] pr-[3.18%] float-left">
              <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] max-mb:text-[5.5vw] medium">{data.no}</div>
              <div className="w-100 mt-[2.5%] text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] medium">Prospects</div>
              <div className="w-100 text-[.8vw] max-md:text-[1.7vw] max-mb:text-[2.7vw] regular mt-[4%]">{data.percent}</div>
              <div className="w-100 rounded-[9px] h-[9px] max-md:h-[5px] max-mb:h-[4px] bg-bgProgressBar overflow-hidden">
                <div className={`bg-darkBlue h-[9px] max-md:h-[5px] max-mb:h-[4px] rounded-[9px]`} style={statusOfProgressBar}></div>
              </div>
            </div>
            <div className="w-[19.45%] max-md:w-[30%] max-md:mr-[3.3%] max-mb:w-[46.35%] max-mb:mt-[3%] bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign mr-[3.65%] pl-[2.48%] pt-[1.63%] pb-[2.17%] pr-[3.18%] float-left">
              <div className="w-100 text-[2.12vw] max-md:text-[4.24vw] max-mb:text-[5.5vw] medium">{data.no}</div>
              <div className="w-100 mt-[2.5%] text-[1.35vw] max-md:text-[2vw] max-mb:text-[3vw] medium">Total User</div>
              <div className="w-100 text-[.8vw] max-md:text-[1.7vw] max-mb:text-[2.7vw] regular mt-[4%]">{data.percent}</div>
              <div className="w-100 rounded-[9px] h-[9px] max-md:h-[5px] max-mb:h-[4px] bg-bgProgressBar overflow-hidden">
                <div className={`bg-darkBlue h-[9px] max-md:h-[5px] max-mb:h-[4px] rounded-[9px]`} style={statusOfProgressBar}></div>
              </div>
            </div>
            <div className="w-[19.45%] max-md:w-100 max-md:mt-[3%] float-left">
              <div className="w-100 max-md:w-[30%] max-mb:w-[46.35%] max-md:rounded-[13px] bg-white rounded-[23px] drop-shadow-homeCampaign pl-[9%] pb-[3.5%] pt-[4.4%] max-md:py-[1.8%] max-md:pl-[2.5%] float-left">
                <div className="w-[25%] py-[4.1%] rounded-[6px] bg-bgLightGrey flex justify-center bg-62 float-left">
                  <img className="w-[72%]" src={commentBlue} alt='load' />
                </div>
                <div className="w-[75%] float-left pt-[5%] pl-[8.6%]">
                  <div className="w-100 float-left medium leading-[100%] text-[.9vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">New Messages</div>
                  <div className="w-100 float-left medium leading-[100%] text-[1.323vw] max-md:text-[2.5vw] max-mb:text-[3.5vw] max-md:pt-[2%]">{data.no}</div>
                </div>
              </div>
              <div className="w-100 max-md:w-[30%] max-mb:w-[46.35%] max-md:ml-[3.3%] max-md:rounded-[13px] bg-white mt-[4%] max-md:mt-[0%] rounded-[23px] drop-shadow-homeCampaign pl-[9%] pb-[3.5%] pt-[4.4%] max-md:py-[1.8%] max-md:pl-[2.5%] float-left">
                <div className="w-[25%] py-[4.1%] rounded-[6px] bg-bgLightGrey flex justify-center bg-62 float-left">
                  <img className="w-[72%]" src={twoUser} alt='load' />
                </div>
                <div className="w-[75%] float-left pt-[5%] pl-[8.6%]">
                  <div className="w-100 float-left medium leading-[100%] text-[.9vw] max-md:text-[1.5vw] max-mb:text-[2.1vw]">Linked Accounts</div>
                  <div className="w-100 float-left medium leading-[100%] text-[1.323vw] max-md:text-[2.5vw] max-mb:text-[3.5vw] max-md:pt-[2%]">{data.no}</div>
                </div>
              </div>
            </div>

            <div className="w-[100%] mt-[2.33%] max-mb:mt-[3.5%] float-left medium text-[1.59vw] max-md:text-[3.1vw] max-mb:text-[4vw]">Campaigns Performance</div>

            <div className="w-[100%] mt-[2.33%] max-mb:mt-[2%] float-left">
              <div className="w-[30.3%] max-md:w-[48.5%] max-mb:w-[100%] max-md:mr-[0%] mr-[2.17%] pb-[1.15%]  bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign float-left">
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

              <div className="w-[30.3%] max-md:w-[48.5%] max-mb:w-[100%] max-mb:ml-[0%] max-mb:mt-[3%] max-md:mr-[0%] max-md:ml-[3%] mr-[2.17%] pb-[1.15%]  bg-white rounded-[23px] max-md:rounded-[13px] drop-shadow-homeCampaign float-left">
                <div className='medium w-100 pl-[6%] pt-[3.4%] text-[1.23vh] max-md:text-[2.5vw] max-mb:text-[3.2vw]'>New Leads</div>
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

            </div>



          </div>

        </div>

        <div className="flex w-[97.35%] max-mb:w-[99%] max-mb:mt-[3%] mt-[2.3%] ml-[1%] p-[2.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 float-left">
              <div className="w-[50%] float-left medium text-[1.59vw] max-md:text-[3vw] max-mb:text-[4.2vw]">User List</div>
              <div className="w-[50%] float-left flex justify-end">
                <button className="medium bg-[#2A83EC] text-white rounded-[6px] px-[3.38%] py-[1.31%] max-mb:px-[6%] max-mb:py-[2.5%]  text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.3vw]">See All</button>
              </div>
            </div>

            <div className="w-100 float-left max-md:overflow-y-auto max-md:p-[1%] pt-[1.66%] regular">
              <div className="w-100 max-md:w-[150%] max-mb:w-[200%]">

                {/* heading part  */}
                <div className="w-100 medium text-[#434343] text-[1.2vw] max-mb:text-[2.9vw] max-md:text-[2vw] float-left bg-[#E0EEF4] rounded-[8px] px-[2.638%] py-[1.8%]">
                  <div className="w-[20.45%] float-left ">Name</div>
                  <div className="w-[19.58%] float-left">Company Name</div>
                  <div className="w-[19.1%] float-left">Phone Number</div>
                  <div className="w-[28.72%] float-left">Email ID</div>
                  <div className="w-[12.15%] float-left">Action</div>
                </div>

                {/* rows and columns */}
                {userData.map((ele, index) => {
                  return (
                    <div key={index} className="w-100 regular mt-[.76%] drop-shadow-admin text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.9vw] float-left bg-white rounded-[8px] px-[2.638%] py-[.85%]">
                      <div className="w-[20.45%] float-left flex justify-start">
                        <img className="w-[20.25%] rounded-[50%]" src={ele.userDP} alt='user' />
                        <span className="pl-[6.25%] pt-[4%]">{ele.userName}</span>
                      </div>
                      <div className="w-[19.58%] pt-[.85%] float-left">{ele.companyName}</div>
                      <div className="w-[19.1%] pt-[.85%] float-left">{ele.phoneNo}</div>
                      <div className="w-[28.72%] pt-[.85%] float-left">{ele.email}</div>
                      <div className="w-[12.15%] float-left flex justify-start">
                        {/* arrow up and down button  */}
                        <button className="w-[23.6%] max-mb:w-[30%] max-mb:py-[9%] mr-[6.6%] flex justify-center bg-lightBlue rounded-[8px] py-[6.6%] "  >
                          <img className="w-[56%]" src={eye} alt='arrow-up' />
                        </button>
                        {/* edit button  */}
                        <button className="w-[23.6%] max-mb:w-[30%] max-mb:py-[6%] mr-[6.6%] flex justify-center bg-lightBlue rounded-[8px] py-[4.6%] "  >
                          <img className="w-[56%]" src={edit} alt='arrow-up' />
                        </button>

                        {/* option button */}
                        <button className="w-[23.6%] max-mb:w-[30%] max-mb:py-[6%] flex justify-center bg-lightBlue rounded-[8px] py-[4.6%] "  >
                          <img className="w-[15.3%]" src={option} alt='arrow-up' />
                        </button>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <Outlet />
  </>
  )
}

export default AdminHome