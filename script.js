let preferences = {
 him: {},
 her: {},
 combined: {}
};

const svgs = {
 'Round brilliant': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Princess': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Oval': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="40" ry="30" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Cushion': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="20" ry="20" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Emerald': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="20,10 80,10 90,20 90,80 80,90 20,90 10,80 10,20" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Marquise': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,40 50,90 10,40" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Pear': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10 Q90 50 50 90 Q10 50 50 10" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Radiant': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="20,10 80,10 90,30 90,70 80,90 20,90 10,70 10,30" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Colorless': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="#ffffff" stroke="black" stroke-width="3" /></svg>',
 'Near-colorless with warm tint': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="#fffacd" stroke="black" stroke-width="3" /></svg>',
 'Flawless clarity': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="black" stroke-width="3" /></svg>',
 'Very slightly included': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" /><circle cx="50" cy="50" r="1" fill="black" /></svg>',
 'High polish/symmetry': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Good polish': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Under 1 carat': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="none" /></svg>',
 '1-1.5 carats': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="30" stroke="black" stroke-width="3" fill="none" /></svg>',
 '1.5-2 carats': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Over 2 carats': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Solitaire': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="90" x2="100" y2="90" stroke="black" stroke-width="5" /><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="none" /></svg>',
 'Halo': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="90" x2="100" y2="90" stroke="black" stroke-width="5" /><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="none" /><circle cx="50" cy="30" r="5" stroke="black" /><circle cx="30" cy="50" r="5" stroke="black" /><circle cx="70" cy="50" r="5" stroke="black" /><circle cx="50" cy="70" r="5" stroke="black" /></svg>',
 'Pavé band': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="90" x2="100" y2="90" stroke="black" stroke-width="5" /><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="none" /><circle cx="20" y="90" r="3" stroke="black" /><circle cx="40" y="90" r="3" stroke="black" /><circle cx="60" y="90" r="3" stroke="black" /><circle cx="80" y="90" r="3" stroke="black" /></svg>',
 'Plain band': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="90" x2="100" y2="90" stroke="black" stroke-width="5" /><circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="none" /></svg>',
 'White gold/platinum': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="#e5e4e2" stroke="black" stroke-width="3" /></svg>',
 'Yellow gold': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="#ffd700" stroke="black" stroke-width="3" /></svg>',
 'Rose gold': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="#b76e79" stroke="black" stroke-width="3" /></svg>',
 'Mixed metals': '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="lineargradient(0deg, #ffd700, #e5e4e2)" stroke="black" stroke-width="3" /></svg>',
 'Thin band': '<svg width="100" height="20" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="10" fill="#ffd700" stroke="black" stroke-width="1" /></svg>',
 'Medium band': '<svg width="100" height="20" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="15" fill="#ffd700" stroke="black" stroke-width="1" /></svg>',
 'Flat profile': '<svg width="100" height="20" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="15" fill="#ffd700" stroke="black" stroke-width="1" /></svg>',
 'Domed/rounded': '<svg width="100" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 15 Q50 0 100 15" fill="#ffd700" stroke="black" stroke-width="1" /></svg>'
};

const chartImages = {
 'Diamond Color and Clarity': {
 color: 'https://www.diamonds.pro/wp-content/uploads/2009/06/ColorGrid1-e1451817859850.jpg',
 clarity: 'https://www.diamonds.pro/wp-content/uploads/2009/06/ColorGrid1-e1451817859850.jpg' // Placeholder, can replace with actual clarity chart if found
 },
 'Diamond Carat (Size)': 'https://www.diamonds.pro/wp-content/uploads/2019/11/diamonds_all_cuts-02_round_cut.jpg'
};

function startTest(user) {
 document.getElementById('intro').classList.add('hidden');
 document.getElementById(`test-${user}`).classList.remove('hidden');
 loadCharts(user);
}

function loadCharts(user) {
 const chartsDiv = document.getElementById(`charts-${user}`);
 chartsDiv.innerHTML = '';
 
 const charts = getCharts(user);
 charts.forEach((chart, index) => {
 const chartDiv = document.createElement('div');
 chartDiv.classList.add('chart');
 chartDiv.innerHTML = `<h3>${chart.title}</h3>`;
 
 // Add chart images if available
 if (chartImages[chart.title.split(' – ')[0]]) {
 const imgSrc = chartImages[chart.title.split(' – ')[0]];
 chartDiv.innerHTML += `<img src="${imgSrc}" alt="${chart.title.split(' – ')[0]} Chart">`;
 }
 
 chart.pairs.forEach((pair, pIndex) => {
 const pairDiv = document.createElement('div');
 pairDiv.classList.add('pair');
 
 const keyA = pair.A.split(' (')[0];
 const svgA = svgs[keyA] || '';
 
 const keyB = pair.B.split(' (')[0];
 const svgB = svgs[keyB] || '';
 
 pairDiv.innerHTML = `
 <div>${svgA}</div><button onclick="selectOption('${user}', ${index}, ${pIndex}, 'A')">${pair.A}</button>
 <div>${svgB}</div><button onclick="selectOption('${user}', ${index}, ${pIndex}, 'B')">${pair.B}</button>
 `;
 if (pair.neutral) {
 pairDiv.innerHTML += `<button onclick="selectOption('${user}', ${index}, ${pIndex}, 'neutral')">Neutral</button>`;
 }
 chartDiv.appendChild(pairDiv);
 });
 
 chartsDiv.appendChild(chartDiv);
 });
}

function getCharts(user) {
 const suffix = user === 'her' ? ' for you?' : '';
 return [
 {
 title: `Diamond Cut (Shape) – "Which looks sharper?"${suffix}`,
 pairs: [
 {A: 'Round brilliant (classic sparkle)', B: 'Princess (square, modern edge)'},
 {A: 'Oval (elongated, elegant)', B: 'Cushion (soft square, vintage romance)'},
 {A: 'Emerald (step-cut, sophisticated)', B: 'Marquise (pointed, dramatic)'},
 {A: 'Pear (teardrop, unique flow)', B: 'Radiant (rectangular sparkle)'},
 {A: 'Top 2 Refinement (e.g., Round vs. Oval)', B: 'Compare your favorites', neutral: true}
 ]
 },
 {
 title: `Diamond Color and Clarity – "Which is clearer?"${suffix}`,
 pairs: [
 {A: 'Colorless (D-F grade, pure ice)', B: 'Near-colorless with warm tint (G-I, subtle glow)'},
 {A: 'Flawless clarity (no visible inclusions)', B: 'Very slightly included (minor flaws, more affordable sparkle)'},
 {A: 'High polish/symmetry (perfect light return)', B: 'Good polish (balanced, everyday wear)'},
 {A: 'Refinement (e.g., ultra-clear vs. hint of yellow)', B: 'Fine-tune', neutral: true}
 ]
 },
 {
 title: `Diamond Carat (Size) – "Which feels right?"${suffix}`,
 pairs: [
 {A: 'Under 1 carat (subtle, elegant)', B: '1-1.5 carats (noticeable presence)'},
 {A: '1.5-2 carats (statement piece)', B: 'Over 2 carats (bold luxury)'},
 {A: 'Balanced carat with emphasis on cut quality', B: 'Larger carat even if cut is average'},
 {A: 'Refinement (e.g., smaller for small hands)', B: 'Adjust for fit', neutral: true}
 ]
 },
 {
 title: `Engagement Ring Setting and Metal – "Which frames better?"${suffix}`,
 pairs: [
 {A: 'Solitaire (simple prong, diamond-focused)', B: 'Halo (surrounded by smaller stones, amplified sparkle)'},
 {A: 'Pavé band (tiny diamonds along the band)', B: 'Plain band (focus on center stone)'},
 {A: 'White gold/platinum (cool, modern)', B: 'Yellow gold (warm, classic)'},
 {A: 'Rose gold (romantic pink hue)', B: 'Mixed metals (e.g., white band with yellow accents)'},
 {A: 'Refinement (e.g., Solitaire in white vs. Halo in yellow)', B: 'Top combo', neutral: true}
 ]
 },
 {
 title: `Wedding Band Integration – "Which pairs seamlessly?"${suffix}`,
 pairs: [
 {A: 'Thin band (2-3mm width, delicate stack)', B: 'Medium band (4-5mm, balanced presence)'},
 {A: 'Flat profile (modern, flush fit)', B: 'Domed/rounded (comfortable, traditional)'},
 {A: 'Matching gold tone to engagement ring', B: 'Contrasting gold (e.g., yellow band with white engagement)'},
 {A: 'Refinement (e.g., Thin flat vs. Medium domed)', B: 'Stacking test', neutral: true}
 ]
 }
 ];
}

function selectOption(user, chartIndex, pairIndex, choice) {
 if (!preferences[user][chartIndex]) preferences[user][chartIndex] = {};
 preferences[user][chartIndex][pairIndex] = choice;
 const buttons = document.querySelectorAll(`#charts-${user} .chart:nth-child(${chartIndex+1}) .pair:nth-child(${pairIndex+1}) button`);
 buttons.forEach(btn => btn.style.backgroundColor = '');
 event.target.style.backgroundColor = '#b8952e';
}

function submitIndividual (user) {
 preferences[user].prescription = summarizePreferences(user);
 alert(`Preferences submitted for ${user}. Prescription: ${preferences[user].prescription}`);
 document.getElementById(`test-${user}`).classList.add('hidden');
 document.getElementById('intro').classList.remove('hidden');
}

function summarizePreferences(user) {
 // Placeholder; analyze selections to build a string
 return '1.2 carat round diamond (G color, VS clarity), solitaire setting in white gold, paired with 4mm flat yellow gold band.';
}

function startCombined() {
 if (!preferences.him.prescription || !preferences.her.prescription) {
 alert('Both individual tests must be completed first.');
 return;
 }
 document.getElementById('intro').classList.add('hidden');
 document.getElementById('combined').classList.remove('hidden');
 loadJointCharts();
}

function loadJointCharts() {
 const jointDiv = document.getElementById('joint-charts');
 jointDiv.innerHTML = '';
 
 const jointCharts = getJointCharts();
 jointCharts.forEach((chart, index) => {
 const chartDiv = document.createElement('div');
 chartDiv.classList.add('chart');
 chartDiv.innerHTML = `<h3>${chart.title}</h3>`;
 
 chart.pairs.forEach((pair, pIndex) => {
 const pairDiv = document.createElement('div');
 pairDiv.classList.add('pair');
 pairDiv.innerHTML = `
 <button onclick="selectJoint(${index}, ${pIndex}, 'A')">${pair.A}</button>
 <button onclick="selectJoint(${index}, ${pIndex}, 'B')">${pair.B}</button>
 <button onclick="selectJoint(${index}, ${pIndex}, 'neutral')">Neutral/Compromise</button>
 `;
 chartDiv.appendChild(pairDiv);
 });
 
 jointDiv.appendChild(chartDiv);
 });
}

function getJointCharts() {
 // Placeholder; dynamically pull from preferences.him and .her
 return [
 {
 title: 'Diamond Cut Alignment',
 pairs: [
 {A: 'His top choice (e.g., Round)', B: 'Her top choice (e.g., Oval)'}
 ]
 },
 {
 title: 'Diamond Quality Blend (Color, Clarity, Carat)',
 pairs: [
 {A: 'His preference (e.g., Colorless, 1.5ct)', B: 'Her preference (e.g., Warm tint, 1ct)'}
 ]
 },
 {
 title: 'Engagement Ring Harmony',
 pairs: [
 {A: 'His setting/metal (e.g., Solitaire white gold)', B: 'Her setting/metal (e.g., Halo yellow gold)'}
 ]
 },
 {
 title: 'Wedding Band Sync (Plain Gold Only)',
 pairs: [
 {A: 'His band style (e.g., Thin flat)', B: 'Her band style (e.g., Medium domed)'}
 ]
 }
 ];
}

function selectJoint(chartIndex, pairIndex, choice) {
 if (!preferences.combined[chartIndex]) preferences.combined[chartIndex] = {};
 preferences.combined[chartIndex][pairIndex] = choice;
 const buttons = document.querySelectorAll(`#joint-charts .chart:nth-child(${chartIndex+1}) .pair:nth-child(${pairIndex+1}) button`);
 buttons.forEach(btn => btn.style.backgroundColor = '');
 event.target.style.backgroundColor = '#b8952e';
}

function finalizeSelection() {
 preferences.combined.prescription = summarizeCombined();
 document.getElementById('combined').classList.add('hidden');
 document.getElementById('results').classList.remove('hidden');
 document.getElementById('final-prescription').innerText = preferences.combined.prescription;
}

function summarizeCombined() {
 // Placeholder logic
 return '1.3 carat oval diamond (H color, VS2 clarity), halo setting in yellow gold engagement ring, paired with 4mm plain domed yellow gold band.';
}

function resetApp() {
 preferences = {him: {}, her: {}, combined: {}};
 document.getElementById('results').classList.add('hidden');
 document.getElementById('intro').classList.remove('hidden');
}