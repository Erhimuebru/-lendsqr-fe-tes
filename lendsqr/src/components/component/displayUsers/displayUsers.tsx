import { useEffect, useRef, useState } from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios"
import "./displayUsers.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GrPrevious  } from "@react-icons/all-files/gr/GrPrevious";
import { GrNext  } from "@react-icons/all-files/gr/GrNext";
import { RiArrowDropDownLine  } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import FilterModal from "../filterModal/filterModal";



const Display = () => {

    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] =useState(0)
   
    const getUser = async () => {
		try {
			const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
			console.log("response data is ", response.data);
			setData(response.data);
            console.log(data)
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
		void getUser();
	}, []);
const dataPerPage = 10
const pagesVisited = pageNumber * dataPerPage
const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map((data:any) =>{
  return(
  <div className="users_contain">
  <div className="user_details" key={data}>
       <div className="div-data"><h3 className="a">{(data.orgName)}</h3></div>
       <div className="div-data"><h3 className="a" >{(data.userName)}</h3 ></div>
       <div className="div-data"><h3 className="email" >{(data.email)}</h3 ></div>
       <div className="div-data"><h3 className="a">{(data.profile.phoneNumber)}</h3 ></div>
        <div className="div-data"><h3 className="a" >{(data.createdAt)}</h3 ></div>
       <div className="div-data"><h3 className="a" >{(data.lastActiveDate)}</h3 ></div>
       <div className="div-icon">< MoreVertIcon /></div>
      
  </div>
  </div> 
  )

    })
    
    const pa = Math.ceil(data.length/dataPerPage)
    const changePage = ({selected}:any)=>{
      setPageNumber(selected)
    }

    return ( 
        <>
 <div className=" user_all">
        <div className="filter-div">
            <div className="filter-details"> 
                <h2 className="filter-detail-o">Organization</h2>
                <div className="filter-icon">
                 <FilterModal/>
                </div>
            </div>

            <div className="filter-details"> 
                <h2 className="filter-detail-u">userName</h2>
                <div className="filter-icon">
                <FilterModal/>
                </div>
            </div>

            <div className="filter-details"> 
                <h2 className="filter-detail-e">email</h2>
                <div className="filter-icon">
                <FilterModal/>
                </div>
            </div>

            <div className="filter-details"> 
                <span className="filter-detail-p">Phone Number</span>
                <div className="filter-icon">
                <FilterModal/>
                </div>
            </div>

            <div className="filter-details"> 
                <h2 className="filter-detail-d">date joined</h2>
                <div className="filter-icon">
                <FilterModal/>
                </div>
            </div>

            <div className="filter-details"> 
                <h2 className="filter-detail-s">status</h2>
                <div className="filter-icon">
                <FilterModal/>
                </div>
            </div>
        </div>
               


       
        <div className="users_container">{displayData}</div>
        
         <div className="paginate">
        <div>
        <div className="out"> <p className="showing">showing</p>
        <div className="drop-div">
            <p>100</p>
            <RiArrowDropDownLine className="drop-icon"/>
            </div>
            <p className="showin">out of 100</p>
        </div>
       
        </div>

       <div className="paginate-div">
            <ReactPaginate
            pageRangeDisplayed={3}
            previousLabel= {<GrPrevious className="prev"/>}
            nextLabel={<GrNext className="prev" />}
            pageCount={pa}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisable'}
            activeClassName={'paginationActive'} />
         </div>
     </div>
     </div>
            </>
    )
}
 
export default Display;

