
class Game {
    constructor () {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
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
        this.obstacles = [new Obstacle(this.gameScreen)];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
}

start () {
    this.gameScreen.style.height = this.height + 'px';
    this.gameScreen.style.width = this.width + 'px';

    this.startScreen.style.display = "none";
    
    this.gameScreen.style.display = "block";

    this.gameLoop();
}

gameLoop () {
        if (this.gameIsOver) {
            return;
       }

    this.update();

    if (Math.random() > 0.98 && this.obstacles.length < 1 {
        this.obstacles.push(new Obstacle(this.gameScreen))
    }

    window.requestAnimationFrame(() => {
        this.gameLoop();
    }) 
}

update () {
    this.player.move();
    const obstaclesToKeep = [];
    this.obstacles.forEach(obstacle => {
        obstacle.move()
        if (this.player.didCollide(obstacle)){
            console.log('collision')
            obstacle.element.remove(); 
        } else if (obstacle.top > this.gameScreen.offsetHeight) {
            console.log('out of screen')
        } else {
            obstaclesToKeep.push(obstacle)
        }
        // this.gameIsOver = 
    })
    this.obstacles = obstaclesToKeep;
    
}




}