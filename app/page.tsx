import Header from "../components/Header"
import Nav from "../components/Nav"
import Results from "../components/Results"
import requests from "../utils/requests"

export default async function Home(props) {
  const {genre} = props.searchParams;
  let results = null;
 

  return (
  
    <div>      
      <Header/>
      <Nav/>
      <Results results={await getMovieData(genre)}/>
    </div>
     )
}

const getMovieData = async (genre) => {
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);
  let result = await request.json();
  return result.results;
}
