 const { createApp } = Vue;
createApp({
    methods:{
        login:function(e){
            e.preventDefault();

            var data = new FormData(e.currentTarget);
            data.append("method","Login");
            axios.post('./includes/router.php',data)
            .then(function(r){
                if(r.data == 1){
                    alert("Successfully Login :) ");
                    window.location.href ="./Customer/index.php";
                }else if(r.data == 2){
                    alert("Successfully Login :) ");
                    window.location.href ="./Seller/index.php";
                }else if(r.data == 0){
                    alert("Welcome To Admin Dashboard");
                    window.location.href ="./Admin/index.php";
                }
                else{
                    alert("Try Again To log in ");
                    // alert(r.data);
                }
            })
        }
    }
}).mount('#CSLogin')