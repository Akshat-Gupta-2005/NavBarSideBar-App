export default function User() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>Team - User</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Details of individual team members.
      </p>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <p><strong>Username:</strong> team_user_001</p>
        <p><strong>Role:</strong> Contributor</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  );
}
