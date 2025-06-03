const pickupLines = [
    "Varoa, meu amor por você é inabalável como os montes de Sião. 😘🏔️",
    "O viver é Cristo, o morrer é lucro e o amar você é bônus! ❤️",
    "Seu pai é padeiro? Porque você é um sonho! 🤩",
    "Me chama de Moisés e faz uma aliança comigo? 💍 ",
    "Você não é a muralha de Jericó, mas quando te vi fiquei caidinho. 😍",
    "Rosas são vermelhas, violetas são azuis, casa comigo, em nome de Jesus? 🌹🙃",
    "Você deve estar cansada, porque você passou correndo pela minha mente o dia todo! 🤭",
    "Se beleza fosse tempo, você seria a eternidade! ⏳🥴",
    "Você não é Canaã, mas é minha Terra Prometida. 🙌 ",
    "Você não gosta de café, mas 'ca fé' que eu tenho nós ficamos juntos a vida toda. ☕❤️"
];

const generatePickupLine = () => {
    const pickupLine = document.getElementById('pickup-line');
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    
    pickupLine.style.opacity = '0';
    
    setTimeout(() => {
        pickupLine.textContent = pickupLines[randomIndex];
        pickupLine.style.opacity = '1';
    }, 200);
};

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generatePickupLine);
});