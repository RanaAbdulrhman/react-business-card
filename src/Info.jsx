import devImage from './assets/photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


function Info() {

  return (
    <div>
      <div>
        <img src={devImage} alt="" />
      </div>
      <div className='flex flex-col gap-y-1.5 justify-center items-center p-4 tracking-wide'>
        <p className='text-white font-semibold text-xl tracking-wider'>Laura Smith</p>
        <p className='text-orange-200 font-thin text-xs'>Frontend Developer</p>
        <p className='text-white font-thin text-xs'>laurasmith.website</p>
        <div className='flex justify-around gap-x-4 mt-3'>
          <div className='bg-gray-100 rounded-md px-5 py-1.5 text-xs'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2'/>
            Email
          </div>
          <div className='rounded-md px-5 py-1.5 text-xs bg-blue-400 text-white'>
            <FontAwesomeIcon icon={faLink} className='mr-2'/>
            Linkedin
          </div>
        </div>
      </div>
    </div>

  )
}

export default Info
