export type Project = {
    id: string;
    title: string;
    year: string;
    category: 'Games & XR' | 'Web & UI' | 'Writing';
    context: string;
    description: string;
    tags: string[];
    featured?: boolean;
    video?: string;
    image?: string;
    links?: {
        label: string;
        url: string;
    }[];
};
export const projects: Project[] = [
    { id: 'healthcare', video: 'assets/media/HealthCareGameTrailer.mov', title: 'Cross-Platform Healthcare Game', year: '2026', category: 'Games & XR', context: 'Practicum · Centre for Digital Media', featured: true, tags: ['Unity XR', 'VR + Mobile', 'Multiplayer'], description: 'A cross-platform VR healthcare game designed to ease anticipatory anxiety for children undergoing medical procedures. A child in VR and a parent on mobile share a story-driven world, seeing and influencing it differently. Built through rapid prototyping in Unity XR, the working MVP connects two applications and makes communication essential to progress.' },
    { id: 'study', title: 'Study Engine', year: '2025', category: 'Web & UI', context: 'Personal project · In progress', featured: true, tags: ['React', 'TypeScript', 'SVG'], description: 'An interactive exam-prep template that rewards demonstrable skill. Each module is a randomized puzzle with live validation and guided hints. Built with React, TypeScript, Vite, Zustand, and Tailwind, with visualizations rendered in SVG.', links: [{ label: 'Visit site', url: 'https://tashagandevia.github.io/StudyEngine' }, { label: 'GitHub', url: 'https://github.com/TashaGandevia/StudyEngine' }] },
    { id: 'roboplan', title: 'RoboPlan', year: '2026', category: 'Web & UI', context: 'User Interface Design · Simon Fraser University', tags: ['UI Design', 'Prototype'], description: 'An AI-powered task planning app designed for adults with ADHD. Informed by user interviews and iterative walkthroughs, RoboPlan combines editable task breakdowns, transparent recommendations, and adjustable AI support to make planning feel more manageable.', video: 'assets/media/RoboPlan.mp4' },
    { id: 'museum', title: 'VR Video Game Museum Exhibit', year: '2024', category: 'Games & XR', context: 'Applied Project · Douglas College', tags: ['WebXR', 'Wonderland Engine'], description: 'A collaboration between Douglas College in Canada and Universidad Tecnológica El Retoño in Mexico. An interactive VR museum built with Wonderland Engine invites visitors to explore video game history.', video: 'assets/media/VideoGameMuseum.mp4' },
    { id: 'haunted', title: 'VR Haunted House', year: '2023', category: 'Games & XR', context: 'Game Development · Douglas College', tags: ['Unreal Engine', 'VR'], description: 'An immersive haunted house experience exploring VR interactivity, lighting, and sound design to create an eerie atmosphere.', video: 'assets/media/VideoHauntedHouse.mp4' },
    { id: 'winter', title: 'Project Winter: An Essay About Social Deception', year: '2024', category: 'Writing', context: 'Game Design and Mechanics · Simon Fraser University', tags: ['Game Design', 'Research'], description: 'An examination of trust, deception, and group dynamics in Project Winter, exploring how survival and social deception mechanics shape player behaviour under pressure.', image: 'assets/media/ProjectWinter_img1.jpg', links: [{ label: 'Read essay', url: 'iat210-researchessay.html' }] }
];

