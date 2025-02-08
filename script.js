score = 0;
cross = true;

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
    audio.play()
    
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is:", e.keyCode);

    if (e.keyCode == 38) {
        hero = document.querySelector('.hero');
        hero.classList.add('animatehero');

        setTimeout(() => {
            hero.classList.remove('animatehero');
        }, 700);
    }
    if (e.keyCode == 39) {
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (heroX + 112) + "px";
    }
    if (e.keyCode == 37) {
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
        hero.style.left = (heroX - 112) + "px";
    }
}

setInterval(() => {

    hero = document.querySelector('.hero');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(hx - ox);
    offsetY = Math.abs(hy - oy);
    // console.log(offsetX,offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleMega')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();


            
        }, 1000);



    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;

        }, 1500);
        setTimeout(() => {
            MegaDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.8;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ' , newDur)

        }, 500);





    }


}, 100);

function updateScore() {
    scoreCont.innerHTML = "Your Score: " + score
}
