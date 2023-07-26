import { Link, useLocation } from 'react-router-dom'
import {
    GoHome,
    GoFileDirectory,
    GoClock,
    GoGear,

} from "react-icons/go";
import {
    AiOutlineFileAdd,
} from "react-icons/ai";
import { IconType } from "react-icons/lib";

type USER_ROLE = {
    role: 'admin' | 'user' | null;
};


const routes: {
    role: string;
    name: string;
    icon: IconType;
    path: string;
}[] = [
        {
            role: 'admin',
            name: 'Home',
            icon: GoHome,
            path: '/app/admin/home'

        },
        {
            role: 'admin',
            name: 'New File',
            icon: AiOutlineFileAdd,
            path: '/app/admin/new-file'

        },
        {
            role: 'admin',
            name: 'All Files',
            icon: GoFileDirectory,
            path: '/app/admin/files'

        },
        {
            role: 'admin',
            name: 'Settings',
            icon: GoGear,
            path: '/app/admin/settings'

        },
        // {
        //     role: 'user',
        //     name: 'Home',
        //     icon: GoHome,
        //     path: '/app/home'

        // },
        {
            role: 'user',
            name: 'All Files',
            icon: GoFileDirectory,
            path: '/app/files'

        },
        {
            role: 'user',
            name: 'Recent',
            icon: GoClock,
            path: '/app/recent'

        },
        {
            role: 'user',
            name: 'Settings',
            icon: GoGear,
            path: '/app/settings'

        },

    ]


const Routes = (props: USER_ROLE) => {

    const location = useLocation();

    const role = props.role

    return (
        <ul className='side-nav-items' >
            {routes.map(route => {
                if (route.role === role) {
                    return (<li className={`nav-item ${location.pathname === route.path ? 'active' : ''}`} key={route.path} >
                        <Link to={route.path} className={`item ${location.pathname === route.path ? 'active' : ''}`}>
                            <div className='item-icon'>
                                <route.icon size={25} />
                            </div>
                            <span>{route.name}</span>
                        </Link>
                    </li>)
                }
            })}
        </ul>
    )


}

export default Routes