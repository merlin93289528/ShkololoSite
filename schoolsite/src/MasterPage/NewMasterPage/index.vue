<template>
    <div>
        <header>
            <router-link to="/">Головна сторінка</router-link>
            <router-link to="/journal">Журнал</router-link>
            <router-link to="/registration">Реєстрація</router-link>
            <router-link to="/login">Вхід</router-link>
        </header>
        <main>
            <slot>
                Дефолтне значення        
            </slot>
        </main>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        name: 'masterPage'
    }
</script>

<style scoped>

header{
    width: 100%;
    height: 7em;
    background-color: teal;

}
footer{
    width: 100%;
    height: 4em;
    background-color: thistle;
}

</style>
