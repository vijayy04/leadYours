import { useNavigate } from 'react-router-dom';
import Users from './Users.json';
import { useEffect } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../routes/Firebase'

function ProtectedRoutesForUser(props) {

  const { Component } = props
  const navigate = useNavigate();

  const GetUserDetails = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
    console.log('for u1111 =>', userDetails)

    signInWithEmailAndPassword(auth, userDetails?.mail, userDetails?.pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
        navigate("/login")
      });

    // if (!userDetails && !adminDetails) {
    //   navigate('/login');
    // } else {
    //   if ((JSON.stringify(userDetails) === JSON.stringify(Users.user)) || (JSON.stringify(adminDetails) === JSON.stringify(Users.admin))) {
    //   } else {
    //     navigate('/login');
    //   }
    // }
  }

  useEffect(() => {
    GetUserDetails();
  }, [])

  return (<>
    <div>
      <Component />
    </div>
  </>)
}

export default ProtectedRoutesForUser