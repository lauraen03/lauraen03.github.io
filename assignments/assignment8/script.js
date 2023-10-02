const runningMan = document.getElementById('runningMan');
const part1 = document.getElementById('part1');
let isRunning = false;
let manLeft = 0;

runningMan.addEventListener('click', () => {
    isRunning = !isRunning;
    animateRunningMan();
});

function animateRunningMan() {
    const animationInterval = 10;
    const distanceToMove = 5;
    const maxLeft = part1.clientWidth - runningMan.clientWidth;

    if (isRunning) {
        const animation = () => {
            manLeft += distanceToMove;
            if (manLeft > maxLeft) {
                manLeft = maxLeft;
            }
            runningMan.style.setProperty('--man-left', manLeft + 'px');

            if (manLeft < maxLeft) {
                requestAnimationFrame(animation);
            }
        };
        animation();
    }
}



function fillThermometer() {
    const fundAmount = document.getElementById('fundAmount').value;
    const goal = 10000;
    const percentage = (fundAmount / goal) * 100;
    const filler = document.getElementById('filler');
    filler.style.height = percentage + '%';
}
