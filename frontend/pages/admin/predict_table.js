import Admin from "layouts/Admin.js";
import axios from "axios";

import TableComponent from "components/Cards/TableComponent";

export default function Tables({ crimes }) {
  return (
    <>
      <div className="flex flex-wrap">
        {" "}
        {/* <div className="text-lg">
          <p className="font-bold">Analysis: </p>
          <p>{TableData[1]}</p>
        </div> */}
        <div className="w-full mb-12 px-4 mt-4">
          <TableComponent crimes={crimes} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const crimes = await axios.get("http://localhost:3000/api/crimes");

  // console.log(res);
  return {
    props: {
      crimes: crimes.data,
      //   piechart: piechart.data,
    },
  };
};

Tables.layout = Admin;
