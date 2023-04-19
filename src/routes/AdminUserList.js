import Side from "./SideMenu";
import Top from "./Header";
import option from '../images/option.png';
import edit from '../images/edit.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';
import user6 from '../images/user6.png';
import eye from '../images/eye.png';
import plusCircle from '../images/plusCircle.png';
import Select from "react-select";

function AdminUserList() {
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
    {
      userDP: user4,
      userName: 'Marvin McKinney',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
    {
      userDP: user5,
      userName: 'Jacob Jones',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
    {
      userDP: user1,
      userName: 'Cody Fisher',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
    {
      userDP: user6,
      userName: 'Marvin McKinney',
      companyName: 'Chris Marketing',
      phoneNo: '147-2368-7894',
      email: 'Demo123@gmail.com'
    },
  ]

  return (<>
    <div className="w-100 minWidth">
      <Side select={`admin`}></Side>
      <Top heading={`Home`}></Top>

      <div className={`pt-[1.8%] mr-[.1%] h-[93vh] overflow-x-auto`}>

        <div className="flex w-[97.35%] max-mb:w-[99%] ml-[1%] p-[2.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 float-left">
              <div className="w-[10%] max-md:w-[100%] float-left medium text-[1.59vw] max-md:text-[3vw] max-mb:text-[4.2vw]">User List</div>
              <div className="w-[90%] max-md:w-[100%] max-md:mt-[1.5%] float-left flex justify-end max-md:justify-center ">
                <div className="w-100 float-left flex justify-end">
                  <div className="w-[24.5%] max-md:w-[40%] max-mb:w-[46%] pr-[.85%] float-left flex">
                    <button className="text-[1.06vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] medium px-[7.43%] bg-[#CCE1FA] rounded-l-[6px]">Country</button>
                    <Select
                      className="w-[66.6%] medium text-[1.06vw] max-md:text-[1.6vw] max-mb:text-[2vw]"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          padding: '1.3% 0%',
                          marginRight: '1.8%',
                          width: '100%',
                          borderRadius: '0px 6px 6px 0px',
                          border: 'none',
                          borderTop: '1px solid #CCE1FA',
                          borderBottom: '1px solid #CCE1FA',
                          borderRight: '1px solid #CCE1FA'
                        }),
                      }}
                      placeholder='USA'
                      theme={theme => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          neutral50: 'black',  // Placeholder color
                        },
                      })} />
                  </div>
                  <div className="w-[26%] max-md:w-[45%] max-mb:w-[54%] pr-[.85%] float-left flex">
                    <button className="text-[1.06vw] max-md:text-[1.6vw] medium px-[4.53%] bg-[#CCE1FA] rounded-l-[6px] max-mb:text-[2.2vw]">Company</button>
                    <Select
                      className="w-[66.6%] medium text-[1.06vw] max-md:text-[1.5vw] max-lp:text-[.9vw] max-mb:text-[2vw]"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          padding: '1.3% 0%',
                          margin: '0%',
                          width: '100%',
                          borderRadius: '0px 6px 6px 0px',
                          border: 'none',
                          borderTop: '1px solid #CCE1FA',
                          borderBottom: '1px solid #CCE1FA',
                          borderRight: '1px solid #CCE1FA'
                        }),
                      }}
                      placeholder='Chris Marketing'
                      theme={theme => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          neutral50: 'black',  // Placeholder color
                        },
                      })} />
                  </div>

                  <div className="w-[10.4%] max-md:w-[15%] max-mb:w-[22%] max-mb:mt-[2%] float-left ">
                    <button className="w-100 justify-center medium max-mb:w-100 bg-[#2A83EC] flex text-white rounded-[6px] px-[1.38%] py-[7.2%] max-md:py-[15%] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.3vw]">
                      <img className="w-[15%] mt-[2.5%] mr-[7%]" src={plusCircle} alt='load' />
                      Add User</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 float-left max-md:overflow-y-auto max-md:p-[1%] pt-[1.66%] regular">
              <div className="w-100 max-md:w-[175%] max-mb:w-[250%]">

                {/* heading part  */}
                <div className="w-100 medium text-[#434343] text-[1.2vw] max-mb:text-[2.9vw] max-md:text-[2vw] float-left bg-[#E0EEF4] rounded-[8px] px-[2.638%] py-[1.8%]">
                  <div className="w-[20.45%] float-left ">Name</div>
                  <div className="w-[19.58%] float-left">Company Name</div>
                  <div className="w-[19.1%] float-left">Phone Number</div>
                  <div className="w-[28.72%] float-left">Email ID</div>
                  <div className="w-[12.15%] float-left">Action</div>
                </div>

                {/* rows and columns */}
                {userData.map((ele) => {
                  return (
                    <div className="w-100 regular mt-[.76%] drop-shadow-admin text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.9vw] float-left bg-white rounded-[8px] px-[2.638%] py-[.85%]">
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
  </>
  )
}

export default AdminUserList