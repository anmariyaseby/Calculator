// function to display content
function displaycontent(content){
    result.value += content
}
// function to clear
function calcclear(){
    result.value = ""
}
//result
function calcoutput(){
    result.value=eval(result.value)
}
// remove last digit
function calcremove(){
    result.value=result.value.slice(0,-1)
}