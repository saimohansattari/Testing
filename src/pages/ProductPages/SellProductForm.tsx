import { FormLable,  StyledDiv1, StyledDropdownInput, StyledInput1, StyledPro_Form,  } from "../../components/components.styled"
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
            <FormLable>Product Name : </FormLable>
            <StyledInput1 placeholder="Enter Product Name" /> 

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

            <FormLable>Select Images :</FormLable>
            <input type="file" multiple onChange={handleFileChange} />
            

          </StyledPro_Form>

        

      </StyledDiv1>
    </div>
  )
}

export default SellProductForm