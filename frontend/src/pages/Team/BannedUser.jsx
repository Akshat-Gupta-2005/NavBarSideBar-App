export default function BannedUser() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>Team - Banned User</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Review the list of banned users and take action if needed.
      </p>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <ul>
          <li><strong>banned_user_01</strong> – Spamming content</li>
          <li><strong>hacker123</strong> – Multiple login attempts</li>
        </ul>
      </div>
    </div>
  );
}
