const AdminNavbar = () => {
  const userName = "Admin";

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#333",
        color: "#fff",
        padding: "1rem",
      }}
    >
      <a href="/admin" className="href">
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#555",
            color:'#000',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >A</div>
      </a>
      <div>{userName}</div>
    </nav>
  );
};

export default AdminNavbar;
