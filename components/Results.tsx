import Thumbnail from "./Thumbnail";

const Results = (results) => {
    const r = Array.from(results.results);
   //console.log(r)
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center" >
            {r?.map(x => (
                <Thumbnail key={x.id} result={x}/>
            ))}           
           
        </div>
    )
}

export default Results;