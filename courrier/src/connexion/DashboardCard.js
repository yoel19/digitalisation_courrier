const AdminDashboard = () => {
    // État pour gérer les utilisateurs
    const [users, setUsers] = useState([
      { id: 1, username: "admin", password: "admin123", role: "admin" },
      { id: 2, username: "user1", password: "password1", role: "user" },
      { id: 3, username: "user2", password: "password2", role: "user" }
    ]);
  
    // État pour gérer les courriers entrants et sortants
    const [mails, setMails] = useState([
      { id: 1, type: "entrant", dateReception: " ", dateEnvoi: " ", expediteur: "Expéditeur 1", destinataire: "admin", pieceJointe: "", email: "", etat: "en_attente", observation: "" },
      { id: 2, type: "entrant", dateReception: " ", dateEnvoi: " ", expediteur: "Expéditeur 2", destinataire: "admin", pieceJointe: "", email: "", etat: "valide", observation: "OK" },
      { id: 3, type: "sortant", dateReception: " ", dateEnvoi: " ", expediteur: "admin", destinataire: "Destinataire 1", pieceJointe: "", email: "", etat: "en_attente", observation: "" },
      { id: 4, type: "sortant", dateReception: " ", dateEnvoi: " ", expediteur: "admin", destinataire: "Destinataire 2", pieceJointe: "", email: "", etat: "rejete", observation: "Non conforme" }
    ]);
  
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newRole, setNewRole] = useState('user');
  
    const handleCreateUser = () => {
      if (newUsername.trim() === '' || newPassword.trim() === '') {
        alert('Veuillez saisir un nom d\'utilisateur et un mot de passe valides.');
        return;
      }
  
      const newUser = {
        id: Date.now(),
        username: newUsername,
        password: newPassword,
        role: newRole
      };
  
      setUsers([...users, newUser]);
  
      // Réinitialiser les champs de saisie après la création
      setNewUsername('');
      setNewPassword('');
      setNewRole('user');
    };
  
    // Fonction pour mettre à jour le nom d'utilisateur et le mot de passe de l'utilisateur actuellement connecté
    const handleUpdateCurrentUser = () => {
      // Cette fonction mettra à jour le nom d'utilisateur et le mot de passe de l'administrateur actuellement connecté
      // Vous devez implémenter cette fonction en fonction de votre système d'authentification
    };
  
    // Fonction pour mettre à jour le nom d'utilisateur et le mot de passe d'un utilisateur existant
    const handleUpdateUser = (userId, newUsername, newPassword) => {
      if (newUsername.trim() === '' || newPassword.trim() === '') {
        alert('Veuillez saisir un nom d\'utilisateur et un mot de passe valides.');
        return;
      }
  
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, username: newUsername, password: newPassword } : user
        )
      );
    };
  
    return (
      <div className='dashboard' style={{ backgroundColor: 'azure' }}>
        <header>
          <navbar style={{ backgroundColor: 'violet', width: '100%', position: 'absolute', minHeight: '40px', padding: '5px' }}>
            <p className='text'>Tableau de bord</p>
          </navbar>
        </header>
        <main >
          {/* <aside style={{ height: '100%', position: 'absolute', backgroundColor: 'blue' }}>
            <br />
            <br />
            <ul>
              <li style={{ listStyle: 'none' }}>
                <button className='button btn'>Action 1</button>
              </li>
            </ul>
          </aside>
           */}
  
  
  
  
         /* <section style={{ paddingTop: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
  
              <DashboardCard title={'Utilisateurs'} count={100} />
  
              <DashboardCard title={'Courriers sortants'} count={50} />
  
              <DashboardCard title={'Courriers entrants'} count={25} />
  
              <DashboardCard title={'Courriers à valider'} count={18} />
  
           
            <h2>Liste des utilisateurs :</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <strong>Nom d'utilisateur :</strong> {user.username} <br />
                  <strong>Mot de passe :</strong> {user.password} <br />
                  <strong>Rôle :</strong> {user.role} <br />
  
                  {/* Champs de saisie pour mettre à jour le nom d'utilisateur et le mot de passe */}
                 /* <input
                    type="text"
                    value={user.username}
                    onChange={e => handleUpdateUser(user.id, e.target.value, user.password)}
                    placeholder="Nouveau nom d'utilisateur"
                  />
                  <input
                    type="password"
                    value={user.password}
                    onChange={e => handleUpdateUser(user.id, user.username, e.target.value)}
                    placeholder="Nouveau mot de passe"
                  />
                </li>
              ))}
            </ul>
  
            <h2>Consulter les courriers :</h2>
            <ul>
              {mails.map(mail => (
                <li key={mail.id}>
                  <strong>Type :</strong> {mail.type}<br />
                  <strong>Date de réception :</strong> {mail.dateReception}<br />
                  <strong>Date d'envoi :</strong> {mail.dateEnvoi}<br />
                  <strong>Expéditeur :</strong> {mail.expediteur}<br />
                  <strong>Destinataire :</strong> {mail.destinataire}<br />
                  <strong>Pièce jointe :</strong> {mail.pieceJointe}<br />
                  <strong>Email :</strong> {mail.email}<br />
                  <strong>État :</strong> {mail.etat}<br />
                  <strong>Observation :</strong> {mail.observation}<br />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    );
  };