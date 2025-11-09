function HavelHakimiStep(arr) {
    arr = arr.map(Number);
    if (arr.every(element => element=== 0)) {
        return 1;
    }
    else if (arr.some(element => element<0 || isNaN(element))) {
        return 0;
    }
    let iter = arr.shift()
    console.log(arr)
    if ((iter> arr.length) ) {
        return 0;
    }
    for (let i = 0; i < iter; i++) {
        arr[i]--;
        if (arr[i] < 0) return 0;
    }
    arr.sort((a, b) => b-a);
    return HavelHakimiStep(arr)
}
function HavelHakimi(){
    const sequenceIn = document.querySelector("[id='Graph']")
    let sequence = sequenceIn.value
    .split(",")
    .map(x => Number(x.trim()));

    let result;
    HavelHakimiStep(sequence) === 1 ? result='This is a simple Graph': result='This is not a simple Graph';

    return result;
}
const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
   const answer = document.querySelector("#answer");
   answer.textContent = HavelHakimi();
});
