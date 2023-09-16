
var elements = document.querySelectorAll(".sorting-content")

var arr = []
var numsArr = []

var parent = document.getElementById("sorting-container")

for (var i = 0; i < elements.length; i++) {
    var ranHeight = Math.floor(Math.random() * 15)

    elements[i].style = `height: ${(ranHeight * 20) + 90}px`
    arr.push(elements[i])
    numsArr.push((ranHeight * 20) + 90)
}

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

//sorting functions

async function bubbleSort(arr) {
    var delay = 50
    var smallDelay = 50

    for (var i = 0; i < arr.length; i++) {

        await sleep(delay)

        for (var k = 1; k < arr.length; k++) {
            await sleep(smallDelay)
            smallDelay += 10

            if (arr[k - 1] >= arr[k]) {
                arr = arrayMove(arr, k - 1, k)
                visualizeArr(arr, k)
                highlightArr(k)
            } else {
                highlightArr(k-1)
                continue;
            }
        }
        delay += 50
    }

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
            smallDelay += 25
            if (arr[minPos] >= arr[k]) {
                selectArr(k)
                minPos = k
            } else {
                highlightArr(k) 
            }
        }

        smallDelay = 25

        if(minPos == i){

        } else {
            arr = arrayPosition(arr, i, minPos)
            visualizeArr(arr, i)
        }

        delay += 50
        smallDelay = 25
    }

    selectArr(-1)

    return arr
}

console.log(selectionSort(numsArr))


//input functions 

function refresh(){
    for (var i = 0; i < elements.length; i++) {
        var ranHeight = Math.floor(Math.random() * 15)
    
        elements[i].style = `height: ${(ranHeight * 20) + 90}px`
        arr.push(elements[i])
        numsArr.push((ranHeight * 20) + 90)
    }

    console.log(selectionSort(numsArr))
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


