        let selectfield = document.getElementById("selectfield");
        let selecttext = document.getElementById("selecttext");
        let options = document.getElementsByClassName("options");
        let list =document.getElementById('list');
        let arrow= document.getElementById('arrowicon')
        selectfield.onclick= function(){
                list.classList.toggle("hide");
                arrowicon.classList.toggle("rotate");
        }
        for (option of options) {
            option.onclick = function () {
                selecttext.innerHTML = this.textContent;
                list.classList.toggle("hide");
                arrowicon.classList.toggle("rotate");
            };
        }
