var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;

    // Play
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        let slider = document.getElementById("slider");
        let volDisplay = document.getElementById("volume");
        video.volume = slider.value / 100;
        volDisplay.textContent = slider.value + "%";
    });

    // Pause
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
    });

    // Slow
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed:", video.playbackRate.toFixed(5));
    });

    // Speed
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed:", video.playbackRate.toFixed(5));
    });

    // Skip
    document.getElementById("skip").addEventListener("click", function() {
        video.currentTime += 10;
        if (video.currentTime > video.duration) video.currentTime = 0;
        console.log("Current location:", video.currentTime.toFixed(2));
    });

    // Mute
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").textContent = this.value + "%";
    });

    // Vintage
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
}); 