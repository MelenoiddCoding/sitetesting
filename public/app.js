const mensajesEl = document.querySelector("#mensajes");

const renderMensajes = (mensajes) => {
  mensajesEl.innerHTML = "";
  mensajes.forEach((mensaje) => {
    const card = document.createElement("article");
    card.className = "card";
    card.textContent = mensaje;
    mensajesEl.appendChild(card);
  });
};

const loadMensajes = async () => {
  try {
    const response = await fetch("/api/hello");
    const data = await response.json();
    renderMensajes(data.mensajes || []);
  } catch (error) {
    mensajesEl.innerHTML = "<p>No se pudieron cargar los mensajes.</p>";
  }
};

loadMensajes();
