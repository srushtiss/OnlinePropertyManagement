/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddToFavorites } from "../ServerApi"
import { useCookies } from "react-cookie";



function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title} details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <img src={props.img} height={150} />
                    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="card-body">
                            <p >{props.description}</p>
                        </div>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item"><b>Location: </b>{props.city}</li>
                            <li className="list-group-item"><b>Type: </b>{props.category}</li>
                            <li className="list-group-item"><b>Price/night: </b>{props.nightly_fee}</li>
                            <li className="list-group-item"><b>Cleaning Fee: </b>{props.cleaning_fee}</li>
                            <li className="list-group-item"><b>Service Fee: </b>{props.service_fee}</li>
                            <li className="list-group-item"><b>Amenities: </b>{props.amenities}</li>
                            <li className="list-group-item"><b>Bedrooms: </b>{props.bedrooms}</li>
                            {/* <p className="card-text"><b>Price/night: </b>{props.map_address}</p> */}
                            <li className="list-group-item"><b>Price/night: </b>{props.nightly_fee}</li>
                            <li className="list-group-item"><b>Location: </b>{props.city}</li>
                        </ul>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function RatingWindow(props){
const [rating,setRating]=useState("")
const [review,setReview]=useState("")

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title} details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       <form>
                        <input type="number" max="5" placeholder='Rating (1 to 5)' onChange={(e)=>setRating(e.target.value)}></input>
                        <br></br>
                        <textarea placeholder="Type your reviews here" onChange={(e)=>setReview(e.target.value)}></textarea>
                       </form>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{
                    localStorage.setItem(props.title,[rating,review])
                }} type="submit">Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}


function PropertyCards(props) {
    // const [favorite, setFavorite] = useState("Favorite Me")
    const [modalShow, setModalShow] = useState(false);
    const [username, setCookie, removeCookie] = useCookies(['userName']);
    const [favourites, setFavourites] = useState([]);
    const [ratingWindnow,setRatingWindow]=useState(false)

    // const addFavorite = (props) => {
    //     AddToFavorites(username.userName, props.title).then((res) => {
    //         if (res.result === true) {
                
    //         }
    //         else alert('Failed authentication')
    //       })
    
    // }
    const toggleFavorite=(property)=>{
        if(document.getElementById('fav-btn').textContent==="Add to Favourite"){
            const newFavouriteList = [...favourites, property];
		    setFavourites(newFavouriteList);
            localStorage.setItem('fav-property',newFavouriteList)
            document.getElementById("fav-btn").textContent="Remove Favourite"
        }
        else{
            localStorage.removeItem("fav-property")
            document.getElementById("fav-btn").textContent="Add to favourite"
        }

    }
    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
            <RatingWindow
                show={ratingWindnow}
                onHide={() => setRatingWindow(false)}
                {...props}
            />

            <div className="col g-5" >
                <div className="card" style={{ width: "18rem", marginBottom: "2rem", marginRight: "2rem" }}>

                    <div id="carouselExampleControls" className="card-img-top carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 blockimg" src={props.img} alt="First slide" />
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title"><b>{props.title}</b></h6>
                            <p className="card-text">{props.city}</p>
                            <p className='card-text'>Rating & Reviews : {localStorage.getItem(props.title)}</p>
                        </div>
                    </div>

                    <div class="card-body">
                        <a href="#" onClick={() => { setModalShow(true) }} class="btn btn-outline-secondary card-link">View Property</a>
                        <a href="#"  onClick={()=>{setRatingWindow(true)}} class="btn btn-outline-secondary card-link">Rate Property</a>
                        <button href="#" onClick={(e) => { toggleFavorite()}} id="fav-btn" class="btn btn-outline-secondary card-link">Add to Favourite</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PropertyCards
