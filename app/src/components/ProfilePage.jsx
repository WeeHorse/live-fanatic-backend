

function ProfilePage() {
    return <>
        <h1>Your Profile</h1>
        <form action="">
            <label htmlFor="first-name"> First name:</label>
            <input type="text" name="first-name" id="first-name" />

            <label htmlFor="last-name">Last name:</label>
            <input type="text" name="last-name" id="last-name" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" />

            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" />

            <input type="submit" value={"Update your personal info"} />
        </form>
    </>
}

export default ProfilePage
