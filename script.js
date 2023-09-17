
var elements = document.querySelectorAll(".sorting-content")
var arrayElement = document.getElementById("sorting-array")

var arr = []
var numsArr = []

var stopAlgo = false
var curSortMethod = "selection"

for (var i = 0; i < elements.length; i++) {
    var ranHeight = Math.floor(Math.random() * 15)

    elements[i].style = `height: ${(ranHeight * 20) + 90}px`
    arr.push(elements[i])
    numsArr.push((ranHeight * 20) + 90)
}

stop()

const DEF_DELAY = 1000;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
  }

function arrayMove(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};

function arrayPosition(arr, old_index, new_index){

    if(old_index > new_index) {
        var temp = old_index

        old_index = new_index
        new_index = temp
    }

    var newIndexVal = arr[new_index]

    arr.splice(new_index-1, 1, arr.splice(old_index, 1)[0]);
    arr.splice(old_index, 0, newIndexVal)
    return arr
}

//to update hieghts AKA order of array on screen
function visualizeArr(arr){

    for(var i = 0; i < elements.length; i++){
        elements[i].style=`height: ${arr[i]}px;`
        elements[i].classList.remove("highlighted")
    }

    arrayElement.innerHTML = ""
    var tempArr = []
    for(var val of arr){
        if((val-90)/20 < 10){
            arrayElement.innerHTML+=`<div>  &nbsp${((val-90)/20)}<div/>`
        } else {
            arrayElement.innerHTML+=`<div>${((val-90)/20)}<div/>`
        }
    }
}

function cleanClasses(){
    for(var i = 0; i < elements.length; i++){
        elements[i].classList.remove("highlighted")
        elements[i].classList.remove("selected")
        elements[i].classList.remove("success")
    }
}

//for when an algorythm is going over multiple indexs
function highlightArr(cur){
    for(var i = 0; i < elements.length; i++){
        if(i == cur){
            elements[i].classList.add("highlighted")
        } else {
            elements[i].classList.remove("highlighted")
        }
    }
}

//for an algorythm keeps a index stored for later
function selectArr(cur){
    for(var i = 0; i < elements.length; i++){
        if(i == cur){
            elements[i].classList.add("selected")
        } else {
            elements[i].classList.remove("selected")
        }
    }
}

//for when array is sorted
async function isSorted(arr){
    var chain = 0

    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] <= arr[i+1]){
            console.log(chain, arr)
            chain++
        }
    }

    if(chain == arr.length-1){
        stopAlgo = true
        cleanClasses()
        await sleep(200)
        success(arr)
    }
}

async function success(arr){
    var delay = 20

    for (let index = 0; index < arr.length; index++) {
        cleanClasses()
        elements[index].classList.add("success")
        await sleep(delay)
        delay += i
    }
    cleanClasses()
}

//sorting functions

async function bubbleSort(arr) {
    var delay = 50
    var smallDelay = 50

    //see if the array is in correct order
    var ticker = true

    for (var i = 0; i < arr.length; i++) {

        await sleep(delay)

        for (var k = 1; k < arr.length; k++) {
            await sleep(smallDelay)

            if (arr[k - 1] >= arr[k]) {
                arr = arrayMove(arr, k - 1, k)
                visualizeArr(arr, k)
                highlightArr(k)

                ticker = false
            } else {
                highlightArr(k-1)
                continue;
            }

            if(stopAlgo == true){
                return
            }
        }

        isSorted(arr)
    }

    cleanClasses()

    return arr
}

async function selectionSort(arr) {
    var delay = 200
    var smallDelay = 50
    var minPos = 0

    for (var i = 0; i < arr.length; i++) {
        minPos = i
        console.log(i, arr.length)
        
        await sleep(delay)

        for (var k = i + 1; k < arr.length; k++) {
            await sleep(smallDelay)
            if (arr[minPos] >= arr[k]) {
                selectArr(k)
                minPos = k
            } else {
                highlightArr(k) 
            }

            if(stopAlgo == true){
                return
            }
        }

        smallDelay = 25

        if(minPos == i){

        } else {
            arr = arrayPosition(arr, i, minPos)
            visualizeArr(arr, i)
        }
        smallDelay = 25
        isSorted(arr)
    }

    cleanClasses()

    return arr
}


//input functions 

async function stop(){

    arr = []
    numsArr = []
    stopAlgo = true

    await sleep(500)

    for (var i = 0; i < elements.length; i++) {
        
        elements[i].classList.remove("selected")
        elements[i].classList.remove("highlighted")

        elements[i].style = `height: ${(1 * 20) + 90}px`
        arr.push(elements[i])
        numsArr.push((ranHeight * 20) + 90)
    }
}

async function go(){

    arr = []
    numsArr = []

    selectArr(-1)
    highlightArr(-1)

    stopAlgo = false

    for (var i = 0; i < elements.length; i++) {
        var ranHeight = Math.floor(Math.random() * 15)
    
        elements[i].style = `height: ${(ranHeight * 20) + 90}px`
        arr.push(elements[i])
        numsArr.push((ranHeight * 20) + 90)
    }

    if(curSortMethod == "selection"){
        console.log(selectionSort(numsArr))
    } else if(curSortMethod == "bubble"){
        console.log(bubbleSort(numsArr))
    } else if(curSortMethod === "quick"){
    }
}

function switchSortMethod(method){
    curSortMethod = method

    document.querySelector(".selectedMethod") ? document.querySelector(".selectedMethod").classList.remove("selectedMethod")  : "";
    document.getElementById(method).classList.add("selectedMethod")
    console.log(method)

}






//store all functional sorting methods here, while sorting methods used to order divs will be above

function bubbleSortArray(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var k = 1; k < arr.length; k++) {
            if (arr[k - 1] >= arr[k]) {
                arr = arrayMove(arr, k - 1, k)
            } else {
                continue;
            }
        }
    }

    return arr
}

async function selectionSortArray(arr) {
        var delay = 1000
        var minPos = 0
    
        for (var i = 0; i < arr.length; i++) {
            minPos = i
    
            for (var k = i + 1; k < arr.length; k++) {

                if (arr[minPos] >= arr[k]) {
                    minPos = k
                } else {
                    continue;
                }
            }

            if(minPos == i){

            } else {
                arr = arrayPosition(arr, i, minPos)
            }
    
            delay += 1000
        }
    
        return arr
}


