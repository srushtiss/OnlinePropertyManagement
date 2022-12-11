import React, { useEffect, useState } from "react";
import PropertyCards from "../card";
import properties from "../properties";
import {GetProperties} from "../ServerApi"


function Favourites() {
  const [title, setTitle] = useState([])

  useEffect(() => {
    let ignore = false;
    if (!ignore)  GetProperties().then((res)=>{
      setTitle(res)
      console.log("Res",title)
    })
    return () => { ignore = true; }
    },[]);

useEffect(()=>{
    setTitle(
        title.filter((item)=>{
            return item.title.toLowerCase().includes(localStorage.getItem("fav-property").toLowerCase())|| item.title.toUpperCase().includes(localStorage.getItem('fav-property').toLowerCase())
        })
    )
},[])




  return (
    <div>
        <div className="row justify-content-center">
          <div className="col-md-10 properties">
            <div className="container-fluid">
              <div className="container-fluid text-center">
                <div className="row">
                  <div className="col gridWrapper">
                    {
                      title.map(item => {
                        return (<PropertyCards {...item} >
                        </PropertyCards>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Favourites