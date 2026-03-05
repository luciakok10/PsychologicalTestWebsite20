import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Share2, RotateCcw, Home, Sparkles } from 'lucide-react';
import { QuizResult as QuizResultType } from '../data/quizzes';

interface QuizResultProps {
  result: QuizResultType;
  onRestart: () => void;
  onHome: () => void;
}

export function QuizResult({ result, onRestart, onHome }: QuizResultProps) {
  const handleShare = () => {
    const text = `我在心理測驗中得到的結果是「${result.title}」！${result.description}`;
    if (navigator.share) {
      navigator.share({
        title: '我的測驗結果',
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('結果已複製到剪貼簿！');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="shadow-2xl bg-white/90 backdrop-blur-sm border-2 border-purple-100 overflow-hidden">
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative">
          <ImageWithFallback
            src={result.image}
            alt={result.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* 浮動裝飾 */}
          <motion.div
            className="absolute top-6 right-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="h-8 w-8 text-yellow-400 drop-shadow-lg" />
          </motion.div>
        </div>
        
        <CardHeader className="text-center pb-6 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-transparent bg-clip-text rounded-full text-sm border-2 border-purple-200">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ✨ 你的結果
                </span>
              </span>
            </div>
            <CardTitle className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {result.title}
            </CardTitle>
            <CardDescription className="text-lg leading-relaxed text-gray-700 max-w-xl mx-auto">
              {result.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-4 pt-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            <Button 
              onClick={handleShare} 
              variant="outline" 
              className="w-full border-2 hover:border-purple-400 hover:bg-purple-50 transition-all"
            >
              <Share2 className="mr-2 h-4 w-4" />
              分享結果
            </Button>
            <Button 
              onClick={onRestart} 
              variant="outline" 
              className="w-full border-2 hover:border-pink-400 hover:bg-pink-50 transition-all"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              重新測驗
            </Button>
            <Button 
              onClick={onHome} 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
            >
              <Home className="mr-2 h-4 w-4" />
              返回首頁
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
