import { FormLable,  StyledDiv1, StyledDropdownInput, StyledInput1, StyledSubmitBtn, StyledPro_Form, StyledInputDiv,  } from "../../components/components.styled"
import { useState } from 'react';
import { getAuth } from "firebase/auth";



function SellProductForm() {


  const [formData, setFormData] = useState({
    name: '',
    grocery: '',
    mobiles: '',
    menswear:'',
    girlswear:'',
    kidswear:'',
    electronics:'',
    others:'',
    weight: '',
    price: '',
    offer: '',
  })

  const {
    name,
    grocery,
    mobiles,
    menswear,
    girlswear,
    kidswear,
    electronics,
    others,
    weight,
    price,
    offer,
  } = formData

  const auth = getAuth()


  const onMutate = (e: any)=> {
    
    //files
    if (e.target.files) {
      
    }

      
  }





  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <StyledDiv1>
        
          <StyledPro_Form  onSubmit={onSubmit}>
            <StyledInputDiv>
              <FormLable>Product Name : </FormLable>
              <StyledInput1 placeholder="Enter Product Name" id="name" value={name} onChange={onMutate}/> 
            </StyledInputDiv>


            <StyledInputDiv>
                <FormLable>Product Type :</FormLable>
                <StyledDropdownInput>
                  <option value={grocery}>Grocery</option>
                  <option value={mobiles}>Mobiles</option>
                  <option value={menswear}>Menswear</option>
                  <option value={girlswear}>Girlswear</option>
                  <option value={kidswear}>Kidswear</option>
                  <option value={electronics}>Electronics</option>
                  <option value={others}>Beaut & Others</option>
                </StyledDropdownInput>
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Select Images :</FormLable>
              <input type="file" id="images" multiple onChange={onMutate} max='5' accept=".jpg,.png,.jpeg" />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Weight or somthing about Product !</FormLable>
              <StyledInput1 placeholder="Weight Or ..." id="weight" value={weight} onChange={onMutate} />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Price</FormLable>
              <StyledInput1 placeholder="200.." id="price" value={price} onChange={onMutate} />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Discount or Offer</FormLable>
              <StyledInput1 placeholder="Enter Disscount or Offer" id="offer" value={offer} onChange={onMutate} />
            </StyledInputDiv>

            <StyledSubmitBtn >SUBMIT</StyledSubmitBtn>
            

          </StyledPro_Form>

        

      </StyledDiv1>
    </div>
  )
}

export default SellProductForm