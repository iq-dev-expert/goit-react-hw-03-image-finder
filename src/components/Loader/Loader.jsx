import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function Loader({ isLoading }) {
  isLoading ? Loading.dots() : Loading.remove();
}
