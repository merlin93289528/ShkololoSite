<template>
  <div class="wrapper">
    <div class="jrnl">
      <div class="jrnlCriteria">
        <select v-model="selectedSubject" name="subject">
          <option disabled value="">Виберіть предмет</option>
          <option>Математика</option>
          <option>Українська мова</option>
          <option>Географія</option>
        </select>
        <select v-model="selectedFormClass" name="form-class">
          <option disabled value="">Виберіть клас</option>
          <option>1 клас</option>
          <option>2 клас</option>
          <option>3 клас</option>
          <option>4 клас</option>
        </select>
      </div>

      <div>
        <journal-item
          v-for="student in getStudentJournal"
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
  },
};
</script>

<style lang="scss" scoped></style>
