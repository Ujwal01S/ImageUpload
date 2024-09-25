'use client'

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(file);
    
    const data = new FormData();
    data.set('file', file); //This data.set name should be same as in backend
    let res = await fetch('api/upload', {
      method:'POST',
      body:data,
    });
    res = await res.json();
    console.log(res);
    if(res.success){
      alert('File uploaded');
    }
  };
  
  return (
    <div >
      Page
      <form onSubmit={onSubmit}>
        <input 
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}
