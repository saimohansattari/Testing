import { FormLable,  StyledDiv1, StyledDropdownInput, StyledInput1, StyledSubmitBtn, StyledPro_Form, StyledInputDiv,  } from "../../components/components.styled"
import { useState } from 'react';
import {  collection, getFirestore } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { db } from "../../firebase.config";
// import { useNavigate } from "react-router-dom";
// import {v4 as uuidv4 } from 'uuid'
import { grocery, mobiles, menswear, girlswear, kidswear, electronics } from '../constant';



function SellProductForm() {
  // const [name, setName] = useState('');
  // const [weight, setWeight] = useState('');
  // const [price, setPrice] = useState('');
  // const [ offer, setOffer] = useState('');
  // const [image, setImage] = useState<any>([]);



  // const handleFileChange = (event: { target: { files: any; }; }) => {
  //   const files = event.target.files;
  //   setImage([...image, ...files]);
  // };

  // const onSubmit = (e: { preventDefault: () => void; }) => {
  //     e.preventDefault();

  //     db.collection("listings").add({

  //     })
  // }

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