function toggleSection(header) {
    header.classList.toggle('collapsed');
    const content = header.nextElementSibling;
    content.classList.toggle('hidden');
}

function toggleSubsection(header) {
    header.classList.toggle('expanded');
    const content = header.nextElementSibling;
    content.classList.toggle('show');
}
