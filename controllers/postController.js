var request = require('request');


function getPosts(req, res) {
    request(
        'https://jsonplaceholder.typicode.com/posts',
        function(err, response, posts) {
            res.render('posts', {posts: JSON.parse(posts)})
        }
    )

};

module.exports = {
    getPosts
};