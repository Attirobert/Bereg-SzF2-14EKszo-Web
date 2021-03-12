function change(a) {
    let b = a.getAttribute("value");
    let c = document.getElementsByTagName("link");
    c[0].setAttribute("href", `02-${b}.css`);
}