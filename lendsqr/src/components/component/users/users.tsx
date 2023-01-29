import GroupsIcon from '@mui/icons-material/Groups';
import { GiDatabase  } from "@react-icons/all-files/gi/GiDatabase";
import { FcDataProtection } from "@react-icons/all-files/fc/FcDataProtection";

import GroupIcon from '@mui/icons-material/Group';
import './users.css'
const Users = () => {
    return ( 
        <section className='all'>
            <h2 className='user-title'>Users</h2>
            <div className='users-div'>

                <div className='user-div'>
                    <div className='user-icon'>
                        <GroupIcon />
                     </div>
                    <span className='user-p'>Users</span>
                    <h3 className='user-h3'>2,453</h3>
                 </div>

                <div className='user-div'>
                <div className='user-group-icon'>
                        <GroupsIcon />
                     </div>
                    <span className='user-p'>active Users</span>
                    <h3 className='user-h3'>2,453</h3>
                </div>

                <div className='user-div' >
                    <div className='loans-icon'>
                <FcDataProtection />
                </div>
                    <span className='user-p'>Users with loans</span>
                    <h3 className='user-h3'>12,453</h3>
                </div>

                <div className='user-div'>
                    <div className='saving-icon'>
                    <GiDatabase/>
                    </div>
                    <span className='user-p'>Users with Savings</span>
                    <h3 className='user-h3'>102,453</h3>
                </div>
            </div>

        </section> 
        
    );
}
 
export default Users;