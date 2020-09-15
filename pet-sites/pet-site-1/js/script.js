function getFile() {
  document.getElementById("upfile").click();
}

function upd_file_name(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("file-name").innerHTML = fileName[fileName.length - 1];
}