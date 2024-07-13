function processor(transmission) {
    transmission = transmission.trim();
    if (transmission.indexOf("::") < 0 || (transmission.lastIndexOf("::")) > transmission.indexOf("::")) {
        //Data is invalid
        return -1;
    }
    let parts = transmission.split("::");
    let id = parts[0];
    let rawData = parts[1];
    if (rawData[0] !== "<") {
        rawData = -1;
    }
    id = Number(id);
    if (isNaN(id)) {
        id = -1;
    }
    // rawData = rawData.replace('<', '');
    // rawData = rawData.replace('>', '');
    // rawData = Number(rawData);
    // if (isNaN(rawData)) {
    //     rawData = -1;
    // }
    return {
        id: id,
        rawData: rawData
    };
}

module.exports = processor;


// lines 17-22 excluded until I get answer on requirement #6 and part 4