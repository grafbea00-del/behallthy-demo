import React, { useState } from 'react';

const LOGO_URI = 'data:image/png;base64,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';

const C = {
  cinnamon: '#c86434',
  cinnamonLight: '#f5ece4',
  cinnamonMid: '#e8a882',
  turquoise: '#2fbca0',
  turquoiseLight: '#e6f7f4',
  blue: '#0369a1',
  blueLight: '#e0f0fa',
  navy: '#0369a1',
  offWhite: '#fafaf8',
  grey50: '#f8f7f5',
  grey100: '#eeecea',
  grey300: '#c8c4be',
  grey500: '#7a746c',
  grey700: '#3d3832',
  white: '#ffffff',
};

// Photo placeholder component
function PhotoPlaceholder({ size = 80, initials, bg, color }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg || '#eeecea',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, overflow: 'hidden', position: 'relative',
      border: '2px solid #eeecea',
    }}>
      <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '60%', height: '60%', opacity: 0.25 }} fill={color || '#7a746c'}>
        <circle cx="50" cy="35" r="20" />
        <ellipse cx="50" cy="85" rx="35" ry="25" />
      </svg>
      <span style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: size * 0.22, fontWeight: 700, color: color || '#7a746c',
        position: 'relative', zIndex: 1,
      }}>{initials}</span>
    </div>
  );
}

const COACHES = [
  {
    id: 1,
    name: 'Hannah O\'Brien',
    gender: 'female',
    location: 'Bristol, England',
    coachType: 'Health and Nutrition Coach',
    specialism: 'Gut health & digestion',
    specialismKey: 'gut',
    bio: "Hi, I\'m Hannah. I work with people who have spent years being told their digestion issues are \"just IBS\" or \"stress related\", and who are done accepting that as an answer. My approach looks at what your gut is actually telling you rather than trying to mask the symptoms. If you\'ve tried the obvious things and still feel off, I\'d love to help you connect the dots.",
    qualifications: ['UKIHCA Registered', 'Health and Nutrition Coach', 'Fully Insured'],
    languages: ['English'],
    rating: 4.9, reviews: 34,
    avatar: 'HO', avatarBg: '#e6f7f4', avatarColor: '#0369a1',
    nextGroup: 'Gut Reset Foundations, Tues 17 June, 7pm',
    groupPrice: 25,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    gender: 'female',
    location: 'London, England',
    coachType: 'Health and Wellness Coach',
    specialism: "Women\'s health & hormones",
    specialismKey: 'hormones',
    bio: "Hi, I\'m Priya. I specialise in the hormonal picture that so many women in their 30s and 40s recognise but can\'t get answers for: the fatigue that sleep doesn\'t fix, the mood shifts, the cycle changes that feel invisible in a standard GP appointment. I bring a calm, evidence-informed approach to helping you understand what your body is actually asking for.",
    qualifications: ['ICF Certified Coach', 'UKIHCA Registered', 'Fully Insured'],
    languages: ['English', 'Hindi'],
    rating: 5.0, reviews: 28,
    avatar: 'PS', avatarBg: '#fdf0e8', avatarColor: '#c86434',
    nextGroup: 'Hormones & Energy Reset, Wed 18 June, 6.30pm',
    groupPrice: 35,
  },
  {
    id: 3,
    name: 'Ciarán Doyle',
    gender: 'male',
    location: 'Dublin, Ireland',
    coachType: 'Health Coach',
    specialism: 'Stress & lifestyle',
    specialismKey: 'stress',
    bio: "Hi, I\'m Ciarán. I work with people who are functioning well on paper but running on empty underneath. My clients are often high achievers who have normalised being exhausted and wired at the same time. I take a practical, no-nonsense approach to lifestyle: sleep, stress load, movement, and the habits that are quietly draining you. No fluff, just what actually works.",
    qualifications: ['UKIHCA Registered', 'Health Coach', 'Fully Insured'],
    languages: ['English'],
    rating: 4.8, reviews: 41,
    avatar: 'CD', avatarBg: '#e0f0fa', avatarColor: '#0369a1',
    nextGroup: 'The Burnout Reset, Thurs 19 June, 7.30pm',
    groupPrice: 25,
  },
  {
    id: 4,
    name: 'Sofia Andrade',
    gender: 'female',
    location: 'Manchester, England',
    coachType: 'Health and Nutrition Coach',
    specialism: 'Weight & nutrition',
    specialismKey: 'weight',
    bio: "Hi, I\'m Sofia. I work with clients who have tried every diet going and are done with restriction. My focus is on the relationship with food as much as the food itself. Understanding your patterns and building an approach that actually fits your life long term. I also work in Portuguese if that feels more comfortable for you.",
    qualifications: ['UKIHCA Registered', 'Health and Nutrition Coach', 'Fully Insured'],
    languages: ['English', 'Portuguese'],
    rating: 4.9, reviews: 52,
    avatar: 'SA', avatarBg: '#e6f7f4', avatarColor: '#2fbca0',
    nextGroup: 'Food & You, Mon 16 June, 6pm',
    groupPrice: 40,
  },
  {
    id: 5,
    name: 'James Whitfield',
    gender: 'male',
    location: 'Edinburgh, Scotland',
    coachType: 'Health Coach',
    specialism: "Men\'s health",
    specialismKey: 'mens',
    bio: "Hi, I\'m James. I focus on the health issues men tend to ignore until they become a real problem: low energy, poor sleep, weight creep, and that slow erosion of feeling physically well. I offer a straightforward, judgement-free space for men who want to do something about it, without the gym-bro noise.",
    qualifications: ['UKIHCA Registered', 'Health Coach', 'Fully Insured'],
    languages: ['English'],
    rating: 4.7, reviews: 19,
    avatar: 'JW', avatarBg: '#fdf0e8', avatarColor: '#c86434',
    nextGroup: "Men\'s Health Foundations, Sat 21 June, 10am",
    groupPrice: 25,
  },
  {
    id: 6,
    name: 'Aoife Murphy',
    gender: 'female',
    location: 'Cork, Ireland',
    coachType: 'Health and Wellness Coach',
    specialism: 'Energy & fatigue',
    specialismKey: 'energy',
    bio: "Hi, I\'m Aoife. I work with people whose tiredness has become the background noise of daily life. In my experience, it\'s rarely just one thing. Sleep quality, nutrient gaps,, blood sugar patterns and stress load all play a role. I help you untangle what is actually driving your fatigue and build sustainable energy from the ground up.",
    qualifications: ['UKIHCA Registered', 'Health and Wellness Coach', 'Fully Insured'],
    languages: ['English'],
    rating: 4.9, reviews: 37,
    avatar: 'AM', avatarBg: '#e6f7f4', avatarColor: '#0369a1',
    nextGroup: 'Energy from the Inside Out, Tues 17 June, 6pm',
    groupPrice: 35,
  },
  {
    id: 7,
    name: 'Marcus Webb',
    gender: 'male',
    location: 'Birmingham, England',
    coachType: 'Health Coach',
    specialism: 'Sleep',
    specialismKey: 'sleep',
    bio: "Hi, I\'m Marcus. I work with people who have quietly given up on sleep being anything other than a problem. My approach looks at the full picture: light exposure, circadian rhythm, stress, nutrition, and the habits that have slowly disrupted your body\'s ability to rest properly. If you\'ve accepted bad sleep as your normal, it doesn\'t have to stay that way.",
    qualifications: ['UKIHCA Registered', 'Health Coach', 'Fully Insured'],
    languages: ['English'],
    rating: 4.8, reviews: 23,
    avatar: 'MW', avatarBg: '#e0f0fa', avatarColor: '#0369a1',
    nextGroup: 'Sleep Reset, Wed 18 June, 8pm',
    groupPrice: 25,
  },
];

const QUIZ_QUESTIONS = [
  { id: 1, question: 'What is bringing you here today?', options: [
    { label: 'I am always tired, no matter how much I sleep', key: 'fatigue' },
    { label: 'My digestion is not right: bloating, discomfort, irregularity', key: 'gut' },
    { label: 'My weight is not where I want it and nothing seems to work', key: 'weight' },
    { label: 'My hormones feel all over the place: mood, cycle, skin, energy', key: 'hormones' },
    { label: 'I am stressed and it is affecting everything', key: 'stress' },
    { label: 'Something feels off but I cannot quite explain it', key: 'general' },
    { label: 'I want to get ahead of my health before problems start', key: 'preventative' },
  ]},
  { id: 2, question: 'How long have you been feeling this way?', options: [
    { label: 'A few weeks', key: 'weeks' },
    { label: 'A few months', key: 'months' },
    { label: 'Over a year', key: 'year' },
    { label: 'Most of my life, honestly', key: 'always' },
  ]},
  { id: 3, question: 'What have you already tried?', options: [
    { label: 'GP or medical route, did not get the answers I needed', key: 'gp' },
    { label: 'Diets and programmes, nothing stuck', key: 'diets' },
    { label: 'Research and self-help, which felt overwhelming', key: 'selfhelp' },
    { label: 'Nothing yet, just starting', key: 'nothing' },
    { label: 'A mix of things, nothing has worked long term', key: 'mix' },
  ]},
  { id: 4, question: 'What does your lifestyle look like, honestly?', options: [
    { label: 'Sleep is a problem', key: 'sleep' },
    { label: 'Stress is high and constant', key: 'stress' },
    { label: 'My diet is inconsistent', key: 'diet' },
    { label: 'I do not move enough', key: 'movement' },
    { label: 'All of the above', key: 'all' },
    { label: 'Actually not bad, but something is still off', key: 'offbutok' },
  ]},
  { id: 5, question: 'What kind of support feels right for you?', options: [
    { label: 'Someone to guide me with structure and a clear plan', key: 'structured' },
    { label: 'Someone to listen and help me figure it out at my own pace', key: 'exploratory' },
    { label: 'A group setting where I can learn alongside others', key: 'group' },
    { label: 'A mix of group and 1:1', key: 'mixed' },
  ]},
  { id: 6, question: 'Do you have a preference for your coach?', options: [
    { label: 'Female coach', key: 'female' },
    { label: 'Male coach', key: 'male' },
    { label: 'No preference', key: 'none' },
  ]},
  { id: 7, question: 'Do you have a language preference for your sessions?', options: [
    { label: 'English', key: 'english' },
    { label: 'Spanish', key: 'spanish' },
    { label: 'Portuguese', key: 'portuguese' },
    { label: 'Hindi', key: 'hindi' },
    { label: 'Other', key: 'other' },
  ]},
  { id: 8, question: 'How would you like to start?', options: [
    { label: 'A group session, low commitment, see how it feels', key: 'group' },
    { label: 'A taster 1:1, meet a coach before committing', key: 'taster' },
    { label: 'I am ready to commit to a programme', key: 'programme' },
    { label: 'Not sure yet, show me my matches first', key: 'unsure' },
  ]},
];

function getMatches(answers) {
  const primary = answers[0]?.key;
  const tried = answers[2]?.key;
  const duration = answers[1]?.key;
  const genderPref = answers[5]?.key; // question 6: female / male / none
  const durationText = { weeks: 'a few weeks', months: 'a few months', year: 'over a year', always: 'most of your life' }[duration] || 'some time';
  const triedText = { gp: 'the medical route has not given you the answers you need', diets: 'previous programmes have not stuck', selfhelp: 'self-research has felt overwhelming', nothing: 'you are just starting out', mix: 'you have tried a range of things without lasting results' }[tried] || 'you are ready for a different approach';
  const matchMap = {
    gut: [
      { coach: COACHES[0], reason: `Hannah works specifically with people who have been feeling off with their digestion for ${durationText}. Given that ${triedText}, her root-cause approach to gut health is a strong fit.` },
      { coach: COACHES[5], reason: `Aoife often finds that persistent fatigue and gut symptoms are connected. She would help you untangle what is actually driving your symptoms.` },
      { coach: COACHES[3], reason: `Sofia\'s work on nutrition is directly relevant here. She will help you understand how what you are eating may be contributing to how you feel.` },
    ],
    fatigue: [
      { coach: COACHES[5], reason: `Aoife specialises in exactly this, the kind of tiredness that does not improve with rest. She has helped many clients identify what is actually draining their energy after feeling this way for ${durationText}.` },
      { coach: COACHES[1], reason: `Priya\'s work in hormonal health is worth exploring here, particularly if your fatigue has a hormonal component. Given that ${triedText}, she brings a fresh perspective.` },
      { coach: COACHES[2], reason: `Ciarán works with people who are exhausted but functional. If stress is part of the picture, his lifestyle approach addresses the full load.` },
    ],
    weight: [
      { coach: COACHES[3], reason: `Sofia works with clients who are done with diets that do not last. Given that ${triedText}, her approach to the relationship with food rather than restriction is a strong fit.` },
      { coach: COACHES[1], reason: `Priya often finds hormonal patterns behind weight that will not shift. If that resonates, she would explore that angle with you.` },
      { coach: COACHES[5], reason: `Aoife\'s work on energy and blood sugar is directly relevant to weight. She would help you understand the metabolic side of what is happening.` },
    ],
    hormones: [
      { coach: COACHES[1], reason: `Priya specialises in the hormonal picture that affects so many women. Given that ${triedText}, her evidence-informed approach would give you answers rather than just symptom management.` },
      { coach: COACHES[0], reason: `Hannah\'s gut health work is closely connected to hormonal balance. The gut-hormone connection is often overlooked, and Hannah would help you see those links.` },
      { coach: COACHES[5], reason: `Aoife\'s work on fatigue and energy is often closely linked to the hormonal picture. She would look at both together.` },
    ],
    stress: [
      { coach: COACHES[2], reason: `Ciarán works with people who are running on empty while appearing to function well. Given that ${triedText}, his practical lifestyle approach would suit you.` },
      { coach: COACHES[6], reason: `Marcus\'s work on sleep is directly relevant when stress is high. Poor sleep and high stress reinforce each other, and he helps clients break that cycle.` },
      { coach: COACHES[1], reason: `Priya\'s work on hormones is closely connected to chronic stress. She would look at the full picture of how your body is responding.` },
    ],
    general: [
      { coach: COACHES[2], reason: `Ciarán is well suited to clients who know something is off but cannot name it. He would help you identify the patterns driving how you feel.` },
      { coach: COACHES[5], reason: `Aoife\'s approach to energy and fatigue often uncovers connections people had not made. She is a good first conversation for anyone who cannot quite explain their symptoms.` },
      { coach: COACHES[0], reason: `Hannah\'s gut health specialism is worth exploring. Gut symptoms are frequently the source of general unwellness that does not have an obvious name.` },
    ],
    preventative: [
      { coach: COACHES[3], reason: `Sofia works with clients who want to build a solid foundation before problems develop. Her nutritional approach is practical and designed to last.` },
      { coach: COACHES[2], reason: `Ciarán\'s lifestyle approach is ideal for proactive clients. He helps people audit their habits and make changes that compound over time.` },
      { coach: COACHES[1], reason: `Priya\'s work on hormonal health is particularly valuable as a preventative measure. Getting ahead of hormonal shifts before they become a problem is exactly her territory.` },
    ],
  };

  // Start with symptom-based candidates
  let candidates = matchMap[primary] || matchMap['general'];

  // Apply gender filter if a preference was given
  if (genderPref === 'female' || genderPref === 'male') {
    const filtered = candidates.filter(m => m.coach.gender === genderPref);
    if (filtered.length >= 3) {
      // Enough filtered matches — use them
      candidates = filtered.slice(0, 3);
    } else if (filtered.length > 0) {
      // Some matches — fill remaining slots from same-gender coaches across all specialisms
      const usedIds = new Set(filtered.map(m => m.coach.id));
      const backfill = COACHES
        .filter(c => c.gender === genderPref && !usedIds.has(c.id))
        .map(c => ({ coach: c, reason: `${c.name.split(' ')[0]} is a ${c.coachType.toLowerCase()} specialising in ${c.specialism.toLowerCase()}. Based on your preferences, they could be a good fit.` }));
      candidates = [...filtered, ...backfill].slice(0, 3);
    } else {
      // No same-gender coaches match the symptom — use all same-gender coaches
      candidates = COACHES
        .filter(c => c.gender === genderPref)
        .slice(0, 3)
        .map(c => ({ coach: c, reason: `${c.name.split(' ')[0]} is a ${c.coachType.toLowerCase()} specialising in ${c.specialism.toLowerCase()}. Based on your preferences, they could be a good fit.` }));
    }
  }

  return candidates.slice(0, 3);
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Cooper BT', 'Georgia', serif; background: #fafaf8; color: #3d3832; line-height: 1.65; }

  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: #ffffff; border-bottom: 1px solid #eeecea;
    padding: 0 28px; height: 84px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo { cursor: pointer; display: flex; align-items: center; }
  .nav-logo img { height: 72px; width: auto; }
  .nav-links { display: flex; align-items: center; gap: 28px; }
  .nav-link {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 14px; font-weight: 500; color: #0369a1;
    background: none; border: none; cursor: pointer; padding: 4px 0; transition: color 0.15s;
  }
  .nav-link:hover, .nav-link.active { color: #2fbca0; }
  .nav-cta {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 14px; font-weight: 600;
    background: #c86434; color: #ffffff;
    border: none; border-radius: 8px; padding: 9px 22px; cursor: pointer; transition: opacity 0.15s;
  }
  .nav-cta:hover { opacity: 0.88; }

  .page { padding-top: 84px; min-height: 100vh; }

  .toggle-bar { display: flex; justify-content: center; padding: 36px 24px 0; }
  .toggle-wrap { display: inline-flex; background: #eeecea; border-radius: 12px; padding: 4px; gap: 4px; }
  .toggle-btn {
    font-family: 'Bricolage Grotesque', sans-serif;
    padding: 10px 28px; border-radius: 9px; border: none;
    font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.2s; color: #7a746c; background: transparent;
  }
  .toggle-btn.active { background: #ffffff; color: #0369a1; box-shadow: 0 1px 4px rgba(0,0,0,0.1); font-weight: 600; }

  .hero { max-width: 800px; margin: 0 auto; padding: 68px 24px 80px; text-align: center; }
  .hero-eyebrow {
    display: inline-block; font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: 1.4px;
    text-transform: uppercase; color: #2fbca0; margin-bottom: 22px;
  }
  .hero-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: clamp(28px, 4vw, 42px); line-height: 1.14; color: #c86434; margin-bottom: 24px; font-weight: 400; }
  .hero-title em { font-style: italic; color: #2fbca0; }
  .hero-sub { font-family: 'Cooper BT', 'Georgia', serif; font-size: 17px; color: #7a746c; max-width: 540px; margin: 0 auto 44px; line-height: 1.75; }
  .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  .btn-primary {
    font-family: 'Bricolage Grotesque', sans-serif;
    background: #c86434; color: #ffffff; border: none; border-radius: 10px;
    padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.15s;
  }
  .btn-primary:hover { opacity: 0.88; }
  .btn-secondary {
    font-family: 'Bricolage Grotesque', sans-serif;
    background: transparent; color: #0369a1; border: 2px solid #c8c4be; border-radius: 10px;
    padding: 14px 32px; font-size: 15px; font-weight: 500; cursor: pointer; transition: border-color 0.15s;
  }
  .btn-secondary:hover { border-color: #0369a1; }

  .section { padding: 72px 24px; }
  .section-inner { max-width: 1080px; margin: 0 auto; }
  .section-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 34px; color: #c86434; margin-bottom: 10px; font-weight: 400; }
  .section-sub { font-family: 'Cooper BT', 'Georgia', serif; font-size: 16px; color: #7a746c; margin-bottom: 48px; }

  .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; }
  .step-card { text-align: center; }
  .step-num { font-family: 'Bricolage Grotesque', sans-serif; width: 44px; height: 44px; border-radius: 50%; background: #f5ece4; color: #c86434; font-size: 17px; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
  .step-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; color: #0369a1; margin-bottom: 8px; font-size: 15px; }
  .step-desc { font-family: 'Cooper BT', 'Georgia', serif; font-size: 14px; color: #7a746c; line-height: 1.7; }

  .trust-bar { background: #0369a1; padding: 52px 24px; }
  .trust-bar-inner { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; text-align: center; }
  .trust-num { font-family: 'Cooper BT', 'Georgia', serif; font-size: 38px; color: #e8a882; font-weight: 400; }
  .trust-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; color: rgba(255,255,255,0.75); margin-top: 6px; }

  /* COACH CARDS */
  .coaches-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
  .coach-card { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; overflow: hidden; transition: box-shadow 0.2s; cursor: pointer; }
  .coach-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
  .coach-card-top { padding: 24px 24px 16px; display: flex; gap: 16px; align-items: flex-start; }
  .coach-name { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; color: #0369a1; font-size: 16px; margin-bottom: 2px; }
  .coach-location { font-family: 'Cooper BT', 'Georgia', serif; font-size: 13px; color: #7a746c; margin-bottom: 4px; }
  .coach-type-tag { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; color: #c86434; background: #f5ece4; padding: 3px 10px; border-radius: 20px; font-weight: 600; display: inline-block; margin-bottom: 4px; }
  .coach-spec-tag { display: inline-block; font-family: 'Bricolage Grotesque', sans-serif; background: #e6f7f4; color: #2fbca0; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
  .coach-bio { padding: 0 24px 16px; font-family: 'Cooper BT', 'Georgia', serif; font-size: 14px; color: #7a746c; line-height: 1.75; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .coach-card-footer { padding: 16px 24px; border-top: 1px solid #eeecea; display: flex; justify-content: space-between; align-items: center; }
  .coach-rating { font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 600; color: #3d3832; }
  .coach-rating span { color: #7a746c; font-weight: 400; }
  .coach-quals { display: flex; gap: 6px; flex-wrap: wrap; padding: 0 24px 16px; }
  .qual-badge { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; color: #0369a1; background: #e0f0fa; padding: 3px 8px; border-radius: 4px; font-weight: 500; }
  .qual-insured { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; color: #2fbca0; background: #e6f7f4; padding: 3px 8px; border-radius: 4px; font-weight: 600; }
  .btn-view-profile { font-family: 'Bricolage Grotesque', sans-serif; font-size: 13px; font-weight: 600; color: #c86434; background: transparent; border: none; cursor: pointer; padding: 0; text-decoration: underline; text-underline-offset: 2px; }

  .filter-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 32px; }
  .filter-chip { font-family: 'Bricolage Grotesque', sans-serif; padding: 7px 16px; border-radius: 20px; border: 1.5px solid #c8c4be; background: transparent; font-size: 13px; font-weight: 500; color: #7a746c; cursor: pointer; transition: all 0.15s; }
  .filter-chip:hover, .filter-chip.active { background: #f5ece4; border-color: #c86434; color: #c86434; }

  /* QUIZ */
  .quiz-wrap { max-width: 600px; margin: 0 auto; padding: 52px 24px; }
  .quiz-progress-bar { height: 3px; background: #eeecea; border-radius: 2px; margin-bottom: 40px; }
  .quiz-progress-fill { height: 3px; background: #c86434; border-radius: 2px; transition: width 0.4s; }
  .quiz-step { font-family: 'Bricolage Grotesque', sans-serif; font-size: 12px; color: #2fbca0; margin-bottom: 10px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
  .quiz-q { font-family: 'Cooper BT', 'Georgia', serif; font-size: 26px; color: #0369a1; margin-bottom: 32px; line-height: 1.35; font-weight: 400; }
  .quiz-options { display: flex; flex-direction: column; gap: 10px; }
  .quiz-option { font-family: 'Cooper BT', 'Georgia', serif; padding: 15px 20px; border-radius: 10px; border: 1.5px solid #eeecea; background: #ffffff; text-align: left; font-size: 15px; color: #3d3832; cursor: pointer; transition: all 0.15s; line-height: 1.5; }
  .quiz-option:hover { border-color: #c86434; background: #f5ece4; color: #c86434; }
  .quiz-back { font-family: 'Bricolage Grotesque', sans-serif; margin-top: 24px; background: none; border: none; color: #7a746c; font-size: 14px; cursor: pointer; font-weight: 500; }
  .quiz-back:hover { color: #0369a1; }

  /* MATCHES */
  .matches-intro { max-width: 600px; margin: 0 auto; padding: 52px 24px 0; text-align: center; }
  .matches-intro-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 32px; color: #c86434; margin-bottom: 12px; font-weight: 400; }
  .matches-intro-sub { font-family: 'Cooper BT', 'Georgia', serif; font-size: 16px; color: #7a746c; margin-bottom: 48px; line-height: 1.7; }
  .matches-grid { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; display: flex; flex-direction: column; gap: 24px; }
  .match-card { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; overflow: hidden; }
  .match-card-top { padding: 28px; display: flex; gap: 20px; align-items: flex-start; }
  .match-badge { font-family: 'Bricolage Grotesque', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #c86434; background: #f5ece4; padding: 4px 10px; border-radius: 4px; margin-bottom: 10px; display: inline-block; }
  .match-reason { font-family: 'Cooper BT', 'Georgia', serif; font-size: 14px; color: #7a746c; line-height: 1.75; padding: 16px 28px; border-top: 1px solid #f8f7f5; }
  .match-actions { padding: 16px 28px; border-top: 1px solid #eeecea; display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
  .btn-group-session { font-family: 'Bricolage Grotesque', sans-serif; background: #2fbca0; color: #ffffff; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: opacity 0.15s; }
  .btn-group-session:hover { opacity: 0.88; }
  .btn-taster { font-family: 'Bricolage Grotesque', sans-serif; background: transparent; color: #0369a1; border: 1.5px solid #c8c4be; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 500; cursor: pointer; transition: border-color 0.15s; }
  .btn-taster:hover { border-color: #0369a1; }
  .btn-profile { font-family: 'Bricolage Grotesque', sans-serif; background: transparent; color: #7a746c; border: none; font-size: 14px; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; padding: 10px 0; }

  /* PROFILE */
  .profile-back { font-family: 'Bricolage Grotesque', sans-serif; background: none; border: none; color: #7a746c; font-size: 14px; cursor: pointer; margin-bottom: 24px; display: flex; align-items: center; gap: 6px; font-weight: 500; }
  .profile-back:hover { color: #0369a1; }
  .profile-hero { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; padding: 40px; display: flex; gap: 32px; align-items: flex-start; margin-bottom: 24px; }
  .profile-name { font-family: 'Cooper BT', 'Georgia', serif; font-size: 30px; color: #0369a1; margin-bottom: 4px; font-weight: 400; }
  .profile-loc { font-family: 'Cooper BT', 'Georgia', serif; font-size: 14px; color: #7a746c; margin-bottom: 12px; }
  .profile-bio { font-family: 'Cooper BT', 'Georgia', serif; font-size: 15px; color: #7a746c; line-height: 1.8; }
  .profile-sessions { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; padding: 32px; margin-bottom: 24px; }
  .session-option { border: 1.5px solid #eeecea; border-radius: 12px; padding: 20px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: border-color 0.15s; }
  .session-option:hover { border-color: #c86434; }
  .session-type { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; color: #0369a1; margin-bottom: 4px; font-size: 15px; }
  .session-desc { font-family: 'Cooper BT', 'Georgia', serif; font-size: 13px; color: #7a746c; }
  .session-price { font-family: 'Cooper BT', 'Georgia', serif; font-size: 24px; color: #c86434; font-weight: 400; white-space: nowrap; }

  /* BOOKING */
  .booking-wrap { max-width: 580px; margin: 0 auto; padding: 48px 24px; }
  .booking-card { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; padding: 36px; }
  .booking-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 26px; color: #0369a1; margin-bottom: 28px; font-weight: 400; }
  .booking-detail { background: #f8f7f5; border-radius: 10px; padding: 16px 20px; margin-bottom: 16px; }
  .booking-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; font-weight: 700; color: #2fbca0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .booking-value { font-family: 'Cooper BT', 'Georgia', serif; font-size: 15px; color: #0369a1; }

  /* DASHBOARD */
  .dashboard-body { max-width: 1080px; margin: 0 auto; padding: 40px 24px; }
  .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
  .dash-card { background: #ffffff; border-radius: 14px; border: 1px solid #eeecea; padding: 24px; }
  .dash-card-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #2fbca0; margin-bottom: 18px; }
  .booking-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f8f7f5; }
  .booking-row:last-child { border-bottom: none; }
  .booking-row-name { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; color: #0369a1; font-size: 14px; }
  .booking-row-date { font-family: 'Cooper BT', 'Georgia', serif; font-size: 13px; color: #7a746c; margin-top: 2px; }
  .status-confirmed { font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; font-weight: 700; color: #2fbca0; background: #e6f7f4; padding: 3px 10px; border-radius: 20px; }

  /* COACH DASH */
  .stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 32px; }
  .stat-box { background: #ffffff; border-radius: 12px; border: 1px solid #eeecea; padding: 20px; text-align: center; }
  .stat-num { font-family: 'Cooper BT', 'Georgia', serif; font-size: 34px; color: #c86434; font-weight: 400; }
  .stat-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 12px; color: #7a746c; margin-top: 4px; font-weight: 500; }

  /* JOIN */
  .join-hero { max-width: 720px; margin: 0 auto; padding: 68px 24px 52px; text-align: center; }
  .join-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 42px; color: #c86434; line-height: 1.18; margin-bottom: 22px; font-weight: 400; }
  .join-sub { font-family: 'Cooper BT', 'Georgia', serif; font-size: 17px; color: #7a746c; max-width: 540px; margin: 0 auto 44px; line-height: 1.75; }
  .join-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; max-width: 900px; margin: 0 auto 60px; padding: 0 24px; }
  .join-card { background: #ffffff; border-radius: 14px; border: 1px solid #eeecea; padding: 28px; }
  .join-icon { width: 40px; height: 40px; border-radius: 10px; background: #f5ece4; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
  .join-card-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 600; color: #0369a1; margin-bottom: 8px; font-size: 15px; }
  .join-card-desc { font-family: 'Cooper BT', 'Georgia', serif; font-size: 14px; color: #7a746c; line-height: 1.65; }
  .join-form { max-width: 520px; margin: 0 auto; padding: 0 24px 80px; }
  .join-form-card { background: #ffffff; border-radius: 16px; border: 1px solid #eeecea; padding: 36px; }
  .join-form-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 24px; color: #0369a1; margin-bottom: 24px; font-weight: 400; }
  .form-field { margin-bottom: 20px; }
  .form-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 12px; font-weight: 700; color: #3d3832; margin-bottom: 6px; display: block; text-transform: uppercase; letter-spacing: 0.06em; }
  .form-input, .form-select { width: 100%; padding: 12px 14px; border-radius: 8px; border: 1.5px solid #eeecea; font-size: 14px; color: #0369a1; background: #fafaf8; outline: none; transition: border-color 0.15s; font-family: 'Cooper BT', 'Georgia', serif; }
  .form-input:focus, .form-select:focus { border-color: #c86434; background: #ffffff; }

  /* CONFIRM */
  .confirm-wrap { max-width: 480px; margin: 0 auto; padding: 80px 24px; text-align: center; }
  .confirm-icon { width: 72px; height: 72px; border-radius: 50%; background: #e6f7f4; margin: 0 auto 28px; display: flex; align-items: center; justify-content: center; font-size: 26px; font-family: 'Bricolage Grotesque', sans-serif; color: #2fbca0; font-weight: 700; }
  .confirm-title { font-family: 'Cooper BT', 'Georgia', serif; font-size: 30px; color: #0369a1; margin-bottom: 14px; font-weight: 400; }
  .confirm-sub { font-family: 'Cooper BT', 'Georgia', serif; font-size: 16px; color: #7a746c; margin-bottom: 36px; line-height: 1.75; }

  /* ADMIN */
  .admin-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin-bottom: 40px; }
  .admin-stat { background: #ffffff; border-radius: 14px; border: 1px solid #eeecea; padding: 24px; }
  .admin-stat-num { font-family: 'Cooper BT', 'Georgia', serif; font-size: 34px; color: #0369a1; font-weight: 400; }
  .admin-stat-label { font-family: 'Bricolage Grotesque', sans-serif; font-size: 12px; color: #7a746c; margin-top: 4px; font-weight: 500; }
  .admin-table-wrap { background: #ffffff; border-radius: 14px; border: 1px solid #eeecea; overflow: hidden; margin-bottom: 32px; }
  .admin-table { width: 100%; border-collapse: collapse; font-size: 14px; }
  .admin-table th { background: #f8f7f5; text-align: left; padding: 14px 20px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 11px; font-weight: 700; color: #2fbca0; text-transform: uppercase; letter-spacing: 0.8px; }
  .admin-table td { padding: 14px 20px; border-top: 1px solid #f8f7f5; font-family: 'Cooper BT', 'Georgia', serif; color: #3d3832; }

  @media (max-width: 640px) {
    .nav-links { display: none; }
    .hero-title { font-size: 30px; }
    .profile-hero { flex-direction: column; }
    .match-card-top { flex-direction: column; }
    .join-title { font-size: 32px; }
  }
`;


function Nav({ page, setPage, userType, quizAnswers }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage('home')}>
        <img src={LOGO_URI} alt="BeHallthy" />
      </div>
      <div className="nav-links">
        <button className={`nav-link ${page === 'coaches' ? 'active' : ''}`} onClick={() => setPage('coaches')}>Find a coach</button>
        <button className={`nav-link ${page === 'quiz' ? 'active' : ''}`} onClick={() => setPage('quiz')}>Take the quiz</button>
        {quizAnswers.length === 8 && <button className={`nav-link ${page === 'matches' ? 'active' : ''}`} onClick={() => setPage('matches')}>Your matches</button>}
        {userType === 'coach' && <button className={`nav-link ${page === 'coachDashboard' ? 'active' : ''}`} onClick={() => setPage('coachDashboard')}>Dashboard</button>}
        {userType === 'client' && <button className={`nav-link ${page === 'clientDashboard' ? 'active' : ''}`} onClick={() => setPage('clientDashboard')}>Dashboard</button>}
        <button className={`nav-link ${page === 'admin' ? 'active' : ''}`} onClick={() => setPage('admin')}>Platform</button>
      </div>
      {userType === 'coach'
        ? <button className="nav-cta" onClick={() => setPage('coachDashboard')}>Coach dashboard</button>
        : <button className="nav-cta" onClick={() => setPage('quiz')}>Get matched</button>}
    </nav>
  );
}

function CoachCardPhoto({ coach, size = 56 }) {
  return <PhotoPlaceholder size={size} initials={coach.avatar} bg={coach.avatarBg} color={coach.avatarColor} />;
}

function HomePage({ userType, setUserType, setPage }) {
  return (
    <div className="page">
      <div className="toggle-bar">
        <div className="toggle-wrap">
          <button className={`toggle-btn ${userType === 'client' ? 'active' : ''}`} onClick={() => setUserType('client')}>I am looking for a coach</button>
          <button className={`toggle-btn ${userType === 'coach' ? 'active' : ''}`} onClick={() => setUserType('coach')}>I am a health coach</button>
        </div>
      </div>
      {userType === 'client' ? (
        <>
          <div className="hero">
            <span className="hero-eyebrow">Vetted health coaches, matched to you</span>
            <h1 className="hero-title">You know something<br /><em>needs to change.</em><br />We help you figure out what.</h1>
            <p className="hero-sub">BeHallthy connects you with qualified, insured health coaches who specialise in exactly what you are dealing with. Start with a group session, no commitment, and see how it feels.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setPage('quiz')}>Take the matching quiz</button>
              <button className="btn-secondary" onClick={() => setPage('coaches')}>Browse coaches</button>
            </div>
          </div>
          <div className="trust-bar">
            <div className="trust-bar-inner">
              <div><div className="trust-num">100%</div><div className="trust-label">Coaches vetted against recognised UK professional bodies</div></div>
              <div><div className="trust-num">7</div><div className="trust-label">Specialist areas, symptom-based matching</div></div>
              <div><div className="trust-num">£25</div><div className="trust-label">Start with a group session, no commitment needed</div></div>
              <div><div className="trust-num">UK & IRE</div><div className="trust-label">Coaches based across the UK and Ireland</div></div>
            </div>
          </div>
          <div className="section" style={{ background: '#ffffff' }}>
            <div className="section-inner">
              <h2 className="section-title">How it works</h2>
              <p className="section-sub">From not quite knowing where to start, to working with a coach who actually gets it.</p>
              <div className="steps-grid">
                {[
                  { n: '1', t: 'Tell us what is going on', d: 'Our symptom-based quiz asks the right questions to understand what you are actually dealing with, not just what your goals are.' },
                  { n: '2', t: 'Get matched', d: 'We show you three coaches whose specialism fits your symptoms, with a plain-English explanation of why each one is a good fit.' },
                  { n: '3', t: 'Try a group session first', d: 'Group sessions are the lowest-commitment way to see whether health coaching is right for you. No pressure to do anything more.' },
                  { n: '4', t: 'Go deeper when you are ready', d: 'Book a taster 1:1 or commit to an 8 to 12 week programme. Everything at your pace.' },
                ].map(s => (
                  <div key={s.n} className="step-card">
                    <div className="step-num">{s.n}</div>
                    <div className="step-title">{s.t}</div>
                    <div className="step-desc">{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section-inner" style={{ textAlign: 'center' }}>
              <h2 className="section-title">Not sure health coaching is for you?</h2>
              <p className="section-sub" style={{ maxWidth: 560, margin: '0 auto 36px' }}>Most people who come to BeHallthy have already tried the obvious things. Health coaching is not therapy, not a diet plan, and not a GP appointment. It is someone qualified to help you connect the dots between how you live and how you feel.</p>
              <button className="btn-primary" onClick={() => setPage('quiz')}>Find out if it could help you</button>
            </div>
          </div>
        </>
      ) : <JoinCoachPage setPage={setPage} />}
    </div>
  );
}

// ─── COACH ONBOARDING QUIZ DATA ───────────────────────────────────────────────
const COACH_QUIZ = [
  {
    id: 1,
    question: 'What is your main area of specialism?',
    hint: 'This becomes your primary tag on BeHallthy and is used to match you with clients.',
    type: 'single',
    options: ['Gut health and digestion', "Women's health and hormones", "Men's health", 'Energy and fatigue', 'Weight and nutrition', 'Sleep', 'Stress and lifestyle'],
  },
  {
    id: 2,
    question: 'Do you have a secondary specialism?',
    hint: 'Many clients present with overlapping symptoms. A secondary area helps us match you more precisely.',
    type: 'single',
    options: ['Gut health and digestion', "Women's health and hormones", "Men's health", 'Energy and fatigue', 'Weight and nutrition', 'Sleep', 'Stress and lifestyle', 'No secondary specialism'],
  },
  {
    id: 3,
    question: 'Who do you do your best work with?',
    hint: 'Think about the clients you have most enjoyed working with, or the ones you most want to work with.',
    type: 'single',
    options: ['People in their 30s and 40s navigating mid-life health changes', 'Women dealing with hormonal or cyclical health issues', 'Men who have been ignoring their health for too long', 'High achievers who are burnt out and running on empty', 'People who have tried everything and are ready for a different approach', 'Anyone who is ready to make real changes, I work with a wide range'],
  },
  {
    id: 4,
    question: 'How would you describe your coaching style?',
    hint: 'This helps clients understand what working with you actually feels like.',
    type: 'single',
    options: ['Structured and plan-driven, with clear goals and measurable progress', 'Exploratory and client-led, I follow where the client needs to go', 'A mix of both depending on what the client needs', 'Warm and supportive, the relationship comes first', 'Direct and no-nonsense, I say what I see'],
  },
  {
    id: 5,
    question: 'How do you want to deliver sessions?',
    hint: 'You can offer both. In-person sessions are listed with your general location so local clients can find you.',
    type: 'single',
    options: ['Online only, via video call. I recommend Google Meet', 'In person only, I want to see clients face to face', 'Both, online for 1:1 and in person for groups', 'Both, I am flexible and let the client decide'],
  },
  {
    id: 6,
    question: 'What types of session do you want to offer?',
    hint: 'Group sessions and talks are listed on BeHallthy. Clients book and pay through the platform.',
    type: 'single',
    options: ['1:1 sessions only', 'Group sessions and talks only', 'Both 1:1 and group sessions', 'I would like to start with 1:1 and add groups later'],
  },
  {
    id: 7,
    question: 'What languages do you coach in?',
    hint: 'We match clients who prefer to work in their first language.',
    type: 'single',
    options: ['English only', 'English and Spanish', 'English and Portuguese', 'English and Hindi', 'English and another language'],
  },
  {
    id: 8,
    question: 'What is your primary professional qualification or body?',
    type: 'single',
    options: ['UKIHCA Registered', 'ICF Certified', 'ACCPH Member', 'AC Member', 'Other recognised qualification'],
  },
  {
    id: 9,
    question: 'In your own words, describe the client you do your best work with.',
    hint: 'Write this as if you are talking to that person directly. This becomes the opening of your BeHallthy bio.',
    type: 'text',
    placeholder: 'e.g. "If you have spent years being told your symptoms are normal or stress-related, and you are ready for someone to actually look at the full picture..."',
  },
];

function generateProfilePreview(answers, name) {
  const specialism = answers[0] || 'Health coaching';
  const style = answers[3] || '';
  const delivery = answers[4] || 'Online';
  const sessions = answers[5] || '1:1 sessions';
  const qual = answers[7] || 'UKIHCA Registered';
  const bioOpener = answers[8] || '';

  const deliveryMode = delivery.includes('Both') ? 'Online & in person'
    : delivery.includes('person') ? 'In person'
    : 'Online';

  const sessionMode = sessions.includes('Both') ? '1:1 and group sessions'
    : sessions.includes('Group') ? 'Group sessions'
    : '1:1 sessions';

  const coachType = specialism.toLowerCase().includes('nutrition') ? 'Health and Nutrition Coach'
    : specialism.toLowerCase().includes('women') || specialism.toLowerCase().includes('stress') || specialism.toLowerCase().includes('sleep') ? 'Health and Wellness Coach'
    : 'Health Coach';

  const firstName = name ? name.split(' ')[0] : 'Your';

  return { specialism, style, deliveryMode, sessionMode, qual, bioOpener, coachType, firstName };
}

function JoinCoachPage({ setPage }) {
  const [stage, setStage] = useState('landing'); // landing | details | quiz | preview
  const [form, setForm] = useState({ name: '', email: '' });
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);

  function chooseAnswer(answer) {
    const next = [...quizAnswers];
    next[quizStep] = answer;
    setQuizAnswers(next);
    if (quizStep < COACH_QUIZ.length - 1) setQuizStep(quizStep + 1);
    else setStage('preview');
  }

  function handleTextNext(val) {
    const next = [...quizAnswers];
    next[quizStep] = val;
    setQuizAnswers(next);
    setStage('preview');
  }

  const q = COACH_QUIZ[quizStep];
  const progress = ((quizStep + 1) / COACH_QUIZ.length) * 100;
  const profile = stage === 'preview' ? generateProfilePreview(quizAnswers, form.name) : null;

  // LANDING
  if (stage === 'landing') return (
    <>
      <div className="join-hero">
        <span className="hero-eyebrow">Your practice, simplified</span>
        <h1 className="join-title">Stop spending your time<br />finding clients.<br /><span style={{ color: '#2fbca0' }}>Focus on coaching them.</span></h1>
        <p className="join-sub">BeHallthy is a marketplace for vetted, qualified health coaches. We handle the matching, the booking and the admin. You show up and coach.</p>
        <button className="btn-primary" onClick={() => document.getElementById('join-benefits').scrollIntoView({ behavior: 'smooth' })}>See how it works</button>
      </div>
      <div className="join-grid" id="join-benefits">
        {[
          { icon: '🎯', t: 'Clients come to you', d: 'You get matched to clients based on your specialism. No cold outreach, no social media grind, no waiting for referrals.' },
          { icon: '🗓', t: 'Booking handled for you', d: 'Clients book and pay through BeHallthy. You get a notification. You run the session your way.' },
          { icon: '✅', t: 'Vetted, so clients trust you', d: 'Only UKIHCA, ICF, AC or ACCPH registered coaches join. That credential layer means clients arrive ready to engage.' },
          { icon: '👥', t: 'Group sessions and talks', d: 'List your group sessions and in-person talks on BeHallthy. Clients book through the platform. You run the room.' },
          { icon: '📍', t: 'Online or in person', d: 'We recommend Google Meet for online sessions. Free, no app needed. In-person sessions are matched to local clients.' },
          { icon: '🤝', t: 'Founding cohort perks', d: 'The first coaches to join get a full year free, permanently reduced rates, and a say in how the platform develops.' },
        ].map(c => (
          <div key={c.t} className="join-card">
            <div className="join-icon">{c.icon}</div>
            <div className="join-card-title">{c.t}</div>
            <div className="join-card-desc">{c.d}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="join-form-card">
          <h3 className="join-form-title">Apply to join</h3>
          <p style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 14, color: '#7a746c', marginBottom: 24, lineHeight: 1.65 }}>
            Tell us your name and email, then we will take you through a short profile-builder. It takes about 3 minutes and helps us match you to the right clients from day one.
          </p>
          <div className="form-field">
            <label className="form-label">Full name</label>
            <input className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="form-field">
            <label className="form-label">Email address</label>
            <input className="form-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <button className="btn-primary" style={{ width: '100%' }}
            onClick={() => { if (form.name && form.email) { setStage('quiz'); setQuizStep(0); setQuizAnswers([]); } }}>
            Build my profile
          </button>
        </div>
      </div>
    </>
  );

  // QUIZ
  if (stage === 'quiz') return (
    <div className="page">
      <div className="quiz-wrap">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-step">Profile builder, question {quizStep + 1} of {COACH_QUIZ.length}</div>
        <h2 className="quiz-q">{q.question}</h2>
        {q.hint && (
          <p style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 14, color: '#7a746c', marginBottom: 28, lineHeight: 1.65, fontStyle: 'italic' }}>{q.hint}</p>
        )}
        {q.type === 'text' ? (
          <TextQuestion placeholder={q.placeholder} onNext={handleTextNext} />
        ) : (
          <div className="quiz-options">
            {q.options.map(opt => (
              <button key={opt} className="quiz-option" onClick={() => chooseAnswer(opt)}>{opt}</button>
            ))}
          </div>
        )}
        <button className="quiz-back" onClick={() => { if (quizStep === 0) setStage('landing'); else setQuizStep(quizStep - 1); }}>← Back</button>
      </div>
    </div>
  );

  // PROFILE PREVIEW
  if (stage === 'preview' && profile) return (
    <div className="page">
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '52px 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="hero-eyebrow">Profile preview</span>
          <h2 style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 30, color: '#0369a1', marginBottom: 12, fontWeight: 400 }}>Here is how you will appear on BeHallthy</h2>
          <p style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 15, color: '#7a746c', lineHeight: 1.7 }}>
            This is a draft based on your answers. Once approved, you will be able to refine your bio, add a photo, and set your availability.
          </p>
        </div>

        {/* Profile card preview */}
        <div style={{ background: '#ffffff', borderRadius: 16, border: '2px solid #c86434', padding: 32, marginBottom: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -11, left: 24, background: '#c86434', color: '#fff', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 12px', borderRadius: 4 }}>Draft profile</div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 20 }}>
            <PhotoPlaceholder size={72} initials={form.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()} bg="#f5ece4" color="#c86434" />
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, color: '#0369a1', fontSize: 20, marginBottom: 4 }}>{form.name}</div>
              <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', marginBottom: 10 }}>Your location · {profile.deliveryMode}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                <span className="coach-type-tag">{profile.coachType}</span>
                <span className="coach-spec-tag">{profile.specialism}</span>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span className="qual-badge">{profile.qual}</span>
                <span className="qual-insured">✓ Fully Insured</span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, background: '#e0f0fa', color: '#0369a1', padding: '3px 8px', borderRadius: 4, fontWeight: 500 }}>{profile.sessionMode}</span>
              </div>
            </div>
          </div>

          {profile.bioOpener && (
            <div style={{ background: '#fafaf8', borderRadius: 10, padding: '16px 20px', marginBottom: 16 }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Bio opener, drafted from your answers</div>
              <p style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 14, color: '#3d3832', lineHeight: 1.75, fontStyle: 'italic' }}>"{profile.bioOpener}"</p>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { l: 'Delivery', v: profile.deliveryMode },
              { l: 'Sessions', v: profile.sessionMode },
              { l: 'Style', v: profile.style || 'To be confirmed' },
            ].map(item => (
              <div key={item.l} style={{ background: '#f8f7f5', borderRadius: 8, padding: '12px 14px' }}>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 10, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.l}</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#0369a1' }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#e6f7f4', borderRadius: 12, padding: '20px 24px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 20, flexShrink: 0 }}>✓</div>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, color: '#0369a1', marginBottom: 4, fontSize: 14 }}>Profile submitted for review</div>
            <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', lineHeight: 1.65 }}>We will check your qualification against recognised UK and Irish professional bodies and be in touch within 2 working days. Once approved, you will be invited to finalise your profile and set your availability.</div>
          </div>
        </div>

        <div style={{ background: '#fafaf8', borderRadius: 12, border: '1px solid #eeecea', padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, color: '#0369a1', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>What happens next</div>
          {[
            'We verify your qualification and insurance',
            'You get an email with your dashboard login',
            'You finalise your bio, add a photo, and set your availability',
            'Your profile goes live and clients can start booking',
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#f5ece4', color: '#c86434', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', lineHeight: 1.6 }}>{s}</div>
            </div>
          ))}
        </div>

        <button className="btn-secondary" style={{ width: '100%' }} onClick={() => { setStage('landing'); setQuizStep(0); setQuizAnswers([]); }}>Start again</button>
      </div>
    </div>
  );

  return null;
}

function TextQuestion({ placeholder, onNext }) {
  const [val, setVal] = useState('');
  return (
    <div>
      <textarea
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        rows={5}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 10,
          border: '1.5px solid #eeecea', fontFamily: "'Cooper BT', Georgia, serif",
          fontSize: 15, color: '#3d3832', background: '#ffffff', outline: 'none',
          lineHeight: 1.65, resize: 'vertical', transition: 'border-color 0.15s',
        }}
        onFocus={e => e.target.style.borderColor = '#c86434'}
        onBlur={e => e.target.style.borderColor = '#eeecea'}
      />
      <button
        className="btn-primary"
        style={{ marginTop: 16, width: '100%' }}
        onClick={() => { if (val.trim()) onNext(val.trim()); }}
      >
        See my profile preview →
      </button>
    </div>
  );
}

function CoachesPage({ setPage, setSelectedCoach }) {
  const [filter, setFilter] = useState('all');
  const specialisms = ['all', 'gut', 'hormones', 'mens', 'energy', 'weight', 'sleep', 'stress'];
  const labels = { all: 'All coaches', gut: 'Gut health', hormones: "Women's health", mens: "Men's health", energy: 'Energy & fatigue', weight: 'Weight & nutrition', sleep: 'Sleep', stress: 'Stress & lifestyle' };
  const filtered = filter === 'all' ? COACHES : COACHES.filter(c => c.specialismKey === filter);
  return (
    <div className="page">
      <div className="section">
        <div className="section-inner">
          <h1 className="section-title">Find a coach</h1>
          <p className="section-sub">Every coach on BeHallthy is vetted against a recognised UK or Irish professional body. Filter by what you are dealing with.</p>
          <div className="filter-bar">
            {specialisms.map(s => <button key={s} className={`filter-chip ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>{labels[s]}</button>)}
          </div>
          <div className="coaches-grid">
            {filtered.map(coach => (
              <div key={coach.id} className="coach-card" onClick={() => { setSelectedCoach(coach); setPage('profile'); }}>
                <div className="coach-card-top">
                  <CoachCardPhoto coach={coach} size={56} />
                  <div>
                    <div className="coach-name">{coach.name}</div>
                    <div className="coach-location">{coach.location}</div>
                    <span className="coach-type-tag">{coach.coachType}</span>
                    <br />
                    <span className="coach-spec-tag">{coach.specialism}</span>
                  </div>
                </div>
                <p className="coach-bio">{coach.bio}</p>
                <div className="coach-quals">
                  {coach.qualifications.map(q =>
                    q === 'Fully Insured'
                      ? <span key={q} className="qual-insured">✓ {q}</span>
                      : <span key={q} className="qual-badge">{q}</span>
                  )}
                </div>
                <div className="coach-card-footer">
                  <div className="coach-rating">★ {coach.rating} <span>({coach.reviews} reviews)</span></div>
                  <button className="btn-view-profile">View profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizPage({ setPage, quizAnswers, setQuizAnswers }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([...quizAnswers]);
  const q = QUIZ_QUESTIONS[step];
  function choose(opt) {
    const next = [...answers]; next[step] = opt; setAnswers(next);
    if (step < QUIZ_QUESTIONS.length - 1) setStep(step + 1);
    else { setQuizAnswers(next); setPage('matches'); }
  }
  return (
    <div className="page">
      <div className="quiz-wrap">
        <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width: `${((step + 1) / QUIZ_QUESTIONS.length) * 100}%` }} /></div>
        <div className="quiz-step">Question {step + 1} of {QUIZ_QUESTIONS.length}</div>
        <h2 className="quiz-q">{q.question}</h2>
        <div className="quiz-options">{q.options.map(opt => <button key={opt.key} className="quiz-option" onClick={() => choose(opt)}>{opt.label}</button>)}</div>
        <button className="quiz-back" onClick={() => { if (step === 0) setPage('home'); else setStep(step - 1); }}>← Back</button>
      </div>
    </div>
  );
}

function MatchesPage({ quizAnswers, setPage, setSelectedCoach, setBookingDetails }) {
  const matches = getMatches(quizAnswers);
  return (
    <div className="page">
      <div className="matches-intro">
        <span className="hero-eyebrow">Your matches</span>
        <h2 className="matches-intro-title">Three coaches who fit what you described</h2>
        <p className="matches-intro-sub">Based on your answers, these coaches specialise in exactly what you are dealing with. Each match explanation is personal to you.</p>
      </div>
      <div className="matches-grid">
        {matches.map(({ coach, reason }, i) => (
          <div key={coach.id} className="match-card">
            <div className="match-card-top">
              <CoachCardPhoto coach={coach} size={64} />
              <div style={{ flex: 1 }}>
                <span className="match-badge">Match {i + 1}</span>
                <div className="coach-name" style={{ fontSize: 18, marginBottom: 2 }}>{coach.name}</div>
                <div className="coach-location">{coach.location}</div>
                <span className="coach-type-tag">{coach.coachType}</span>
                <br />
                <span className="coach-spec-tag" style={{ marginTop: 4, display: 'inline-block' }}>{coach.specialism}</span>
                <div style={{ marginTop: 8 }}>
                  {coach.qualifications.map(q =>
                    q === 'Fully Insured'
                      ? <span key={q} className="qual-insured" style={{ marginRight: 4, marginBottom: 4, display: 'inline-block' }}>✓ {q}</span>
                      : <span key={q} className="qual-badge" style={{ marginRight: 4, marginBottom: 4, display: 'inline-block' }}>{q}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="match-reason">{reason}</div>
            <div className="match-actions">
              <button className="btn-group-session" onClick={() => { setSelectedCoach(coach); setBookingDetails({ type: 'Group session', session: coach.nextGroup, price: coach.groupPrice }); setPage('booking'); }}>Join group session {coach.groupPrice}</button>
              <button className="btn-taster" onClick={() => { setSelectedCoach(coach); setBookingDetails({ type: 'Taster 1:1', session: `30-minute taster session with ${coach.name}`, price: 28 }); setPage('booking'); }}>Book taster 1:1, £28</button>
              <button className="btn-profile" onClick={() => { setSelectedCoach(coach); setPage('profile'); }}>View full profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfilePage({ coach, setPage, setBookingDetails, prevPage }) {
  if (!coach) return null;
  return (
    <div className="page">
      <div className="section">
        <div className="section-inner" style={{ maxWidth: 800, margin: '0 auto' }}>
          <button className="profile-back" onClick={() => setPage(prevPage || 'coaches')}>← Back</button>
          <div className="profile-hero">
            <CoachCardPhoto coach={coach} size={96} />
            <div>
              <h1 className="profile-name">{coach.name}</h1>
              <div className="profile-loc">{coach.location}</div>
              <div style={{ marginBottom: 8 }}>
                <span className="coach-type-tag">{coach.coachType}</span>
                {' '}
                <span className="coach-spec-tag">{coach.specialism}</span>
              </div>
              <div style={{ marginBottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {coach.qualifications.map(q =>
                  q === 'Fully Insured'
                    ? <span key={q} className="qual-insured">✓ {q}</span>
                    : <span key={q} className="qual-badge">{q}</span>
                )}
              </div>
              <div style={{ marginBottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {coach.languages.map(l => <span key={l} style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, background: '#e6f7f4', color: '#2fbca0', padding: '3px 10px', borderRadius: 4, fontWeight: 600 }}>{l}</span>)}
              </div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: '#7a746c', fontWeight: 500 }}>★ {coach.rating} rating · {coach.reviews} reviews</div>
            </div>
          </div>
          <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid #eeecea', padding: 32, marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, fontWeight: 700, color: '#7a746c', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>About {coach.name.split(' ')[0]}</h3>
            <p className="profile-bio">{coach.bio}</p>
          </div>
          <div className="profile-sessions">
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, fontWeight: 700, color: '#7a746c', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ways to work together</h3>
            <div className="session-option" onClick={() => { setBookingDetails({ type: 'Group session', session: coach.nextGroup, price: coach.groupPrice }); setPage('booking'); }}>
              <div>
                <div className="session-type">Group session</div>
                <div className="session-desc">Next: {coach.nextGroup}</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', marginTop: 4 }}>Learn alongside others. Low commitment. A good way to start.</div>
              </div>
              <div className="session-price">£{coach.groupPrice}</div>
            </div>
            <div className="session-option" onClick={() => { setBookingDetails({ type: 'Taster 1:1', session: `30-minute taster session with ${coach.name}`, price: 28 }); setPage('booking'); }}>
              <div>
                <div className="session-type">Taster 1:1</div>
                <div className="session-desc">30-minute session to talk through your situation</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', marginTop: 4 }}>A chance to see if {coach.name.split(' ')[0]} is the right fit before committing to a programme.</div>
              </div>
              <div className="session-price">£28</div>
            </div>
            <div className="session-option" style={{ cursor: 'default' }}>
              <div>
                <div className="session-type">Programme</div>
                <div className="session-desc">8 to 12 weeks of structured 1:1 coaching</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', marginTop: 4 }}>Book a taster first, then discuss which programme is right for you.</div>
              </div>
              <div className="session-price">£300<span style={{ fontSize: 14, color: '#7a746c' }}>+</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingPage({ coach, bookingDetails, setPage, addBooking }) {
  if (!coach || !bookingDetails) return null;
  return (
    <div className="page">
      <div className="booking-wrap">
        <button className="profile-back" onClick={() => setPage('profile')}>← Back to profile</button>
        <div className="booking-card">
          <h2 className="booking-title">Confirm your booking</h2>
          <div className="booking-detail"><div className="booking-label">Coach</div><div className="booking-value">{coach.name}</div></div>
          <div className="booking-detail"><div className="booking-label">Session type</div><div className="booking-value">{bookingDetails.type}</div></div>
          <div className="booking-detail"><div className="booking-label">Session</div><div className="booking-value">{bookingDetails.session}</div></div>
          <div className="booking-detail"><div className="booking-label">Price</div><div className="booking-value" style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 26, color: '#c86434' }}>£{bookingDetails.price}</div></div>
          <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', marginBottom: 24, lineHeight: 1.65 }}>Secure payment handled by BeHallthy. You will receive a confirmation email with everything you need.</div>
          <button className="btn-primary" style={{ width: '100%', fontSize: 16, padding: '16px' }} onClick={() => { addBooking({ coach: coach.name, type: bookingDetails.type, session: bookingDetails.session, price: bookingDetails.price }); setPage('confirmation'); }}>Confirm booking</button>
        </div>
      </div>
    </div>
  );
}

function ConfirmationPage({ coach, bookingDetails, setPage }) {
  return (
    <div className="page">
      <div className="confirm-wrap">
        <div className="confirm-icon">✓</div>
        <h2 className="confirm-title">You are booked in</h2>
        <p className="confirm-sub">Your {bookingDetails?.type?.toLowerCase()} with {coach?.name} is confirmed. A confirmation email is on its way with everything you need.</p>
        <div style={{ background: '#f8f7f5', borderRadius: 12, padding: '20px 24px', marginBottom: 32, textAlign: 'left' }}>
          <div className="booking-label" style={{ marginBottom: 4 }}>Session</div>
          <div style={{ fontFamily: "'Cooper BT', Georgia, serif", color: '#0369a1', fontSize: 15 }}>{bookingDetails?.session}</div>
        </div>
        <button className="btn-primary" style={{ marginBottom: 12, width: '100%' }} onClick={() => setPage('clientDashboard')}>Go to your dashboard</button>
        <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setPage('coaches')}>Browse more coaches</button>
      </div>
    </div>
  );
}

function ClientDashboard({ bookings, quizAnswers, setPage }) {
  const matches = quizAnswers.length === 8 ? getMatches(quizAnswers) : [];
  return (
    <div className="page">
      <div className="dashboard-body">
        <h1 style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 30, color: '#0369a1', marginBottom: 6, fontWeight: 400 }}>Your dashboard</h1>
        <p style={{ fontFamily: "'Cooper BT', Georgia, serif", color: '#7a746c', marginBottom: 36 }}>Everything in one place.</p>
        <div className="dashboard-grid">
          <div className="dash-card">
            <div className="dash-card-label">Your bookings</div>
            {bookings.length === 0 ? (
              <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 14, color: '#7a746c' }}>No bookings yet. <button style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: '#c86434', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }} onClick={() => setPage('coaches')}>Find a coach</button></div>
            ) : bookings.map((b, i) => (
              <div key={i} className="booking-row">
                <div>
                  <div className="booking-row-name">{b.coach}</div>
                  <div className="booking-row-date">{b.type} · {b.session.substring(0, 38)}{b.session.length > 38 ? '…' : ''}</div>
                </div>
                <span className="status-confirmed">Confirmed</span>
              </div>
            ))}
          </div>
          {matches.length > 0 && (
            <div className="dash-card">
              <div className="dash-card-label">Your matches</div>
              {matches.map(({ coach }) => (
                <div key={coach.id} className="booking-row">
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <PhotoPlaceholder size={36} initials={coach.avatar} bg={coach.avatarBg} color={coach.avatarColor} />
                    <div>
                      <div className="booking-row-name">{coach.name}</div>
                      <div className="booking-row-date">{coach.coachType}</div>
                    </div>
                  </div>
                </div>
              ))}
              <button style={{ marginTop: 14, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, fontWeight: 600, color: '#c86434', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setPage('matches')}>View full matches →</button>
            </div>
          )}
          {quizAnswers.length < 8 && (
            <div className="dash-card" style={{ background: '#f5ece4', border: '1px solid #e8a882' }}>
              <div className="dash-card-label" style={{ color: '#c86434' }}>Not matched yet</div>
              <p style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 14, color: '#3d3832', marginBottom: 16, lineHeight: 1.65 }}>Take the 2-minute quiz to get matched to coaches who specialise in what you are dealing with.</p>
              <button className="btn-primary" onClick={() => setPage('quiz')}>Take the quiz</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CoachDashboard() {
  const [sessions, setSessions] = useState([
    { id: 1, client: 'Sarah M.', type: 'Taster 1:1', date: 'Tue 17 Jun, 5.30pm', mode: 'Online', status: 'Confirmed', done: false },
    { id: 2, client: 'Rachel T.', type: 'Programme, session 3 of 8', date: 'Wed 18 Jun, 11am', mode: 'Online', status: 'Confirmed', done: false },
    { id: 3, client: 'Group session', type: 'Hormones & Energy Reset', date: 'Wed 18 Jun, 6.30pm', mode: 'In person', status: 'Confirmed', done: false },
    { id: 4, client: 'Niamh O.', type: 'Taster 1:1', date: 'Fri 20 Jun, 2pm', mode: 'Online', status: 'Pending', done: false },
    { id: 5, client: 'Claire W.', type: 'Programme, session 1 of 8', date: 'Mon 23 Jun, 10am', mode: 'Online', status: 'Confirmed', done: false },
  ]);
  const [feedbackSent, setFeedbackSent] = useState([]);

  function markDone(id) {
    setSessions(prev => prev.map(s => s.id === id ? { ...s, done: true } : s));
    setFeedbackSent(prev => [...prev, id]);
    setTimeout(() => setFeedbackSent(prev => prev.filter(i => i !== id)), 3000);
  }

  const doneSessions = sessions.filter(s => s.done).length;

  return (
    <div className="page">
      <div className="dashboard-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 30, color: '#0369a1', marginBottom: 4, fontWeight: 400 }}>Coach dashboard</h1>
            <p style={{ fontFamily: "'Cooper BT', Georgia, serif", color: '#7a746c' }}>Welcome back, Priya</p>
          </div>
          {/* Session mode badge */}
          <div style={{ background: '#ffffff', border: '1px solid #eeecea', borderRadius: 12, padding: '12px 20px', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 10, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Session delivery</div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, background: '#e0f0fa', color: '#0369a1', padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>Online</span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, background: '#e6f7f4', color: '#2fbca0', padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>In person</span>
              </div>
            </div>
            <div style={{ borderLeft: '1px solid #eeecea', paddingLeft: 16 }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 10, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Location</div>
              <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#0369a1' }}>London, England</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stat-row">
          {[
            { n: sessions.filter(s => !s.done).length, l: 'Upcoming sessions' },
            { n: '3', l: 'Active programme clients' },
            { n: '12', l: 'Group session sign-ups' },
            { n: '4.9', l: 'Your rating' },
          ].map(s => (
            <div key={s.l} className="stat-box"><div className="stat-num">{s.n}</div><div className="stat-label">{s.l}</div></div>
          ))}
        </div>

        {/* Feedback sent toast */}
        {feedbackSent.length > 0 && (
          <div style={{ background: '#e6f7f4', border: '1px solid #2fbca0', borderRadius: 10, padding: '12px 20px', marginBottom: 20, display: 'flex', gap: 10, alignItems: 'center', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: '#0369a1', fontWeight: 500 }}>
            <span style={{ fontSize: 16 }}>✓</span> Feedback request sent to client automatically
          </div>
        )}

        {/* Sessions table */}
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Your sessions</div>
        <div className="admin-table-wrap" style={{ marginBottom: 32 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Session type</th>
                <th>Date & time</th>
                <th>Mode</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map(s => (
                <tr key={s.id} style={{ opacity: s.done ? 0.5 : 1 }}>
                  <td style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, color: '#0369a1' }}>{s.client}</td>
                  <td>{s.type}</td>
                  <td>{s.date}</td>
                  <td>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 600, color: s.mode === 'Online' ? '#0369a1' : '#2fbca0', background: s.mode === 'Online' ? '#e0f0fa' : '#e6f7f4', padding: '3px 10px', borderRadius: 20 }}>
                      {s.mode}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 700, color: s.done ? '#7a746c' : s.status === 'Confirmed' ? '#2fbca0' : '#c86434', background: s.done ? '#f8f7f5' : s.status === 'Confirmed' ? '#e6f7f4' : '#f5ece4', padding: '3px 10px', borderRadius: 20 }}>
                      {s.done ? 'Done' : s.status}
                    </span>
                  </td>
                  <td>
                    {!s.done && s.status === 'Confirmed' ? (
                      <button
                        onClick={() => markDone(s.id)}
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, fontWeight: 600, color: '#c86434', background: '#f5ece4', border: '1px solid #e8a882', borderRadius: 6, padding: '5px 12px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.15s' }}
                      >
                        Mark done
                      </button>
                    ) : s.done ? (
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: '#7a746c' }}>Feedback sent</span>
                    ) : (
                      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: '#c8c4be' }}>Awaiting confirm</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tools recommendation */}
        <div style={{ background: '#fafaf8', borderRadius: 12, border: '1px solid #eeecea', padding: '20px 24px' }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, fontWeight: 700, color: '#7a746c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Recommended tools</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flex: 1, minWidth: 220 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#e0f0fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>📹</div>
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, color: '#0369a1', fontSize: 13, marginBottom: 3 }}>Google Meet for online sessions</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', lineHeight: 1.55 }}>Free, no app needed for clients, no time limits. Our recommended tool for 1:1 and group sessions online.</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flex: 1, minWidth: 220 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#f5ece4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, color: '#0369a1', fontSize: 13, marginBottom: 3 }}>In-person sessions</div>
                <div style={{ fontFamily: "'Cooper BT', Georgia, serif", fontSize: 13, color: '#7a746c', lineHeight: 1.55 }}>Your space, your venue. BeHallthy handles the booking and payment. You choose where you meet your clients.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPage() {
  return (
    <div className="page">
      <div className="section">
        <div className="section-inner">
          <h1 className="section-title">Platform overview</h1>
          <p className="section-sub">BeHallthy demo data</p>
          <div className="admin-stats">
            {[{ n: COACHES.length, l: 'Coaches on platform' }, { n: '3', l: 'Clients matched this week' }, { n: '2', l: 'Group sessions this week' }, { n: '1', l: 'New programme starts' }, { n: '4.87', l: 'Average coach rating' }, { n: '7', l: 'Specialisms covered' }].map(s => (
              <div key={s.l} className="admin-stat"><div className="admin-stat-num">{s.n}</div><div className="admin-stat-label">{s.l}</div></div>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, fontWeight: 700, color: '#0369a1', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Coach roster</h3>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>Coach</th><th>Location</th><th>Type</th><th>Specialism</th><th>Primary qualification</th><th>Rating</th></tr></thead>
              <tbody>
                {COACHES.map(c => (
                  <tr key={c.id}>
                    <td style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, color: '#0369a1' }}>{c.name}</td>
                    <td>{c.location}</td>
                    <td><span className="coach-type-tag" style={{ fontSize: 10 }}>{c.coachType}</span></td>
                    <td><span className="coach-spec-tag" style={{ fontSize: 11 }}>{c.specialism}</span></td>
                    <td>{c.qualifications[0]}</td>
                    <td style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600 }}>★ {c.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [prevPage, setPrevPage] = useState('coaches');
  const [userType, setUserType] = useState('client');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookings, setBookings] = useState([]);

  function navigate(p) { setPrevPage(page); setPage(p); }
  function addBooking(b) { setBookings(prev => [...prev, b]); }

  return (
    <>
      <style>{styles}</style>
      <Nav page={page} setPage={navigate} userType={userType} quizAnswers={quizAnswers} />
      {page === 'home' && <HomePage userType={userType} setUserType={setUserType} setPage={navigate} />}
      {page === 'coaches' && <CoachesPage setPage={navigate} setSelectedCoach={setSelectedCoach} />}
      {page === 'quiz' && <QuizPage setPage={navigate} quizAnswers={quizAnswers} setQuizAnswers={setQuizAnswers} />}
      {page === 'matches' && <MatchesPage quizAnswers={quizAnswers} setPage={navigate} setSelectedCoach={setSelectedCoach} setBookingDetails={setBookingDetails} />}
      {page === 'profile' && <ProfilePage coach={selectedCoach} setPage={navigate} setBookingDetails={setBookingDetails} prevPage={prevPage} />}
      {page === 'booking' && <BookingPage coach={selectedCoach} bookingDetails={bookingDetails} setPage={navigate} addBooking={addBooking} />}
      {page === 'confirmation' && <ConfirmationPage coach={selectedCoach} bookingDetails={bookingDetails} setPage={navigate} />}
      {page === 'clientDashboard' && <ClientDashboard bookings={bookings} quizAnswers={quizAnswers} setPage={navigate} />}
      {page === 'coachDashboard' && <CoachDashboard />}
      {page === 'admin' && <AdminPage />}
    </>
  );
}
