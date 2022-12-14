import React, { useEffect, useState } from "react";
import PropertyCards from "../card";
import properties from "../properties";
import './index.css'
import {GetProperties} from "../ServerApi"


function HomePage() {
  const [title, setTitle] = useState([])

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  GetProperties().then((res)=>{
      const result = res.filter(res => res.deleted !== "true" );
      setTitle(result)
      console.log(result)
    })
    return () => { ignore = true; }
    },[]);

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setTitle(
      title.filter((item) => { return item.title.toLowerCase().includes(searchText.toLowerCase()) || item.title.toUpperCase().includes(searchText.toLowerCase()) || item.city.toLowerCase().includes(searchText.toLowerCase()) || item.city.toUpperCase().includes(searchText.toLowerCase()) })
    )
  }, [searchText])

  return (
    <div>
      <div className="input-group mb-3 justify-content-center">
        <form className="form-inline my-2 my-xl-0">
          <input className="form-control mr-xl-2 " type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
            if (event.target.value == "") {
              setTitle(properties)
            }
            else {
              setSearchText(event.target.value)
            }
          }} />
        </form>
        <div className="input-group-prepend">
          <button className="btn searchbtn btn-outline-primary " type="button" >Search</button>
        </div>
      </div>
      <br />
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

export default HomePage