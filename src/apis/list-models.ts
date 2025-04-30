import { deepseekReuqest } from '@/utils';

interface IDeepSeekModelItem {
  id: string;
  object: 'model';
  owned_by: string;
}

interface IDeepSeekModels {
  object: 'list';
  data: IDeepSeekModelItem[];
}

const getDeepSeekModels = async (): Promise<IDeepSeekModels> => {
  return new Promise((resolve, reject) => {
    deepseekReuqest({
      method: 'GET',
      url: 'models'
    })
      .then((res) => {
        resolve(res.data as IDeepSeekModels);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getDeepSeekModels };
export type { IDeepSeekModelItem, IDeepSeekModels };
