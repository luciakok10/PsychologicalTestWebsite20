import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';
import { AdConfig } from '../config/backgrounds';

interface AdBannerProps {
  ad: AdConfig;
}

export function AdBanner({ ad }: AdBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-12"
    >
      <Card className="overflow-hidden bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border-2 border-purple-200 hover:border-purple-300 transition-colors">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* 圖片區 */}
            <div className="relative aspect-video md:aspect-auto overflow-hidden">
              <ImageWithFallback
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
            </div>

            {/* 內容區 */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  特別優惠
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {ad.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {ad.description}
              </p>

              <Button 
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = ad.buttonLink}
              >
                {ad.buttonText}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
