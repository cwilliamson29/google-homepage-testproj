            const btn = document.querySelector("button");
            
            const txt = document.querySelector('p');
            

            btn.addEventListener('click', updateBtn);

            function updateBtn() {
                if (btn.textContent == "Google Search") {
                    btn.textContent = "ODIN SEARCH";
                    txt.textContent = "I'm sorry, Dave, I'm afraid I can't do that.";
                } else {
                    btn.textContent = "Google Search";
                    txt.textContent = " ";
                }
            }

            const button = document.querySelector('#button2');

            button.onclick = function(){
                alert("I'm sorry, Dave, I'm afraid I can't do that.");
            }