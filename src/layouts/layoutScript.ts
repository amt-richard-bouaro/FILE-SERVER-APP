
export const drawer = () => {
    window.onload = () => {
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
            console.log(e.touches[0]);
    
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

            if (endX === undefined ) {
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
    
    
    }

}















//  function onMouseMove(e: globalThis.MouseEvent) {
//     let getStyle = window.getComputedStyle(myDiv);

//        let left = parseInt(getStyle.left);
//         let right = parseInt(getStyle.right);

//         console.log(getStyle.right);

  
//   }
    
//     // btn.addEventListener('mousedown', () => {
//         btn.addEventListener('mousemove', () => {
//         console.log('hello');
        
//     });
    
//     // });



const isMobile = window.matchMedia('(max-width:480px)').matches

console.log(isMobile);


export const closeInforPanel = () => {
        // const panel = document.getElementById('side-information-panel')! as HTMLDivElement;
        // panel.style.display = 'block';
}
    






    //  let isDragging = false;
    // let startX:number;
    // let startWidth:number;

    // myDiv.addEventListener('mousedown', (e) => {
        
        
    //     isDragging = true;
        
    //   startX = e.clientX;
    //   startWidth = myDiv.offsetWidth;
    //     myDiv.style.cursor = 'grabbing';
        
    //     console.log({ isDragging, startX,startWidth});
    // });

    // document.addEventListener('mousemove', (e) => {
       
        
    //   if (!isDragging) return;

    //   const deltaX = e.clientX + startX;
    //   const newWidth = startWidth + deltaX;
    //     myDiv.style.width = newWidth + 'px';
        
         
    // });

    // document.addEventListener('mouseup', () => {
    //   isDragging = false;
    //   myDiv.style.cursor = 'grab';
    // });
    