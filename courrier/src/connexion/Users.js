import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import '@fontsource/inter';
import { apiUrl } from '../config';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/ Users`)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });

    fetch(' ${apiUrl}/online-users')
      .then((response) => response.json())
      .then((onlineUsers) => {
        setOnlineUsers(onlineUsers);
      });
  }, []);

  const handleCreateUser = () => {
    fetch(`${apiUrl}/ Users`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        position,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        setUsers([...users, user]);
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`${apiUrl}/ Users ${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((user) => {
        setUsers(users.filter(u => u.id !== id));
      });
  };

  const renderUsers = () => {
    return users.map((user) => (
      <Card key={user.id}>
        <CardBody>
          <CardTitle>{user.username}</CardTitle>
          <p>{user.password}</p>
          <p>{user.position}</p>
          <Button onClick={() => handleDeleteUser(user.id)}>
            Supprimer
          </Button>
        </CardBody>
      </Card>
    ));
  };

  const renderOnlineUsers = () => {
    return onlineUsers.map((user) => (
      <Card key={user.id}>
        <CardBody>
          <CardTitle>{user.username}</CardTitle>
          <p>{user.password}</p>
          <p>{user.position}</p>
        </CardBody>
      </Card>
    ));
  };

  return (
    <div>
      <a href="/dashboard/navbar">Home</a>
      <Container>
        <Row>
          <Col md="6">
            <h1>Utilisateurs</h1>
            <ul>
              {renderUsers()}
            </ul>
            <form onSubmit={handleCreateUser} className="card card-body">
              
              <br />
              <input
                type="text"
                placeholder="Poste"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <br />
              <Button type="submit">Ajouter</Button>
            </form>
          </Col>
          <Col md="6">
            <h1>Utilisateurs en ligne</h1>
            <ul>
              {renderOnlineUsers()}
            </ul>
          </Col>
        </Row>
      </Container>


    </div>
  );

};

export default Users;
