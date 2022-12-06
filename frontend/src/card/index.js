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
                        <div class="card-body">
                            <p >{props.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item"><b>Location: </b>{props.city}</li>
                            <li class="list-group-item"><b>Type: </b>{props.category}</li>
                            <li class="list-group-item"><b>Price/night: </b>{props.nightly_fee}</li>
                            <li class="list-group-item"><b>Cleaning Fee: </b>{props.cleaning_fee}</li>
                            <li class="list-group-item"><b>Service Fee: </b>{props.service_fee}</li>
                            <li class="list-group-item"><b>Amenities: </b>{props.amenities}</li>
                            <li class="list-group-item"><b>Bedrooms: </b>{props.bedrooms}</li>
                            {/* <p class="card-text"><b>Price/night: </b>{props.map_address}</p> */}
                            <li class="list-group-item"><b>Price/night: </b>{props.nightly_fee}</li>
                            <li class="list-group-item"><b>Location: </b>{props.city}</li>
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


function PropertyCards(props) {
    const [favorite, setFavorite] = useState("Favorite Me")
    const [modalShow, setModalShow] = useState(false);
    const [username, setCookie, removeCookie] = useCookies(['userName']);

    const addFavorite = (props) => {
        AddToFavorites(username.userName, props.title).then((res) => {
            if (res.result === true) {
                setFavorite("Added!")
            }
            else alert('Failed authentication')
          })
    
    }
    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />

            <div className="col g-5" >
                <div class="card" style={{ width: "18rem", marginBottom: "2rem", marginRight: "2rem" }}>

                    <div id="carouselExampleControls" class="card-img-top carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100 blockimg" src={props.img} alt="First slide" />
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title"><b>{props.title}</b></h6>
                            <p class="card-text">{props.city}</p>
                        </div>
                    </div>

                    <div class="card-body">
                        <a href="#" onClick={() => { setModalShow(true) }} class="btn btn-outline-secondary card-link">View Property</a>
                        <a href="#" onClick={(e) => { addFavorite(props, username.userName) }} class="btn btn-outline-secondary card-link">{favorite}</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PropertyCards