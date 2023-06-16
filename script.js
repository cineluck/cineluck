// script.js
var filmes = [
    {
      nome: 'Homem-Aranha: Através do Aranhaverso (2023)',
      urlPoster: 'https://image.tmdb.org/t/p/w342/6a7NItazspSV8Fl7u46ccxwPKk4.jpg',
      sinopse: 'Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy e uma nova equipe de Homens-Aranha para enfrentar com um vilão mais poderoso do que qualquer coisa que eles já encontraram.'
    },
    {
      nome: 'Velozes & Furiosos 10 (2023)',
      urlPoster: 'https://image.tmdb.org/t/p/w342/nxrmpkwVdmiVAiRTqSSC2SateN2.jpg',
      sinopse: 'Ao longo de muitas missões e contra probabilidades impossíveis, Dom Toretto e sua família foram mais espertos, mais nervosos e superaram todos os inimigos em seu caminho. Agora, eles enfrentam o oponente mais letal que já enfrentaram: uma ameaça terrível emergindo das sombras do passado, alimentada por vingança de sangue e determinada a destruir esta família e destruir tudo - e todos - que Dom ama, para sempre.'
    },
     {
      nome: 'Dá Tempo ao Tempo (2013)',
      urlPoster: 'https://images.justwatch.com/poster/190107318/s592/questao-de-tempo',
      sinopse: 'Aos 21 anos, Tim Lake descobre que consegue viajar no tempo… Após mais uma insatisfatória festa de Ano Novo, o pai de Tim revela-lhe que os homens da sua família sempre tiveram a capacidade de viajar no tempo. Tim não pode mudar a história, mas consegue alterar o que acontece ou aconteceu na sua própria vida - então, decide tornar o seu mundo um lugar melhor… arranjando uma namorada. Infelizmente, esse feito tornou-se mais complicado do que previa. Ao mudar-se de Cornwall para Londres, para estudar advocacia, Tim finalmente conhece a belíssima, mas insegura, Mary. Apaixonam-se, mas um lamentável incidente nas viagens pelo tempo faz com que ele nunca a tenha conhecido. Assim, voltam a encontrar-se pela primeira vez, várias vezes, até que, finalmente, depois de muita astúcia a viajar no tempo, ele conquista o seu coração.'
    },
    {
      nome: 'Tokyo Revengers (2021)',
      urlPoster: 'https://images.justwatch.com/backdrop/302216269/s640',
      sinopse: 'Takemichi Hanagaki é um freelancer que atingiu o abismo absoluto de desespero em sua vida. Ele descobre que a única namorada que já teve, no ensino médio, Hinata Tachibana, foi morta pela implacável gangue Tokyo Manji. Um dia depois de saber de sua morte,
ele está parado na plataforma da estação e acaba sendo empurrado para os trilhos por uma manada de pessoas. Ele fecha os olhos pensando que está prestes a morrer, mas quando abre os olhos de volta, ele de alguma forma voltou no tempo 12 anos. Agora que voltou a viver os melhores dias da sua vida, Takemichi decide vingar-se da sua vida.'
    },
    
  ];
  
  function gerarFilmeAleatorio() {
    var filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];
    var posterElement = document.getElementById('poster');
    var filmeNomeElement = document.getElementById('filme-nome');
    var filmeSinopseElement = document.getElementById('filme-sinopse');
  
    posterElement.classList.remove('animation');
    filmeNomeElement.classList.remove('animation');
    filmeSinopseElement.classList.remove('animation');
  
    setTimeout(function() {
      posterElement.innerHTML = `<img src="${filmeAleatorio.urlPoster}" alt="${filmeAleatorio.nome}" width="100%">`;
      filmeNomeElement.textContent = filmeAleatorio.nome;
      filmeSinopseElement.textContent = filmeAleatorio.sinopse;
  
      posterElement.classList.add('animation');
      filmeNomeElement.classList.add('animation');
      filmeSinopseElement.classList.add('animation');
    }, 300);
  }
  
  document.getElementById('button').addEventListener('click', gerarFilmeAleatorio);
  
