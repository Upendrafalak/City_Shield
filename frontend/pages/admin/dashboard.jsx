import React from "react";
import axios from "axios";

import CardLineChart from "components/Cards/CardLineChart";
import CardBarChart from "components/Cards/CardBarChart";
import CardPageVisits from "components/Cards/CardPageVisits";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";

import Admin from "layouts/Admin";

export default function dashboard() {
  return (
    <>
      <Admin title="Latest Trends" headerText="Stocks Analysis">
        <div className="flex flex-wrap mt-4 justify-center">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <CardBarChart />
              </div>
              <div className="w-full mb-12 xl:mb-0 px-4">
                <CardLineChart />
              </div>
              {/* <div className="w-full xl:w-12/12 mt-20 mb-12 xl:mb-0 px-4">
                <CardPieChart />
              </div> */}
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full mb-12 xl:mb-0 px-4">
                <CardPageVisits />
              </div>
              {/* <div className="w-full px-4">
                <CardSocialTraffic />
              </div> */}
            </div>
          </div>
        </div>
      </Admin>
    </>
  );
}
