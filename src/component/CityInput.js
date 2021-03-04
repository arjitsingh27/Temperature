import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'


const CityInput = ({ city, setCity, fetchCityWeather }) => {
    
    const [error, setError] = React.useState("")

    const inputHandler = (e) => {
        setCity(e.target.value);
    }

    const handlerSubmit = () => {
        if (!city) {
            setError("City Field is empty")
        } else {
            setError("")
            fetchCityWeather()

        }
    }

    return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control id="cityinput" value={city} onChange={inputHandler} type="text" placeholder="Enter Your City" />
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <Button variant="primary" onClick={handlerSubmit}>
                    Submit
            </Button>
            </Form> 
    )
}

export default CityInput;
