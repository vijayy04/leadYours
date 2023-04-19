import lock from '../images/lock.png';
import Select from "react-select";
import Side from "./SideMenu";
import Top from "./Header";

function UserSetting() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`setting`}></Side>
      <Top heading={`User Settings`}></Top>
      <div className={`pt-[2.1%] mr-[1.46%] pl-[1.65%] regular overflow-auto`}>
        {/* this is the below part where all account is created  */}
        <div className="flex w-[100%] regular  px-[2.51%] pt-[2.8%] pb-[14%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100 drop-shadow-userSettting bg-white rounded-[8px] px-[1.815%] pt-[1.74%] pb-[1.8%]">
            <div className="w-100">
              <div className="w-100 float-left regular drop-shadow-userSettting leading-[100%] bg-white rounded-[8px] px-[1.815%] py-[1.74%] max-mb:px-[5%] max-mb:py-[3%]">
                <div className="w-[100%] float-left ">
                  <div className="w-100 float-left">

                    {/* left hand side input boxes */}
                    <div className="w-100 float-left">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Email</span> <br />
                      <input className="w-[49.3%] max-mb:w-100 mt-[1.017%] py-[.8215%] max-md:py-[1.23%] max-mb:py-[3.947%] max-md:px-[2.3%] max-mb:px-[4.1%]  px-[1.26%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] bg-[#F5F5F5] rounded-[5px] placeholder:text-black" type='text' placeholder="user@example.com" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 mr-[1.4%] float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">First Name</span>
                      <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="Chris" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Last Name</span>
                      <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="Evans" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 mr-[1.4%] float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Company Name</span>
                      <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="Chris Marketing" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Company Industry</span>
                      <Select
                        className="w-100 mt-[2.065%] text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]"
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            paddingTop: '.718%',
                            paddingBottom: '.718%',
                            marginRight: '1.8%',
                            paddingLeft: '1%',
                            width: '100%',
                            border: '1px solid #B3B3B3'
                          }),
                        }}
                        placeholder='Accounting'
                        theme={theme => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            neutral50: 'black',  // Placeholder color
                          },
                        })}
                      />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 mr-[1.4%] float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Country</span>
                      <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] bg-[#F5F5F5] rounded-[5px] placeholder:text-black" type='text' placeholder="England" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Phone</span>
                      <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="03123456789" />
                    </div>

                    <div className="w-[49.3%] max-mb:w-100 pt-[2.269%] max-mb:pt-[4%] flex">
                      <img className="w-[5.75%] max-md:w-[10%] mr-[3%]" src={lock} alt='user'></img>
                      <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] text-[#000000] pt-[1.8%] regular">Change Password</span>
                    </div>

                  </div>
                </div>

                <div className="w-[100%] pt-[1.49%] flex justify-end">
                  <button className="flex mr-[1%] max-mb:mr-[2%] px-[1.3%] max-md:px-[2%] max-mb:px-[3.3%] max-mb:py-[1.8%]  max-md:py-[1.3%] py-[.94%] bg-bgLighterGrey rounded-[6px] max-md:rounded-[4px] text-black text-[1vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] medium"><span className="">Cancel</span></button>
                  <button onClick={() => ''} className="flex px-[1.3%] max-md:px-[2%] max-mb:px-[3.3%] max-mb:py-[1.8%]  max-md:py-[1.3%] py-[.94%]  bg-[#2A83EC] rounded-[6px] max-md:rounded-[4px] text-white text-[1vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] medium"><span className="">Save</span></button>
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

export default UserSetting