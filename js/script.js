function navOpen() {
    let cont = document.querySelector(".cont");
    let lf = document.querySelector("header");
    let computedStyles = window.getComputedStyle(cont);
  
    if (computedStyles.display === "block") {
      cont.style.display = "none";
    } else if (computedStyles.display === "none") {
      cont.style.display = "block";
    }
  }
  