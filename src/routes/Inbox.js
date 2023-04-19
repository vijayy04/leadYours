import Side from "./SideMenu";
import Top from "./Header";
import InboxChat from './InboxChat';
import InboxMenu from './InboxMenu';

function Inbox() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`inbox`}></Side>

      <div className='max-mb:hidden'>
        <InboxMenu></InboxMenu>
      </div>

      <Top heading={`Inbox`}></Top>


      <div className={`flex max-mb:hidden pt-[1.85%] mr-[1.48%] pl-[.9%] overflow-auto `}>
        {/* this is the right side chat part where all user chat is here  */}
        <InboxChat />

      </div>

      <div className={`pt-[1.8%] hidden max-mb:flex mr-[.1%] h-[93vh] overflow-x-auto`}>
        <div className='w-100 float-left px-[2%]'>
          <div className='w-[100%] float-left'>
            <InboxMenu></InboxMenu>
          </div>
          <div className='w-[100%] float-left'>
            <InboxChat></InboxChat>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Inbox