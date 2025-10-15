const increaseSpeed = document.getElementById("increaseSpeed");
const decreaseSpeed = document.getElementById("decreaseSpeed");
const containerHeight = 300;

async function bubbleSort(arr, speed) {
    const bars = document.querySelectorAll(".bar");
    const maxHeight = Math.max(...arr);
    let swapped = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            decreaseSpeed.onclick = () => (speed < 1000 && (speed += 100));
            increaseSpeed.onclick = () => (speed >= 100 && (speed -= 100));
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                bars[j].style.height = `${arr[j] < 0 ? 0 : ((arr[j] / maxHeight) * containerHeight)}px`;
                bars[j].previousElementSibling.innerHTML = arr[j];
                bars[j + 1].style.height = `${arr[j + 1] < 0 ? 0 : ((arr[j + 1] / maxHeight) * containerHeight)}px`;
                bars[j + 1].previousElementSibling.innerHTML = arr[j + 1];
                swapped = 1;
            }
            await new Promise(r => setTimeout(r, speed));
            bars[j].style.background = "cyan";
            bars[j + 1].style.background = "cyan";
        }
        if (!swapped)
            break ;
    }
}

async function selectionSort(arr, speed) {
    const bars = document.querySelectorAll(".bar");
    const maxHeight = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        bars[minIndex].style.background = "orange";
        for (let j = i + 1; j < arr.length; j++) {
            increaseSpeed.onclick = () => (speed >= 100 && (speed -= 100));
            decreaseSpeed.onclick = () => (speed < 1000 && (speed += 100));
            bars[j].style.background = "red";
            await new Promise(r => setTimeout(r, speed));
            if (arr[j] < arr[minIndex]) {
                bars[minIndex].style.background = "cyan";
                minIndex = j;
                bars[minIndex].style.background = "orange";
            } else
                bars[j].style.background = "cyan";
        }
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            bars[minIndex].previousElementSibling.innerHTML = arr[minIndex];
            bars[minIndex].style.height = `${arr[minIndex] < 0 ? 0 : ((arr[minIndex] / maxHeight) * containerHeight)}px`
            bars[i].previousElementSibling.innerHTML = arr[i];
            bars[i].style.height = `${arr[i] < 0 ? 0 : ((arr[i] / maxHeight) * containerHeight)}px`;
        }
        bars[i].style.background = "cyan";
    }
}

async function insertionSort(arr, speed) {}

async function quickSort(arr, speed) {}

async function mergeSort(arr, speed) {}