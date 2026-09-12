const byId=id=>document.getElementById(id);
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let current='tomorrow',running=false;

const clearAgents=()=>document.querySelectorAll('.satellite').forEach(node=>node.classList.remove('active-agent'));
const showAgent=name=>document.querySelectorAll('.satellite').forEach(node=>node.classList.toggle('active-agent',node.textContent.trim()===name[0]));

const observer=reduceMotion?null:new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}
}),{threshold:.12});
function reveal(root=document){
  if(reduceMotion||!observer)return;
  root.querySelectorAll('.agent-card,.tomorrow-card,.case-card,.stats,.section-heading,.rhythm').forEach(node=>{
    if(node.dataset.revealReady)return;
    node.dataset.revealReady='true';
    node.classList.add('reveal');
    observer.observe(node);
  });
}

byId('teamGrid').innerHTML=agents.map((a,i)=>`<article class="agent-card ${i===0?'featured':''}"><span class="number">${String(i+1).padStart(2,'0')}</span><span class="avatar">${a.name[0]}</span><h3>${a.name}</h3><small>${a.role}</small><p>${a.desc}</p><div class="metric">↗ ${a.metric}</div><details><summary>${a.skills.length} скілів</summary><ul>${a.skills.map(s=>`<li>${s}</li>`).join('')}</ul></details></article>`).join('');
byId('tomorrowGrid').innerHTML=tomorrowTasks.map(([name,task],i)=>`<article class="tomorrow-card"><span class="task-time">${i===0?'09:00':'до 09:00'}</span><div class="avatar mini">${name[0]}</div><h3>${name}</h3><p>${task}</p></article>`).join('');

function renderScenario(){
  const s=scenarios[current];
  document.body.classList.remove('agent-running');
  clearAgents();
  byId('sourceCard').innerHTML=s.source;
  byId('flow').innerHTML=s.flow.map(([name,job],i)=>`<div class="flow-step" data-step="${i}"><span class="avatar mini">${name[0]}</span><div><strong>${name}</strong><span>${job}</span></div><b class="state">○</b></div>`).join('');
  byId('flowStatus').textContent='очікує запуску';
  byId('result').classList.add('hidden');
  byId('resultEmpty').classList.remove('hidden');
  byId('runDemo').disabled=false;
  running=false;
}

document.querySelectorAll('.scenario-tab').forEach(btn=>btn.addEventListener('click',()=>{
  if(running)return;
  document.querySelector('.scenario-tab.active').classList.remove('active');
  btn.classList.add('active');
  current=btn.dataset.scenario;
  renderScenario();
}));

const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
  if(running)return;
  running=true;
  document.body.classList.add('agent-running');
  byId('runDemo').disabled=true;
  byId('flowStatus').textContent='агентки працюють…';
  const steps=[...document.querySelectorAll('.flow-step')];
  for(const step of steps){
    const name=step.querySelector('strong').textContent;
    showAgent(name);
    step.classList.add('active');
    step.querySelector('.state').textContent='•••';
    await wait(reduceMotion?120:620);
    step.classList.remove('active');
    step.classList.add('done');
    step.querySelector('.state').textContent='✓';
  }
  clearAgents();
  const s=scenarios[current];
  byId('result').innerHTML=`<div class="result-summary"><strong>Соломія:</strong> ${s.summary}</div>${s.cards.map(c=>`<div class="board-card"><div class="board-head"><span class="system ${c[1]}">${c[0]}</span><span>•••</span></div><strong>${c[2]}</strong><div class="meta"><span>👤 ${c[3]}</span><span>◷ ${c[4]}</span><span>◆ ${c[5]}</span></div></div>`).join('')}<div class="approval">🔒 ${s.approval}</div>`;
  byId('resultEmpty').classList.add('hidden');
  byId('result').classList.remove('hidden');
  byId('flowStatus').textContent='готово за 2,5 с';
  running=false;
  window.setTimeout(()=>document.body.classList.remove('agent-running'),reduceMotion?0:850);
}

byId('runDemo').addEventListener('click',run);
byId('resetDemo').addEventListener('click',renderScenario);
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key==='Enter')run()});

const categories=['Усі',...new Set(useCases.map(c=>c[1]))];
let category='Усі';
byId('filters').innerHTML=categories.map((c,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
function renderCases(){
  const q=byId('caseSearch').value.trim().toLowerCase();
  const rows=useCases.filter(c=>(category==='Усі'||c[1]===category)&&(`${c[0]} ${c[2]} ${skillOwner[c[0]]}`).toLowerCase().includes(q));
  byId('caseCount').textContent=`Показано ${rows.length} із ${useCases.length}`;
  byId('caseGrid').innerHTML=rows.map(c=>`<article class="case-card ${c[3]?'recommended':''}"><div class="case-top"><span class="case-category">${c[1]}</span><span class="owner">${skillOwner[c[0]]}</span></div><h3>${c[0]}</h3><p>${c[2]}</p></article>`).join('');
  reveal(byId('caseGrid'));
}
byId('caseSearch').addEventListener('input',renderCases);
byId('filters').addEventListener('click',e=>{
  const btn=e.target.closest('.filter');
  if(!btn)return;
  document.querySelector('.filter.active').classList.remove('active');
  btn.classList.add('active');
  category=btn.dataset.cat;
  byId('caseGrid').classList.add('is-filtering');
  renderCases();
  requestAnimationFrame(()=>byId('caseGrid').classList.remove('is-filtering'));
});

renderScenario();
renderCases();
reveal();
