import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface QuizCardProps {
  title: string;
  description: string;
  coverImage: string;
  onStart: () => void;
}

export function QuizCard({ title, description, coverImage, onStart }: QuizCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-purple-200">
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 relative">
          <ImageWithFallback
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <Button 
            onClick={onStart} 
            className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
          >
            開始測驗
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
