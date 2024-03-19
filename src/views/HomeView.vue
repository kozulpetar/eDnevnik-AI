<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";</script>

<template>
  <Navbar/>
  <div class="container">

    <div
        id="mainItemsHome"
        class="items d-flex flex-column align-items-center justify-content-center  "
    >
      <h1 class="fw-bold mt-5 heading">
        AI pomoćnik za <span style="color: #056069">eDnevnik</span>
      </h1>
      <p class="fs-4 descHeading" style="color: #616161">
        Ovaj sustav Vam pomaže u radu sa eDnevnik aplikacijom.
      </p>
      <div
          class="mb-4 mt-4 col-12 col-lg-9 col-xl-9 col-md-12 col-sm-12 position-relative"
      >
        <input
            class="form-control searchBar"
            type="text"
            v-model="userQuery"
            placeholder="Postavite pitanje..."
            aria-label="Search"
            @keydown.enter="askApi()"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#056069"
            class="bi bi-search position-absolute searchIcon"
            viewBox="0 0 16 16"
            style="right: 20px; top: 50%; transform: translateY(-50%)"
        >
          <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
          />
        </svg>
      </div>
      <div
          class="questionItems mt-4 d-flex justify-content-between col-12 col-lg-8 col-xl-6 col-md-10 col-sm-12"
      >
        <p @click="userQuery = 'Kako unijeti ocjenu?'">Kako unijeti ocjenu?</p>
        <p @click="userQuery = 'Gdje se nalazi raspored sati?'">Gdje se nalazi raspored sati?</p>
        <p @click="userQuery = 'Ne radi prijava?'">Ne radi prijava?</p>
      </div>
      <div class="col-12 col-md-5 col-sm-5 col-lg-3 col-xl-3 mt-3">
        <button
            class="btn text-light p-3 w-100 fs-4 mt-3 bgBtn"
            @click="askApi()"
            :disabled="loading"
        >
          Pošalji upit
          <div v-if="loading" class="spinner-border text-muted"></div>
        </button>
      </div>
      <p class="mt-2 problemsHead" style="color: #616161">
        Imate poteškoća, javite nam se.
      </p>
      <br/>
      <br/>
      <div class="bottomImages">
        <img
            src="../assets/images/tehnicka.png"
            height="100px"
            width="300px"
            alt=""
        />
        <img
            src="../assets/images/sumAi.png"
            height="50px"
            width="150px"
            alt=""
        />
      </div>
    </div>

  </div>
  <Footer/>
</template>

<script>
export default {
  data() {
    return {
      hide: true,
      userQuery: '',
      loading: false,
    };
  },
  methods: {
    askApi() {
      if (this.loading) { return }

      this.loading = true

      this.axios.post('https://api-ai.dnevnik.sum.ba/ask', {
        'message_body': this.userQuery,
        'nastavnik_id': '123',
        'name': 'Nastavnik',
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => {
        console.log(response.data)

        localStorage.setItem('userQuery', this.userQuery)
        localStorage.setItem('userQueryResponse', response.data.response)

        this.gotoMain()
      }).catch(() => {
        alert("Nesto je poslo krivo. Ovo zamjeniti za snackbar.")
      }).finally(() => {
        this.loading = false;
      })
    },
    gotoMain() {
      let mainItemsHome = document.getElementById("mainItemsHome");
      mainItemsHome.classList.add('animateHome');

      setTimeout(() => {
        this.$router.push("/chat");
      }, 1000);
    },
  },
};
</script>

<style scoped>

#mainItemsHome {
  transition: transform 2s ease-out;
  overflow: hidden !important;
}

.animateHome {
  transform: translateY(-200%);
}

.heading {
  font-size: 50px;
}

.searchBar {
  border-radius: 50px;
  padding: 15px;
  box-shadow: none;
}

.searchBar::placeholder {
  color: #959595;
  font-size: 15px;
}

.searchBar:focus {
  box-shadow: none;
  border: 1px solid #056069;
}

.questionItems p {
  background-color: #fff;
  padding: 15px;
  border-radius: 50px;
  font-size: 15px;
  color: #056069;
}

.bgBtn {
  background-color: #056069;
  border-radius: 50px;
}

@media screen and (max-width: 576px) {
  .heading {
    font-size: 30px;
    margin: 0 !important;
  }

  .descHeading {
    font-size: 15px !important;
  }

  .searchBar {
    padding: 10px;
  }

  .searchBar::placeholder {
    font-size: 11px;
  }

  .searchIcon {
    width: 18px;
    height: 18px;
  }

  .problemsHead {
    font-size: 12px;
  }

  .questionItems {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 !important;
  }

  .questionItems p {
    padding: 10px;
    font-size: 13px;
  }

  .bgBtn {
    font-size: 15px !important;
    margin: 0 !important;
    padding: 10px !important;
  }

  .bottomImages {
    display: flex;
    margin: 0px !important;
  }

  .bottomImages img {
    width: 150px;
    height: 50px;
  }
}

@media screen and (max-width: 576px) {
  .heading {
    font-size: 25px !important;
    margin-top: 5rem !important;
  }
}

@media screen and (min-width: 576px) and (max-width: 767.98px) {
  .heading {
    font-size: 35px;
    margin-top: 10px;
  }

  .descHeading {
    font-size: 15px !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 991.98px) {
  .heading {
    font-size: 35px;
    margin-top: 10px;
  }

  .descHeading {
    font-size: 15px !important;
  }

  .searchBar {
    padding: 10px;
  }

  .bgBtn {
    padding: 10px !important;
    font-size: 15px !important;
  }
}

@media screen and (max-width: 992px) {
  .heading {
    font-size: 35px;
    margin-top: 20px;
  }

  .descHeading {
    font-size: 15px !important;
  }

  .searchBar {
    padding: 10px;
  }

  .bgBtn {
    padding: 10px !important;
    font-size: 15px !important;
  }

  .questionItems {
    display: flex;

    gap: 10px;
    text-align: center;
    margin: 0 !important;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199.98px) {
  .heading {
    font-size: 35px !important;
    margin-top: 20px;
  }

  .descHeading {
    font-size: 15px !important;
  }

  .searchBar {
    padding: 10px;
  }

  .bgBtn {
    padding: 10px !important;
    font-size: 15px !important;
  }

  .questionItems {
    display: flex;

    gap: 10px;
    text-align: center;
    margin: 0 !important;
  }
}

/*large*/
@media screen and (min-width: 1200px) and (max-width: 1919.98px) {
  .heading {
    font-size: 45px;
    margin-top: 10px !important;
  }

  .descHeading {
    font-size: 20px !important;
  }

  .bgBtn {
    padding: 10px !important;
  }

  .bottomImages {
    position: relative;
    bottom: 50px;
  }


}
</style>
