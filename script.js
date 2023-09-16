
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

function elementMove(arr) {
    elements = document.querySelectorAll(".sorting-content")
    console.log(arr)
    while (parent.hasChildNodes()) parent.removeChild(parent.firstChild)

    for (var i = 0; i < arr.length; i++) {
        parent.appendChild(arr[i])
    }
}

//sorting functions

async function bubbleSort(arr) {
    var delay = 500

    for (var i = 0; i < arr.length; i++) {
        setTimeout(function () {

            for (var k = 1; k < arr.length; k++) {
                if (arr[k - 1].offsetHeight >= arr[k].offsetHeight) {
                    arr = arrayMove(arr, k - 1, k)
                    elementMove(arr)
                } else {
                    continue;
                }
            }

        }, delay);
        delay += 500
    }

    return arr
}

async function selectionSort(arr) {
    var delay = 200
    var minPos = 0
    
    for (var i = 0; i < arr.length; i++) {
        minPos = i
        console.log(arr)

        var pauseCall = function (j) {
            setTimeout(function() { 
                console.log(i)
            for (var k = i + 1; k < arr.length; k++) {

                console.log(arr[minPos].offsetHeight, i)

                if (arr[minPos].offsetHeight >= arr[k].offsetHeight) {
                    minPos = k
                } else {
                    continue;
                }
            }
            console.log(arr)
            arr = arrayPosition(arr, i, minPos)
            elementMove(arr)
            }, delay);
        }

        pauseCall(i)

        delay += 200
    }
    
    var k = 0

    if (arr[0].offsetHeight > arr[1].offsetHeight){
        console.log("WOWWWW", arr[0], arr[1])
        for(var i = 1; i < arr.length; i++) {
            if(arr[k].offsetHeight >= arr[i].offsetHeight){
                arrayMove(arr, k, i)
                elementMove(arr)
                k++
            }
        }
    }
    return arr
}
console.log(selectionSort(arr))







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
    
                console.log(arr)
                console.log(minPos)

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
