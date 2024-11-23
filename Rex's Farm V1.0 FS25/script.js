document.getElementById('dwbt').addEventListener('click', function() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1MFGoe-8oOG2rt7b2fVbNxfPVtUnC6oy2';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});