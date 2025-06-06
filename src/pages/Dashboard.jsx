export default function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c3e50' }}>Dashboard</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Welcome to your dashboard. View your metrics and activities here.
      </p>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h3>Overview</h3>
        <ul>
          <li>Projects Active: 3</li>
          <li>Tasks Completed: 85%</li>
          <li>Notifications: 5 unread</li>
        </ul>
      </div>
    </div>
  );
}
