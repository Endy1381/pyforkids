function navOpen() {
    let cont = document.querySelector(".cont");
    let lf = document.querySelector("#m");
    let computedStyles = window.getComputedStyle(cont);
  
    if (computedStyles.display === "block") {
      cont.style.display = "none";
      lf.style.display = "block"
    } else if (computedStyles.display === "none") {
      cont.style.display = "block";
      lf.style.display = "none"
    }
  }
  