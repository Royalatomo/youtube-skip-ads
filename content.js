if (location.href.split('/')[2] === "www.youtube.com") {
    // Removing Video Ads Withing 2 seconds
    setInterval(() => {
        if (document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0]) {
            document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click()
            console.log("Removed Video Ad")
        }
    }, 2000)


    // Removing Overlay Ads withing 2 seconds
    setInterval(() => {
        if (document.getElementsByClassName('ytp-ad-overlay-close-button')[0]) {
            document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click()
            console.log("Removed Overlay Ad")
        }
    }, 2000)
}