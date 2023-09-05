const { createApp } = Vue;

createApp ({
    data(){
        return{
            name: '',
            email: '',
            password: '',
            role: ''
        }
    },
    methods:{
        Register:function(e){
            e.preventDefault();
            var form = e.currentTarget;

            var vue = this;
            var data = new FormData(form);
            data.append("method","Register");
            axios.post('./includes/router.php',data)
            .then(function(r){
                if(r.data == 1){
                    alert('Successfully Register');
                    window.location.href ="index.html";
                }
                else if(r.data == 2){
                    alert('Successfully Register');
                    window.location.href ="index.html";
                }
                else if(r.data == 3){
                    alert('Already Registered');
                }
                else{
                    // alert("Please Try Again");
                    alert(r.data);
                }
            });
        },
    }
}).mount('#CSRegister')