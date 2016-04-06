var Agent = function (width_dist, height_dist) {
    this.brain = new Brain(width_dist, height_dist);
};

Agent.prototype = {
    think: function (bird, pipes, reward) {
        var bird_back_x = bird.sprite.x;
        var bird_back_y = bird.sprite.y;

        var closest_pipe_x = 9999;
        var closest_pipe_y = 9999;
        for (var i = 0; i < pipes.groups.length; i++) {
            var pipe = pipes.groups.getChildAt(i);
            if (bird_back_x >= pipe.x + pipe.width)
                continue;
            if (pipe.marked && pipe.x + pipe.width < closest_pipe_x) {
                closest_pipe_x = pipe.x + pipe.width;
                closest_pipe_y = pipe.y;
            }
        }

        var vertical_dist = bird_back_y - closest_pipe_y;
        var horizontal_dist = closest_pipe_x - bird_back_x;
        // console.log(vertical_dist, horizontal_dist);
        this.brain.getState(vertical_dist, horizontal_dist);
        this.brain.updateState(reward);
        return this.brain.getAction();
    }
};