import { useNavigate } from 'react-router-dom';
import Users from './Users.json';
import { useEffect } from 'react';

function ProtectedRoutesForRoutes(props) {

  const { Component, For } = props
  const navigate = useNavigate();

  const GetAdminDetails = () => {
    const adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
    console.log('for D1111 =>', For)
    console.log('adminD1111 =>', adminDetails)

    if (!adminDetails) {
      navigate('/login');
    } else {
      if ((JSON.stringify(adminDetails) === JSON.stringify(Users.admin))) {
        console.log('adminD2222 =>', adminDetails)
      } else {
        navigate('/login');
      }
    }
  }

  useEffect(() => {
    GetAdminDetails();
  }, [])

  return (<>
    <div>
      <Component />
    </div>
  </>)
}

export default ProtectedRoutesForRoutes