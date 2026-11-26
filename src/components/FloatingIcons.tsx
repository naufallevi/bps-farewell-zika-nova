import { motion } from 'framer-motion';
import { BarChart3, LineChart, MapPinned, Users, PieChart, FileSpreadsheet } from 'lucide-react';

const icons = [BarChart3, LineChart, MapPinned, Users, PieChart, FileSpreadsheet];

export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map((Icon, i) => {
        const top = 10 + (i * 15) % 70;
        const left = (i * 23) % 90;
        const dur = 12 + (i % 4) * 3;
        const delay = i * 0.7;
        return (
          <motion.div
            key={i}
            className="absolute text-bps-blue/20 dark:text-white/10"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
            transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon size={48 + (i % 3) * 20} strokeWidth={1.2} />
          </motion.div>
        );
      })}
    </div>
  );
}