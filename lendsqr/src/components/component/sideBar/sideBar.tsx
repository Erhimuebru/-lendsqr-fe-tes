import './sideBar.css'
import { SideBarData } from './sideBarData';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";


const SideBar = () => {
    return(
        <>
            <div className='sidebar'>
            <ul className='sidebarlist'>
                <div className='switch'>
            <BusinessCenterIcon />
            <h4>Switch Organization</h4>
            <RiArrowDropDownLine/>
            </div>
            <div className='switch'>
            <RoofingSharpIcon />
            <h4>Dashboard</h4>
            </div>
            <div className='customer-div'><h4 className='customer'>Customers</h4></div>
            {SideBarData.map((val, key)=>{
                return(

                    <><li className='row' key={key}>

                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>

                    </li></>
                )
            })}

            </ul>
           
            </div></>
)
}
export default SideBar;

