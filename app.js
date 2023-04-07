fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/db')
    .then(response => {
        return response.json();
    })
    .then((movies) => {
        console.log(movies);
        var value = movies;
        var img1 = (value['movies'][0]['Poster']);
        document.getElementById('p1img').src = img1;
        var img2 = (value['movies'][1]['Poster']);
        document.getElementById('p2img').src = img2;
        var img3 = (value['movies'][2]['Poster']);
        document.getElementById('p3img').src = img3;
        var img4 = (value['movies'][3]['Poster']);
        document.getElementById('p4img').src = img4;
        var img5 = (value['movies'][3]['Poster']);
        document.getElementById('p5img').src = img5;
        var first1 = (value['movies'][0]['Title']);
        document.getElementById('name1').innerHTML = first1;
        var first1 = (value['movies'][1]['Title']);
        document.getElementById('name2').innerHTML = first1;
        var first1 = (value['movies'][2]['Title']);
        document.getElementById('name3').innerHTML = first1;
        var first1 = (value['movies'][3]['Title']);
        document.getElementById('name4').innerHTML = first1;
        var first1 = (value['movies'][4]['Title']);
        document.getElementById('name5').innerHTML = first1;
        var year1 = (value['movies'][0]['Year']);
        document.getElementById('year1').innerHTML = year1;
        var year2 = (value['movies'][1]['Year']);
        document.getElementById('year2').innerHTML = year2;
        var year3 = (value['movies'][2]['Year']);
        document.getElementById('year3').innerHTML = year3;
        var year4 = (value['movies'][3]['Year']);
        document.getElementById('year4').innerHTML = year4;
        var year5 = (value['movies'][4]['Year']);
        document.getElementById('year5').innerHTML = year5;

    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.table');
    let l = document.getElementsByTagName('h2');
    for (let i = 0; i < l.length; i++) {
        let a = item[i].getElementsByTagName('h2');
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }

}