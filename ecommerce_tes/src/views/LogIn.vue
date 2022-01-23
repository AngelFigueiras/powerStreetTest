<template>
  <div class="login">
        <div class="form-container">
            <img src="../assets/logo_yard_sale.svg" alt="logo" class="logo">

            <form action="/" class="form">
                <label for="email" class="label">Email addres</label>
                <input v-model="email" type="text" id="email" placeholder="baltovich@gmail.com" class="input input-password input-email">

                <label for="password" class="label">Password</label>
                <input v-model="password" type="password" id="password" placeholder="********" class="input input-password">
            </form>

            <button @click="onLogInClicked" class="button-primary button-login">Log in</button>

            <p class="bck-login">
                <a href="/#">Forgot my password</a>
            </p>
        </div>
    </div>
</template>

<script>
// Importar dependencias
import axios from 'axios';

export default {
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        async onLogInClicked() {
            // Obtener las credenciales
            const email = this.email;
            const password = this.password;

            // Iniciar sesión con el backend
            const res = await axios.post('http://prueba.pwstasp.net/api/conexion_login/login', {
                usuario: email,
                contrasenia: password
            });

            // Obtener estado de éxito
            const isLogInSuccessful = res.data.exito;

            if (isLogInSuccessful) {
                this.$router.push('/productos');
            } else {
                alert(res.data.error);
            }
        }
    }
}
</script>

<style scoped>

.login{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}

.form-container{
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
}

.logo{
    width: 150px;
    margin-bottom: 58px;
    justify-self: center;
    display: none;
}

.form{
    display: flex;
    flex-direction: column;
}

.label{
    font-size: var(--sm);
    font-weight: 600;
    margin-bottom: 4px;
}

.input{
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 32px;;
    font-size: var(--sm);
    padding: 6px;
    margin-bottom: 10px;
}

.button-primary{
    background: var(--hospital-green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: 500;
    height: 50px;
}

.bck-login{
    font-size: var(--sm);
    color: var(--hospital-green);
    justify-self: center;
}

.bck-login a{
    color: var(--hospital-green);
    text-decoration: none;
}

.button-signup{
    background: var(--white);
    border-color: var(--hospital-green);
    color: var(--hospital-green);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: 500;
    height: 50px;
    border-radius: 8px;
    border: 1px solid;
}

@media (max-width: 640px) {
    .logo{
        display: block
    };
}

</style>