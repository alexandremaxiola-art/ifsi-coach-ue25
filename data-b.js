(function(){
const {modules}=window.__UE25_DA;
const L=[['Définis la notion essentielle.','definition'],['Explique le mécanisme.','mechanism'],['Quelles formes distinguer ?','classification'],['Quels facteurs de risque retenir ?','risks'],['Quels signes rechercher ?','signs'],['Quels examens orientent ?','exams'],['Quels principes de traitement ?','treatment'],['Comment prévenir ?','prevention'],['Quel rôle IDE prioritaire ?','nursing'],['Quel signal impose une alerte ?','alert']];
const flashcards=Object.entries(modules).flatMap(([topic,m],i)=>L.map(([front,key],j)=>({id:`ue25-m${i}-c${j}`,topic,front,back:m.facts[key],key})));
const Q=[
['Transmission croisée en EHPAD','Plusieurs résidents présentent vomissements et diarrhée en 24 h.','Mettre en place les précautions adaptées et signaler les cas'],
['Hémocultures avant traitement','Frissons intenses, 39,5 °C ; antibiotique prescrit.','Prélever rapidement sans retarder le traitement'],
['Sepsis avec hypoperfusion','Confusion, marbrures, hypotension et oligurie.','Déclencher immédiatement la prise en charge sepsis'],
['Malaise après vaccin','Dyspnée, urticaire diffus et hypotension cinq minutes après injection.','Traiter comme une anaphylaxie selon protocole'],
['Pneumonie hypoxémiante','Fièvre, FR 32/min, SpO₂ 86 % et confusion.','Prioriser support respiratoire et évaluation de gravité'],
['Nourrisson épuisé','Tirage, pauses respiratoires et prises divisées par trois.','Alerter devant les signes de gravité'],
['Tuberculose pulmonaire','Toux prolongée, amaigrissement et cavernes radiologiques.','Mettre en place immédiatement les précautions air'],
['Pyélonéphrite obstructive','Fièvre, douleur lombaire, hypotension et calcul obstructif.','Organiser drainage et antibiothérapie urgents'],
['Sonde sans indication','Sonde depuis dix jours, urine trouble mais aucun symptôme.','Réévaluer et retirer la sonde, sans traiter la seule bactériurie'],
['Péritonite postopératoire','Contracture, TA 84/50 et lactates élevés.','Alerter pour contrôle urgent du foyer'],
['Déshydratation sévère','Dix selles liquides, hypotension orthostatique et oligurie.','Corriger les pertes et évaluer la gravité'],
['Purpura fébrile','Fièvre, raideur, purpura extensif et confusion.','Déclencher la filière méningite grave'],
['Valve prothétique fébrile','Fièvre prolongée, souffle et déficit brutal du bras.','Suspecter endocardite compliquée d’embolie'],
['Genou chaud fébrile','Genou très douloureux, chaud et impotence totale.','Organiser une ponction urgente avant antibiotique si possible'],
['Douleur disproportionnée','Plaie, douleur extrême, bulles et extension rapide.','Suspecter une infection nécrosante'],
['Prurit collectif nocturne','Sillons interdigitaux ; conjoint et enfant symptomatiques.','Traiter simultanément patient, contacts et environnement'],
['Accident d’exposition au sang','Piqûre profonde par aiguille creuse utilisée.','Laver, déclarer et évaluer immédiatement un TPE'],
['Douleur pelvienne fébrile','Douleur, fièvre et pertes après rapport non protégé.','Évaluer rapidement une infection génitale haute'],
['Ictère et confusion','Ictère aigu, hypoglycémie et INR très élevé.','Suspecter une insuffisance hépatique aiguë'],
['Fièvre au retour','Fièvre cinq jours après retour d’Afrique subsaharienne.','Rechercher immédiatement un paludisme']
];
const topics=Object.keys(modules);
const CASE_META=[
 ['Mme Lenoir, 86 ans','EHPAD · unité protégée',[['T°','38,2 °C',1],['TA','132/74',0],['FC','96/min',0],['SpO₂','97 %',0]],['6 résidents symptomatiques','Vomissements','Diarrhées aiguës']],
 ['M. Girard, 63 ans','Urgences · box 8',[['T°','39,5 °C',1],['TA','118/70',0],['FC','110/min',1],['SpO₂','96 %',0]],['Frissons intenses','VVP posée','Antibiotique prescrit']],
 ['Mme Diallo, 71 ans','Urgences · déchocage',[['T°','38,8 °C',1],['TA','82/48',1],['FC','126/min',1],['SpO₂','92 %',1]],['Confusion','Marbrures','Oligurie']],
 ['M. Petit, 34 ans','Centre de vaccination',[['T°','36,8 °C',0],['TA','74/42',1],['FC','128/min',1],['SpO₂','89 %',1]],['Urticaire diffus','Sibilants','Début à 5 min']],
 ['Mme Robert, 78 ans','Urgences · médecine',[['T°','39,0 °C',1],['TA','102/62',0],['FC','118/min',1],['SpO₂','86 %',1]],['FR 32/min','Confusion','Toux productive']],
 ['Noé R., 2 mois','Urgences pédiatriques',[['T°','37,7 °C',0],['FC','168/min',1],['FR','66/min',1],['SpO₂','89 %',1]],['Tirage marqué','Pauses respiratoires','Prises ÷ 3']],
 ['M. Benali, 42 ans','Médecine infectieuse',[['T°','38,1 °C',1],['TA','124/76',0],['FC','92/min',0],['SpO₂','96 %',0]],['Toux > 3 semaines','Amaigrissement','Cavernes radiologiques']],
 ['Mme Martin, 56 ans','Urgences · urologie',[['T°','39,4 °C',1],['TA','86/52',1],['FC','124/min',1],['SpO₂','95 %',0]],['Douleur lombaire','Frissons','Calcul obstructif']],
 ['M. Durand, 79 ans','Médecine · J10 de sondage',[['T°','36,9 °C',0],['TA','138/76',0],['FC','78/min',0],['SpO₂','97 %',0]],['Urines troubles','Aucune douleur','Aucun signe systémique']],
 ['Mme Simon, 68 ans','Chirurgie · J4 postop.',[['T°','39,2 °C',1],['TA','84/50',1],['FC','132/min',1],['SpO₂','93 %',1]],['Contracture abdominale','Lactates élevés','Oligurie']],
 ['M. Lopez, 51 ans','Urgences · gastro-entérite',[['T°','38,0 °C',0],['TA','92/58',1],['FC','116/min',1],['SpO₂','98 %',0]],['10 selles/24 h','Muqueuses sèches','Oligurie']],
 ['Mme Moreau, 24 ans','Urgences · déchocage',[['T°','40,0 °C',1],['TA','78/46',1],['FC','138/min',1],['SpO₂','92 %',1]],['Purpura extensif','Raideur méningée','Confusion']],
 ['M. Bernard, 67 ans','Cardiologie · valve prothétique',[['T°','38,7 °C',1],['TA','112/66',0],['FC','104/min',1],['SpO₂','96 %',0]],['Fièvre prolongée','Souffle modifié','Déficit brachial brutal']],
 ['Mme Garcia, 59 ans','Urgences · orthopédie',[['T°','38,9 °C',1],['TA','126/72',0],['FC','106/min',1],['SpO₂','97 %',0]],['Genou chaud','Impotence totale','Douleur 9/10']],
 ['M. Laurent, 62 ans','Urgences · chirurgie',[['T°','38,6 °C',1],['TA','88/54',1],['FC','128/min',1],['SpO₂','94 %',0]],['Douleur disproportionnée','Bulles cutanées','Extension rapide']],
 ['Mme Nguyen, 37 ans','Consultation de médecine générale',[['T°','36,7 °C',0],['TA','118/68',0],['FC','76/min',0],['SpO₂','99 %',0]],['Prurit nocturne','Sillons interdigitaux','Famille symptomatique']],
 ['M. Cohen, 29 ans','Urgences · AES professionnel',[['T°','36,6 °C',0],['TA','126/72',0],['FC','88/min',0],['SpO₂','99 %',0]],['Piqûre profonde','Aiguille creuse','Exposition récente']],
 ['Mme Roux, 31 ans','Urgences gynécologiques',[['T°','39,0 °C',1],['TA','108/64',0],['FC','112/min',1],['SpO₂','98 %',0]],['Douleur pelvienne','Pertes anormales','Rapport non protégé']],
 ['M. Thomas, 45 ans','Urgences · hépatologie',[['T°','37,5 °C',0],['TA','104/60',0],['FC','108/min',1],['Glycémie','0,48 g/L',1]],['Ictère aigu','Confusion','INR très élevé']],
 ['Mme Kaboré, 33 ans','Urgences · retour de voyage',[['T°','40,2 °C',1],['TA','106/64',0],['FC','122/min',1],['SpO₂','97 %',0]],['Retour d’Afrique subsaharienne','Frissons','J5 après retour']]
];
const cases=Q.map((q,i)=>{const topic=topics[i],m=modules[topic],meta=CASE_META[i];return{id:`ue25-case-${i}`,topic,category:m.category,title:q[0],patient:meta[0],place:meta[1],initials:meta[0].split(' ')[0].slice(0,1)+meta[0].split(' ')[1].slice(0,1),context:q[1],vitals:meta[2],signs:meta[3],question:'Quelle est la priorité ?',options:['Attendre sans surveillance',q[2],'Administrer un traitement non prescrit','Organiser une sortie immédiate'],ok:1,why:m.alert,debrief:[m.facts.mechanism,q[2],m.facts.nursing]}})
window.IFSI_DATA={modules,cases,flashcards};
delete window.__UE25_DA;
})();
