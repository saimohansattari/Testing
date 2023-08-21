import { StyledNavbar, Search, SearchBtn,  StyledBtn_Primary } from '../../components/components.styled';
import {Logo}  from '../../assets/pngs/index'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
       <StyledNavbar>
          <div >
            <img src={Logo} alt="GetItem_Logo" style={{width: "50px"}}/>
          </div>

          <div style={{display: "flex", flexWrap: "wrap"}}>
              <Search placeholder='Iphone 13Pro...' />
              <SearchBtn>Search</SearchBtn>
          </div>

          <div>
           <Link to='/SignIn'> <StyledBtn_Primary > SignIn</StyledBtn_Primary> </Link>&nbsp;/&nbsp;
            <Link to='/Signup'><StyledBtn_Primary >SignUp</StyledBtn_Primary></Link> 
          </div>
          
          
       </StyledNavbar>

    </>
    
  )
}

export default Navbar