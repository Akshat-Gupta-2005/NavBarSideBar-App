export default function Profile() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>Profile</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        View and update your profile information below.
      </p>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <p><strong>Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> jane@example.com</p>
        <p><strong>Role:</strong> Developer</p>
      </div>
    </div>
  );
}
