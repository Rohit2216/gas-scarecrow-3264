// slide window for advertisement image

var images = [

    "https://img3.hkrtcdn.com/22847/bnr_2284672_o.jpg",
    "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
    "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
    "https://img5.hkrtcdn.com/22848/bnr_2284744_o.jpg",
    "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
    "https://img7.hkrtcdn.com/22852/bnr_2285166_o.jpg",

]

var i = 0;
function slideshow() {
    document.getElementById("image").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 3000);
}
window.onload = slideshow;




// var images1 = [

//     "https://img7.hkrtcdn.com/22823/bnr_2282266_o.jpg",
//     "https://img3.hkrtcdn.com/22852/bnr_2285182_o.jpg",
//     "https://img1.hkrtcdn.com/22823/bnr_2282270_o.jpg",
//     "https://img9.hkrtcdn.com/22823/bnr_2282268_o.jpg",
//     "https://img5.hkrtcdn.com/22849/bnr_2284864_o.png",
    

// ]

// var i = 0;
// function slide() {
//     document.getElementById("image2").src = images1[i];
//     if (i < images1.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout("slide()", 3000);
// }
// window.onload = slide;

let span = document.getElementById("span")
    let div = document.getElementById("div")
    let x = 0;
    span[1].onclick = () => {
        x++;
        for (let i of div) {
            if (x == 0) {
                i.style.left = "0px";
            }
            if (x == 1) {
                i.style.left = "-740px";
            }
            if (x == 2) {
                i.style.left = "-1480px";
            }
            if (x == 3) {
                i.style.left = "-2220px";
            }
            if (x == 4) {
                i.style.left = "-2960px";
            }
            if (x > 4) {
                x = 4;
            }
        }

    }

    span[0].onclick = () => {
        x--;
        for (let i of div) {
            if (x == 0) {
                i.style.left = "0px";
            }
            if (x == 1) {
                i.style.left = "-740px";
            }
            if (x == 2) {
                i.style.left = "-1480px";
            }
            if (x == 3) {
                i.style.left = "-2220px";
            }

            if (x < 0) {
                x = 0;
            }
        }
    }