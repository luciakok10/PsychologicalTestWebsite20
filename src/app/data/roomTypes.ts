export interface RoomType {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export const roomTypes: RoomType[] = [
  {
    id: 'deluxe',
    name: '豪華雙人房',
    description: '寬敞舒適的雙人房，配有景觀陽台',
    image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    price: 'NT$ 3,800',
    features: ['免費 WiFi', '景觀陽台', '迎賓飲料', '免費早餐'],
    recommended: true,
  },
  {
    id: 'suite',
    name: '行政套房',
    description: '奢華套房體驗，獨立客廳和臥室',
    image: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    price: 'NT$ 6,800',
    features: ['獨立客廳', '按摩浴缸', 'VIP 禮遇', '管家服務'],
  },
  {
    id: 'family',
    name: '家庭房',
    description: '適合全家入住的溫馨空間',
    image: 'https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    price: 'NT$ 4,500',
    features: ['雙床配置', '兒童遊戲區', '家庭影院', '廚房設施'],
  },
];

// 根據測驗結果推薦房型
export function getRoomRecommendations(quizType: string, resultType: string): RoomType[] {
  // 這裡可以根據不同的測驗結果給出不同的推薦
  const recommendations: Record<string, string[]> = {
    'personality-extrovert': ['suite', 'deluxe', 'family'],
    'personality-introvert': ['deluxe', 'suite', 'family'],
    'career-creative': ['suite', 'deluxe', 'family'],
    'career-analytical': ['deluxe', 'suite', 'family'],
    'love-emotional': ['suite', 'deluxe', 'family'],
    'love-companion': ['family', 'deluxe', 'suite'],
    'default': ['deluxe', 'suite', 'family'],
  };

  const key = `${quizType}-${resultType.split('-')[0]}`;
  const roomIds = recommendations[key] || recommendations['default'];
  
  return roomIds.map(id => roomTypes.find(room => room.id === id)!).filter(Boolean);
}
