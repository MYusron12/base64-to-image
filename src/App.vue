<template>
  <div class="containe">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Base64 to image
        </a>
      </div>
    </nav>
  </div>
  <div class="container">
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Input Base64</label>
      <textarea v-model="base64String" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <div class="text-center" style="margin-top: 10px;">
      <button @click="displayImage" class="btn btn-primary">Tampilkan Gambar</button>
    </div>
    <div>
      <div class="card text-bg-white mt-5">
        <img v-if="imageUrl" :src="imageUrl" alt="Gambar" class="img-fluid mx-auto d-block">
      </div>
    </div>
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
