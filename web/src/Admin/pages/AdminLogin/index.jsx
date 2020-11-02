import React, { useState, } from 'react';

import api from '../../../services/api';
import PageMain from '../main';
import Input from '../../../components/Input';

import './styles.css'

const AdminLoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleAdminLogin() {
    api.post('/admin/auth', {
      userName,
      password,
    })
      .then(response => {
        const authToken = response.data.token
        localStorage.setItem('AuthToken', authToken);
        const test = 'Bearer ' + localStorage.getItem('AuthToken')
        console.log(api.headers);
        return alert('login efetuado');
      })
      .catch((err) => {
        console.log(err)
        return alert('Erro no login');
      });

  }

  return (
    <PageMain>
      <div className="container content">
        <form onSubmit={(event) => {
          event.preventDefault();
          handleAdminLogin()
        }}>
          <Input
            name="user_Name"
            label="Nome de Usuário: "
            value={userName}
            className="login-input"
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <br />
          <Input
            type="password"
            name="user_password"
            label="Senha: "
            value={password}
            className="login-input"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <button type="submit" className="btn btn-warning btn-block">Login</button>
        </form>
      </div>
    </PageMain>
  );
}

export default AdminLoginPage;