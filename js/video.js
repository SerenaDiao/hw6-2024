var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// Get the video element


    // Turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;

    // Ensure changes are reflected in the DOM attributes
    video.removeAttribute("autoplay");
    video.removeAttribute("loop");

    console.log("Autoplay and looping turned off");

	// Add event listener to the Play button
    document.querySelector("#play").addEventListener("click", function () {
        console.log("Play Video");

        // Play the video
        video.play();

        // Update the volume information
        var volumeInfo = document.querySelector("#volume");
        volumeInfo.textContent = Math.round(video.volume * 100) + "%";
        console.log("Volume is: " + Math.round(video.volume * 100) + "%");
    });

    // Add event listener to the Pause button
    document.querySelector("#pause").addEventListener("click", function () {
        console.log("Pause Video");

        // Pause the video
        video.pause();
    });

    //Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
    document.querySelector("#slower").addEventListener("click", function () {
        console.log("Slow Down Video");

        // Slow down the video
        video.playbackRate *= 0.9;
        console.log("New speed is: " + video.playbackRate);
    });

    //Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
    document.querySelector("#faster").addEventListener("click", function () {
        console.log("Speed Up Video");

        // Speed up the video
        video.playbackRate /= 0.9;
        console.log("New speed is: " + video.playbackRate);
    });

    //skip ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
    document.querySelector("#skip").addEventListener("click", function () {
        console.log("Skip Ahead");

        // Skip ahead the video
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current location of the video is: " + video.currentTime);
    });

    //Mute/unmute the video and update the text in the button.
    document.querySelector("#mute").addEventListener("click", function () {
        console.log("Mute/Unmute Video");

        // Mute/Unmute the video
        if (video.muted) {
            video.muted = false;
            document.querySelector("#mute").textContent = "Mute";
            console.log("Unmuted");
        } else {
            video.muted = true;
            document.querySelector("#mute").textContent = "Unmute";
            console.log("Muted");
        }
    });

    //Change the volume based on the slider and update the volume information.
    document.querySelector("#slider").addEventListener("change", function () {
        console.log("Change Volume");

        // Change the volume
        video.volume = this.value / 100;
        console.log("New volume is: " + this.value);

        // Update the volume information
        var volumeInfo = document.querySelector("#volume");
        volumeInfo.textContent = this.value + "%";
    });

    //Styled: Utilize the existing oldSchool class on the video element
    document.querySelector("#vintage").addEventListener("click", function () {
        console.log("Vintage Video");

        // Add the oldSchool class to the video element
        video.classList.add("oldSchool");
    });

    //Remove the oldSchool class from the video.
    document.querySelector("#orig").addEventListener("click", function () {
        console.log("Original Video");

        // Remove the oldSchool class from the video element
        video.classList.remove("oldSchool");
    });
});



