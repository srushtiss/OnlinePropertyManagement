/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';



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


function TutorCards(props) {
    let { name = "ABC", courseName = "English", img, rating, location, aboutMe, comments = [], userLoggedIn } = props
    const [modalShow, setModalShow] = useState(false);
    const [timerModal, setTimeModal] = useState(false);
    const [user, setUser] = useState(props?.user)
    console.log(img)
    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
            {/* <TimeModal
                show={timerModal}
                onHide={() => setTimeModal(false)}
                name={'Set Time for appoinment with' + name}
            /> */}

            <div className="col g-5">
                <div class="card" style={{ width: "18rem" }}>

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
                        {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only"></span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only"></span>
                        </a> */}
                    </div>

                    <div class="card-body">
                        <a href="#" onClick={() => { setModalShow(true) }} class="card-link">View Property</a>
                        {/* <a href="#" class="card-link">Quick Reserve</a> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default TutorCards