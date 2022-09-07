import { useState } from "react"


function ProfilePage() {
    return <>
        <h1 id="profile-title">Your Profile</h1>
        <form action="" className="profile-form">
            <div className="form-field">
                <label className="field-name" htmlFor="first-name">First name:</label>
                <input className="form-input" type="text" name="first-name" id="first-name" />
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="last-name">Last name:</label>
                <input className="form-input" type="text" name="last-name" id="last-name" />
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="email">Email:</label>
                <input className="form-input" type="email" name="email" id="email" required />
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="country">Country:</label>
                <input className="form-input" type="text" name="country" id="country" />
            </div>
            <div className="form-field">
                <label className="field-name" htmlFor="city">City:</label>
                <input className="form-input" type="text" name="city" id="city" />
            </div>
            <div className="form-field" id="update">
                <input className="form-input" type="submit" value={"Update your personal info"} />
            </div>
            <button id="sign-out">Sign out</button>
        </form>
        
    </>
}

export default ProfilePage
