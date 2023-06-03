import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function OnlineTableComponent({ onlinecrimes }) {
  const handleClick = async (tweet) => {
    const requestBody = {
      tweet: tweet,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/analyzetweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, // Change to the desired HTTP method (POST, GET, etc.)
        // Add any necessary headers or request body data here
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const result = await response.json(); // Parse the response body as JSON
        // Access the returned array from the Flask server
        console.log("Analysis result:", result);
        alert(JSON.stringify(result));
        // Perform any necessary operations with the result array
      } else {
        console.error("Analysis request failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Active Complains
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Reported User Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Subject
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Status
                </th>

                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              {onlinecrimes.map((item) => (
                <tr key={item}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.fullname}
                  </th>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.tweet}
                  </th>
                  <Link href={"https://twitter.com/@" + item.username}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {item.username}
                    </th>
                  </Link>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.number}
                  </th>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.email}
                  </th>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.progress}
                  </th>
                  <th>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Flag User
                    </button>
                  </th>
                  <th>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Reject Complain
                    </button>
                  </th>
                  <th>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleClick(item.tweet)}
                    >
                      Analyze
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              {news.map((item) => (
                <tr>
                  <Link href={item.link}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {item.news}
                    </th>
                  </Link>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{item.val.toFixed(2)}%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div
                            style={{ width: `${item.val}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </>
  );

  // console.log(TableData);
  // const tableRow = JSON.parse(TableData[0]).map((item, index) => {
  //   return (
  //     <tr key={index}>
  //       <td
  //         className={
  //           "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //           (color === "light"
  //             ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //             : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //         }
  //       >
  //         <span
  //           className={
  //             "font-bold " +
  //             +(color === "light" ? "text-blueGray-600" : "text-white")
  //           }
  //         >
  //           {item.date}
  //         </span>
  //       </td>
  //       <td
  //         className={
  //           "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //           (color === "light"
  //             ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //             : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //         }
  //       >
  //         <span
  //           className={
  //             "font-bold " +
  //             +(color === "light" ? "text-blueGray-600" : "text-white")
  //           }
  //         >
  //           {parseFloat(Number(item.temperature) - 273).toFixed(2) + "  ºC"}
  //           <span style={{ marginRight: "2px" }}>
  //             {item.main == "Clouds" ? "🌤" : "☀"}
  //           </span>
  //         </span>
  //       </td>
  //       <td
  //         className={
  //           "px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //           (color === "light"
  //             ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //             : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //         }
  //       >
  //         <span
  //           className={
  //             "font-bold " +
  //             +(color === "light" ? "text-blueGray-600" : "text-white")
  //           }
  //         >
  //           {item.humidity + " g.m-3"}
  //         </span>
  //       </td>
  //       <td
  //         className={
  //           "px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //           (color === "light"
  //             ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //             : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //         }
  //       >
  //         <span
  //           className={
  //             "font-bold " +
  //             +(color === "light" ? "text-blueGray-600" : "text-white")
  //           }
  //         >
  //           {item.wind + " m/s"}
  //         </span>
  //       </td>
  //     </tr>
  //   );
  // });
  // return (
  //   <>
  //     <div
  //       className={
  //         "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
  //         (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
  //       }
  //     >
  //       <div className="rounded-t mb-0 px-4 py-3 border-0">
  //         <div className="flex flex-wrap items-center">
  //           <div className="relative w-full px-4 max-w-full flex-grow flex-1">
  //             <h3
  //               className={
  //                 "font-semibold text-lg " +
  //                 (color === "light" ? "text-blueGray-700" : "text-white")
  //               }
  //             >
  //               Weather prediction ☁
  //             </h3>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="block w-full overflow-x-auto">
  //         {/* Projects table */}
  //         <table className="items-center w-full bg-transparent border-collapse">
  //           <thead>
  //             <tr>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Date
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Temperature
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Humidity
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Wind
  //               </th>
  //               {/*
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Status
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Users
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               >
  //                 Completion
  //               </th>
  //               <th
  //                 className={
  //                   "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
  //                   (color === "light"
  //                     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
  //                     : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
  //                 }
  //               ></th> */}
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {tableRow}
  //             {/* <tr>
  //               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
  //                 <img
  //                   src="/img/angular.jpg"
  //                   className="h-12 w-12 bg-white rounded-full border"
  //                   alt="..."
  //                 ></img>{" "}
  //                 <span
  //                   className={
  //                     "ml-3 font-bold " +
  //                     +(color === "light" ? "text-blueGray-600" : "text-white")
  //                   }
  //                 >
  //                   Angular Now UI Kit PRO
  //                 </span>
  //               </th>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 $1,800 USD
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
  //                 completed
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex">
  //                   <img
  //                     src="/img/team-1-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
  //                   ></img>
  //                   <img
  //                     src="/img/team-2-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-3-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-4-470x470.png"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex items-center">
  //                   <span className="mr-2">100%</span>
  //                   <div className="relative w-full">
  //                     <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
  //                       <div
  //                         style={{ width: "100%" }}
  //                         className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
  //                 <TableDropdown />
  //               </td>
  //             </tr>
  //             <tr>
  //               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
  //                 <img
  //                   src="/img/sketch.jpg"
  //                   className="h-12 w-12 bg-white rounded-full border"
  //                   alt="..."
  //                 ></img>{" "}
  //                 <span
  //                   className={
  //                     "ml-3 font-bold " +
  //                     +(color === "light" ? "text-blueGray-600" : "text-white")
  //                   }
  //                 >
  //                   Black Dashboard Sketch
  //                 </span>
  //               </th>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 $3,150 USD
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <i className="fas fa-circle text-red-500 mr-2"></i> delayed
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex">
  //                   <img
  //                     src="/img/team-1-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
  //                   ></img>
  //                   <img
  //                     src="/img/team-2-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-3-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-4-470x470.png"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex items-center">
  //                   <span className="mr-2">73%</span>
  //                   <div className="relative w-full">
  //                     <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
  //                       <div
  //                         style={{ width: "73%" }}
  //                         className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
  //                 <TableDropdown />
  //               </td>
  //             </tr>
  //             <tr>
  //               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
  //                 <img
  //                   src="/img/react.jpg"
  //                   className="h-12 w-12 bg-white rounded-full border"
  //                   alt="..."
  //                 ></img>{" "}
  //                 <span
  //                   className={
  //                     "ml-3 font-bold " +
  //                     +(color === "light" ? "text-blueGray-600" : "text-white")
  //                   }
  //                 >
  //                   React Material Dashboard
  //                 </span>
  //               </th>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 $4,400 USD
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <i className="fas fa-circle text-teal-500 mr-2"></i> on
  //                 schedule
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex">
  //                   <img
  //                     src="/img/team-1-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
  //                   ></img>
  //                   <img
  //                     src="/img/team-2-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-3-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-4-470x470.png"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex items-center">
  //                   <span className="mr-2">90%</span>
  //                   <div className="relative w-full">
  //                     <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
  //                       <div
  //                         style={{ width: "90%" }}
  //                         className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
  //                 <TableDropdown />
  //               </td>
  //             </tr>
  //             <tr>
  //               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
  //                 <img
  //                   src="/img/vue.jpg"
  //                   className="h-12 w-12 bg-white rounded-full border"
  //                   alt="..."
  //                 ></img>{" "}
  //                 <span
  //                   className={
  //                     "ml-3 font-bold " +
  //                     +(color === "light" ? "text-blueGray-600" : "text-white")
  //                   }
  //                 >
  //                   React Material Dashboard
  //                 </span>
  //               </th>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 $2,200 USD
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
  //                 completed
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex">
  //                   <img
  //                     src="/img/team-1-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
  //                   ></img>
  //                   <img
  //                     src="/img/team-2-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-3-800x800.jpg"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                   <img
  //                     src="/img/team-4-470x470.png"
  //                     alt="..."
  //                     className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
  //                   ></img>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
  //                 <div className="flex items-center">
  //                   <span className="mr-2">100%</span>
  //                   <div className="relative w-full">
  //                     <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
  //                       <div
  //                         style={{ width: "100%" }}
  //                         className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
  //                       ></div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </td>
  //               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
  //                 <TableDropdown />
  //               </td>
  //             </tr> */}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </> // );
}
