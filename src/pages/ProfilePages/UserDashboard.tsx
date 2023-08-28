import { LogOutText, NameBox,  SellDiv,  StyledBtn_Secondary, StyledDashBoard, StyledDiv1, TextS17, TextS23, UserNameText } from "../../components/components.styled"



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
            <StyledBtn_Secondary>LogOut⏩ </StyledBtn_Secondary>
          </LogOutText>
          
        </NameBox>

        <SellDiv>
          Sell Your Own Product 🌟
        </SellDiv>
      </StyledDashBoard>

      
    </StyledDiv1>
    </div>
  )
}

export default UserDashboard