// accessing the html elements to add the functionalies
let result=document.querySelector("#result")
let btnContainer=document.querySelector(".container")



// adding the functionalities for button click-- mouse events
btnContainer.addEventListener("click",(e)=>{
    // console.log(e.target.tagName) //opptional to check

    let target=e.target
    // console.log(target) //opptional to check

    if(target.tagName=="INPUT" && target.type=="button"){
        handleInput(target.value)
    }
})


// adding the functionalities for keypress click-- keyboard events
document.addEventListener("keydown",(e)=>{
    // console.log("keyboard:",e)
    let key=e.key
    // console.log("keyboard:",key)
    if((key>="0" && key<="9") || ["+","-","*","/","%","Delete","Enter","Backspace","=","."].includes(key)){
        // console.log(key)
        handleInput(key)
    }


})

// Handiling both keyboard and mouse events
function handleInput(input){
    if(input=="C"||input=="Delete"){
        result.value=""
    }
    else if(input=="Del"||input=="Backspace"){
        result.value=result.value.slice(0,-1);
    }
    else if(input=="="||input=="Enter"){
        // caluculate the values based on the input given by user
        // result.value+=value
        caluculate(result.value)

    }
    else{
        updateScreen(input)
    }

}


// function to update the values on the screen
function updateScreen(value){
    result.value+=value
}


// function for calculating the result
function caluculate(expression){
    result.value=eval(expression)

}