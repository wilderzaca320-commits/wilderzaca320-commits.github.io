import {
  Book,
  BookOpen,
  Brain,
  CircleHelp,
  Clapperboard,
  Ear,
  FileText,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Palette,
  Pencil,
  Plus,
  RefreshCcw,
  Search,
  Sprout,
  Target,
  TrendingUp,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconos: Record<string, LucideIcon> = {
  book: Book,
  "book-open": BookOpen,
  brain: Brain,
  "circle-help": CircleHelp,
  clapperboard: Clapperboard,
  ear: Ear,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  "hand-heart": HeartHandshake,
  lightbulb: Lightbulb,
  "message-square": MessageSquare,
  palette: Palette,
  pencil: Pencil,
  plus: Plus,
  "refresh-ccw": RefreshCcw,
  search: Search,
  sprout: Sprout,
  target: Target,
  "trending-up": TrendingUp,
  trophy: Trophy,
  users: Users,
};

export default function IconoEducativo({
  nombre,
  className = "",
}: {
  nombre: string;
  className?: string;
}) {
  const Icon = iconos[nombre] ?? Sprout;
  return <Icon className={className} />;
}
