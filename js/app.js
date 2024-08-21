let x = 0;
function menu_ber(){
    let menu_items = document.getElementById('menu_items');
    if(x == 0){
        menu_items.classList.remove('hidden')
        x = 1
    }else{
        menu_items.classList.add('hidden')
        x = 0
    }
}