const clickHandler=()=>{
    event.preventDefault()
    console.log("hello")
    if(document.getElementById("line1").classList.contains("line1-cross")){ document.getElementById("line1").className="line1-hamburger"}else{ document.getElementById("line1").className="line1-cross"
                                                                                                                                              }
    if(document.getElementById("line2").classList.contains("line2-cross")){ document.getElementById("line2").className="line2-hamburger"
                                                                          }else{ document.getElementById("line2").className="line2-cross"}
    if(document.getElementById("line3").classList.contains("line3-cross")){ document.getElementById("line3").className="line3-hamburger"}else{ document.getElementById("line3").className="line3-cross"}
    
  }