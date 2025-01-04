var toggleButon = document.getElementById('toogle-skills');
var skills = document.getElementById('Skills');
toggleButon.addEventListener("click", function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
