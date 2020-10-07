const es = require('./langrepo.js').es;
const en = require('./langrepo.js').en;

function getLocalizedAlert(alert) {
    let lang = sessionStorage.getItem("lang");
    if(!lang) {
        lang = es;
        sessionStorage.setItem("lang", JSON.stringify(lang));
        return lang[alert];
    }
    else {
        return JSON.parse(lang)[alert];
    }
}

exports.getLocalizedAlert = getLocalizedAlert;