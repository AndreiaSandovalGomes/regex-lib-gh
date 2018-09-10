function getStringsByRegExp(string, regexp){
    return string.match(regexp);
}

function getTexts(string){
    return getStringsByRegExp(string.toString(), /(?<=\[)(.*?)(?=\])/g);
}

function getHrefs(string){
    return getStringsByRegExp(string.toString(), /(?<=\()(http.*?)(?=\))/g);
}

function processString(string) {
    const links = [];
    for (i in getTexts(string)) {
        links.push({href: getHrefs(string)[i], text: getTexts(string)[i]});      
    }
    return links;
}

function getLinksFromMd(string){
    return processString(string);
}

module.exports = getLinksFromMd;