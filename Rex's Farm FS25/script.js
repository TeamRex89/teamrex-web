document.getElementById('dwbt').addEventListener('click', function() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1HyvflFgIy0q8GkAFJEVU0C0KPEJjTzYO';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});