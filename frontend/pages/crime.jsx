import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import CrimeForm from "components/CrimeForm";
export default function crime() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = () => {
      //   if (status === "unauthenticated") {
      //     signIn();
      //   }
      setLoading(false);
    };
    securePage();
  });

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin
      title="Place an Order"
      headerText="Enter details "
      //   image={session.user.image}
    >
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <CrimeForm />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  return {
    props: {
      session,
      userId,
    },
  };
}
