<template>
  <v-container>
    <v-btn v-if="show_next_btn" @click="show_form = !show_form; show_next_btn = !show_next_btn">Далее</v-btn>
    <v-form ref="form" v-if="show_form" @submit.prevent>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="name" :rules="name_rules" :label="label_text" required @change="changeField" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <SubmitDialog :dialog="dialog" />
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      show_form: false,
      name: '',
      first_name: '',
      last_name: '',
      name_rules: [
        v => !!v || 'Необходимо заполнить поле',
        v => (/^[\p{L}а-яА-ЯёЁ]+(?:[\s-][\p{L}а-яА-ЯёЁ]+)*$/).test(v)
          || 'Поле должно содержать только русские буквы',
      ],
      dialog: false,
      show_next_btn: true,
    }
  },
  methods: {
    setFirstName() {
      this.$store.commit('credentialsForm/setFirstName', this.first_name);
    },
    setLastName() {
      this.$store.commit('credentialsForm/setLastName', this.last_name);
    },
    changeField() {
      if (!this.formIsValid) return;

      if (this.last_name == '') {
        this.last_name = this.name;
        this.name = '';
      } else if (this.first_name == '') {
        this.first_name = this.name;
        this.name = '';
        this.setFirstName();
        this.setLastName();
        this.dialog = true;
        this.show_form = false;
      }
    },
  },
  computed: {
    label_text() {
      if (this.last_name == '') {
        return 'Фамилия';
      } else if (this.first_name == '') {
        return 'Имя';
      }
    },
    formIsValid() {
      return this.$refs.form.validate();
    },
  }
}
</script>
