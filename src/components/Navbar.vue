<template>
  <nav class="navbar navbar-expand bg-transpaernt">
    <div class="container-fluid">
      <router-link to="/">
        <img
          class="imageLogo"
          src="../assets/images/logo.png"
          width="300px"
          height="80px"
          alt=""
        />
      </router-link>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <p class="me-3 fw-bold p1">O sustavu</p>
        </li>
        <li class="nav-item">
          <p class="me-3 fw-bold p2">Pomoć</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.p1,
.p2 {
  color: #056069;
}

@media only screen and (max-width: 576px) {
  .imageLogo {
    width: 200px;
    height: 60px;
  }
}
</style>
