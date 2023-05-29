function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const valid = Client.checkForName(formText)
    if (!valid) {
        alert("Please enter a valid text");
        return;
    }
    console.log("::: Form Submitted :::");

    fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        // Get the results div
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        const fragment = document.createDocumentFragment();

        // Create the first paragraph element
        const subjectivityParagraph = document.createElement("p");
        subjectivityParagraph.textContent = `Subjectivity: ${res.subjectivity}`;
        fragment.appendChild(subjectivityParagraph);

        // Create the second paragraph element
        const textParagraph = document.createElement("p");
        textParagraph.textContent = `Text: ${res.text}`;
        fragment.appendChild(textParagraph);

        resultsDiv.appendChild(fragment);

    })
}

export { handleSubmit }
