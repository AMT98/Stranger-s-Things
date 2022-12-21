import React, { useEffect, useState } from "react";

const Profile = ({ url, token }) => {
  const [userName, setUserName] = useState("");
  const handleProfile = async () => {
    // e.preventDefault()
    try {
      const response = await fetch(`${url}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      localStorage.setItem("authorid", data.data._id);
      console.log(data);
      setUserName(data.data.username);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    //     // localStorage.getItem('token')
    //     // localStorage.getItem('authorid')
    handleProfile();
  });
  console.log(userName);
  return (
    <form
    // onSubmit={handleProfile}
    >
      <button>{userName}</button>
    </form>
  );
};

export default Profile;
