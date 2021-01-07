const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const Admins = require("../infraestructure/tables/Admins");

class Admin {
  create(admin, res) {
    const { userName, password } = admin;
    Admins.findOne({
      where: {
        user_name: userName,
      },
    }).then((admin) => {
      if (admin) {
        res.status(400).send("Erro: Administrador ja existe!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const adminToCreate = {
          user_name: userName,
          user_password: hashPassword,
        };
        Admins.create(adminToCreate)
          .then(() => {
            res.status(201).send("Usuário criado com sucesso!");
          })
          .catch((error) => {
            res.status(400).json(error);
          });
      }
    });
  }

  auth(admin, res) {
    const { userName, password } = admin;

    if (userName != undefined) {
      Admins.findOne({
        where: {
          user_name: userName,
        },
      })
        .then((user) => {
          if (user) {
            let passwordIsCorrect = bcrypt.compareSync(
              password,
              user.user_password
            );
            if (passwordIsCorrect) {
              jwt.sign(
                { id: user.id, user_name: user.user_name },
                process.env.JWT_SECRET,
                { expiresIn: "5h" },
                (err, token) => {
                  if (err) {
                    res.status(400);
                    res.json({ err: "Falha interna" });
                  } else {
                    res.status(200);
                    res.json({ token: token });
                  }
                }
              );
            } else {
              return res.status(400).json({ err: "Credenciais inválidas!" });
            }
          } else {
            return res
              .status(404)
              .json({ err: "O E-mail enviado não existe na base de dados!" });
          }
        })
        .catch((error) => {
          return res.status(500).json(error);
        });
    }
  }

  verifyToken(token, res) {
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.status(401).json({error: "Credenciais inválidas"});
      } else {
        return res.status(200).json({auth: true, message: "The token is valid"});
      }
    });
  };
};

module.exports = new Admin();
