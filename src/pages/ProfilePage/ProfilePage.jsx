import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom" 
import { getDetails } from "../../services/profileService"

const ProfilePage = () => {
  const [ profileDetails, setProfileDetails] = useState({})
  const location = useLocation()
  console.log('What is inside the location object?????', location)

  useEffect(() => {
    const fetchDetails = async () => {
      const profileDetails = await getDetails(location.state._id)
      setProfileDetails(profileDetails)

    }
    fetchDetails()
  }, [location.state._id])
  
  return ( 
    <>
    <br/>
    <br/>
    <div className="profile-page">

      <h1>{profileDetails.name}</h1>
        <p> Species: 
          {profileDetails.species} </p>
        <p> Do You Eat Brains?
          {profileDetails.brains = true ? "Yes" : "No"} </p>
        <p> Preferences: 
          {profileDetails.prefersZombie = true ? "Zombies" : profileDetails.prefersHalfbie = true ? "Halfbies": profileDetails.prefersHuman = true ? "Humans" : "No Preferences"}</p>
        <p>
          {profileDetails.prefersHuman}</p>
        <p>
          {profileDetails.prefersHalfbie}</p>
        <p>
          Age: {profileDetails.age} </p>
        <p>
          Height(inches): {profileDetails.height} </p>
        <p>
          About Me: {profileDetails.bio} </p> 
    </div>
      
    </>

  )
}

export default ProfilePage;
