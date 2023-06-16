const apiKey = "b0677543f985d49b82736273d298e2bd";
const baseUrl = "https://api.themoviedb.org/3";

const gerarFilmeOuSerieAleatoria = () => {
  const totalPages = 1000; // Defina um número grande para cobrir todo o banco de dados
  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  const mediaTypes = ["movie", "tv"];
  const randomMediaType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];

  const apiEndpoint = `${baseUrl}/discover/${randomMediaType}?api_key=${apiKey}&language=pt-BR&page=${randomPage}`;

  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      const mediaAleatoria = results[Math.floor(Math.random() * results.length)];
      const posterElement = document.querySelector(".poster-container img");
      const nomeElement = document.querySelector("#filme-nome");
      const sinopseElement = document.querySelector("#filme-sinopse");

      posterElement.src = `https://image.tmdb.org/t/p/w500${mediaAleatoria.poster_path}`;
      nomeElement.textContent = mediaAleatoria.title || mediaAleatoria.name;
      sinopseElement.textContent = mediaAleatoria.overview;

      // Habilitar ou desabilitar o botão "Falta Sinopse" com base na presença de sinopse
      const faltaSinopseButton = document.getElementById("pesquisar-sinopse");
      faltaSinopseButton.disabled = !mediaAleatoria.overview;
    })
    .catch(error => {
      console.log(error);
    });
};

document.getElementById("gerar").addEventListener("click", gerarFilmeOuSerieAleatoria);

document.getElementById("tweetar").addEventListener("click", () => {
  const nomeFilme = document.querySelector("#filme-nome").textContent;
  const urlTwitter = `https://twitter.com/compose/tweet?text=Acabei%20de%20aceitar%20uma%20indicação%20do%20@cineluck%20para%20assistir%20"${nomeFilme}"`;
  window.open(urlTwitter);
});

document.getElementById("pesquisar-sinopse").addEventListener("click", () => {
  const nomeFilme = document.querySelector("#filme-nome").textContent;
  const urlPesquisa = `https://www.google.com/search?q=${encodeURIComponent(
    nomeFilme + " sinopse"
  )}`;
  window.open(urlPesquisa, "_blank");
});

gerarFilmeOuSerieAleatoria();
