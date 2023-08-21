import { useLocation } from 'react-router-dom'
import { GoogleBtn, SocialLogin } from './components.styled'
import { GoogleIcon } from '../assets/svg';


function OAuth() {
    const location = useLocation();

  return (
    <SocialLogin>
       <p>Sign {location.pathname === '/SignIn' ? 'In' : 'Up'} with</p>
        <GoogleBtn>
          <img src={GoogleIcon} alt="" style={{width: "40px", height:"40px"}}/> 
        </GoogleBtn>
    </SocialLogin>
  )
}

export default OAuth