


export const getMovieData = async (searchTerm) => {
    if(searchTerm?.length >= 3) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&sort_by=vote_count&api_key=${process.env.API_KEY}`
      //console.log(url)
      const request = await fetch(url);
      let result = await request.json();
      //console.log(result.results);
      return {"data" : result.results }

    }
    else {
      return { "data" : [] }
    }
  }



export default getMovieData;