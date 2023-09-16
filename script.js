
var elements = document.querySelectorAll(".sorting-content")

var arr = []
var parent = document.getElementById("sorting-container")

for (var i = 0; i < elements.length; i++) {
    var ranHeight = Math.floor(Math.random() * 15)

    elements[i].style = `height: ${(ranHeight * 20) + 90}px`
    arr.push(elements[i])
}

function arrayMove(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};

function elementMove(arr) {
    while (parent.hasChildNodes()) parent.removeChild(parent.firstChild)

    for (var i = 0; i < arr.length; i++) {


        parent.appendChild(arr[i])
    }
}

//sorting functions

async function bubbleSort(arr) {
    var delay = 1000

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
        delay += 1000
    }

    return arr
}

async function selectionSort(arr) {
    var delay = 1000
    var minPos = 0
    var sortedBorder = 0

    for (var i = 0; i < arr.length; i++) {
        setTimeout(function () {

            for (var k = sortedBorder; k < arr.length; k++) {
                if (arr[minPos].offsetHeight >= arr[k].offsetHeight) {
                    minPos = k
                } else {
                    continue;
                }
            }

            arr = arrayMove(arr, sortedBorder, minPos)
            console.log(arr)

        }, delay);

        sortedBorder++
        delay += 1000
    }

    return arr
}

console.log(bubbleSort(arr))







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