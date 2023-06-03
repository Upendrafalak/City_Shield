import { useState } from "react";
import axios from "axios";

const CrimeForm = () => {
  const [fullname, setFullname] = useState("");
  const [crime_location, setCrime_location] = useState("");
  const [evidance, setEvidance] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [uploadImage, setuploadImage] = useState();


  //   const [packPrice, setPackPrice] = useState("");
  //   const [firstLineDesignation, setFirstLineDesignation] = useState(false);
  //   const [weightKilograms, setWeightKilograms] = useState("");

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleCrime_locationChange = (e) => {
    setCrime_location(e.target.value);
  };

  const handleEvidanceChange = (e) => {
    setEvidance(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleImageChange = (e) => {
    setImageSrc(e.target.value);
  };
  //   const handlePackPriceChange = (e) => {
  //     setPackPrice(e.target.value);
  //   };

  //   const handleFirstLineDesignationChange = (e) => {
  //     setFirstLineDesignation(e.target.checked);
  //   };

  //   const handleWeightKilogramsChange = (e) => {
  //     setWeightKilograms(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("crime_location", crime_location);
    formData.append("evidance", evidance);
    formData.append("email", email);
    formData.append("number", number);
    console.log(e.currentTarget);
    // formData.append("packPrice", packPrice);
    // formData.append("firstLineDesignation", firstLineDesignation);
    // formData.append("weightKilograms", weightKilograms);
    setImageSrc("");
    try {
      const response = await axios.post("/api/crimes", formData);
      console.log(response.data);
      // reset form fields
      setFullname("");
      setCrime_location("");
      setEvidance("");
      setEmail("");
      setNumber("");
      
      //   setPackPrice("");
      //   setFirstLineDesignation(false);
      //   setWeightKilograms("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="country"
              >
                Full Name:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={fullname}
                  onChange={handleFullnameChange}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="shipmentmode"
              >
                Crime Location:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={crime_location}
                  onChange={handleCrime_locationChange}
                />
              </label>
            </div>

            {/* <div className="mb-3 mr-2">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="deliveryToClientDate"
                >
                    Evidance:
                    <input
                    className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    type="date"
                    value={evidance}
                    onChange={handleEvidanceChange}
                    />
                </label>
                </div> */}

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="unitOfMeasure"
              >
                Email Adress:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="lineItemValue"
              >
                Phone Number:
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="lineItemValue"
                value={number}
                onChange={handleNumberChange}
              />
            </div>
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
              // class="hidden"
              onChange={handleImageChange}
              required
            />
            </label></div>
            {imageSrc && (
          <div className="flex justify-center mt-6">
            <img src={imageSrc} alt="img" />
          </div>
        )}
            {/* <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="packPrice"
              >
                Pack Price:
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="packPrice"
                value={packPrice}
                onChange={handlePackPriceChange}
              />
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="firstLineDesignation"
              >
                First Line Designation:
              </label>
              <select
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="firstLineDesignation"
                value={firstLineDesignation}
                onChange={handleFirstLineDesignationChange}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="weight"
              >
                Weight (Kilograms):
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="weight"
                value={weightKilograms}
                onChange={handleWeightKilogramsChange}
              />
            </div> */}

            <div className="flex justify-center my-6">
              {/* <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit"
            >
              Submit
            </button> */}
              <button
                type="submit"
                className="w-96 h-12 flex justify-center items-center text-md text-white bg-blueGray-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CrimeForm;
{
  /* <div className="w-full mb-12 xl:mb-0 px-4">
<TransportForm/>
</div> */
}
