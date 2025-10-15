const increaseSpeed = document.getElementById("increaseSpeed");
const decreaseSpeed = document.getElementById("decreaseSpeed");

async function bubbleSort(arr, speed) {
    const maxHeight = Math.max(...arr);
    const containerHeight = 300;
    const bars = document.querySelectorAll(".bar");
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

async function selectionSort(arr, speed) {}

async function insertionSort(arr, speed) {}

async function quickSort(arr, speed) {}

async function mergeSort(arr, speed) {}