import React from "react"
import { useState, useEffect, SyntheticEvent } from "react"
// import StandardLayout from "@/components/layout"

import Header from "../components/Header"
import Results from "../components/Results"
import {getMovieData} from "../utils/searchapi"
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {useRouter} from "next/router"

export const Search = ({results}) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const router = useRouter();
  let timer:any = null;
  

  const onSearch = (event:SyntheticEvent) => {
    clearTimeout(timer);

    const q = event.target?.value;
    setSearchQuery(q)

    timer = setTimeout(()=> {runSearch(q)}, 1000)
  }

  const runSearch = async (q) => {
    if(q.length >= 3 || q.length == 0){
      router.push(`./search?q=${q}`)      
    }
  }

  
  useEffect(()=> {

    setSearchResults(results);
    
  }, [results])

  useEffect(()=> {
    setDomLoaded(true);
  },[])

  return (
    <>
       {domLoaded && (
        <div>
              <Header/>     
              <div className="flex justify-center max-w-screen-2xl">          
                <input type="text" id="txtSearchTerm" 
                placeholder="Enter Search Query" 
                value={searchQuery}
                onChange={onSearch}
                autoFocus
                className="text-black border pl-2"/>
                <MagnifyingGlassIcon className="h-6 w-6"/>      
              </div>        
              <Results results={searchResults}/>              
        </div>
       )}
      </>
     )
}

export const getServerSideProps =  async (props) => {
  const data = await getMovieData(props.query.q);
  return {
    props : {"results": data.data}
  }
}

export default Search;