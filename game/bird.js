function Bird(game) {
    this.game = game;

    this.preload = function () {
        this.game.load.image('bird', 'assets/bird.png')
    };

    this.create = function () {
        this.sprite = this.game.add.sprite(100, 245, 'bird');
        this.sprite.anchor.setTo(-0.2, 0.5);
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.gravity.y = 1000;
    };

    this.setInputHandler = function () {
        var spaceKey = this.game.input.keyboard.addKey(
            Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
    };

    this.jump = function () {
        this.sprite.body.velocity.y = -300;
    };

    this.update = function () {
        this.sprite.body.velocity.y = Math.max(
            Math.min(380,this.sprite.body.velocity.y), -300);
    };
    
    this.died = function() {
        return (this.sprite.y < 0 || this.sprite.y > 450);
    };


}