import Admin from "layouts/Admin.js";
import axios from "axios";

import TableComponent from "components/Cards/TableComponent";

export default function Tables({ complains }) {
  return (
    <>
      <div className="flex flex-wrap">
        {" "}
        {/* <div className="text-lg">
          <p className="font-bold">Analysis: </p>
          <p>{TableData[1]}</p>
        </div> */}
        <div className="w-full mb-12 px-4 mt-4">
          <TableComponent complain={complains} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const complains = await axios.get("http://localhost:3000/api/userComplaints");

  // console.log(res);
  return {
    props: {
      complains: complains.data,
      //   piechart: piechart.data,
    },
  };
};

Tables.layout = Admin;
