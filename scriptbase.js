// script.js
function mostrarGrupo(grupoId) {
    const grupos = document.querySelectorAll('.grupo');
    grupos.forEach(grupo => {
        grupo.style.display = grupo.id === grupoId ? 'block' : 'none';
    });
}
