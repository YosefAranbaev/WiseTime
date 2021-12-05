exports.authController = {
    signIn(req, res) {
        res.send('signin');
    },
    handleToken(req, res) {
        res.send('handle token');
    },
    signOut(req, res) {
        res.send('signout');
    }
};