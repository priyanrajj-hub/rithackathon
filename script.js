// ============================================================
// REAL SIMULATION DATA — exported directly from qt16_results.npz
// (produced by an actual executed run of qt16_simulation.py)
// ============================================================
const noiseLevels = [0.0,0.0455,0.0909,0.1364,0.1818,0.2273,0.2727,0.3182,0.3636,0.4091,0.4545,0.5];
const chshValues  = [2.8545,2.478,2.2041,1.8965,1.6172,1.3848,1.1562,0.9951,0.8301,0.6274,0.522,0.417];
const concValues  = [1.0,0.912,0.8261,0.7422,0.6603,0.5806,0.5029,0.4273,0.3539,0.2826,0.2135,0.1466];

const noiseRange  = [0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9];
const qErrorProbs = [0.3918,0.3999,0.4028,0.4097,0.4156,0.4272,0.426,0.4332,0.4313,0.4406,0.4475,0.4585,0.4663,0.4644,0.469,0.4812,0.4926,0.4852];
const cErrorProbs = [0.4656,0.474,0.475,0.4749,0.4869,0.4812,0.4908,0.4953,0.4951,0.4958,0.496,0.4928,0.4886,0.4838,0.4826,0.476,0.4715,0.4649];

Chart.defaults.color = "#8B92B8";
Chart.defaults.font.family = "'JetBrains Mono', monospace";
Chart.defaults.font.size = 11;

const gridOpt = { color: "rgba(139,146,184,0.12)" };

new Chart(document.getElementById('chshChart'), {
  type: 'line',
  data: {
    labels: noiseLevels.map(v => v.toFixed(2)),
    datasets: [
      { label: 'Measured CHSH S', data: chshValues, borderColor: '#4FE3D0', backgroundColor: 'rgba(79,227,208,0.12)', borderWidth: 2.5, pointRadius: 3, pointBackgroundColor:'#4FE3D0', tension: 0.35, fill: true },
      { label: 'Classical bound (2.0)', data: noiseLevels.map(()=>2.0), borderColor: '#FF6B6B', borderDash:[6,4], borderWidth: 1.5, pointRadius: 0 },
      { label: 'Tsirelson bound (2.828)', data: noiseLevels.map(()=>2.828), borderColor: '#8B7CF6', borderDash:[2,3], borderWidth: 1.5, pointRadius: 0 },
    ]
  },
  options: {
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ position:'bottom', labels:{ boxWidth:12, padding:16 } } },
    scales:{
      x:{ title:{ display:true, text:'Depolarizing probability on signal qubit' }, grid: gridOpt },
      y:{ min:0, max:3, title:{ display:true, text:'CHSH S value' }, grid: gridOpt }
    }
  }
});

new Chart(document.getElementById('concChart'), {
  type: 'line',
  data: {
    labels: noiseLevels.map(v => v.toFixed(2)),
    datasets: [
      { label: 'Concurrence', data: concValues, borderColor: '#8B7CF6', backgroundColor:'rgba(139,124,246,0.14)', borderWidth: 2.5, pointRadius: 3, pointBackgroundColor:'#8B7CF6', tension:0.35, fill:true },
    ]
  },
  options: {
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ display:false } },
    scales:{
      x:{ title:{ display:true, text:'Depolarizing probability on signal qubit' }, grid: gridOpt },
      y:{ min:0, max:1.05, title:{ display:true, text:'Concurrence (1 = max entangled)' }, grid: gridOpt }
    }
  }
});

new Chart(document.getElementById('detectChart'), {
  type: 'line',
  data: {
    labels: noiseRange.map(v => v.toFixed(2)),
    datasets: [
      { label: 'Classical detection', data: cErrorProbs, borderColor: '#FF6B6B', borderDash:[5,3], borderWidth: 2.5, pointRadius: 2.5, pointBackgroundColor:'#FF6B6B', tension:0.3 },
      { label: 'Quantum (entangled) detection', data: qErrorProbs, borderColor: '#4FE3D0', backgroundColor:'rgba(79,227,208,0.10)', borderWidth: 2.8, pointRadius: 2.5, pointBackgroundColor:'#4FE3D0', tension:0.3, fill:true },
    ]
  },
  options: {
    responsive:true, maintainAspectRatio:false,
    plugins:{ legend:{ position:'bottom', labels:{ boxWidth:12, padding:16 } } },
    scales:{
      x:{ title:{ display:true, text:'Background clutter / noise intensity' }, grid: gridOpt },
      y:{ min:0, max:0.55, title:{ display:true, text:'Detection error probability' }, grid: gridOpt }
    }
  }
});

// ---------- terminal proof block (real captured stdout) ----------
const termLines = [
  ["info","[INFO] GPU backend unavailable; using CPU. (expected on most machines)"],
  ["text","[Sanity check] Ideal Bell state amplitudes: [0.7071+0j 0 0 0.7071+0j]"],
  ["ok","[Sanity check] PASSED: Bell state |Phi+> correctly constructed."],
  ["text",""],
  ["head","[Experiment 1] CHSH correlation statistics across noise levels..."],
  ["text","    depol_p=0.000  ->  CHSH S = 2.8545"],
  ["text","    depol_p=0.136  ->  CHSH S = 1.8965"],
  ["text","    depol_p=0.500  ->  CHSH S = 0.4170"],
  ["text",""],
  ["head","[Experiment 2] Concurrence decay across noise levels..."],
  ["text","    depol_p=0.000  ->  Concurrence = 1.0000"],
  ["text","    depol_p=0.273  ->  Concurrence = 0.5029"],
  ["text","    depol_p=0.500  ->  Concurrence = 0.1466"],
  ["text",""],
  ["head","[Experiment 3] Quantum vs Classical detection sweep..."],
  ["text","    clutter=0.050  ->  Q_error=0.3918   C_error=0.4656"],
  ["text","    clutter=0.400  ->  Q_error=0.4332   C_error=0.4953"],
  ["text","    clutter=0.900  ->  Q_error=0.4852   C_error=0.4649"],
  ["text",""],
  ["info","[INFO] Saved plots: plot_1_chsh_vs_noise.png, plot_2_concurrence_decay.png,"],
  ["info","                    plot_3_quantum_vs_classical_error.png"],
  ["info","[INFO] Raw results saved to qt16_results.npz"],
  ["ok","DONE. All deliverables generated successfully."],
];
const termBody = document.getElementById('termBody');
termLines.forEach(([cls, txt]) => {
  const div = document.createElement('div');
  div.className = 'term-line term-' + cls;
  div.textContent = txt || '\u00A0';
  termBody.appendChild(div);
});
