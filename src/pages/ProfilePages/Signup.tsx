import { StyledSignInForm, LoginInput, StyledForm, PassWordInput, SubmitBtn } from '../../components/components.styled';
import OAuth from '../../components/OAuth';


function Signup() {
  return (
    <div>
      <StyledSignInForm>
            <StyledForm>
              <LoginInput placeholder='Email...' />
              <PassWordInput type='password' placeholder='Password...' />
              <PassWordInput type='password' placeholder='Confirm Pass...' />
              <SubmitBtn>Submit</SubmitBtn>
              <hr />
              <OAuth />

              

            </StyledForm>
            
            
        </StyledSignInForm>
    </div>
  )
}

export default Signup