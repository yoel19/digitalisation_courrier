import React, { useState } from 'react';

const SecretaryDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // État pour stocker les courriers entrants, sortants et internes
  const [mails, setMails] = useState([]);

  // États pour les champs du formulaire d'ajout de courrier
  const [type, setType] = useState('');
  const [dateReception, setDateReception] = useState('');
  const [dateEnvoi, setDateEnvoi] = useState('');
  const [expediteur, setExpediteur] = useState('');
  const [destinataire, setDestinataire] = useState('');
  const [pieceJointe, setPieceJointe] = useState('');
  const [email, setEmail] = useState('');
  const [etat, setEtat] = useState('en_attente');
  const [observation, setObservation] = useState('');
  const [motif, setMotif] = useState('');
  const [libelle, setLibelle] = useState('');
  // États pour les champs du formulaire d'ajout de courrier interne
  const [serviceDestinataire, setServiceDestinataire] = useState('');
  const [sujet, setSujet] = useState('');
  const [contenu, setContenu] = useState('');

  // Fonction pour ajouter un nouveau courrier à la liste
  const handleAddMail = () => {
    if (type.trim() === '' || dateReception.trim() === '' || dateEnvoi.trim() === '' || expediteur.trim() === '' || destinataire.trim() === '') {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const newMail = {
      id: Date.now(),
      type,
      libelle,
      motif,
      dateReception,
      dateEnvoi,
      expediteur,
      destinataire,
      pieceJointe,
      email,
      etat,
      observation,
    };

    setMails([...mails, newMail]);

    // Réinitialiser les champs du formulaire après l'ajout
    setType('');
    setDateReception('');
    setDateEnvoi('');
    setExpediteur('');
    setDestinataire('');
    setPieceJointe('');
    setEmail('');
    setObservation('');
  };

  // Fonction pour ajouter un nouveau courrier interne à la liste
  const handleAddInternalMail = () => {
    if (serviceDestinataire.trim() === '' || sujet.trim() === '' || contenu.trim() === '') {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const newInternalMail = {
      id: Date.now(),
      type: 'interne',
      dateReception: '',
      dateEnvoi: Date.now(), // Utiliser la date actuelle comme date d'envoi pour les courriers internes
      expediteur: 'Secrétaire', // L'expéditeur est la secrétaire pour les courriers internes
      destinataire: serviceDestinataire,
      pieceJointe: '',
      email: '',
      etat: 'envoye', // Le courrier interne est toujours envoyé directement
      observation: '',
      sujet,
      contenu,
    };

    setMails([...mails, newInternalMail]);

    // Réinitialiser les champs du formulaire après l'ajout
    setServiceDestinataire('');
    setSujet('');
    setContenu('');
  };

  // Fonction pour mettre à jour l'état et l'observation d'un courrier
  const handleUpdateMail = (mailId, newEtat, newObservation) => {
    setMails(prevMails =>
      prevMails.map(mail =>
        mail.id === mailId ? { ...mail, etat: newEtat, observation: newObservation } : mail
      )
    );
  };
// État pour gérer les courriers archivés
const [archivedMails, setArchivedMails] = useState([]);

// Fonction pour archiver un courrier
const handleArchiveMail = (mailId) => {
  const mailToArchive = mails.find(mail => mail.id === mailId);
  if (mailToArchive) {
    mailToArchive.dateArchived = new Date().toISOString();
    setMails(mails.filter(mail => mail.id !== mailId));
    setArchivedMails([...archivedMails, mailToArchive]);
  }
};
// Fonction pour restaurer un courrier archivé
const handleRestoreMail = (mailId) => {
    const mailToRestore = archivedMails.find(mail => mail.id === mailId);
    if (mailToRestore) {
      mailToRestore.dateArchived = undefined;
      setArchivedMails(archivedMails.filter(mail => mail.id !== mailId));
      setMails([...mails, mailToRestore]);
    }
  };
  return (
    <div>
      <h1>Tableau de bord de la secrétaire</h1>

      <h2>Ajouter un nouveau courrier :</h2>
      {/* Le formulaire d'ajout de courrier existant */}
      {/* ... */}

      <h2>Ajouter un courrier interne :</h2>
      <div>
        <label>Service destinataire :</label>
        <input type="text" value={serviceDestinataire} onChange={e => setServiceDestinataire(e.target.value)} />

        <label>Sujet :</label>
        <input type="text" value={sujet} onChange={e => setSujet(e.target.value)} />

        <label>Contenu :</label>
        <textarea value={contenu} onChange={e => setContenu(e.target.value)} />

        <button onClick={handleAddInternalMail}>Envoyer</button>
      </div>

      <h2>Liste des courriers :</h2>
      <ul>
        {/* La liste des courriers existante */}
        {/* ... */}
      </ul>
    </div>
  );
};

export default SecretaryDashboard;
