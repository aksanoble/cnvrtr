function init() {
  document
    .getElementById("fileInput")
    .addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  console.log(event);
  document.getElementById("fileContent").textContent = event.target.result;
}

$.getScript(
  "https://cdn.jsdelivr.net/gh/aksanoble/cnvrtr-csv-yaml@main/index.js",
  function(data, textStatus, jqxhr) {
    console.log(convert());
    console.log("Done");
  }
);
