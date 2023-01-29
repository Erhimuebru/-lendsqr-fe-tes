import React, { useState } from "react";
import Display from "../../component/displayUsers/displayUsers";
import NavBar from "../../component/navBar/navBar";
import SideBar from "../../component/sideBar/sideBar";
import Users from "../../component/users/users";
import DehazeIcon from '@mui/icons-material/Dehaze';
import './usersDashboard.css'
const USERSDASHBOARD = () => {

    
    return ( 
        
    <>
    <NavBar/>
    <SideBar/>
    <Users />
    <Display /></>
     );
}
 
export default USERSDASHBOARD;