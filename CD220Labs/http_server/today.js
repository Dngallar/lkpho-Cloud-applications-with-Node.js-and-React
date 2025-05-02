 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "America/Santiago" Chile
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "America/Santiago"});
    return aestTime; // Return the formatted date and time
};
