function fetchRandomDogImage() {
    $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        var imgurl = data.message;
        $('#img').attr('src', imgurl);
    })
}


$('#btn').click(fetchRandomDogImage);