import Side from "./SideMenu";
import Top from "./Header";
import blueTick from '../images/blueTick.png';
import whiteTick from '../images/whiteTick.png';
import lock from '../images/lock.png';
import Select from "react-select";

function AdminSetting() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`admin`}></Side>
      <Top heading={`Admin Settings`}></Top>

      <div className={`pt-[1.8%] mr-[.1%] h-[93vh] overflow-x-auto`}>

        {/* upper part */}

        <div className="flex w-[97.35%] max-mb:w-[99%] ml-[1%] p-[2.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 float-left regular drop-shadow-userSettting leading-[100%] bg-white rounded-[8px] px-[1.815%] py-[1.74%] max-mb:px-[5%] max-mb:py-[3%]">
              <div className="w-[100%] float-left ">
                <div className="w-100 float-left">

                  {/* left hand side input boxes */}
                  <div className="w-100 float-left">
                    <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Email</span> <br />
                    <input className="w-[49.3%] max-mb:w-100 mt-[1.017%] py-[.8215%] max-md:py-[1.23%] max-mb:py-[3.947%] max-md:px-[2.3%] max-mb:px-[4.1%]  px-[1.26%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] bg-[#F5FCFF] rounded-[5px] placeholder:text-black" type='text' placeholder="user@example.com" />
                  </div>

                  <div className="w-[49.3%] max-mb:w-100 mr-[1.4%] float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                    <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">First Name</span>
                    <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] rounded-[5px] placeholder:text-black" type='text' placeholder="Chris" />
                  </div>

                  <div className="w-[49.3%] max-mb:w-100 float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                    <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Last Name</span>
                    <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] rounded-[5px] placeholder:text-black" type='text' placeholder="Evans" />
                  </div>

                  <div className="w-[49.3%] max-mb:w-100 mr-[1.4%] float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                    <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Company Name</span>
                    <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] rounded-[5px] placeholder:text-black" type='text' placeholder="Chris Marketing" />
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
                          border: '1px solid #CCE1FA'
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
                    <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] bg-[#F5FCFF] rounded-[5px] placeholder:text-black" type='text' placeholder="England" />
                  </div>

                  <div className="w-[49.3%] max-mb:w-100 float-left mt-[1.878%] max-md:mt-[2.5%] max-mb:mt-[3%]">
                    <span className="text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw]">Phone</span>
                    <input className="w-100 mt-[2.065%] py-[1.67%] max-md:py-[2.496%] max-mb:py-[3.947%] max-mb:px-[4%] px-[2.55%]  text-[1.195vw] max-md:text-[2vw] max-mb:text-[2.8vw] border border-[#CCE1FA] rounded-[5px] placeholder:text-black" type='text' placeholder="03123456789" />
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

        {/* below part */}
        <div className="flex regular w-[97.35%] mt-[2.085%] max-mb:w-[99%] ml-[1%] p-[2.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">



            <div className="w-100 float-left">
              <div className="w-[100%] max-md:w-[100%] float-left semiBold text-[1.59vw] max-md:text-[3vw] max-mb:text-[4.2vw]">Pricing</div>
            </div>

            <div className="w-100 float-left pt-[1.51%]">
              <div className="w-[49%] max-mb:w-[100%] float-left">
                <div className="w-100 float-left rounded-[8px] drop-shadow-linkedInProfile py-[6.16%] px-[6.93%] bg-white">

                  <div className="w-[100%] float-left">
                    <div className="w-100 float-left">
                      <div className="w-[50%] float-left">

                        {/* left side part */}
                        <div className="w-100 float-left">
                          <button className="text-[1.2vw] border border-[#CCE1FA] py-[1.931%] px-[6.91%] rounded-[5px] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold">Free</button>
                        </div>

                        <div className="w-100 float-left pt-[3.6%] semiBold text-[#2A83EC] text-[3.97vw] max-md:text-[5.6vw] max-mb:text-[6.8vw]">$0</div>
                        <div className="w-100 float-left pt-[3.6%] medium text-[1.06vw] max-md:text-[1.43vw] max-mb:text-[2.25vw]">Per member, per yearly</div>

                      </div>
                      <div className="w-[1%] borderLeftLightGrey mt-[2%] py-[13.1%] max-mb:py-[14%] max-md:py-[19%] px-[.5%] float-left">
                      </div>
                      <div className="w-[48%] pl-[4.4%] max-md:pl-[1%] max-mb:pl-[4%] float-left">

                        {/* right side */}
                        <div className="w-100 float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={blueTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                      </div>
                    </div>

                    <div className="w-100 mt-[5.18%] float-left">
                      <button className="w-100 text-[1.33vw] max-md:text-[2.1vw] max-mb:text-[2.66vw] medium rounded-[5px] py-[1.775%] text-white bg-[#2A83EC]">Start for free</button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="w-[49%] max-mb:w-100 max-mb:ml-0 max-mb:mt-[2.2%] ml-[2%] float-left">
                <div className="w-100 float-left rounded-[8px] drop-shadow-linkedInProfile py-[6.16%] px-[6.93%] bg-[#2A83EC]">

                  <div className="w-[100%] float-left">
                    <div className="w-100 float-left">
                      <div className="w-[50%] float-left">

                        {/* left side part */}
                        <div className="w-100 float-left">
                          <button className="text-[1.2vw] border border-[white] py-[1.931%] px-[6.91%] rounded-[5px] text-white max-md:text-[2vw] max-mb:text-[2.4vw] semiBold">Premium</button>
                        </div>

                        <div className="w-100 float-left pt-[3.6%] semiBold text-[white] text-[3.97vw] max-md:text-[5.6vw] max-mb:text-[6.8vw]">$99</div>
                        <div className="w-100 float-left pt-[3.6%] medium text-white text-[1.06vw] max-md:text-[1.43vw] max-mb:text-[2.25vw]">Per member, per yearly</div>

                      </div>
                      <div className="w-[1%] borderLeftLightGrey mt-[2%] py-[13.1%] max-mb:py-[14%] max-md:py-[19%] px-[.5%] float-left">
                      </div>
                      <div className="w-[48%] pl-[4.4%] max-md:pl-[1%] max-mb:pl-[4%] text-white  float-left">

                        {/* right side */}
                        <div className="w-100 float-left  flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                        <div className="w-100 mt-[12.29%] max-md:mt-[15%] max-mb:mt-[11%] float-left flex">
                          <img className="w-[8.2%] max-md:w-[11%] max-mb:w-[10%]" src={whiteTick} alt='load' />
                          <span className="leading-[100%] ml-[6.15%] medium text-[1.2vw] max-md:text-[1.37vw] max-mb:text-[2.4vw]">Lorem ipsum dolor</span>
                        </div>

                      </div>
                    </div>

                    <div className="w-100 mt-[5.18%] float-left">
                      <button className="w-100 text-[1.33vw] max-md:text-[2.1vw] max-mb:text-[2.66vw] medium rounded-[5px] py-[1.775%] text-[#2A83EC] bg-[white]">Start for free</button>
                    </div>
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

export default AdminSetting