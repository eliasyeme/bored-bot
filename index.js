function getRandomColor() {
    const colorList = [
        "#ffb703",
        "#fb8500",
        "#8ecae6",
        "#e9edc9",
        "#dda15e",
        "#2a9d8f",
        "#fdf0d5",
        "#06d6a0",
        "#b7b7a4",
        "#e5989b",
        "#e7c6ff",
    ]

    return colorList[Math.floor(Math.random() * colorList.length)]
}

document.getElementById('get-activity').addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            const activityEl = document.getElementById('activity')
            activityEl.style.color = getRandomColor()
            activityEl.textContent = data.activity
        })
    console.log(getRandomColor())
})
