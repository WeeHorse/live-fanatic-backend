import { useEffect } from "react"
import { useState } from "react"


function ProfilePage() {
    
    let [userId, setUserId] = useState("");
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [country, setCountry] = useState('');
    let [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({firstName, lastName, email, country, city}),
        };
        let response = await fetch('/data/users/' + userId, requestOptions);
        if (response.ok){
            response = await response.json();
        }
    };

    useEffect(() => {
        async function load() {
            let rawResponse = await fetch('/data/login')
            if (rawResponse.ok) {
                let response = await rawResponse.json();
                setUserId(response.id)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setEmail(response.email)
                setCountry(response.country)
                setCity(response.city)
            }
        }
        load()
    }, [])

    return <>

        <h1 id="profile-title">Your Profile</h1>

        <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-field">
                <label className="field-name" htmlFor="first-name">First name:</label>
                <input className="form-input" type="text" name="first-name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="last-name">Last name:</label>
                <input className="form-input" type="text" name="last-name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="email">Email:</label>
                <input className="form-input" type="email" name="email" id="email" value={email} readOnly required />
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="country">Country:</label>
                <input className="form-input" type="text" name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="city">City:</label>
                <input className="form-input" type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="form-field" id="update">
                <button className="form-input">Edit info</button>
                <input className="form-input" type="submit" value={"Update your personal info"} />
            </div>
            <button id="sign-out">Sign out</button>
        </form>

    </>
}

export default ProfilePage
