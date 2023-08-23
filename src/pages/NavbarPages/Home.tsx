import { WomenShopping } from '../../assets/pngs'
import { ImgCard, MainDiv, SubDiv, TextCard, TextS18, TextS24,  TextS45 } from '../../components/components.styled';



function Home() {
  return (
    <div>

      <MainDiv >
        <SubDiv>

          <ImgCard>
          <img src={WomenShopping} alt="" style={{height:"75vh"}}/>
          </ImgCard>
            
          <TextCard>
            <TextS45>Happy Shopping</TextS45>
             <hr />
            <TextS24>I love shopping. There is a little bit of magic found in buying something new. It is instant gratification, a quick fix.</TextS24>
            <TextS18>A place where you get everything do as you want</TextS18>
          </TextCard>
          
        </SubDiv>
          
      </MainDiv>
      
      

    </div>
  )
}

export default Home