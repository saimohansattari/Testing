import { LogOutText, NameBox, StyledDashBoard, StyledDiv1, TextS17, TextS23, UserNameText } from "../../components/components.styled"



function UserDashboard() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <StyledDiv1>
      <StyledDashBoard>
        <NameBox>
          <UserNameText>
            <TextS23>SAI_MOHAN_SATTARI</TextS23>
            <TextS17>chinnasattari@gmail.com</TextS17>
          </UserNameText>
          <LogOutText>
            <TextS23>Logout</TextS23>
          </LogOutText>
          
        </NameBox>
      </StyledDashBoard>

      
    </StyledDiv1>
    </div>
  )
}

export default UserDashboard