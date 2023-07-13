<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model.number="first_number"
            :rules="fraction_rules"
            label="Первое число"
            @change="checkFirstField"
            required />

            <v-text-field
            v-model.number="second_number"
            v-if="showSecondField"
            :rules="fraction_rules"
            label="Второе число" required />
            <p v-if="second_number !== ''">
              {{ first_number + second_number }}
            </p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    first_number: '',
    second_number: '',

    showSecondField: false,
    fraction_rules: [
      v => !!v || 'Необходимо ввести число',
      v => (!isNaN(parseFloat(v))) || 'Значение не является числом',
    ]
  }),
  methods: {
    checkFirstField() {
      if (this.first_number !== '') {
        this.showSecondField = true;
      } else {
        this.showSecondField = false;
      }
    }
  }

}
</script>
