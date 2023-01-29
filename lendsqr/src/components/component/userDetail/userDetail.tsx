import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';





import "./userDetail.css"

const UserDetail = () => {
    return ( 
        
        <><div className='back'>
            <KeyboardBackspaceIcon />
            <p className='back-text'>Back to Users</p>
        </div>

        <div className='back-div'>
            <div><p className='back-user'>User Details</p></div>
            <div className='user-detail-text'>
                <p className='back-btn'>blacklist user</p>
                <p className='active-btn'> active user</p>
                </div>
        </div>
        
        <section className='a-user'>
                <div className='back'>
                    <KeyboardBackspaceIcon />
                    <p>Back TO Users</p>
                </div>
                <div className='user-a'>

                    <div className='avater'>
                        <PermIdentityIcon className='avater-icon' />
                        <div>
                            <p className='user-name'>DARIAN ROLFSON</p>
                            <p className='user-acc'>GWQUSEH1</p>
                        </div>

                    </div>


                    <div className='user-tier'>

                        <p className='user-tier-name'>User's Tier</p>
                        <div>
                            <StarIcon className='star' />
                            <StarBorderIcon className='star' />
                            <StarBorderIcon className='star' />
                        </div>

                    </div>


                    <div className='user-tie'>
                        <h1 className='user-amount'><span>&#8358;</span> 200,000.000</h1>
                        <p className='user-acc-number'>9912345678/Providus Bank</p>

                    </div>


                </div>
                <div className='link-div'>
                    <div><li>General Details</li> </div>
                    <div><li>Documents</li></div>
                    <div><li>Bank Details</li></div>
                    <div><li>Loans</li></div>
                    <div><li>Savings</li></div>
                    <div><li>App and System</li></div>
                </div>

            </section></> 
     );
}
 
export default UserDetail;