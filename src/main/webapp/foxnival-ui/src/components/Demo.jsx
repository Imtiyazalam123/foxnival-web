import React, { useEffect, useState } from 'react'

export default function Demo() {
    const[data, setData] = useState();
    useEffect(() => {
       fetch(window.location.origin+'/demo')
        .then((res) => {
            return res.json();
        }).then((jsonResponse) => {
            console.log("Data.... ", jsonResponse);
            setData(jsonResponse)
        })
    }, [])
  return (
    <div>
        <span>{data?.name}</span> <br />
        <span>{data?.address}</span>
    </div>
  )
}
