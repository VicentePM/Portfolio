let textoFrase = document.getElementById('cita')
let nombreAutor = document.getElementById('autor')

function quotesAndAuthors() {
    let frases = [
        {
          frase: "La programación es el arte de decirle a una computadora qué hacer.",
          autor: "Donald Knuth"
        },
        {
          frase: "La programación es el acto de escribir código, pero más que eso, es el acto de resolver problemas.",
          autor: "John Carmack"
        },
        {
          frase: "La programación es el arte de crear algo de la nada.",
          autor: "Frank Ocean"
        },
        {
          frase: "La programación es el proceso de tomar un algoritmo y codificarlo en una notación, de modo que pueda ser ejecutado por una computadora.",
          autor: "Steve Jobs"
        },
        {
          frase: "La programación es el arte de hacer lo imposible posible.",
          autor: "Salman Khan"
        },
        {
          frase: "La programación es el arte de descubrir lo que realmente quieres.",
          autor: "Alan Kay"
        },
        {
          frase: "La programación es el arte de encontrar errores en el código.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una máquina haga lo que tú quieres que haga.",
          autor: "Paul Graham"
        },
        {
          frase: "La programación es el arte de crear soluciones.",
          autor: "Karl Seguin"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga.",
          autor: "Larry Wall"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera eficiente y efectiva.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente y elegante.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante y con estilo.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante, con estilo y con un toque personal.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante, con estilo, con un toque personal y con un poco de magia.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante, con estilo, con un toque personal, con un poco de magia y con amor.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante, con estilo, con un toque personal, con un poco de magia, con amor y con pasión.",
          autor: "Unknown"
        },
        {
          frase: "La programación es el arte de hacer que una computadora haga lo que tú quieres que haga de manera rápida, eficiente, elegante, con estilo, con un toque personal, con un poco de magia, con amor, con pasión y con creatividad.",
          autor: "Unknown"
        }
      ];

      let index = 0

      setInterval( () => {
        textoFrase.innerHTML = frases[index].frase
        nombreAutor.innerHTML = frases[index].autor
        index = (index + 1) % frases.length
      }, 5000)
}

quotesAndAuthors()