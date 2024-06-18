const fileInputRec = document.getElementById("fileInputRec");
const messageDivRec = document.getElementById("messageRec");
const downloadLinksDiv = document.getElementById("downloadLinks");
let files = [];

fileInputRec.addEventListener("change", () => {
  const newFiles = Array.from(fileInputRec.files);

  if (files.length + newFiles.length > 3) {
    alert("You can only upload a maximum of 3 files.");
  }

  files = files.concat(newFiles).slice(0, 3);
  fileInputRec.value = "";

  updateMessage();
  updateDownloadLinks();
});

function updateMessage() {
  const fileCount = files.length;
  if (fileCount === 1) {
    messageDivRec.textContent = "1 file available";
  } else if (fileCount === 2) {
    messageDivRec.textContent = "2 files available";
  } else if (fileCount === 3) {
    messageDivRec.textContent = "3 files available";
  } else {
    messageDivRec.textContent = "No files uploaded.";
  }
}

function updateDownloadLinks() {
  downloadLinksDiv.innerHTML = "";
  files.forEach((file, index) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.textContent = `Download ${file.name}`;
    link.classList.add("download-link");
    link.style.display = "block";
    downloadLinksDiv.appendChild(link);
  });
}

//
//
const fileInputEssay = document.getElementById("fileInputEssay");
const messageDivEssay = document.getElementById("messageEssay");

fileInputEssay.addEventListener("change", () => {
  if (fileInputEssay.files.length > 0) {
    messageDivEssay.textContent = `${fileInputEssay.files[0].name} has been uploaded.`;
    fileInputEssay.disabled = true;
  }
});

