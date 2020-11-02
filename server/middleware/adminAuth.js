const jwt = require('jsonwebtoken');

function adminAuth(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        res.status(401);
        res.json({ error: "Você não tem permissão para acessar esta aréa!" });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, user_name: data.user_name },
        next();
      };
    });
  } else {
    res.status(401);
    res.json({ error: "Você não tem permissão para acessar esta aréa!" });
  };
};

module.exports = adminAuth;