const app = Vue.createApp({
  


    data() {
      return {
        name: 'User Name',
        address: 'XYZ',
        dob: '20-8-2020',
        show: false,
        // notvalid:0,
        // valid:0,
        isValidAge: false,
        imgSrc:"icon.jpg" ,
        users: [
          {
            name: 'Priya',
            age: 21,
          },
          {
            name: 'Reena',
            age:23,
          },
          {
            name: 'Ritik',
            age: 22,          }
        ],
        error:{
          color: 'red',
        }
              }
    },
    methods:{
      age(){
        
        let year = this.dob.slice(-3);    
        
        let age = 2022- year;
        alert("Age is: "+age);
        this.show = true;
        if(age<18){
          this.isValidAge = true;
        }else{
          this.isValidAge = false;
        }
      }
    }
  })
  
  app.mount('#app')
