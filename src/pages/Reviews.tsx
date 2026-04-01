"use client";
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Retail Store Owner",
    content: "Xpress Payment Systems transformed our checkout process. The POS is intuitive and the support is unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Restaurant Manager",
    content: "The mobile payment solutions are a game-changer for our outdoor seating area. Reliable and fast.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "E-commerce Founder",
    content: "Integrating their payment gateway was seamless. Our conversion rates have improved significantly.",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Healthcare Administrator",
    content: "Security is our top priority, and Xpress delivers. Their fraud prevention tools give us peace of mind.",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Customer Reviews" 
        subtitle="See why thousands of businesses trust Xpress Payment Systems." 
      />

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-xl text-white/80 italic mb-6">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-white/50">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </PageLayout>
  );
};
