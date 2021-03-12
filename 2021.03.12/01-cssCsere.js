function changeCss(p) {
    let f = p.getAttribute("id");

    switch (f) {
        case "itm1":
            document.getElementById("bdy").className = "main1";
            break;
    
        case "itm2":
            document.getElementById("bdy").className = "main2";
            break;
    
        case "itm3":
            document.getElementById("bdy").className = "main3";
            break;
    
        case "itm4":
            document.getElementById("bdy").className = "main4";
            break;
    
        default:
            break;
    }
}