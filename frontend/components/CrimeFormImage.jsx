import { useState } from "react";
import axios from "axios";
import CrimeForm from "./CrimeForm";

const CrimeFormImage = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadImage, setUploadImage] = useState();

//   const handleImageChange = (e) => {
//     setImageSrc(e.target.value);
//   };

//   function handleImageChange(changeEvent) {
//     const reader = new FileReader();

//     reader.onload = function(onLoadEvent) {
//       setImageSrc(onLoadEvent.target.result);
//       setUploadImage(undefined);
//     }

//     reader.readAsDataURL(changeEvent.target.files[0]);
//   }
 
// const handleImageChange = (event) => {
//     // const file = event.target.files[0]; // Get the first selected file

//     // if (file) {
//     //   // Perform any additional checks or validations on the file if needed
//     //   setImageSrc(URL.createObjectURL(file)); // Save the selected image URL
//     // }

//     const reader = new FileReader();

//     reader.onload = function(onLoadEvent) {
//       setImageSrc(onLoadEvent.target.result);
//       setUploadImage(undefined);
//     }

//     reader.readAsDataURL(event.target.files[0]);
//   };
const handleImageChange = (e) => {
    setImageSrc(e.target.value);
  };

  const handleSubmit= async (event) => {
    // console.log();
    event.preventDefault();
    // setImageSrc("");
    // console.log(event.currentTarget);
    // console.log(event.currentTarget);
    // if (!form) {
    //     console.error('Form element not found');
    //     return;
    //   }
    console.log(event.currentTarget);
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file')
    // console.log(fileInput)
    
    const formData = new FormData();

    for ( const file of fileInput.files ) {
      formData.append('file', file);
    }

    for (let i = 0; i < fileInput.files.length; i++) {
        const files = fileInput.files[i];
        formData.append('files', files);
    //   }
    formData.append('upload_preset', 'crime_images');
    const data = await fetch('https://api.cloudinary.com/v1_1/drr7rbizq/image/upload',{
        method: 'POST',
        body: formData
      }).then(r => r.json());

      setImageSrc(data.secure_url);
      setUploadImage(data);

  //     const response = await 
  //     ('http:// http://127.0.0.1:5000/secure-url', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ secureUrl: data.secure_url }),
  // });

  const axios = require('axios');

const data1 = {
  url: data.secure_url,
  string1:"sdfdsf",
  string2:"sdfsd",
  string3:"sdfd"
};

axios.post('http://127.0.0.1:5000/secure-url', data1)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}
      // console.log(data.secure_url);
      // const url=data.secure_url;
    // const form = document.getElementById("file");
    // let fileInput;

    // for (let i = 0; i < form.elements.length(); i++) {
    // const element = form.elements[i];
    // if (element.name === "file") {
    //     fileInput = element;
    //     break;
    // }
    // }
    // console.log(fileInput);

    // const formData = new FormData();
    // formData.append("fullname", fullname);
    // formData.append("crime_location", crime_location);
    // formData.append("evidance", evidance);
    // formData.append("email", email);
    // formData.append("number", number);
    // formData.append("crime_details", crime_details);
    // formData.append("packPrice", packPrice);
    // formData.append("firstLineDesignation", firstLineDesignation);
    // formData.append("weightKilograms", weightKilograms);
    // await axios
    //   .post("http://localhost:3000/api/crimes", {
    //     fullname: fullname,
    //     crime_location: crime_location,
    //     crime_details: crime_details,
    //     email: email,
    //     number: number,
    //   })
    //   .then(function (response) {
    //     data = response.data;
    //     console.log(data);
    //     setOutput(data);
    //     console.log(output);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // setFormData({
    //   fullname: "",
    //   crime_location: "",
    //   crime_details: "",
    //   email: "",
    //   number: 0,
    // });
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form onSubmit={handleSubmit}> 
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="lineItemValue"
              >
                <span class=" text-base leading-normal">Select a file</span>
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>

                <input
                  id="file"
                  name="file"
                  type="file"
                //   class="hidden"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
            {/* {imageSrc && (
              <div className="flex justify-center mt-6">
                <img src={imageSrc} alt="img" />
              </div>
            )} */}

            <div className="flex justify-center my-6">
              {/* <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit"
            >
              Submit
            </button> */}
            {/* <Link href="/CrimeFormImage"> */}
              <button
                type="submit"
            
                className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
                onClick={handleImageChange}
              >
                Submit
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default CrimeFormImage;

{
  /* <div className="w-full mb-12 xl:mb-0 px-4">
<TransportForm/>
</div> */
}