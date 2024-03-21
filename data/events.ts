import { Event } from '../@types/events';
import { GiDiscussion, GiPublicSpeaker, GiVideoConference } from "react-icons/gi";

export const events: Event[] = [
    { title: 'Accessibility is not a checklist', icon: GiPublicSpeaker, speaker: 'Julia, Laura', date: 'September 20, 2024', type: 'Workshop', location: 'UXCon Vienna' },
    { title: 'Getting started with designing for Web Accessibility', icon: GiPublicSpeaker, speaker: 'Julia', date: 'April 27, 2024', type: 'Talk', location: 'Kobe' },
    { title: 'Getting started with designing for Web Accessibility', icon: GiPublicSpeaker, speaker: 'Julia', date: 'April 20, 2024', type: 'Talk', location: 'GDG Shikoku' },
    { title: 'Getting started with designing for Web Accessibility', icon: GiPublicSpeaker, speaker: 'Julia', date: 'March 16, 2024', type: 'Talk', location: 'GDG Toyko' },
    { title: 'What is accessibility in tech?', icon: GiDiscussion, speaker: 'Julia', date: 'February 24, 2023', type: 'Discussion', location: '50DaysOfSpaces' },
    { title: 'Die blinde User Experience bei Hope Tech Plus', icon: GiVideoConference, speaker: 'Laura', date: 'January 11, 2024', type: 'Talk', location: 'Drive CX Breakfast' },
    { title: 'Digital Accessibility Meet Up', icon: GiDiscussion, speaker: 'Laura', date: 'December 07, 2023', type: 'Panel Discussion', location: 'PWC Austria' },
    { title: 'Getting started with designing for Web Accessibility', icon: GiVideoConference, speaker: 'Julia', date: 'December 01, 2023', type: 'Talk', location: 'GDE DevFest Calabar' },
    { title: 'How to keep up with tech knowledge output? Focus accessibility', icon: GiDiscussion, speaker: 'Julia', date: 'November 28, 2023', type: 'Discussion', location: 'Girlcode Break Time' },
    { title: 'Devs need to learn more about accessibility, but how?', icon: GiDiscussion, speaker: 'Julia', date: 'October 17, 2023', type: 'Discussion', location: 'SpaghettiSpaces' },
    { title: 'GAAD – Global Accessibility Awareness Day', icon: GiDiscussion, speaker: 'Julia', date: 'May 18, 2023', type: 'Panel Discussion', location: 'Atos' },
    { title: 'Self-Learning to Start Your Coding Career ', icon: GiDiscussion, speaker: 'Julia', date: 'January 11, 2023', type: 'Discussion', location: 'CodeSmith' },
    { title: 'Human (soft) skills for developers', icon: GiVideoConference, speaker: 'Julia', date: 'December 20, 2022', type: 'Talk', location: 'daily.dev' },
    { title: 'Myths & Misconception about Accessibility', icon: GiVideoConference, speaker: 'Julia', date: 'September 13, 2022', type: 'Talk', location: 'Frontend Foxes' },
    { title: 'Who is responsible for accessibility?', icon: GiDiscussion, speaker: 'Julia, Laura', date: 'June 08, 2022', type: 'Q&A', location: 'A1 Telekom' },
    { title: 'From Poker dealer to coder', icon: GiDiscussion, speaker: 'Julia', date: 'April 04, 2022', type: 'Q&A', location: 'EddieJaoude' }
];