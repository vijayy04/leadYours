import './Switch.css';
import '../index.css'

function Switch({ written }) {
  return (<>
    <div className=''>
      <input type='checkbox'  id='check' className='toggle' defaultChecked />
      <label htmlFor='check' className='text-[1.2vw] max-md:text-[1.4vw] max-mb:text-[2.4vw] font-[400] '>{written}</label>
    </div>
  </>)
}

export default Switch
