map_img_ch = document.querySelector('.changing_img')
map_img_unch = document.querySelector('.unchanging_img')
map_img_ch.style.width = map_img_unch.offsetWidth + 'px'
is_clicked = false

function Show_block() {
    if (is_clicked) {
        map_img_ch.style.width = map_img_unch.offsetWidth + 'px'
        map_img_ch.style.transform = 'translate(0,0)';
        map_img_ch.style.top = 'auto';
        map_img_ch.style.position = 'absolute'
        is_clicked = false
    } else {
        // Изменить ширину картинки при открытии
        map_img_ch.style.width = '60%'

        map_img_ch.style.transform = 'translate(0,-50%)';
        map_img_ch.style.top = '50%';
        map_img_ch.style.position = 'fixed'
        is_clicked = true
    }
}
//popup
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
//scrolltop
let topElem = document.querySelector('#top');

topElem.onclick = () => backToTop();
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 50);
    }
  }
   function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    
    if (scrolled > coords) {
        console.log('scrolled > coords');
      topElem.classList.add('back_to_top-show');
      topElem.classList.remove('back_to_top-hidden');
    }
    if (scrolled < coords) {
      console.log("scrolled < coords");
      topElem.classList.remove('back_to_top-show');
      topElem.classList.add('back_to_top-hidden');
    }
  }