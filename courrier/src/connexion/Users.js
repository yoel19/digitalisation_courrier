import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });

    fetch('https://api.example.com/online-users')
      .then((response) => response.json())
      .then((onlineUsers) => {
        setOnlineUsers(onlineUsers);
      });
  }, []);

  const handleCreateUser = () => {
    fetch('https://api.example.com/users', {
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
    fetch(`https://api.example.com/users/${id}`, {
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
    <Container>
      <Row>
        <Col md="6">
          <h1>Utilisateurs</h1>
          <ul>
            {renderUsers()}
          </ul>
        </Col>
        <Col md="6">
          <h1>Utilisateurs en ligne</h1>
          <ul>
            {renderOnlineUsers()}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
