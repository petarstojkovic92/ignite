import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const datailData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: datailData.data,
      screen: screenshotsData.data,
    },
  });
};
