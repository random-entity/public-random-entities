// Get ToC div
toc = document.getElementById("ToC");

//Add a header
tocHeader = document.createElement("h2");
tocHeader.innerText = "목차";
toc.appendChild(tocHeader);

// Create a list for the ToC entries
tocList = document.createElement("ol");

// Get the h3 tags - ToC entries
headers = document.getElementsByTagName("h1");

// For each h3
for (i = 0; i < headers.length; i++) {

    // Create an id
    headerId = "h1_" + i;
    headers[i].id = headerId;

    // a list item for the entry
    tocListItem = document.createElement("li");

    // a link for the h3
    tocEntry = document.createElement("a");
    tocEntry.setAttribute("href", "#" + headerId);
    tocEntry.innerText = headers[i].innerText;

    tocListItem.appendChild(tocEntry);
    tocList.appendChild(tocListItem);
}

toc.appendChild(tocList);