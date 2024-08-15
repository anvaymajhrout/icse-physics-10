document.getElementById('burger').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('sidebar').style.left = '0';
    } else {
        document.getElementById('sidebar').style.left = '-250px';
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('burger').checked = false;
});
