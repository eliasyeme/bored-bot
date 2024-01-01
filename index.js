function getRandomColor() {
    const colorList = [
        "#ffb703",
        "#fb8500",
        "#8ecae6",
        "#dda15e",
        "#2a9d8f",
        "#06d6a0",
        "#b7b7a4",
        "#e5989b",
        "#e7c6ff",
    ]

    return colorList[Math.floor(Math.random() * colorList.length)]
}

function getBg() {
    const deg = Math.floor(Math.random() * 360)
    return `linear-gradient(${deg}deg, rgba(0,0,0,1) 0%, rgba(37,37,37,1) 100%)`
}
document.getElementById('get-activity').addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            const activityEl = document.getElementById('activity')
            activityEl.style.color = getRandomColor()
            activityEl.textContent = data.activity
            document.querySelector('body').style.background = getBg()
        })
})
