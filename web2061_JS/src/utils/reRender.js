export const reRender = async (element, domElement) => {
    if(element){
        document.querySelector(domElement).innerHTNL = await element.render();
        if(element.afterRender) element.afterRender();
    }
}