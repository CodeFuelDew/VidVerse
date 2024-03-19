import Header from "../components/Header"
import React from "react";
import { useEffect, useState } from "react";
import ProfileSection from "@/components/ProfileSection";

export const Account = () => {
  const [domLoaded, setDomLoaded] = useState(false);


 
  useEffect(()=> {
    setDomLoaded(true);
  },[])

  return (

    <>
      { domLoaded && (
        <>
          <Header/>
          <ProfileSection/>
        </>
      )}
       </> 
      
  )
}

// export const getServerSideProps =  async (props) => {
//   const data = await getMovieData(props.query.q);
//   return {
//     props : {"results": data.data}
//   }
// }

export default Account;