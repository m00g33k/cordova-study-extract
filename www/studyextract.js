/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    },
    extractFromFile: function (folderPath, fileName, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "StudyExtract", "extractFromFile", [folderPath, fileName]);
    }
};