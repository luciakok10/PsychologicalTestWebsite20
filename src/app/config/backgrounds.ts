// 背景圖片配置 - 可以輕鬆替換所有背景
export const backgrounds = {
  home: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80',
  quiz: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80',
  result: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
};

// 廣告內容配置 - 可以輕鬆替換廣告內容
export interface AdConfig {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export const defaultAd: AdConfig = {
  title: '限時優惠！春季住宿專案',
  description: '預訂即享 85 折優惠，還有免費早餐和迎賓飲料',
  image: 'https://images.unsplash.com/photo-1685159375835-e987def57d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  buttonText: '立即預訂',
  buttonLink: '#',
};
