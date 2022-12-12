import React, { useEffect, useState } from "react";
import PropertyCards from "../card";
import properties from "../properties";
import './index.css'
import { GetProperties } from "../ServerApi"
import { ReactSession } from 'react-client-session';
import { UpdateProperty } from '../ServerApi'
import { Modal, Button } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {

    let userEmail = ReactSession.get("userEmail");
    const [title, setTitle] = useState(props.title)
    const [city, setCity] = useState(props.city)
    const [category, setCategory] = useState(props.category)
    const [description, setDescription] = useState(props.description)
    const [nightly_fee, setNightlyFee] = useState([props.nightly_fee])
    const [cleaning_fee, setCleaningFee] = useState(props.cleaning_fee)
    const [service_fee, setServiceFee] = useState(props.service_fee)
    const [amenities, setAmenities] = useState(props.amenities)
    const [bedrooms, setBedrooms] = useState(props.bedrooms)
    const [img, setImg] = useState("asdf")
    const [map_address, setAddress] = useState("")
    const [deleted, setDeleted] = useState(props.deleted)
    
    const submit = (event) => {
        let userEmail = ReactSession.get("userEmail");

        console.log("here")
        UpdateProperty({ id: props._id, email: userEmail, title: title, city: city, category: category, description: description, nightly_fee: nightly_fee, cleaning_fee: cleaning_fee, service_fee: service_fee, amenities: amenities, bedrooms: bedrooms, img: "sad", map_address: "asd", deleted: deleted })
            .then((res) => {
                alert("Property updated!!")
            })
            .catch((err) => {
                alert('Failed authentication')
            })
        console.log("here")
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <b>Title: </b><input className="form-label" onChange={(e) => setTitle(e.target.value)} defaultValue={props.title} /> 
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

                            <li className="list-group-item"><b>Location: </b><input className="form-label" onChange={(e) => setCity(e.target.value)} defaultValue={props.city} /></li>
                            <li className="list-group-item"><b>Type: </b><input className="form-label" onChange={(e) => setCategory(e.target.value)} defaultValue={props.category} /></li>
                            <li className="list-group-item"><b>Price/night: </b><input className="form-label" onChange={(e) => setNightlyFee(e.target.value)} defaultValue={props.nightly_fee} /></li>
                            <li className="list-group-item"><b>Cleaning Fee: </b><input className="form-label" onChange={(e) => setCleaningFee(e.target.value)} defaultValue={props.cleaning_fee} /></li>
                            <li className="list-group-item"><b>Service Fee: </b><input className="form-label" onChange={(e) => setServiceFee(e.target.value)} defaultValue={props.service_fee} /></li>
                            <li className="list-group-item"><b>Amenities: </b><input className="form-label" onChange={(e) => setAmenities(e.target.value)} defaultValue={props.amenities} /></li>
                            <li className="list-group-item"><b>Bedrooms: </b><input className="form-label" onChange={(e) => setBedrooms(e.target.value)} defaultValue={props.bedrooms} /></li>
                            <li className="list-group-item"><b>Deleted?: </b>{props.deleted} </li>

                            {/* <p className="card-text"><b>Price/night: </b>{props.map_address}</p> */}
                            {/* <li className="list-group-item"><b>Price/night: </b><input className="form-label" onChange={(e) => setNightlyFee(e.target.value)} defaultValue={props.nightly_fee} /></li> */}
                        </ul>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-danger" onClick={() => {
                    setDeleted("true")
                    submit()
                    props.onHide()
                }}>Delete Property</Button>
                <Button onClick={() => {
                    submit()
                    props.onHide()
                }}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}


function HostPropertiess(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                        </div>
                    </div>

                    <div class="card-body">
                        <a href="#" onClick={() => { setModalShow(true) }} class="btn btn-outline-secondary card-link">Edit Property</a>
                    </div>
                </div>

            </div>
        </>
    );
}



function HostProperties() {
    const [title, setTitle] = useState([])
    let userEmail = ReactSession.get("userEmail");

    useEffect(() => {
        let ignore = false;

        if (!ignore) GetProperties().then((res) => {
            const result = res.filter(res => res.email === userEmail && res.deleted !== "true");
            setTitle(result)
            console.log(result)
        })
        return () => { ignore = true; }
    }, []);

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
                                            return (<HostPropertiess {...item} >
                                            </HostPropertiess>)
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

export default HostProperties