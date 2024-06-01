const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const display = document.getElementById("display");
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    display.innerHTML = `${hours}:${minutes}:${seconds}`;
});

// Update clock every second
setInterval(() => btn.click(), 1000);