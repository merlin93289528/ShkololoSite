<template>
  <div>
    <div class="JrnItem">
      <p class="studName">{{ data.studentfullname }}</p>
      <div class="inputTypeMark">
        <div v-if="selectedsubj == 'Математика'">
          <input
            type="text"
            v-for="n in 20"
            :key="n"
            :value="data.studentmarks.MathMarks[n - 1]"
            @change="updateMark($event.target.value, data._id, n, selectedsubj)"
          />
        </div>
        <div v-else-if="selectedsubj == 'Українська мова'">
          <input
            type="text"
            v-for="n in 20"
            :key="n"
            :value="data.studentmarks.UkrMarks[n - 1]"
            @change="updateMark($event.target.value, data._id, n, selectedsubj)"
          />
        </div>
        <div v-else>
          <input
            type="text"
            v-for="n in 20"
            :key="n"
            :value="data.studentmarks.GeografMarks[n - 1]"
            @change="updateMark($event.target.value, data._id, n, selectedsubj)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    selectedsubj: {
      type: String,
    },
  },
  computed: {},
  methods: {
    ...mapActions(['GET_NEW_MARKS']),
    updateMark(mark, userId, markId, subject) {
      console.log(mark)
      axios
        .post(`http://localhost:5000/student/updatemark`, {
          newMark: mark,
          user_id: userId,
          newMarkId: markId,
          studSubject: subject,
        })
        .then((response) => this.GET_NEW_MARKS(response.data));
    },
  },
};
</script>

<style lang="scss" scoped>
.studName {
  width: 20vw;
  height: 1.3vw;
  font-size: 1vw;
  text-align: center;
   color: rgb(24, 10, 10);

  background-color: rgba(255, 228, 196, 0.651);

}
.inputTypeMark {
  margin-left: 1vw;
}
.JrnItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -1.5vw;
}
input {
  width: 1.5vw;
  height: 1.3vw;
}
</style>
