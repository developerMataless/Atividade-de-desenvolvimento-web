document.addEventListener("DOMContentLoaded", function () {
    const Gerardog = document.getElementById("gerarImage");
    const img = document.getElementById("img");

    Gerardog.addEventListener("click", function () {

        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(res => res.json())
            .then((res) => {
                img.src = res.message
                content.appendChild(img)
            })

            .catch(err => {
                console.log(console.log(err));
            });
    });
});

