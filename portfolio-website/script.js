// startup name animation
const ps = document.querySelectorAll(".cls-1");

        ps.forEach(drawLetters);

        function drawLetters (item, index){
            setTimeout(function(){
                item.classList.add("draw");
            }, index * 1000);
        }
