document.addEventListener("DOMContentLoaded", function () {
    var buttonsData = [
        { label: "Emergency \n紧急情况", link: "images/emergencycall.png" },
        { label: "TV Channel \n电视频道", link: "images/tvchannel.png" },
        { label: "Surrounding \n周围环境", link: "images/seaviewhotelmap.png" },
        { label: "Earth Hour \n地球一小时", link: "images/earthhour.png" },
        { label: "Energy Saving \n节能", link: "images/energysaving.png" },
        { label: "Towel Guide \n毛巾指南", link: "images/towelguide.png" }
    ];

    var buttonsContainer = document.getElementById("buttons-container");

    buttonsData.forEach(function (buttonInfo) {
        var button = document.createElement("a");
        button.className = "button";
        button.innerText = buttonInfo.label;
        button.href = buttonInfo.link;
        button.target = "_blank"; // Open link in a new tab
        buttonsContainer.appendChild(button);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Other code for handling buttons...

    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
