<template>
  <div class="elevation-5 p-3 border border-dark bg-light text-center" @click="openGift(giftProp)">
    <img class="img-fluid gif-img" :src="giftProp.url" alt="">
    <h1 class="text-start text-dark">{{ giftProp.tag }}</h1>
  </div>
</template>

<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  props: {
    giftProp: { type: Gift, required: true }
  },

  setup() {

    return {
      async openGift(giftProp) {
        try {
          const giftId = giftProp.id
          await giftsService.openGift(giftId);
        } catch (error) {
          Pop.error(error)
          logger.log(error.message)
        }
      },
    };
  },
};
</script>

<style>
.gif-img {
  height: 30vh;
  width: 30vh;
  object-fit: cover;
  object-position: center;
}
</style>