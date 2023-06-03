import Admin from "layouts/Admin.js";
import axios from "axios";

import OnlineTableComponent from "components/Cards/OnlineTableComponent";

export default function Tables({ onlinecrimes }) {
  return (
    <>
      <div className="flex flex-wrap">
        {/* {" "} */}
        {/* <div className="text-lg">
          <p className="font-bold">Analysis: </p>
          <p>{TableData[1]}</p>
        </div> */}
        <div className="w-full mb-12 px-4 mt-4">
          <OnlineTableComponent onlinecrimes={onlinecrimes} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const onlinecrimes = await axios.get(
    "http://localhost:3000/api/onlinecrimes"
  );

  // console.log(res);
  return {
    props: {
      onlinecrimes: onlinecrimes.data,
      //   piechart: piechart.data,
    },
  };
};

Tables.layout = Admin;
