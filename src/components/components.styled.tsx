import styled from 'styled-components'
import MenuNav from '../pages/NavbarPages/MenuNav';


// Main Navbar
export const StyledNavbar = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px 20px 50px;
    background-color: #2468a2;
`
export const Search = styled.input `
    width : 30vw;
    height: 40px;
    padding: 5px 10px 5px 10px;
    border: none;
    border-radius: 10px;
    
`
export const SearchBtn = styled.button `
 font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 14px;
    width: 100px;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-left: 2px;

    &:hover {
        border: 2px solid #173957;
        background-color: #f6f8f9;
    }
`;

// export const Anchar  = styled.a `
//     text-decoration: none;
//     color: black;
//     font-family: "Inter-SemiBold", "Inter", sans-serif;
//     font-size: 16px;
//     cursor: pointer;
// `


//Menunav 

export const StyledMenuNav = styled.nav `
width: 100vw;
    /* position: fixed; */
    display: flex;
    height: 30px;
    flex-wrap: wrap;
    padding: 10px 150px 10px 150px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid gray;
`;

export const StyledBtn_Primary = styled.button `
    /* width: 100px; */
    cursor: pointer;
    color: black;
    background-color: transparent;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 14px;
    padding: 5px;
    border: none;

    &:hover {
        border-bottom: 2px solid #2468a2;
      
    }
`;

//SignIn 
export const StyledSignInForm = styled.div `
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    padding-top: 50px;
    background-color: transparent;
    z-index: 1;
    
`;

export const StyledForm = styled.form`
    width: 50vw;
    height: 50vh;
    gap: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 15px;
    flex-direction: column;
    padding: 45px 10px 45px 10px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 18px;

`;

export const LoginInput = styled.input `
    width: 45vw;
    height: 45px;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    border: 1px solid black;
`;

export const PassWordInput = styled.input `
    width: 45vw;
    height: 45px;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    border: 1px solid black;
`;

export const SubmitBtn = styled.button `
    width: 20vw;
    height: 45px;
    background-color: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid gray;

    &:hover {
        background-color: #2468a2;
        border: 1px solid black;
    }
`;

export const SocialLogin = styled.div `
    width: fit-content;
    padding: 5px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const GoogleBtn = styled.div `
    width: 60px;
    height: 60px;
    background-color: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;






