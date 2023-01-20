// slide window for advertisement image

var image = [

    "https://img3.hkrtcdn.com/22847/bnr_2284672_o.jpg",
    "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
    "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
    "https://img5.hkrtcdn.com/22848/bnr_2284744_o.jpg",
    "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
    "https://img7.hkrtcdn.com/22852/bnr_2285166_o.jpg",

]

var i = 0;
function slideshow() {
    document.getElementById("image").src = image[i];
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 2000);
}
window.onload = slideshow;



var image1 = [

    "https://img3.hkrtcdn.com/22847/bnr_2284672_o.jpg",
    "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
    "https://img9.hkrtcdn.com/22822/bnr_2282198_o.jpg",
    "https://img5.hkrtcdn.com/22848/bnr_2284744_o.jpg",
    "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
    "https://img7.hkrtcdn.com/22852/bnr_2285166_o.jpg",

]

var j = 0;
function slide() {
    document.getElementById("image-1").src = image1[j];
    if (j < image1.length - 1) {
        j++;
    } else {
        j = 0;
    }
    setTimeout("slide()", 2000);
}
// window.onload = slide;
slide();

var image2 = [

    "https://img9.hkrtcdn.com/22826/bnr_2282538_o.jpg",
    "https://img9.hkrtcdn.com/22826/bnr_2282538_o.jpg",
    "https://img1.hkrtcdn.com/22849/bnr_2284810_o.jpg",

]

var k = 0;
function slider() {
    document.getElementById("image-2").src = image2[k];
    if (k < image2.length - 1) {
        k++;
    } else {
        k = 0;
    }
    setTimeout("slider()", 2000);
}
// window.onload = slide;
slider();

