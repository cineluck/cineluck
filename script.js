const apiKey = "b0677543f985d49b82736273d298e2bd";
const baseUrl = "https://api.themoviedb.org/3";

const gerarFilmeAleatorio = () => {
  const totalPages = 1000; // Defina um número grande para cobrir todo o banco de dados
  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&language=pt-BR&page=${randomPage}`)
    .then(response => response.json())
    .then(data => {
      const filmes = data.results;
      const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];
      const posterElement = document.querySelector(".poster-container img");
      const nomeElement = document.querySelector("#filme-nome");
      const sinopseElement = document.querySelector("#filme-sinopse");

      posterElement.src = `https://image.tmdb.org/t/p/w500${filmeAleatorio.poster_path}`;
      nomeElement.textContent = filmeAleatorio.title;
      sinopseElement.textContent = filmeAleatorio.overview;
    })
    .catch(error => {
      console.log(error);
    });
};

document.getElementById("gerar").addEventListener("click", gerarFilmeAleatorio);

document.getElementById("tweetar").addEventListener("click", () => {
  const nomeFilme = document.querySelector("#filme-nome").textContent;
  const urlTwitter = `https://twitter.com/compose/tweet?text=Acabei%20de%20aceitar%20uma%20indicação%20do%20@cineluck%20para%20assistir%20"${nomeFilme}"`;
  window.open(urlTwitter);
});

gerarFilmeAleatorio();
