import styled from 'styled-components'


// Main Navbar
export const StyledNavbar = styled.nav `
    z-index: 1;
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px 20px 0px;
    background-color: #2468a2;
`
export const Search = styled.input `
    width : 25vw;
    height: 40px;
    padding: 5px 10px 5px 10px;
    border: none;
    border-radius: 10px;
    
`
export const SearchBtn = styled.button `
 font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 14px;
    width: 80px;
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

export const UserIcon = styled.img`
    width: 30px;
    height: 30px;
`;


//Menunav 

export const StyledMenuNav = styled.nav `
    z-index: 1;
    margin-top: 100px;
    width: 100vw;
    position: fixed;
    display: flex;
    height: 30px;
    flex-wrap: wrap;
    padding: 10px 0px 10px 0px;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid gray;
`;

export const StyledBtn_Primary = styled.button `
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
    padding-top: 150px;
    background-color: transparent;
    z-index: 1;
    
`;

export const StyledForm = styled.form`
    width: 50vw;
    height: 60vh;
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


//Home page Components
export const MainDiv = styled.div`
    background-color: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top : 135px ;
`;

export const SubDiv = styled.div `
margin-top: 28px;
display: flex;
width: 95vw;
border-radius: 10px;
background-image: linear-gradient(to right top, #1c1040, #202053, #233065, #254078, #25518a, #355d9c, #4568ae, #5674c0, #7d7bd2, #a680e0, #d084e8, #f986eb);
gap: 2px;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
    
`;

export const ImgCard = styled.div `
   height: fit-content;
   background-color: none;
`;
export const TextCard = styled.div `
    background-color: none;
    padding: 25px 40px 25px 40px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    
`;

export const TextS45 = styled.h1 `
     font-family: "Lucida Handwriting", cursive;
    font-size: 45px;
`

export const TextS24 = styled.p`
    font-family: "Lucida Handwriting", cursive;
    width: 450px;
    font-size: 24px;
    text-align: center;
`

export const TextS18 = styled.p `
    font-size: 18px;
`;


//Home page Products styled Components

export const ProductScrollDiv = styled.div`
    width: 85vw;
    height: 350px;
    display: flex;
    align-items: center;
`;

export const Scroll_1 = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    gap: 20px;
    white-space: nowrap;
    padding: 20px 0px 20px 0px;

    &::-webkit-scrollbar {
    display: none;
        }
    
`;






















//MenubarPages Style Components

export const Div = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledDiv1 = styled.div `
    padding-top: 170px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    width: 87vw;
    background-color: none;
    
`;

export const ProductCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 36vh;
    width: 200px;
    gap: 1px;
    background-color: white;
    border: 1px solid #27252587;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        box-shadow: 5px 10px 20px #0f0f0f89;
    }
`;

export const ProductImg = styled.img`
    background-color: white;
    width: 180px;
    height: 16vh;
`;

export const ProductText = styled.div `
    width: 180px;
    height: 18vh;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    border-top:1px solid gray;
    padding: 5px 8px 5px 8px;
`;
export const ProductName = styled.p`
    font-size: 15px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
`;

export const ProductWeight = styled.p`
    font-size: 14px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-weight: 15px;
    color: gray;
`;

export const ProductPrice = styled.p`
    font-size: 17px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-weight: bold;
    color: #000000dc;
`
export const ProCost = styled.p`
    font-size: 17px;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-weight: bold;
`

export const OfferText = styled.p`
    font-size: 14px;
    color: green;
`;





