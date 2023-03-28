<template>
  <div class="container-fluid bg-grey">
    <section class="row g-3 pt-3">

      <div class="col-3" v-for="gift in gifts" :key="gift.id">
        <GiftCard :giftProp="gift" />
      </div>

    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import GiftCard from '../components/GiftCard.vue';

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        Pop.error(error);
        logger.log(error.message);
      }
    }
    onMounted(() => {
      getGifts();
    });
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
  components: { GiftCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

}
</style>
