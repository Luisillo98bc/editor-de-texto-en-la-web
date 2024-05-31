tinymce.init({
    selector: '#editor',
    license_key: 'gpl|<your-license-key>',
    
    language: 'es-MX',
    branding: false,
    toolbar: 'undo redo | styles forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image | link | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | media',
    plugins: 'image | link | table | media',
    
    
    
});

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const contenido = tinymce.activeEditor.getContent();
    console.log(contenido);
})