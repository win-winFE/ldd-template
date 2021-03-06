import {createModelActions, rewriteModelEffects} from '../utils/action';
import {getBanners} from '../services/example';

const config = {

  namespace: 'example',

  state: {
    banners: ''
  },

  subscriptions: {},

  effects: {
    * eff_getBanners({payload}, {call, put}) {  // eslint-disable-line
      try {
        const result = yield call(getBanners, payload);
        yield put({
          type: 'redu_saveBanners',
          payload: result
        });
      } catch (e) {
        console.error('xxx报错了： ', e);
      }
    },
  },

  reducers: {
    redu_saveBanners(state, {payload}) {
      return {...state, banners: payload};
    }
  },

};

export default rewriteModelEffects(config);
export const ExampleActions = createModelActions(this.default);