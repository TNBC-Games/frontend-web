

export const isLogin = () => {
    if (sessionStorage.getItem("accesstoken") && sessionStorage.getItem("userEmail") ) {
      return true;
    }
    return false;
};

export const getHumanDate = (isoformat) => {
    var readable = new Date(isoformat); // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 GMT-0400 (Eastern Daylight Time)"
    var m = readable.getMonth(); // returns 6 (note that this number is one less than the number of the month in isoformat)
    var d = readable.getDate(); // returns 15
    var y = readable.getFullYear(); // returns 2012

    // we define an array of the months in a year
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    // we get the text name of the month by using the value of m to find the corresponding month name
    var mlong = months[m];
    return mlong + " " + d + ", " + y;
};


export const fallbackCopyTextToClipboard = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
};

export const copyTextToClipboard = (text) => {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () { },
        function (err) {
            console.error("Async: Could not copy text: ", err);
        }
    );
};