import "./usersDetails.css"
import { useEffect, useState } from "react";
import axios from "axios"
import NavBar from "../../component/navBar/navBar";
import SideBar from "../../component/sideBar/sideBar";
import Users from "../../component/users/users";
import UserDetail from "../../component/userDetail/userDetail";

interface User {
  [x: string]: any;
  id: number;
  name: string;
  email: string;
}

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(1);
        setUser(user);
        console.log(user)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  async function getUser(id: number): Promise<User> {
    try {
      const response = await axios.get<User>(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
      return response.data;
      
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    

          <>
            <NavBar/>
            <SideBar/>
            {/* <Users /> */}
            <UserDetail/>
            

            <div>


            </div>



        <div className="user-details-div">
          <div>
          <div className="personal-div"><span className="">Personal Information</span></div></div><div className="personal-information">
              <div className="personal-info"><p className="person">Name:</p> {user.profile.firstName} {user.profile.lastName}</div>
              <div className="personal-info"><p className="person">Phone Number</p>{user.profile.phoneNumber}</div>
              <div className="personal-info"><p className="person">Email </p>{user.email}</div>
              <div className="personal-info"><p className="person">BVN</p>{user.profile.bvn}</div>
              <div className="personal-info"><p className="person">GENDER</p>{user.profile.gender}</div>
              <div className="personal-inf"><p className="person">MARITAL STATUS</p> Single</div>
              <div className="personal-inf"><p className="person">CHILDREN</p> None</div>
              <div className="personal-inf"><p className="person">TYPE OF RESiDENCE</p> Parent's Apartment</div>
          </div><div>
              <div className="personal-div"><span>Education and Employment</span></div>
              <div className="eduction-employment">
                  <div className="personal-info"><p className="person">LEVEL OF EDUCATION</p>{user.education.level}</div>
                  <div className="personal-info"><p className="person">EMPLOYMENT STATUS</p>{user.education.employmentStatus}</div>
                  <div className="personal-info"><p className="person">SECTOR OF EMPLOYMENT</p> {user.education.sector}</div>
                  <div className="personal-info"><p className="person">DURATION OF EMPLOYMENT</p>{user.education.duration}</div>
                  <div className="personal-info"><p className="person">OFFICE EMAIL</p>{user.education.officeEmail}</div>
                  <div className="personal-info"><p className="person">MONTHLY INCOME</p>{user.education.monthlyIncome}</div>
                  <div className="personal-info"><p className="person">LOAN REPAYMENT</p>{user.education.loanRepayment}</div>
              </div>
          </div><div>
              <div className="personal-div"><span>Socials</span></div>
              <div className="social">
                  <div className="personal-info"><p className="person">TWITTER</p> {user.socials.twitter}</div>
                  <div className="personal-info"><p className="person">FACEBOOK</p>{user.socials.facebook}</div>
                  <div className="personal-info"><p className="person">INSTAGRAM</p> {user.socials.instagram}</div>
              </div>
          </div><div>
              <div className="personal-div"><span>Guarantor</span></div>
              <div className="guarantor">
                  <div className="personal-info"><p>Full NAME</p> {user.guarantor.firstName} {user.guarantor.lastName}</div>
                  <div className="personal-info"><p>PHONE NUMBEr</p>{user.guarantor.phoneNumber}</div>
                  <div className="personal-info"> <p>EMAIL ADDRESS</p>Celinemonahan@hotmail.com </div>
                  <div className="personal-info"> <p>RELATIONSHIP</p> SISTER</div>
              </div>

              <div className="guarantor">
                  <div className="personal-info"><p>Full NAME</p> {user.guarantor.firstName} {user.guarantor.lastName}</div>
                  <div className="personal-info"><p>PHONE NUMBEr</p>{user.guarantor.phoneNumber}</div>
                  <div className="personal-info"> <p>EMAIL ADDRESS</p>Celinemonahan@hotmail.com </div>
                  <div className="personal-info"> <p>RELATIONSHIP</p> SISTER</div>
              </div>
          </div>

 </div>
          </>
          
          

  );
};

export default UserDetails;




