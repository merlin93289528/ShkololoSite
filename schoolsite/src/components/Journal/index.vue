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
          v-for="student in filtredJournal"
          :data="student"
          :key="student.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JournalItem from "@/components/JournalItem";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getStudentJournal"]),

    filtredJournal() {
      return this.getStudentJournal.filter(
        (el) =>
          el.studentClass == parseInt(this.selectedFormClass) &&
          el.subject == this.selectedSubject
      );
    },
  },
};
</script>

<style scoped></style>
