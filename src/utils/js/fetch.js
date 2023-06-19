import axios from 'axios';

export async function fetch(KEY_WORD) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${KEY_WORD}&page=1&key=35884784-f4ef154ca00c5641d7d285f15&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}
