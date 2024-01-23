(function(){

    let button = document.querySelector('.button');
    let colorText = document.querySelector('.colorText')
    
    const newColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    button.addEventListener('click',function(){
        let hexColorRep = "#";
        for (let i = 0; i < 6; i++){
        
        const randomIndex = Math.floor(Math.random()*newColors.length)
        const randomColor = newColors[randomIndex];
        hexColorRep+=randomColor;}
            
        document.body.style.backgroundColor = hexColorRep;
        colorText.textContent = "Background color: " + hexColorRep;
    });

})();