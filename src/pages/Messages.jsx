export default function Messages() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>Messages</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        View your recent messages and alerts here.
      </p>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <ul>
          <li><strong>Admin:</strong> Weekly meeting tomorrow at 10 AM</li>
          <li><strong>Support:</strong> Your ticket has been resolved</li>
          <li><strong>HR:</strong> Please update your contact info</li>
        </ul>
      </div>
    </div>
  );
}
