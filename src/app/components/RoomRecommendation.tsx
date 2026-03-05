import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check, Star } from 'lucide-react';
import { RoomType } from '../data/roomTypes';

interface RoomRecommendationProps {
  rooms: RoomType[];
}

export function RoomRecommendation({ rooms }: RoomRecommendationProps) {
  return (
    <div className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          根據你的性格，我們推薦這些房型
        </h3>
        <p className="text-gray-600">為您量身打造的完美住宿體驗</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative">
              {room.recommended && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    推薦
                  </div>
                </div>
              )}
              
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <span className="text-lg text-purple-600">{room.price}</span>
                </div>
                <CardDescription className="text-base">{room.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-2 mb-4 flex-grow">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  查看詳情
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
