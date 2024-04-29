<template>
  <div>
    <textarea v-model="base64String" placeholder="Masukkan base64" class="form-control" rows="5"></textarea>
    <div class="text-center" style="margin-top: 10px;">
      <button @click="displayImage" class="btn btn-primary">Tampilkan Gambar</button>
    </div>
    <br>
    <img v-if="imageUrl" :src="imageUrl" alt="Gambar" class="img-fluid mx-auto d-block"
      style="max-width: 100%; height: auto;">
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64String: '',
      imageUrl: ''
    };
  },
  methods: {
    displayImage() {
      if (this.base64String) {
        this.imageUrl = 'data:image/jpeg;base64,' + this.base64String;
      } else {
        alert('Masukkan base64 terlebih dahulu');
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
}
</style>
