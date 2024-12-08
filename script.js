const questions = [
    { question: "¿Qué derecho protege la vida de una persona?", correct: "b", options: ["a) Derecho al trabajo", "b) Derecho a la vida", "c) Derecho a la propiedad"] },
    { question: "¿Cuál de estos derechos asegura que todas las personas sean iguales ante la ley?", correct: "a", options: ["a) Derecho a la igualdad", "b) Derecho a la privacidad", "c) Derecho a la educación"] },
    { question: "¿Qué derecho básico se relaciona con expresar ideas libremente?", correct: "b", options: ["a) Derecho al trabajo", "b) Derecho a la libertad de expresión", "c) Derecho familiar"] },
    { question: "¿Qué derecho garantiza que todas las personas puedan acceder a un empleo digno?", correct: "b", options: ["a) Derecho a la educación", "b) Derecho al trabajo", "c) Derecho penal básico"] },
    { question: "¿Qué derecho incluye la protección contra despidos injustificados?", correct: "b", options: ["a) Derecho a la privacidad", "b) Derecho laboral", "c) Derecho familiar"] },
    { question: "¿Qué derecho permite a las personas estar protegidas contra torturas?", correct: "b", options: ["a) Derecho penal básico", "b) Derecho humano", "c) Derecho familiar"] },
    { question: "¿Qué derecho garantiza el acceso a la salud?", correct: "a", options: ["a) Derecho a la salud", "b) Derecho al trabajo", "c) Derecho a la propiedad"] },
    { question: "¿Qué derecho tiene el consumidor sobre los productos y servicios?", correct: "c", options: ["a) Derecho a la propiedad", "b) Derecho al trabajo", "c) Derecho a la protección del consumidor"] },
    { question: "¿Qué derecho protege la privacidad personal?", correct: "a", options: ["a) Derecho a la privacidad", "b) Derecho a la vida", "c) Derecho familiar"] },
    { question: "¿Qué derecho protege a las personas detenidas?", correct: "b", options: ["a) Derecho a la salud", "b) Derechos en situaciones de detención", "c) Derecho al trabajo"] },
];

// Datos de los artículos ordenados
const articles = {
    derechosHumanos: `
        <h3>Derechos Humanos Básicos ✊</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 11:</strong> Todos tenemos derecho a ser tratados con dignidad y respeto, sin ser discriminados por ninguna razón.</p>
<p><strong>Art. 12:</strong> Las personas tienen derecho a la vida, y a que se les respete su integridad física y emocional.</p>
<p><strong>Art. 13:</strong> El Estado debe garantizar que no haya discriminación por razones de raza, género, orientación sexual, religión, entre otras.</p>
<p><strong>Art. 66:</strong> Derecho a la libertad personal, de expresión, y a vivir sin violencia.</p>
<p><strong>Art. 69:</strong> La libertad de pensamiento y expresión está protegida; todos podemos expresar nuestras ideas sin ser perseguidos.</p>
<p><strong>Art. 76:</strong> Toda persona tiene derecho a que se le trate con justicia y de manera imparcial.</p>
<p><strong>Art. 77:</strong> El derecho a ser protegido contra la tortura y otros tratos crueles, inhumanos o degradantes.</p>
<p><strong>Art. 83:</strong> Las personas tienen derecho a la protección de su vida, integridad, honor y bienes.</p>
<p><strong>Art. 84:</strong> El derecho de las personas a no ser obligadas a hacer algo que esté en contra de su voluntad.</p>
<p><strong>Art. 87:</strong> Toda persona tiene derecho a un juicio justo y a defenderse cuando se le acusa de algo.</p>
    `,
    derechoTrabajo: `
        <h3>Derecho al Trabajo 👷‍♂️</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 33:</strong> El trabajo es un derecho fundamental. Todas las personas deben tener acceso a un empleo digno.</p>
<p><strong>Art. 34:</strong> Los trabajadores tienen derecho a recibir prestaciones de seguridad social, como salud, pensiones y otros beneficios.</p>
<p><strong>Art. 35:</strong> El trabajo debe ser realizado en condiciones de igualdad, sin discriminación.</p>
<p><strong>Art. 36:</strong> Las personas con discapacidad tienen el derecho a trabajar en condiciones de igualdad con los demás.</p>
<p><strong>Art. 42:</strong> Los trabajadores tienen derecho a un salario justo, estable y a un ambiente laboral saludable.</p>
<p><strong>Art. 43:</strong> Las mujeres embarazadas tienen derecho a condiciones especiales de trabajo y no pueden ser despedidas durante este período.</p>
<p><strong>Art. 44:</strong> Los adolescentes pueden trabajar, pero en condiciones que protejan su salud y desarrollo.</p>
<p><strong>Art. 45:</strong> El Estado debe fomentar la creación de empleo y la capacitación para mejorar las oportunidades laborales.</p>
<p><strong>Art. 325:</strong> El trabajo debe ser seguro, estable y no debe poner en riesgo a los trabajadores.</p>
<p><strong>Art. 326:</strong> Los trabajadores tienen derecho a formar sindicatos para defender sus derechos laborales.</p>
    `,
    derechoProteccion: `
        <h3>Derecho a la Protección del Consumidor 🛒</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 35:</strong> Los consumidores tienen derecho a recibir productos y servicios de calidad, y a no ser engañados por las empresas.</p>
<p><strong>Art. 36:</strong> Las empresas deben dar información clara sobre los productos y servicios que venden.</p>
<p><strong>Art. 312:</strong> Los consumidores tienen derecho a la protección de su salud y seguridad frente a productos y servicios peligrosos.</p>
<p><strong>Art. 313:</strong> Si un producto o servicio no cumple con lo prometido, los consumidores tienen derecho a reclamar o a recibir una compensación.</p>
<p><strong>Art. 314:</strong> Si un producto tiene defectos, el consumidor puede exigir que lo reparen, cambien o devuelvan el dinero.</p>
<p><strong>Art. 315:</strong> El Estado debe proteger los derechos de los consumidores, asegurándose de que las empresas cumplan las normas.</p>
<p><strong>Art. 316:</strong> El consumidor tiene derecho a ser informado de sus derechos y a recibir ayuda si lo necesita.</p>
<p><strong>Art. 317:</strong> Los contratos entre consumidores y empresas deben ser claros y justos.</p>
<p><strong>Art. 318:</strong> Si una empresa incumple un contrato o engaña al consumidor, puede ser sancionada y deberá indemnizar al afectado.</p>
<p><strong>Art. 319:</strong> El Estado debe regular los servicios públicos básicos para evitar abusos contra los consumidores.</p>
    `,
    derechosDetencion: `
        <h3>Derechos en Situaciones de Detención 🚓</h3>
       <p style="margin-top: 15px;"> <p><strong>Art. 75:</strong> Nadie puede ser detenido sin una orden judicial, a menos que se le haya encontrado en flagrancia.</p>
<p><strong>Art. 76:</strong> Las personas detenidas deben ser informadas de las razones de su detención y de sus derechos.</p>
<p><strong>Art. 77:</strong> Las personas detenidas tienen derecho a no ser sometidas a torturas ni a tratos crueles o inhumanos.</p>
<p><strong>Art. 78:</strong> Todos los detenidos deben ser tratados con respeto y dignidad.</p>
<p><strong>Art. 79:</strong> Las personas detenidas tienen derecho a defenderse con la ayuda de un abogado.</p>
<p><strong>Art. 80:</strong> Toda detención debe ser registrada y se debe informar a los familiares sobre el lugar de la detención.</p>
<p><strong>Art. 81:</strong> Si alguien es detenido ilegalmente, debe ser liberado y, en algunos casos, recibir una indemnización.</p>
<p><strong>Art. 82:</strong> Las personas detenidas tienen derecho a recibir atención médica y comunicarse con su familia y abogados.</p>
<p><strong>Art. 83:</strong> Las personas detenidas no deben ser mantenidas en prisión sin juicio y su detención debe ser la mínima necesaria.</p>
<p><strong>Art. 84:</strong> El Estado debe garantizar que los derechos de los detenidos sean respetados en todo momento.</p>
    `,
    derechoPropiedad: `
        <h3>Derecho a la Propiedad 🏡</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 66.26:</strong> Todos tenemos derecho a la propiedad privada, pero debe cumplir una función social, es decir, debe usarse de manera que beneficie a la comunidad.</p>
<p><strong>Art. 282:</strong> El uso de la propiedad debe ser responsable y respetar el medio ambiente.</p>
<p><strong>Art. 321:</strong> El Estado protege tanto la propiedad privada como la colectiva de pueblos y comunidades.</p>
<p><strong>Art. 322:</strong> La propiedad no puede ser quitada sin una justificación legal, y debe haber una compensación justa.</p>
<p><strong>Art. 323:</strong> Todos tienen derecho a heredar la propiedad y disfrutar de los bienes adquiridos.</p>
<p><strong>Art. 324:</strong> Las tierras de los pueblos indígenas deben ser protegidas y no pueden ser tomadas sin su consentimiento.</p>
<p><strong>Art. 326:</strong> La propiedad intelectual está protegida, es decir, las creaciones artísticas, científicas y literarias.</p>
<p><strong>Art. 327:</strong> El Estado puede expropiar propiedad para proyectos públicos, pero debe pagar una compensación justa.</p>
<p><strong>Art. 328:</strong> El acceso a una vivienda digna es un derecho de todas las personas.</p>
<p><strong>Art. 329:</strong> Los bienes comunes, como el agua y la biodiversidad, son propiedad de todos y deben ser protegidos.</p>
    `,
    derechoFamiliar: `
        <h3>Derecho Familiar 👨‍👩‍👧</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 67:</strong> La familia es un derecho protegido por el Estado.</p>
<p><strong>Art. 68:</strong> Se reconocen diversos tipos de familia, no solo la tradicional.</p>
<p><strong>Art. 69:</strong> Todos los miembros de la familia tienen los mismos derechos y obligaciones.</p>
<p><strong>Art. 70:</strong> El Estado asegura que los padres cuiden, eduquen y protejan a sus hijos.</p>
<p><strong>Art. 71:</strong> Los niños y adolescentes tienen derecho a vivir con su familia, siempre que esto no los ponga en peligro.</p>
<p><strong>Art. 72:</strong> El Estado protege la vida familiar contra la violencia y el abuso.</p>
<p><strong>Art. 73:</strong> El Estado actúa para proteger a las víctimas de violencia familiar.</p>
<p><strong>Art. 74:</strong> El Estado debe intervenir en los conflictos familiares para proteger los derechos de los miembros de la familia.</p>
<p><strong>Art. 75:</strong> El derecho al divorcio y la separación es garantizado, protegiendo el bienestar de los hijos.</p>
<p><strong>Art. 76:</strong> El Estado promueve la protección de la familia, apoyando a las familias en situaciones difíciles.</p>
    `,
    derechoPenal: `
        <h3>Derecho Penal Básico 🙎</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 76.1:</strong> Todas las personas son inocentes hasta que se demuestre su culpabilidad en un juicio.</p>
<p><strong>Art. 76.2:</strong> Las personas tienen derecho a ser defendidas por un abogado en el juicio.</p>
<p><strong>Art. 76.3:</strong> Nadie puede ser detenido sin una justificación legal y su detención debe ser por el menor tiempo posible.</p>
<p><strong>Art. 77.1:</strong> Las personas detenidas tienen derecho a conocer las razones de su detención.</p>
<p><strong>Art. 78:</strong> No se pueden aplicar torturas ni tratos crueles o inhumanos a los detenidos.</p>
<p><strong>Art. 79:</strong> Si una persona es detenida ilegalmente, debe ser liberada inmediatamente.</p>
<p><strong>Art. 80:</strong> Las personas tienen derecho a un juicio público y sin demoras innecesarias.</p>
<p><strong>Art. 81:</strong> Los derechos de los detenidos deben ser respetados en todo momento.</p>
<p><strong>Art. 82:</strong> Toda persona tiene derecho a ser juzgada de manera imparcial y justa.</p>
<p><strong>Art. 83:</strong> Se prohíbe la pena de muerte y las penas crueles, inhumanas o degradantes.</p>
    `,
    derechoCivil: `
        <h3>Derecho Civil 🚜🌾👨‍🌾</h3>
       <p style="margin-top: 15px;"> <p><strong>Art. 66.25:</strong> Todos tienen derecho a acceder a la justicia para resolver disputas civiles.</p>
<p><strong>Art. 152:</strong> El matrimonio se basa en el consentimiento libre de ambas personas.</p>
<p><strong>Art. 160:</strong> Los contratos civiles deben ser claros, justos y respetar los derechos de las personas.</p>
<p><strong>Art. 187:</strong> Los derechos de los niños, niñas y adolescentes deben ser siempre una prioridad en los juicios civiles.</p>
<p><strong>Art. 222:</strong> La protección de la propiedad incluye el derecho a recuperar bienes perdidos o robados.</p>
<p><strong>Art. 227:</strong> Las personas tienen derecho a la igualdad en los contratos civiles, sin discriminación.</p>
<p><strong>Art. 228:</strong> Los miembros de una familia tienen derecho a vivir juntos, salvo que haya razones de violencia o abuso.</p>
<p><strong>Art. 231:</strong> Los padres tienen derecho a reconocer a sus hijos biológicos.</p>
<p><strong>Art. 232:</strong> Las decisiones judiciales civiles deben proteger los derechos de las personas involucradas.</p>
<p><strong>Art. 233:</strong> La propiedad adquirida, ya sea por matrimonio o herencia, debe ser respetada y protegida.</p>
    `,
    derechoSalud: `
        <h3>Derecho a la Salud 🧑‍⚕️</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 25:</strong> Todos tenemos derecho a recibir atención médica, independientemente de nuestra situación económica.</p>
<p><strong>Art. 26:</strong> La educación es gratuita y debe ser de calidad en todos los niveles.</p>
<p><strong>Art. 27:</strong> El Estado garantiza la educación, incluyendo la educación superior y técnica.</p>
<p><strong>Art. 36:</strong> Las personas con discapacidad tienen derecho a recibir atención médica y educación sin barreras.</p>
<p><strong>Art. 42:</strong> Las mujeres embarazadas tienen derecho a recibir atención médica adecuada.</p>
<p><strong>Art. 43:</strong> Las instituciones educativas y de salud deben ser accesibles para todos.</p>
<p><strong>Art. 45:</strong> El Estado debe garantizar la inclusión de todas las personas en el sistema educativo.</p>
<p><strong>Art. 47:</strong> Todos deben tener acceso a servicios de salud sin distinción de ningún tipo.</p>
<p><strong>Art. 50:</strong> El sistema de salud debe ser público y garantizar la atención a todas las personas.</p>
<p><strong>Art. 51:</strong> El Estado debe asegurarse de que la salud y la educación sean de calidad y accesibles.</p>
    `,
    derechoPrivacidad: `
        <h3>Derecho a la Privacidad y Protección de Datos 🔐</h3>
        <p style="margin-top: 15px;"><p><strong>Art. 66.20:</strong> Todas las personas tienen derecho a la protección de su vida privada y de su familia.</p>
<p><strong>Art. 66.21:</strong> Tenemos derecho a proteger nuestros datos personales y a decidir quién los puede usar.</p>
<p><strong>Art. 66.22:</strong> Las comunicaciones privadas deben ser respetadas y protegidas.</p>
<p><strong>Art. 66.23:</strong> Nadie puede acceder a nuestra información personal sin nuestro consentimiento, salvo por razones legales.</p>
<p><strong>Art. 66.24:</strong> Las autoridades deben proteger nuestros datos personales y evitar su uso indebido.</p>
<p><strong>Art. 66.25:</strong> Toda persona tiene derecho a que sus datos personales sean tratados con confidencialidad.</p>
<p><strong>Art. 66.26:</strong> El Estado debe garantizar que nuestros derechos a la privacidad sean protegidos de manera efectiva.</p>
<p><strong>Art. 66.27:</strong> Las personas pueden exigir que se respeten sus derechos a la privacidad y a la protección de datos.</p>
<p><strong>Art. 66.28:</strong> Podemos corregir o eliminar los datos incorrectos que se tengan sobre nosotros.</p>
<p><strong>Art. 66.29:</strong> Tenemos derecho a acceder a la información que se tenga sobre nosotros.</p>
    `
};

// Mostrar solo el lobby al inicio
function initializeApp() {
    document.getElementById('lobby').style.display = 'block';
    document.getElementById('topic').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

// Función para mostrar el artículo
function showTopic(topic) {
    document.getElementById('lobby').style.display = 'none';
    document.getElementById('topic').style.display = 'block';
    document.getElementById('article').innerHTML = articles[topic];
}

// Función para volver al lobby
function backToLobby() {
    initializeApp(); // Vuelve al estado inicial
    // Limpiar las respuestas seleccionadas
    const allRadios = document.querySelectorAll('input[type="radio"]:checked');
    allRadios.forEach(radio => radio.checked = false);
}

// Función para iniciar el quiz
function startQuiz() {
    document.getElementById('lobby').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    
    // Seleccionar 5 preguntas aleatorias
    selectedQuestions = [];
    while (selectedQuestions.length < 5) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(randomIndex)) {
            selectedQuestions.push(randomIndex);
        }
    }
    
    // Mostrar las preguntas
    const quizDiv = document.getElementById('quizQuestions');
    quizDiv.innerHTML = '';
    selectedQuestions.forEach((index, i) => {
        const question = questions[index];
        const options = question.options.sort(() => Math.random() - 0.5); // Desordenar opciones
        const questionHtml = `
            <div>
                <p>${question.question}</p>
                ${options.map((option, j) => ` 
                    <label>
                        <input type="radio" name="question${i}" value="${String.fromCharCode(97 + j)}"> ${option}
                    </label><br>
                `).join('')}
            </div>
        `;
        quizDiv.innerHTML += questionHtml;
    });
}

// Función para mostrar los resultados
function showResults() {
    correctAnswers = 0;
    incorrectAnswers = 0;

    selectedQuestions.forEach((index, i) => {
        const question = questions[index];
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);

        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === question.correct) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    });

    // Mostrar los resultados en la pantalla
    document.getElementById('correctAnswers').innerText = `Respuestas Correctas: ${correctAnswers}`;
    document.getElementById('incorrectAnswers').innerText = `Respuestas Incorrectas: ${incorrectAnswers}`;
    
    // Ocultar la pantalla del quiz y mostrar los resultados
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
}

// Inicializar la aplicación al cargar la página
initializeApp();
