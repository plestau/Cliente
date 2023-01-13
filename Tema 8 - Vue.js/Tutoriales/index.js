const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            isActive: true,
            hasError: false,
            seen: false, // al poner true se ve una p
            nombrePrueba: {
                id: 'container',
                class: 'prueba'
            },
                firstname: 'Pablo',
                lastname: 'Lestau'
        }
    },   
    computed:{
        classObject: function () {
            return {
              active: this.isActive && !this.error,
              'text-danger': this.error && this.error.type === 'fatal'
            }
          },
        visitarGithub: function () {
            return {
                href: 'https://github.com/plestau',
                target: '_blank'
            }
        },
        fullname: {
            get: function(){
                return this.firstname + ' ' + this.lastname
            },
            set: function(newValue){
                var names = newValue.split(' ')
                this.firstname = names[0]
                this.lastname = names[names.length - 1]
            }
        },
        reversedMessage: function () {
            // `this` apunta a la instancia vm
            return this.message.split('').reverse().join('')
        }
    }
}).mount('#app')

