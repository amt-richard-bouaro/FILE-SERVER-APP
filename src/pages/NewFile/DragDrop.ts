
export const initDragAndDrop = () => {
    
console.log('initDrag');

    const droparea = document.getElementById('file-drop-area')
    
    const active = () => {
        droparea?.classList.add('file-drop-active');
    }

    const inActive = () => {
        droparea?.classList.remove('file-drop-active');
    }

    const preventDefault = (e: Event) => e.preventDefault();
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
        droparea?.addEventListener(event, preventDefault)
    });

    ['dragenter', 'dragover'].forEach(event => {
        droparea?.addEventListener(event, active)
    });

    ['dragleave', 'drop'].forEach(event => {
        droparea?.addEventListener(event, inActive)
    });

    droparea?.addEventListener('drop', handleDrop)
    
    function handleDrop(e:DragEvent) {
        const dt = e.dataTransfer;
              
        const files = dt?.files;



        
    }

}