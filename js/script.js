/***Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
1. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
2. Predisporre una scritta “Errore” nel caso fallisse la chiamata HTTP*/

const app = new Vue({

  el: '#app',

  data:{

    mail: '',
    caricamento: true,
    httpError: false,
    mails:[],

  },

  methods:{

    getMail(){

      this.caricamento = true;

      for (let i = 0; i < 10; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
          console.log('Oggetto',response.data);

          this.mail = response.data.response;

          this.mails.push(this.mail);

          this.caricamento = false;
        })
        .catch((error)=>{
          console.log(error);

          this.httpError = true;
        })
      }

    },

  },

  mounted(){

    this.getMail();
    
  },
})