import squatImg from '../assets/Exercise/squat.jpg';
import benchpressImg from '../assets/Exercise/benchpress.jpg';
import deadliftImg from '../assets/Exercise/deadlift.jpg';
import overheadImg from '../assets/Exercise/overhead.jpg';
import {
  BadgeCheck,
  BicepsFlexed,
  Candy,
  CircleCheck,
  Clock,
  Crown,
  Gem,
  Mail,
  Phone,
  Search,
  Shield,
  SlidersVertical,
  Sparkles,
  Target,
  Timer,
  TvMinimalPlay,
  Zap,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const bodyPartEg = [
  'All Exercise',
  'Chest',
  'Back',
  'Legs',
  'Core',
  'Cardio',
];

export const FeaturedExercisesData = [
  {
    id: 1,
    imgSrc: squatImg,
    ExerciseName: 'Squats',
    TargetMuscle: ['Quadriceps,', 'Hamstrings,', 'Glutes'],
    ExerciseType: 'Lower Body Workout',
  },
  {
    id: 2,
    imgSrc: benchpressImg,
    ExerciseName: 'Bench Press',
    TargetMuscle: ['Chest,', 'Shoulders,', 'Triceps'],
    ExerciseType: 'Upper Body Workout',
  },
  {
    id: 3,
    imgSrc: deadliftImg,
    ExerciseName: 'Deadlift',
    TargetMuscle: ['Back Muscels,', 'Core,', 'Hamstring'],
    ExerciseType: 'Full Body Workout',
  },
  {
    id: 4,
    imgSrc: overheadImg,
    ExerciseName: 'Overhead Press',
    TargetMuscle: ['Front Deltoids,', 'Upper Chest,', 'Triceps'],
    ExerciseType: 'Upper Body Workout',
  },
];

export const BenefitsSectionData = [
  {
    id: 1,
    icon: <SlidersVertical color="blue" />,
    color: 'blue',
    heading: 'Personalized Experience',
    desc: 'Find exercises that match your fitness level and goals',
  },
  {
    id: 2,
    icon: <BadgeCheck color="green" />,
    color: 'green',
    heading: 'Expert Guidance',
    desc: 'Detailed instructions and proper form demonstrations',
  },
  {
    id: 3,
    icon: <Zap color="purple" />,
    color: 'purple',
    heading: 'Quick Results',
    desc: 'Track your progress and see improvements faster',
  },
  {
    id: 4,
    icon: <Clock color="red" />,
    color: 'red',
    heading: 'Time Efficient',
    desc: 'Find the right exercises instantly, no wasted time',
  },
];

export const HowItWorkSectionData = [
  {
    id: 1,
    icon: <Search color="blue" />,
    color: 'blue',
    heading: 'Search Exercise',
    desc: 'Enter the name of exercise, target muscle, or equipment you want to use',
  },
  {
    id: 2,
    icon: <CircleCheck color="green" />,
    color: 'green',
    heading: 'Choose Exercise',
    desc: 'Browse through our curated list and select the exercises that match your goals',
  },
  {
    id: 3,
    icon: <TvMinimalPlay color="purple" />,
    color: 'purple',
    heading: 'Start Training',
    desc: 'Follow the detailed instructions and start your workout journey',
  },
];

export const ExerciseCategoriesData = [
  {
    id: 1,
    icon: <Shield color="white" />,
    color: 'red',
    bodyPartName: 'Chest',
    desc: 'Develop chest muscles for strength, size, and definition.',
  },
  {
    id: 2,
    icon: <Crown color="blue" />,
    color: 'blue',
    bodyPartName: 'Back',
    desc: 'Strengthen upper and lower back for posture and stability.',
  },
  {
    id: 3,
    icon: <Gem color="green" />,
    color: 'green',
    bodyPartName: 'Shoulders',
    desc: 'Build deltoids for shoulder strength, mobility, and endurance.',
  },
  {
    id: 4,
    icon: <Sparkles color="indigo" />,
    color: 'indigo',
    bodyPartName: 'Upper Legs',
    desc: 'Focus on quads, hamstrings, and glutes for leg strength.',
  },
  {
    id: 5,
    icon: <Target color="purple" />,
    color: 'purple',
    bodyPartName: 'Lower Legs',
    desc: 'Strengthen calves and improve ankle flexibility and endurance.',
  },
  {
    id: 6,
    icon: <Timer color="white" />,
    color: 'pink',
    bodyPartName: 'Cardio',
    desc: 'Enhance cardiovascular endurance with high-intensity aerobic exercises.',
  },
  {
    id: 7,
    icon: <BicepsFlexed color="white" />,
    color: 'cyan',
    bodyPartName: 'Upper Arms',
    desc: 'Tone and build biceps and triceps for arm definition.',
  },
  {
    id: 8,
    icon: <Candy color="white" />,
    color: 'orange',
    bodyPartName: 'Lower Arms',
    desc: 'Strengthen forearms and wrists for improved grip and stability.',
  },
];

export const FooterSocial = [
  { id: 1, iconType: <FaFacebookF /> },
  { id: 2, iconType: <FaTwitter /> },
  { id: 3, iconType: <FaInstagram /> },
];

export const FooterQuickLinks = [
  {
    id: 1,
    name: 'Home',
    to: 'hero',
    smooth: true,
    offset: -100,
    duration: 700,
  },
  {
    id: 2,
    name: 'Search Exercises',
    to: 'findExercise',
    smooth: true,
    offset: -60,
    duration: 700,
  },
  {
    id: 3,
    name: 'Categories',
    to: 'categories',
    smooth: true,
    offset: -50,
    duration: 700,
  },
  {
    id: 4,
    name: 'How It Works',
    to: 'howItWorks',
    smooth: true,
    offset: -50,
    duration: 700,
  },
  {
    id: 5,
    name: 'Benefits',
    to: 'benefits',
    smooth: true,
    offset: -60,
    duration: 700,
  },
];

export const FooterSupport = [
  'Help Center',
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'FAQ',
];

export const FooterContact = [
  {
    id: 1,
    icon: <Mail size={16} />,
    text: 'support@trainlyy.com',
  },
  {
    id: 2,
    icon: <Phone size={16} />,
    text: '+1 (555) 123-4567',
  },
];
