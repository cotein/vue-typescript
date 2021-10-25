<template>
    <div>
        <h4>Una prueba</h4>
        {{mensaje}}
    </div>
    
</template>

<script lang="ts">    
import axios from 'axios';
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class pp extends Vue {
    @Prop({default:'fucking prueba'}) private mensaje!: string;


    async getUserList()
    {
            /* const url = 'http://localhot:8000';
            axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            let response = await axios.post(url + '/api/oauth/token');

            
            return response; */

            let response = await axios({
                method: 'POST',
                url: 'http://localhost:8000/api/oauth/token',
                data: {
                    grant_type: "password",
                    client_id: "14",
                    client_secret: "6emyBbJ0hKnDlS1jfxNBLjPLqctkXgbHxKH3Bqtk",
                    username:"diego@diego.com",
                    password:"123456",
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                }
            });
            console.log('//////////');
            console.log(response);
            console.log('//////////');


        
    }

    mounted(){
        console.log('daleeeeeeeeee');

        let www = this.getUserList();

        console.log('daleeeeeeeeee');

        console.log('Diego');


    }
}
</script>

<style>

</style>
