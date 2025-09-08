import { useState } from 'react'
// import {Log} from  "../../../logging_middleware/logging";


export const UrlShortener = () => {
  
  const [formData, setFormData] = useState({
    url: '',
    validity: '',
    shortcode: ''
  })
  
  const [shortURl, setShortURL] = useState('') 
  
  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = async(e) => {
    try{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/shorturls',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json();
    setShortURL(data.newURL);
    console.log(data);
    }
    catch(err){
      // Log("frontend","error","page","Cannot Shorten URL")
      console.error("Cannot Shorten URL")
    }
  }

  return (
  <div className="url-shortener-container">
      <h1>URL Shortener Page</h1>

      <form onSubmit={handleOnSubmit}>
        <input type="text" name='url' placeholder="Enter URL here" value={formData.url} onChange={handleOnChange} />
        <input type="number" name="validity" placeholder='Validity in minutes' value={formData.validity} onChange={handleOnChange} />
        <input type="text" name='shortcode' placeholder='Shortcode' value={formData.shortcode} onChange={handleOnChange}/>
        <button type='submit'>Submit</button>
      </form>
      {shortURl && <p>Your shortened URL is: <a href={shortURl} target="_blank" rel="noopener noreferrer">{shortURl}</a></p>}
    </div>
  )

}