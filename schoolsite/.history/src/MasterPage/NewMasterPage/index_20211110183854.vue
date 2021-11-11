<template>
  <div>
    <header>
      <div class="container">
        <div class="middleHead">
          <div class="alLeft">
            <router-link class="head1" to="/">Головна сторінка</router-link>
            <router-link class="head2" to="/journal">Журнал</router-link>
            <router-link class="head3" to="/registration"
              >Реєстрація</router-link
            >
          </div>
          <div class="alRight">
            <router-link class="head4" to="/login">Вхід</router-link>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "masterPage",
  data() {
    return {
      stan: false,
    };
  },
};
</script>

<style scoped>
header {
  height: 4vw; margin-left: 1vw;
  margin-right: 1vw;
}
.container {
  display: flex;
  align-items: center;
  z-index: 2;
  min-height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.5vw 0.5vw;
  background-repeat: no-repeat;
  box-shadow: 0 0 25px 20px rgba(2, 13, 51, 0.603) inset;
}

.middleHead {
  transition: 0.5s;
  z-index: 1;
  display: flex;
  flex-direction: row;
}
.alLeft {
  display: flex;
  justify-content: left;
  margin-left: 2vw;
}
.alRight{
  margin-left: 62vw;
}
.head1,
.head2,
.head3,
.head4 {
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 15px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.521);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
  z-index: 1;
}

.middleHead:hover .head1:hover,
.head2:hover,
.head3:hover,
.head4:hover {
  font-size: 25px;
  z-index: 1;
}
</style>
