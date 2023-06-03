import { useState } from "react";
import axios from "axios";

const CrimeForm = () => {
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   crime_location: "",
  //   crime_details: "",
  //   email: "",
  //   number: 0,
  // });
  const [fullname, setFullname] = useState("");
  const [crime_location, setCrime_location] = useState("");
  const [evidance, setEvidance] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [crime_details, setCrime_details] = useState("");
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

  const handleCrime_detailsChange = (e) => {
    setCrime_details(e.target.value);
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
    console.log();
    e.preventDefault();
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
    await axios
      .post("http://localhost:3000/api/crimes", {
        fullname: fullname,
        crime_location: crime_location,
        crime_details: crime_details,
        email: email,
        number: number,
      })
      .then(function (response) {
        data = response.data;
        console.log(data);
        setOutput(data);
        console.log(output);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setFormData({
    //   fullname: "",
    //   crime_location: "",
    //   crime_details: "",
    //   email: "",
    //   number: 0,
    // });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="fullname"
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
                htmlFor="crime_location"
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
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="crime_details"
              >
                Crime Details:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={crime_details}
                  onChange={handleCrime_detailsChange}
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
                htmlFor="email"
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
                htmlFor="number"
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
                onClick={handleSubmit}
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
