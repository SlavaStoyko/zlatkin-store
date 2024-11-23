import {SendFormData} from "./modules/SendFormData.js";
import {getScrollUp} from "./modules/scroll.js";
import {swiperBlock} from "./modules/swiperBlock.js";

window.onload = () => {
    inishialUISetup ();
}
const inishialUISetup = () =>{
    document.querySelectorAll('.toForm').forEach(item =>item.addEventListener("click", (e)=>getScrollUp(e)));
    swiperBlock('.swiper')
    SendFormData("../php/form.php");
}