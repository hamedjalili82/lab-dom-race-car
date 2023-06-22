
class Game {
    constructor () {
        this.startScreen = document.getElementById('#game-intro');
        this.gameScreen = document.getElementById('#game-screen');
        this.gameEndScreen = document.getElementById('#game-end');
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
          );
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
}

start () {
    this.gameScreen.style.height = this.height + 'px';
    this.gameScreen.style.width = this.width + 'px';

    this.startScreen.style.display = none;
    
    this.gameEndScreen.style.display = block;

    this.gameLoop();

gameLoop () {
        if (gameIsOver) {
            return;
       }
    }

    this.update();

    window.requestAnimationFrame(() => {
        this.gameLoop();
    }) 

update () {
    this.player.move();
}




}