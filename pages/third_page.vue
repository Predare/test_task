<template>
  <v-card>
    <v-card-title class="headline">Форма заполнена!</v-card-title>
    <v-card-text>
      <p>Имя: {{ formData.first_name }}</p>
      <p>Фамилия: {{ formData.last_name }}</p>
      <p>Телефон: {{ formData.phone }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'third_page',
  computed: {
    formData() {
      return this.$store.state.credentialsForm.credentials;
    }
  }
}
</script>
