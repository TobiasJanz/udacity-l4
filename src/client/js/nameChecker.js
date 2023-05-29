function checkForName(inputText) {
    if (inputText === undefined || inputText === '') {
        return false;
    }
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }

    return true;
}

export { checkForName }
