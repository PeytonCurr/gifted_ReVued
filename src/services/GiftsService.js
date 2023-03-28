import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    const res = await api.get(`/gifts`)
    AppState.gifts = res.data.map(g => new Gift(g))
    logger.log(AppState.gifts)
  }

  async openGift(giftId) {
    let gifts = AppState.gifts
    let foundGiftIndex = AppState.gifts.findIndex(g => g.id == giftId)
    gifts[foundGiftIndex].opened = true
    const res = await api.put(`/gifts/${giftId}`, gifts[foundGiftIndex])
    AppState.gifts.splice(foundGiftIndex, 1, new Gift(res.data))
  }
}

export const giftsService = new GiftsService();