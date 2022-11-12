import { shallowMount } from '@vue/test-utils'
import Vuex, { createStore } from "vuex"
import Journal from '@/components/Journal'
import { createApp } from 'vue'

const store = createStore({
  actions: {
    GET_STUDENTS_FROM_API: jest.fn()
  },
  getters: {
    getStudentJournal: () => {
      return [{
        studentfullname: "Микоряк Марина",
        studentform: "2",
        studentmarks: {
          GeografMarks: [],
          MathMarks: [],
          UkrMarks: [],
        }
      },
      {
        studentfullname: "Костя Чіка",
        studentform: "2",
        studentmarks: {
          GeografMarks: [],
          MathMarks: [],
          UkrMarks: [],
        }
      }
      ]
    },
    getUserRole: () => "ADMIN",
  }
})


const app = createApp(Journal)
app.use(store)
describe('Journal.vue', () => {
  it('Should check amount of students', async () => {
    const wrapper = shallowMount(Journal, {
      global: {
        plugins: [store],
        stubs: {
          JournalItem: false
        }
      },
    })
    await wrapper.setData({ selectedSubject: 'Математика', selectedFormClass: '2 клас' })
    const students = wrapper.findAll('[class="item"]')
    expect(students).toHaveLength(2)
  })
  it('should set 3 marks', async () => {
    const wrapper = shallowMount(Journal, {
      global: {
        plugins: [store],
        stubs: {
          JournalItem: false
        }
      },
    })
    await wrapper.setData({ selectedSubject: 'Математика', selectedFormClass: '2 клас' })
    wrapper.get('[id="Микоряк Марина-1"]').setValue(22)
    wrapper.get('[id="Микоряк Марина-2"]').setValue(21)
    wrapper.get('[id="Микоряк Марина-3"]').setValue(23)
    expect(wrapper.get('[id="Микоряк Марина-1"]').element.value).toBe("22")
  })
  it('should create new student', async () => {
    const wrapper = shallowMount(Journal, {
      global: {
        plugins: [store],
        stubs: {
          JournalItem: false,
          registPopup: false,
        }
      },
    })
    await wrapper.setData({ popupVisible: true, selectedSubject: 'Математика', selectedFormClass: '2 клас' })
    wrapper.get('[id="name"]').setValue("Костя Чіка")
    wrapper.get('[id="formClass"]').setValue(2)
    const student = wrapper.findAll('[class="studName"]')[wrapper.findAll('[class="studName"]').length - 1]
    expect(student.text()).toBe("Костя Чіка")
  })
})

