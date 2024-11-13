const express = require('express')
const cors = require('cors')
const PORT = 3000;
const server = express()

const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
    "El fracaso es la oportunidad de comenzar de nuevo, pero más inteligentemente.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "Los sueños no funcionan a menos que tú lo hagas.",
    "La actitud es una pequeña cosa que hace una gran diferencia.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La motivación te pone en marcha, el hábito te mantiene en acción.",
    "El pesimista ve dificultad en toda oportunidad. El optimista ve oportunidad en toda dificultad.",
    "No esperes. El momento perfecto nunca llegará.",
    "La confianza en sí mismo es el primer secreto del éxito.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La disciplina es el puente entre metas y logros.",
    "Nunca es demasiado tarde para ser lo que podrías haber sido.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "La mejor manera de predecir el futuro es crearlo.",
    "No cuentes los días, haz que los días cuenten.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El secreto para salir adelante es comenzar.",
    "La mejor venganza es el éxito masivo.",
    "No dejes que ayer tome demasiado de hoy.",
    "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
    "El único límite para nuestros logros de mañana está en nuestras dudas de hoy.",
    "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
    "La excelencia no es un acto, sino un hábito.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No hay atajos para cualquier lugar que valga la pena ir.",
    "El fracaso es éxito si aprendemos de él.",
    "La persistencia puede cambiar el fracaso en un logro extraordinario.",
    "La mejor forma de predecir el futuro es creándolo.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No esperes. El momento nunca será el adecuado.",
    "Cree que puedes y estás a mitad de camino.",
    "La vida es 10% lo que me ocurre y 90% cómo reacciono a ello.",
    "Si puedes soñarlo, puedes hacerlo.",
    "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    "La mejor manera de empezar es dejar de hablar y comenzar a hacer.",
    "No cuentes los días, haz que los días cuenten.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
    "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
    "El fracaso es la oportunidad de comenzar de nuevo, pero más inteligentemente.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "Los sueños no funcionan a menos que tú lo hagas.",
    "La actitud es una pequeña cosa que hace una gran diferencia.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La motivación te pone en marcha, el hábito te mantiene en acción.",
    "El pesimista ve dificultad en toda oportunidad. El optimista ve oportunidad en toda dificultad.",
    "No esperes. El momento perfecto nunca llegará.",
    "La confianza en sí mismo es el primer secreto del éxito.",
    "La disciplina es el puente entre metas y logros.",
    "Nunca es demasiado tarde para ser lo que podrías haber sido.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "La mejor manera de predecir el futuro es crearlo.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El secreto para salir adelante es comenzar.",
    "La mejor venganza es el éxito masivo.",
    "No dejes que ayer tome demasiado de hoy.",
    "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden.",
    "El único límite para nuestros logros de mañana está en nuestras dudas de hoy.",
    "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.",
    "La excelencia no es un acto, sino un hábito.",
    "No hay atajos para cualquier lugar que valga la pena ir.",
    "El fracaso es éxito si aprendemos de él.",
    "La persistencia puede cambiar el fracaso en un logro extraordinario.",
    "La mejor forma de predecir el futuro es creándolo.",
    "No esperes. El momento nunca será el adecuado.",
    "Cree que puedes y estás a mitad de camino.",
    "Si puedes soñarlo, puedes hacerlo.",
    "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    "La mejor manera de empezar es dejar de hablar y comenzar a hacer.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "Tus limitaciones son solo los límites que tú te impones.",
    "La determinación de hoy es el éxito de mañana.",
    "Cada experto alguna vez fue un principiante.",
    "El camino hacia el éxito está siempre en construcción.",
    "No te conformes con lo que necesitas, lucha por lo que mereces.",
    "Las oportunidades no ocurren, las creas tú.",
    "El éxito es la suma de esfuerzos pequeños repetidos día tras día.",
    "Apunta a la luna. Si fallas, podrías dar a una estrella.",
    "El fracaso es el condimento que da sabor al éxito.",
    "Le pego como un peluche, a ver cuando le tiran un oso pero con garras" 
];

server.use(cors({
    origin: 'http://localhost:5173'
}))

server.get('/frase-aleatoria', (req, res) => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    res.json({ frase: frases[randomIndex] });
});

server.listen(PORT, ()=>{
    console.log("El sever esta corriendo en el puerto 3000")
})


