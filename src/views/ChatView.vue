<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <Transition name="slide-fade-items">
    <div v-if="showItems" class="container d-flex justify-content-center ">
      <div
        class="bg-light shadow-lg p-5 main-items"
        style="margin-bottom: 50px !important"
      >
        <div>
          <p>Pitanje:</p>
          <p class="fw-bold">Kako unijeti bilješku za učenika?</p>
        </div>
        <div>
          <p>Odgovor:</p>
          <p class="answer">
            Na izborniku koji se nalazi na lijevoj strani odabrat ćemo opciju
            Imenik. U otvorenom sučelju prikazani su svi učenici koji se nalaze
            u tom odjeljenju. Nakon otvaranja podataka o učeniku odaberemo
            sekciju Bilješke. Tu se nalazi popis svih bilješki koje je nastavnik
            unio za određenog učenika. Za dodavanje nove bilješke potrebno je
            kliknuti na gumb “Dodaj novu bilješku” gdje je potrebno odabrati
            datum i unijeti sadržaj bilješke.Klikom na gumb “Spremi” bilješka je
            uspješno spremljena. Unesena bilješka može se uređivati i brisati.
            Također, ukoliko želite možete i pogledati video upute:
          </p>

          <p class="text-danger">https://www.youtube.com/watch?v=gSUUDVs5d4A</p>
          <img src="../assets/images/video.png" alt="" />
          <div class="d-flex justify-content-end like">
            <p class="me-2">Je li vam bilo korisno?</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-hand-thumbs-up-fill text-success me-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-hand-thumbs-down-fill text-danger mt-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <Footer class="footer" />
</template>

<script>
export default {
  data() {
    return {
      showItems: false,
    };
  },

  created() {
    setTimeout(() => {
      this.showItems = true;
    }, 0);
  },
};
</script>

<style scoped>
.slide-fade-items-enter-from {
  opacity: 0;
 
}

.slide-fade-items-enter-to {
  opacity: 1;
 
}

.slide-fade-items-enter-active {
  transition: all .4s ease-in-out;
}

.footer{
  position: relative !important; 
}


h6,
p {
  color: #056069;
}

.bg-light {
  border-radius: 30px;
}

@media only screen and (max-width: 576px) {
  .container {
    margin-top: 20px !important;
  }
  img {
    width: 350px;
  }

  .bg-light {
    padding: 10px !important;
  }

  .expanded {
    display: block;
    -webkit-line-clamp: unset;
  }
  .like {
    display: flex;
    justify-content: center !important;
    margin-top: 10px;
  }
}

@media screen and (max-width: 576px) {
  .answer {
    font-size: 12px !important;
  }

  .main-items {
    margin-top: 40px;
  }
}

@media screen and (min-width: 576px) and (max-width: 767.98px) {
  .answer {
    font-size: 12px !important;
  }

  img {
    width: 350px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991.98px) {
  .answer {
    font-size: 15px !important;
  }
  img {
    width: 350px;
  }
}

@media screen and (max-width: 992px) {
}

@media screen and (min-width: 992px) and (max-width: 1199.98px) {
 
}

/*large*/
@media screen and (min-width: 1200px) and (max-width: 1919.98px) {
  img {
    width: 350px;
  }

  
}
</style>
