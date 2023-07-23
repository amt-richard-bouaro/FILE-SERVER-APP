import { CSSProperties, useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Outlet } from "react-router-dom";
import {useSelector} from 'react-redux'
import {
    AiOutlineCloudServer as Logo,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import {
    // GoHome,
    GoFileDirectory,
    GoSearch,
    GoStar,
    GoShare,
    GoDownload
} from "react-icons/go";
import { FaGripLinesVertical, FaEllipsisH } from "react-icons/fa";
import {
    BsFillFileEarmarkWordFill,
} from "react-icons/bs";
import { drawer } from "./layoutScript";
import ChangePassword from "../compnents/ChangePassword";
import Routes from "./component/Routes";
import { RootState } from "../redux/store/store";
import Nav from "./component/Nav";

export type USER = {
    _id: string
    surname: string
    other_names: string
    email: string
    role: "admin" | "user"
    must_change_password: boolean
    created_at: Date
    updated_at: Date
}



const AppLayout = () => {
    const { theme } = useTheme();

    drawer();

    

    const { user } = useSelector((state: RootState) => state.auth);

    const authUser: USER = user;

    return (
      
            
        <div className='app-container' style={{ ...theme } as CSSProperties}>
{/* <ChangePassword /> */}

           
            <Nav>
                <Routes role={authUser.role} />
            </Nav>
           

            <main className='main-content-area'>
                <Outlet />
                
            </main>
            </div>
       
    );
};

export default AppLayout;
