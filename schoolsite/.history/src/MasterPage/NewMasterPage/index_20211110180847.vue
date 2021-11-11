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
  /* width: 100%; */
  height: 4vw;
}
.container {
  /* position: fixed; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* width: 50%;
  left: 24%; */
  z-index: 1;
  /* min-height: 40px; */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0.5vw 0.5vw;
  background-repeat: no-repeat;
  box-shadow: 0 0 5px 5px rgba(2, 13, 51, 0.836) inset;
  background-image: url(https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w);
}

.middleHead {
  transition: 0.5s;
  z-index: 1;
}
.alLeft {
  display: flex;
  justify-content: left;
}
.alRight{
  
}
.head1,
.head2,
.head3,
.head4 {
  color: rgb(255, 255, 255);
  padding: 0 20px;
  font-size: 20px;
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
  font-size: 30px;
  z-index: 1;
}

/* footer {
  width: 730px;
  height: 60px;
  left: 30%;
  display: flex;
  background: rgba(77, 24, 121, 0.466);
  bottom: 25px;
  padding: 20px;
  position: absolute;
} */
</style>
