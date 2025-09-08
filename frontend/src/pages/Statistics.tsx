import { useEffect, useState } from "react"
// import {Log} from  "../../../logging_middleware/logging";

export interface URLS {
    _id: string;
    validity: number;
    noOfClicks: number;
    createdAt: string;
    expiry: string,
    url: string;
    shortcode: string;
    shortendUrl: string;
}

export const Statistics = () => {

    const [urls,setUrls] = useState<URLS[]>([]);

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await fetch('http://localhost:5000/shorturls')
                const data = await response.json();
                setUrls(data);
                console.log(data);
            }
            catch(err){
                // Log("frontend","error","page","Cannot Fetch Statistics")
                console.error("Cannot Fetch Statistics")
            }
        }
        fetchData();
    },[])

  return (
    <div>
        <h1>Statistics</h1>
        {urls.map((url)=>
            <div key={url._id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                <p>Original URL: <a href={url.url} target="_blank" rel="noopener noreferrer">{url.url}</a></p>
                <p>Short URL: <a href={url.shortendUrl} target="_blank" rel="noopener noreferrer">{url.shortendUrl}</a></p>
                <p>Clicks: {url.noOfClicks}</p>
                <p>Created At: {new Date(url.createdAt).toLocaleString()}</p>
                <p>Expires At: {new Date(url.expiry).toLocaleString()}</p>
            </div>
        )}

    </div>
  )
}
