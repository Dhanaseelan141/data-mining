function sendURL(){
    const url = document.getElementById("url_address").value;

    fetch ('/process_url', {
        method: 'POST',
        headers: {
            'Content-Type' :'application/json',

        },
        body: JSON.stringify({url:url}),

    })
    .then(responsw => response.json())
    .then(data => {
        document.getElementById("titles").innerText = data.paragraph;
    })

}
