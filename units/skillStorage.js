const defaultSkills = [
  { name: 'HTML', range: 90 },
  { name: 'CSS', range: 85 },
  { name: 'JavaScript', range: 65 },
  { name: 'React', range: 60 },
];

export function getStoredSkills() {
  if (typeof window === 'undefined') return defaultSkills;

  const stored = localStorage.getItem('skills');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return defaultSkills;
    }
  } else {
    localStorage.setItem('skills', JSON.stringify(defaultSkills));
    return defaultSkills;
  }
}

export function storeSkills(skills) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('skills', JSON.stringify(skills));
  }
}
