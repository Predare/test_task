<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-form ref="dialog_form" @submit.prevent>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="phone" :rules="phone_rules" label="Телефон" />
            <v-btn @click="submitForm" type="submit" class="mt-2">Закончить</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  name: 'second_page',
  props: ['dialog'],
  data: () => ({
    phone: '',
    phone_rules: [
      v => !!v || 'Необходимо указать телефонный номер',
      v => (/^(\+7|8)?[ -]?\(?[489][0-9]{2}\)?[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}$/).test(v)
        || 'Номер должен быть введён в правильном формате',
    ]
  }),
  methods: {
    setPhone() {
      this.$store.commit('credentialsForm/setPhone', this.phone);
    },
    submitForm() {
      if (this.$refs.dialog_form.validate()) {
        this.setPhone();
        this.$router.push('/thirdPage');
      }
    }
  },
  computed: {
    formIsValid() {
      return this.$refs.form.validate();
    },
  }
}

</script>
