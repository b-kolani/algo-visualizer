const visualizer = document.getElementById("visualizer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const algoSelect = document.getElementById("algoSelect");
const sizeInput = document.getElementById("size");
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");



let array = [];
let speed = 1000;
let min = 0;
let max = 100;
let size;

sizeInput.onchange = () => {
    size = parseInt(sizeInput.value);
    generateArray(size);
}

minInput.onchange = () => {
    min = parseInt(minInput.value);
    generateArray(size);
}
maxInput.onchange = () => {
    max = parseInt(maxInput.value);
    generateArray(size);
}

function generateArray(size = 20) {
    array = Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    displayArray();
}

function displayArray() {
    visualizer.innerHTML = "";
    const maxHeight = Math.max(...array);
    const containerHeight = 300;
    array.forEach(number => {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        const value = document.createElement("span");
        value.innerText = number;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        const height = (number / maxHeight) * containerHeight;
        bar.style.height = `${height < 0 ? 0 : height}px`;
        container.appendChild(value);
        container.appendChild(bar);
        visualizer.appendChild(container);
    });
}

resetBtn.onclick = () => {
    sizeInput.value = "";
    minInput.value = "";
    maxInput.value = "";
    size = 50;
    min = 0;
    max = 100;
    generateArray();
} 

startBtn.onclick = () => {
    const value = algoSelect.value;
    switch (value) {
        case "bubble":
            bubbleSort(array, speed);
            break;
        case "insertion":
            insertionSort(array, speed);
            break;
        case "quick":
            quickSort(array, speed);
            break;
        case "selection":
            selectionSort(array, speed);
            break;
        case "merge":
            mergeSort(array, speed);
            break;
    }
}


generateArray(size);
