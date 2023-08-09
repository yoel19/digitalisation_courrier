import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';

const InternalMail = () => {
  const [id, setId] = useState('');
  const [label, setLabel] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = () => {
    // Submit the form data to the administrator.
  };

  return (
    <Container>
      <Row>
        <Col md="6">
          <h1>Courrier interne</h1>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="id">ID</label>
              <input type="text" class="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="label">Libellé</label>
              <input type="text" class="form-control" id="label" value={label} onChange={(e) => setLabel(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="reason">Motif</label>
              <input type="text" class="form-control" id="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="type">Type</label>
              <input type="text" class="form-control" id="type" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="recipientName">Nom du destinataire</label>
              <input type="text" class="form-control" id="recipientName" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="recipientEmail">Email du destinataire</label>
              <input type="email" class="form-control" id="recipientEmail" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="userName">Nom de l'utilisateur</label>
              <input type="text" class="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary">Soumettre</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default InternalMail;
