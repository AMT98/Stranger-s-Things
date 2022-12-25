import React, { useEffect, useState } from "react";

const Profile = ({ url, token }) => {
  const [userName, setUserName] = useState("");
  const handleProfile = async () => {
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
    handleProfile();
  });
  console.log(userName);
  return (
    <form>
      <button>{userName}</button>
    </form>
  );
};

export default Profile;
