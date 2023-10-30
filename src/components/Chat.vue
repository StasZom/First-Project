<template lang="">
   <div class = "formBox">
    <form action="" class="chat" @submit = 'addMessage'>
        <input type="text" class= "inputChat" placeholder= "Введите сообщение" id = "message">
        <button>Отправить</button>
    </form>
    </div>

</template>
<script>
export default {



    methods: {
        addMessage(e){
            const message  = {
                id: e.target[1].value,
                message: e.target[0].value
            }

            fetch('http://localhost:3004/sendMessage',{
                method: 'POST',
                headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(message),
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('id', data.id)
            localStorage.setItem('message', data.message)
        })
            

        }
    },
   
}


</script>
<style scoped>
.chat{
    width: 30%;
    margin: 3% auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    }

    .formBox{
        width: 100%;
        height: 100%;
    }
    .inputChat{
        height: 30%;
    }
</style>