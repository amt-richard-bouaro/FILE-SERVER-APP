import { CSSProperties, useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'


import { drawer } from "./layoutScript";

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

    // drawer();

    

    const { user } = useSelector((state: RootState) => state.auth);

    const authUser: USER = user;




    useEffect(() => {
        
            const myDiv = document.getElementById('side-information-panel')! as HTMLDivElement,
                dragger = document.querySelector('#panelDrager')! as HTMLDivElement;

            console.log('touchstart');

            let isDragging = false;
            let startX: number;
            let startRight: number;

            let width: number = 0
            let endX: number;


            if (myDiv) {
                myDiv.addEventListener('touchstart', (e) => {

                    console.log('touch');

                    isDragging = true;

                    startX = e.touches[0].clientX;
                    startRight = parseInt(window.getComputedStyle(myDiv).right);
                    // myDiv.style.cursor = 'grabbing';
                    // console.log({startX, startRight,touches: e.touches});

                });
            }



            document.addEventListener('touchmove', (e) => {
                if (!isDragging) return;

                const deltaX = e.touches[0].clientX - startX;
                // console.log(e.touches[0]);

                let newRight = startRight + deltaX;
                endX = newRight
                // console.log({touches: e.touches,startRight, deltaX, startX});
                // myDiv.style.width = newWidth + 'px';

                // Limit the right value to prevent the drawer from moving out of view
                const maxWidth = parseInt(window.getComputedStyle(myDiv).width);
                width = maxWidth;
                //   newRight = Math.max(newRight, 0);
                //   newRight = Math.min(newRight, maxWidth);

                newRight = (startRight + Math.abs(deltaX)) < 0 ? (startRight + Math.abs(deltaX)) : 0;

                // console.log({ newRight, deltaX: Math.abs(deltaX), startRight });

                if (newRight <= 0 && deltaX < 0) {
                    endX = newRight
                    myDiv.style.right = newRight + 'px';
                }

                // console.log(startRight === 0 , deltaX < 0 );


                if (startRight === 0 && deltaX < (maxWidth - 30)) {
                    endX = - deltaX
                    myDiv.style.right = - deltaX + 'px';
                } else if (deltaX > (maxWidth - 30)) {
                    endX = - (maxWidth - 30)
                    myDiv.style.right = - (maxWidth - 30) + 'px';
                }

                if (startRight === 0 && deltaX < 0) {
                    endX = startRight
                    myDiv.style.right = 0 + 'px';
                }

                //  console.log({touches: e.touches, maxWidth, newRight});
            });

            document.addEventListener('touchend', () => {

                // console.log({ width, endX, startRight });
                // console.log((width - 30));

                if (endX === undefined) {
                    // myDiv.style.right = 0 + 'px';
                } else if (Math.abs(endX) / width < 0.3) {

                    myDiv.style.right = 0 + 'px';
                } else {
                    myDiv.style.right = - (width - 30) + 'px';
                }

                isDragging = false;
                //   myDiv.style.cursor = 'grab';
            });




            //    function onMouseMove(e: globalThis.MouseEvent) {
            //     let getStyle = window.getComputedStyle(myDiv);

            //        let left = parseInt(getStyle.left);
            //         let right = parseInt(getStyle.right);

            //         console.log( e);


            //   }

            //     btn.addEventListener('mousedown', () => {
            //         btn.addEventListener('mousemove', onMouseMove);
            //     });


       
    }, [])

    return (
      
            
        <div className='app-container' style={{ ...theme } as CSSProperties}>
{/* <ChangePassword /> */}

           
            <Nav>
                <Routes role={authUser?.role} />
            </Nav>
           

            <main className='main-content-area'>
                <Outlet />
                
            </main>
            </div>
       
    );
};

export default AppLayout;
