<template>
  <div class="wrapper1">
    <div class="jrnl">
      <div class="jrnlCriteria">
        <select class="sel" v-model="selectedSubject" name="subject">
          <option class="selOptionDis" disabled value="">Виберіть предмет</option>
          <option>Математика</option>
          <option>Українська мова</option>
          <option>Географія</option>
        </select>
        <select class="sel" v-model="selectedFormClass" name="form-class">
          <option class="selOptionDis" disabled value="">Виберіть клас</option>
          <option>1 клас</option>
          <option>2 клас</option>
          <option>3 клас</option>
          <option>4 клас</option>
        </select>
      </div>

      <div class="jrnlStudentName">
        <journal-item
          v-for="student in newStudents"
          :data="student"
          :key="student.id"
          :selectedsubj="selectedSubject"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JournalItem from "@/components/JournalItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Journal",
  data() {
    return {
      selectedSubject: null,
      selectedFormClass: null,
    };
  },

  components: {
    JournalItem,
  },
  methods: {
  ...mapActions(['GET_STUDENTS_FROM_API'])
  },
  computed: {
    ...mapGetters(["getStudentJournal"]),
    newStudents(){
     return this.getStudentJournal.filter(
       (el) => JSON.parse(el.studentform) == parseInt(this.selectedFormClass)
     ) 
    }
  
  },
  created () {
    this.GET_STUDENTS_FROM_API();
  },
};
</script>

<style scoped></style>
