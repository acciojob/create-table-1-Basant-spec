function insert_Row() {
    // Get a reference to the table using its id
    const table = document.getElementById("sampleTable");

    // Create a new row element
    const newRow = table.insertRow(0); // Insert at index 0 (top of the table)

    // Create the left cell and set its content
    const cell1 = newRow.insertCell(0); // Insert a cell at index 0
    cell1.textContent = "New Cell1"; // Set the text content

    // Create the right cell and set its content
    const cell2 = newRow.insertCell(1); // Insert a cell at index 1
    cell2.textContent = "New Cell2"; // Set the text content
}
