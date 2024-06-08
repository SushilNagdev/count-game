const randomNumberGenerator=() => {
    return Math.ceil(Math.random()*20)

};


let correctNumber=randomNumberGenerator()

const checkHandler=()=>{
    // const inputvalue=document.querySelector('#userAnswer')
    // console.log(inputvalue,"===>");

}
const characterHandler=()=>{

    const inputvalue=document.querySelector("#userAnswer");
    console.log(inputvalue.ariaValueMax.length);
};
const keyHandler=()=>{
    const inputvalue=document.querySelector("#userAnswer");
    console.log(inputvalue.value.length);
    if (inputvalue.value.length>2){
        console.log('asdasdasdasd')
        inputvalue.value=inputvalue.value.slice(0,2);
    }


}