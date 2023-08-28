import { ContentDiv, LogOutText, NameBox,  SellDiv,  StyledBtn1,  StyledBtn_Secondary, StyledDashBoard, StyledDiv1, TextS17, TextS23, UserNameText } from "../../components/components.styled"
import { Link } from "react-router-dom"

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
            <StyledBtn_Secondary>SignOut⏩ </StyledBtn_Secondary>
          </LogOutText>
          
        </NameBox>

        <Link to='/SellProductForm' style={{textDecoration:'none'}} >
           <SellDiv>Sell Your Own Product 🌟</SellDiv> 
        </Link>
        
        <ContentDiv>
         <Link to='/Cart'> <StyledBtn1>🛒 Cart</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>🛍️ Orders</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>♡ Wishlist</StyledBtn1> </Link>
         <Link to='/Cart'> <StyledBtn1>❓ Help</StyledBtn1> </Link>

        </ContentDiv>

      </StyledDashBoard>

      
    </StyledDiv1>
    </div>
  )
}

export default UserDashboard