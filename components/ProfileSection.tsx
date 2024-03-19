import "./ProfileSection.css"
import avatarImg from "../public/images/User-avatar.svg.png"
import { useState, useEffect, SetStateAction } from "react";

const ProfileSection = () => {
    const [editMode, setEditMode] = useState(false);
    const [userData, setUserData] = useState({});
    const [previousUserData, setPreviousUserData] = useState({});

    

    useEffect(() => {
        setUserData(
            {name: "John Smith",
            email: "john.smith@gmail.com"
            }
        );
    },[])

   
    

    const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Simulate sending updated user data to an API (replace with your actual logic)
        // const response = await fetch('/api/update-user', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(userData),
        // });
        setUserData({ ...userData, [event.target.name]: event.target.value });

        setEditMode(false);
    }

    return (
        
        <div className="profile-container">
            
            {editMode ? (
            <form onSubmit={handleSubmit}>
                <h2 className="flex justify-center font-bold text-2xl">Profile</h2>
                <img src={avatarImg.src} alt="Profile picture" className="mx-auto"/>
              <div className="grid grid-cols-2 gap-4">
                <label className="font-bold" htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-black pl-2"
                  value={userData?.name}
                  onChange={handleInputChange}
                />
              
              
                <label className="font-bold" htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-black pl-2"
                  value={userData?.email}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit"
              className="mt-5 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full font-bold shadow-md hover:shadow-lg focus:outline-none mr-10">
                Save Changes</button>
              <button type="button" onClick={() => {
                
                setUserData(previousUserData); 
                
                setEditMode(false);}} className="mt-5 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full font-bold shadow-md hover:shadow-lg focus:outline-none">
                Cancel
              </button>
            </form>
          ) : (
                <div>
                    <h2 className="flex justify-center font-bold text-2xl">Profile</h2>
                    <img src={avatarImg.src} alt="Profile picture" className="mx-auto"/>
                    <div className="flex flex-col">
                    <p><span className="font-bold">Name:</span> {userData?.name}</p>
                    <p><span className="font-bold">Email:</span> {userData?.email}</p>
                    <button onClick={() => {setPreviousUserData(userData); setEditMode(true);}}
                    className="mt-5 bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full font-bold shadow-md hover:shadow-lg focus:outline-none">Edit Profile</button>
                    </div>
                </div>
          )}
        </div>
    )
}

export default ProfileSection;