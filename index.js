function showAboutInfo() {
  var modal = new bootstrap.Modal(document.getElementById('aboutModal'));
  modal.show();
}

function showMenuInfo(title, description) {
  document.getElementById('menuModalLabel').innerText = title;
  document.getElementById('menuModalBody').innerHTML = `<p>${description}</p>`;
  var modal = new bootstrap.Modal(document.getElementById('menuModal'));
  modal.show();
}
