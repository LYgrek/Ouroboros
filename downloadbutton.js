document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './fonts/Ouroboros-Regular.otf'; // Remplacez par le chemin correct vers votre fichier de police
    link.download = 'Ouroboros-Regular.otf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
