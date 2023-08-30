import { FormLable,  StyledDiv1, StyledDropdownInput, StyledInput1, StyledSubmitBtn, StyledPro_Form, StyledGap, StyledInputDiv,  } from "../../components/components.styled"
import { useState } from 'react';



function SellProductForm() {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };





  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <StyledDiv1>
        
          <StyledPro_Form >
            <StyledInputDiv>
              <FormLable>Product Name : </FormLable>
              <StyledInput1 placeholder="Enter Product Name" /> 
            </StyledInputDiv>


            <StyledInputDiv>
                <FormLable>Product Type :</FormLable>
                <StyledDropdownInput>
                  <option value="grocery">Grocery</option>
                  <option value="mobiles">Mobiles</option>
                  <option value="menswear">Menswear</option>
                  <option value="girlswear">Girlswear</option>
                  <option value="kidswear">Kidswear</option>
                  <option value="electronics">Electronics</option>
                  <option value="others">Beaut & Others</option>
                </StyledDropdownInput>
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Select Images :</FormLable>
              <input type="file" multiple onChange={handleFileChange} />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Weight or somthing about Product !</FormLable>
              <StyledInput1 placeholder="Weight Or ..." />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Price</FormLable>
              <StyledInput1 placeholder="200.." />
            </StyledInputDiv>

            <StyledInputDiv>
              <FormLable>Enter Discount or Offer</FormLable>
              <StyledInput1 placeholder="Enter Disscount or Offer" />
            </StyledInputDiv>

            <StyledSubmitBtn >SUBMIT</StyledSubmitBtn>
            

          </StyledPro_Form>

        

      </StyledDiv1>
    </div>
  )
}

export default SellProductForm