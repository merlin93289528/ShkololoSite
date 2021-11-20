<template>
  <div class="adminWrapper">
      
    <div class="buttonAdmin">
        <button @click="showPopup" class="btnRegistAdmin"> Зареєструвати користувача</button>
    </div>
    <regist-popup
      v-if="popupVisible"
      @closePop= "closePopAdm"
      />
  </div>
</template>

<script>
import registPopup from "../popupWindow/registPopup"
export default {
    name:"Admin",
    components: {
        registPopup,
    },
    data() {
        return {
            popupVisible: false
        }
    },

    methods: {
        closePopAdm(){
            this.popupVisible=false

        },
        showPopup() {
            this.popupVisible=true
            
        }
    },
};
</script>

<style lang="scss" scoped></style>
