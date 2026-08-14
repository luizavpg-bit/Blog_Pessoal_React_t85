function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#2E1B6B",
          color: "white",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          <h2>Seja Bem Vinde!</h2>

          <p>Expresse aqui seus pensamentos e opiniões</p>

          <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "2px solid white",
                borderRadius: "8px",
                color: "white",
                padding: "8px 16px",
              }}
            >
              Nova Postagem
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Login"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;