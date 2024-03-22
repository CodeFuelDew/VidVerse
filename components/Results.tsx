import Thumbnail, {ResultItem} from "./Thumbnail";

const Results = (results:any) => {
    const r:Array<ResultItem> = Array.from(results.results);
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center" >
            {r?.map((x:ResultItem )=> (
                 <Thumbnail key={x.id} result={x}/>                
                
            ))}           
           
        </div>
    )
}

export default Results;