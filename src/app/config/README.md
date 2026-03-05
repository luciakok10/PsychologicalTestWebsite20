# 配置說明文件

## 如何替換背景圖片

打開 `/src/app/config/backgrounds.ts` 文件，修改以下配置：

```typescript
export const backgrounds = {
  home: '首頁背景圖片URL',     // 首頁的背景圖
  quiz: '測驗頁面背景圖片URL',  // 測驗進行中的背景圖
  result: '結果頁面背景圖片URL', // 測驗結果頁的背景圖
};
```

## 如何替換廣告內容

在同一個文件中，修改廣告配置：

```typescript
export const defaultAd: AdConfig = {
  title: '廣告標題',
  description: '廣告描述文字',
  image: '廣告圖片URL',
  buttonText: '按鈕文字',
  buttonLink: '按鈕連結',
};
```

## 如何替換房型資訊

打開 `/src/app/data/roomTypes.ts` 文件，修改房型資料：

```typescript
export const roomTypes: RoomType[] = [
  {
    id: '房型ID',
    name: '房型名稱',
    description: '房型描述',
    image: '房型圖片URL',
    price: '價格',
    features: ['特色1', '特色2', '特色3', '特色4'],
    recommended: true, // 是否為推薦房型
  },
  // 可以添加更多房型...
];
```

## 圖片建議規格

- **背景圖片**: 1920x1080 或更大，橫向圖片
- **房型圖片**: 800x600 或 4:3 比例
- **廣告圖片**: 800x600 或 16:9 比例
- **測驗封面圖**: 800x450 或 16:9 比例

所有圖片建議使用 JPG 或 PNG 格式，優化後上傳以確保快速載入。
