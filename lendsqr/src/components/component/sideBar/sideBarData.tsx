import "./sideBar.css";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { FaPiggyBank   } from "@react-icons/all-files/fa/FaPiggyBank";
import { FaRegHandshake   } from "@react-icons/all-files/fa/FaRegHandshake";
import { BsPersonCheckFill  } from "@react-icons/all-files/bs/BsPersonCheckFill";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { FaScroll } from "@react-icons/all-files/fa/FaScroll";
import TuneIcon from '@mui/icons-material/Tune';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { RiFileTransferLine  } from "@react-icons/all-files/ri/RiFileTransferLine";
import { RiDatabase2Fill  } from "@react-icons/all-files/ri/RiDatabase2Fill";
import { GiJamesBondAperture  } from "@react-icons/all-files/gi/GiJamesBondAperture";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { AiOutlineBarChart } from "@react-icons/all-files/ai/AiOutlineBarChart";
import {GiCash} from "@react-icons/all-files/gi/GiCash";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReportOffIcon from '@mui/icons-material/ReportOff';




export const SideBarData = [
   
    {
        title: "Users",
        icon: <PeopleRoundedIcon />
    },
    {
        title: "Guarantors",
        icon: <GroupsRoundedIcon />
    },
    {
        title: "Loans",
        icon: <GiCash/>
    },

    {
        title:"Decision Models",
        icon: <FaRegHandshake />
    }
    ,

    {
        title:"Savings",
        icon: <FaPiggyBank    />
    },
    {
        title:"Loan Request",
        icon: <RequestQuoteIcon/>
    },
    
    {
        title:"Whitelist",
        icon: <BsPersonCheckFill/>
    } ,
    {
        title:"Karma",
        icon: <PersonOffIcon />
    },
    {
        title:"Businesses",
        icon: ''
    },
    
    {
        title: "Organization",
        icon: <BusinessCenterIcon />
    },
    {
        title: "Loan Products",
        icon: <RequestQuoteIcon/>
    },
    {
        title: "Saving Products",
        icon: <AccountBalanceIcon/>
    },
    {
        title: "Fees and Charges",
        icon: <RiDatabase2Fill/>
    },
    {
        title: "Transactions",
        icon: <RiFileTransferLine/>
    },
    {
        title: "Services",
        icon: <GiJamesBondAperture/>
    },

    {
        title: "Service Account",
        icon: <ManageAccountsIcon />
    },
    {
        title: "Settlements",
        icon: <FaScroll />
    },
    {
        title: "Report",
        icon: <AiOutlineBarChart />
    },
    {
        title: "Settings",
        icon: ""
    },
    {
        title: "Perferences",
        icon: <TuneIcon/>
    },
    {
        title: "Fees and Pricing",
        icon: <ReportOffIcon />
    },
    {
        title: "Audit Logs",
        icon: <ContentPasteIcon/>
    },
    


]
 
