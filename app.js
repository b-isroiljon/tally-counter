let count = 0;
let limit;

document.getElementById('discrement').onclick = function () {
    count++;
    const val = limit ? `${count}/${limit}` : count
    document.getElementById('number').innerHTML = val;
}
document.getElementById('increment').onclick = function () {
    count--;
    const val = limit ? `${count}/${limit}` : count
    document.getElementById('number').innerHTML = val;
}
document.getElementById('reset').onclick = function () {
    count = 0;
    const val = limit ? `${count}/${limit}` : count
    document.getElementById('number').innerHTML = val;
}

var btn = document.getElementById("btn-33");
btn.addEventListener("click", function () {
    this.classList.add("active");
});

document.getElementById('btn-33').addEventListener('click', () => {
    if (limit !== 33) {
        limit = 33;
        document.getElementById('number').innerHTML = `${count}/${limit}`;
    } else {
        limit = undefined;
        document.getElementById('number').innerHTML = count;
    }
})

document.getElementById('btn-99').addEventListener('click', () => {
    if (limit !== 9) {
        limit = 99;
        document.getElementById('number').innerHTML = `${count}/${limit}`;
    } else {
        limit = undefined;
        document.getElementById('number').innerHTML = count;
    }
})

document.getElementById('btn-inf').addEventListener('click', () => {
    limit = undefined;
    document.getElementById('number').innerHTML = count;
})
document.getElementById('limit').addEventListener('click', () => {
    console.log('limit', limit);
})
