// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// Script Vue 3
const {createApp} = Vue 

createApp(
{
    data()
    {
        return {
            message:    'Aki',
            h1_style:   'color: white; text-align:center; ',
            h1_class:   'fixed-top',
            img_name:   'aki.webp',
            img_path:   './assets/img/'
        }
    },
    methods: 
    {
        get_img()
        {
            return this.img_path+this.img_name;
        }
    }
}).mount('#app')