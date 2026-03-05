import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Question } from '../data/quizzes';

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (score: Record<string, number>) => void;
}

export function QuizQuestion({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            問題 {currentQuestion + 1} / {totalQuestions}
          </span>
          <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-3 bg-gray-200" />
      </div>

      <Card className="shadow-2xl bg-white/90 backdrop-blur-sm border-2 border-purple-100">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl md:text-3xl leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pb-8">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-5 px-6 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 border-2 hover:border-purple-400 hover:shadow-lg group"
                onClick={() => onAnswer(option.score)}
              >
                <span className="mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-white/20 group-hover:to-white/20 flex items-center justify-center text-purple-600 group-hover:text-white transition-all">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base">{option.text}</span>
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
