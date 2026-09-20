(function(){
const C={
  dem:"#2e8c82", epi:"#4c79c7", eco:"#c47a37", env:"#6a8d46"
};
const mod=(id,title,category,color,short,source,sections,cards,caseData)=>({id,title,category,color,short,source,sections,cards:cards.map((x,i)=>({id:id+"-"+(i+1),q:x[0],a:x[1]})),case:caseData});
const modules=[
mod("demarche","Démarche de santé publique","Démarche & prévention",C.dem,
"Analyser une situation, identifier les besoins, fixer des objectifs, agir puis évaluer.",
"Démarche et outils de santé publique — A. Menudier",
{
"Définition & logique":[
"La démarche de santé publique est présentée comme un processus d’analyse inspiré de la résolution de problème.",
"Elle sert à identifier, mobiliser et organiser les ressources disponibles pour atteindre plusieurs objectifs de santé."
],
"Étapes":[
"Analyser la situation et identifier les problèmes de santé à partir de constats et de données épidémiologiques.",
"Déterminer les objectifs à atteindre pour un groupe ou une communauté.",
"Construire et planifier la stratégie, mettre en œuvre les actions, puis évaluer et réajuster si nécessaire."
],
"Déterminants":[
"L’analyse des besoins s’appuie notamment sur le système sanitaire disponible, l’environnement au sens large, les comportements et styles de vie, ainsi que les caractéristiques héréditaires et biologiques.",
"La démarche peut se décliner vers l’éducation pour la santé ou l’éducation thérapeutique selon la situation."
]
},[
["À quoi s’inspire la démarche de santé publique ?","À la méthodologie de résolution de problème."],
["Quel est le premier grand temps de la démarche ?","Analyser la situation et identifier les problèmes et besoins de santé."],
["Que fait-on après avoir identifié les problèmes ?","On détermine les objectifs de santé à atteindre."],
["Que comprend la phase de stratégie ?","La construction et la planification des actions à mettre en œuvre."],
["Pourquoi évaluer l’action ?","Pour apprécier ses résultats et la réajuster si nécessaire."],
["Quels quatre grands déterminants sont proposés dans le support ?","Système sanitaire, environnement, comportements/style de vie, caractéristiques héréditaires et biologiques."],
["Quel type de données aide à objectiver un problème de santé ?","Des constats et des données épidémiologiques."],
["Que signifie mobiliser les ressources ?","Identifier et organiser les moyens disponibles pour atteindre les objectifs."],
["Quelle démarche spécialisée peut viser l’acquisition de comportements favorables à la santé ?","La démarche d’éducation pour la santé."],
["Quelle autre démarche spécialisée est citée dans le cours ?","La démarche d’éducation thérapeutique."]
],{
title:"Prioriser une action de santé publique",
context:"Une commune observe une hausse des passages aux urgences pour crises d’asthme chez les adolescents. L’équipe souhaite immédiatement lancer une campagne d’affichage.",
clues:["Données locales incomplètes","Plusieurs déterminants possibles","Public adolescent","Ressources limitées"],
question:"Quelle est l’action la plus cohérente avec la démarche de santé publique avant de choisir l’intervention ?",
options:["Analyser la situation et les déterminants avant de fixer les objectifs","Imprimer immédiatement les affiches","Choisir l’action la moins chère sans autre analyse","Évaluer l’action avant de l’avoir définie"],
ok:0,why:"Le support place l’analyse de la situation et l’identification des besoins en amont de la définition des objectifs et des actions.",
debrief:"Réflexe UE 1.2 : analyse → objectifs → planification → mise en œuvre → évaluation/réajustement."
}),

mod("prevention","Organisation de la prévention en France","Démarche & prévention",C.dem,
"Prévention primaire, secondaire, tertiaire et articulation avec les politiques et actions de terrain.",
"Organisation de la prévention en santé en France — IFSI Nouvelle-Aquitaine",
{
"Repères":[
"La prévention est une composante du système de santé.",
"Le support rappelle la définition du concept, ses attributs, les classifications OMS et Gordon et l’importance des déterminants."
],
"Déclinaison":[
"Les politiques de prévention se déclinent en plans, programmes et actions concrètes de terrain.",
"Elles sont évaluées à l’aide d’indicateurs."
],
"Exemples cités":[
"Le cours annonce notamment des exemples en santé au travail, santé scolaire et santé carcérale.",
"L’objectif pédagogique est de connaître l’organisation de la prévention ainsi que les acteurs et leurs missions."
]
},[
["La prévention fait-elle partie du système de santé ?","Oui, elle en est une composante à part entière."],
["Par quoi les politiques de prévention se concrétisent-elles ?","Par des plans, programmes et actions de terrain."],
["Comment les politiques de prévention sont-elles appréciées ?","Par une évaluation reposant sur des indicateurs."],
["Quelle place ont les déterminants de santé dans la prévention ?","Ils sont essentiels pour comprendre les besoins et cibler les actions."],
["Quel exemple de prévention est explicitement cité dans le support ?","La santé au travail."],
["Quels deux autres terrains de prévention sont cités ?","La santé scolaire et la santé carcérale."],
["Quel est un objectif pédagogique du cours ?","Expliquer l’organisation de la prévention en France."],
["Quel autre objectif pédagogique est associé ?","Citer les acteurs de la prévention et leurs missions."],
["Quelle classification de prévention est rappelée dans les prérequis ?","La classification OMS, ainsi que Gordon."],
["Pourquoi relier prévention et indicateurs ?","Pour évaluer les politiques, programmes et actions menées."]
],{
title:"Prévention ou action isolée ?",
context:"Un territoire met en place un programme de prévention sur plusieurs années avec des actions dans les collèges et un suivi annuel.",
clues:["Programme organisé","Actions de terrain","Indicateurs annuels","Déterminants locaux étudiés"],
question:"Quel élément permet surtout de vérifier si la politique produit les effets attendus ?",
options:["Les indicateurs d’évaluation","Le nombre de logos sur les affiches","La durée de la réunion de lancement","Le nombre de professionnels invités au premier jour"],
ok:0,why:"Le support relie explicitement l’évaluation des politiques de prévention à l’utilisation d’indicateurs.",
debrief:"Une politique de prévention ne se réduit pas à une action : elle s’inscrit dans un plan/programme et doit être évaluée."
}),

mod("travail","Prévention et santé au travail","Démarche & prévention",C.dem,
"Risque, danger, SPST, équipe pluridisciplinaire, acteurs et prévention des risques professionnels.",
"Prévention et santé au travail — L. Fernandes",
{
"Risque & danger":[
"Le risque correspond à la probabilité qu’un danger s’actualise et entraîne des dommages dans des conditions déterminées.",
"Le danger est une propriété intrinsèque d’une situation, d’un produit ou d’un équipement susceptible de causer un dommage."
],
"SPST":[
"Le service de santé au travail est renommé Service de Prévention et de Santé au Travail (SPST).",
"Le support met la prévention primaire au cœur du système de santé au travail."
],
"Équipe & missions":[
"L’équipe pluridisciplinaire comprend notamment médecin du travail, infirmier de santé au travail, IPRP, assistants de service de santé au travail et professionnels extérieurs.",
"Le SPST aide à l’évaluation et à la prévention des risques professionnels, conseille sur la qualité de vie et les conditions de travail et accompagne les changements organisationnels."
]
},[
["Comment définir le risque ?","La probabilité qu’un danger s’actualise et entraîne un dommage."],
["Comment définir le danger ?","Une propriété intrinsèque susceptible de causer un dommage."],
["Que signifie SPST ?","Service de Prévention et de Santé au Travail."],
["Quel niveau de prévention est placé au cœur du SPST dans le support ?","La prévention primaire."],
["Quel médecin fait partie de l’équipe pluridisciplinaire du SPST ?","Le médecin du travail."],
["Quel professionnel infirmier est cité dans le SPST ?","L’infirmier ou l’infirmière de santé au travail."],
["Que signifie IPRP ?","Intervenant en Prévention des Risques Professionnels."],
["Quel est un rôle du SPST vis-à-vis des risques professionnels ?","Aider l’entreprise à leur évaluation et à leur prévention."],
["Quel thème de conditions de travail est explicitement cité dans le cours ?","La qualité de vie et les conditions de travail, y compris l’impact du télétravail."],
["Comment les mesures de prévention agissent-elles sur le risque ?","Elles diminuent la probabilité de survenue du dommage face à un danger identifié."]
],{
title:"Danger identifié, risque à réduire",
context:"Dans un service, un soignant réalise un geste exposant potentiellement au sang. L’équipe analyse la situation.",
clues:["Danger biologique identifié","Geste exposant","Mesures de prévention possibles","EPI disponibles"],
question:"Quelle formulation correspond le mieux au raisonnement du support ?",
options:["Le danger existe, et les mesures de prévention diminuent la probabilité de dommage","Le danger disparaît dès qu’un gant est porté","Le risque et le danger sont synonymes","Seul le médecin du travail peut agir sur le risque"],
ok:0,why:"Le cours distingue clairement danger et risque et montre que les mesures de prévention diminuent la probabilité que le danger se traduise en dommage.",
debrief:"Danger = potentiel de dommage ; risque = probabilité d’actualisation. La prévention vise à réduire le risque."
}),

mod("epi-bases","Épidémiologie : bases et branches","Épidémiologie",C.epi,
"Descriptive, explicative, évaluative : trois questions différentes pour étudier la santé des populations.",
"Épidémiologie explicative et outils en démographie 1 — A. Menudier",
{
"Définition":[
"Le support reprend une définition de l’OMS : étude de la distribution des maladies et invalidités dans les populations humaines et des influences qui déterminent cette distribution.",
"Trois branches principales sont distinguées."
],
"Trois branches":[
"L’épidémiologie descriptive étudie la fréquence et la répartition des problèmes de santé.",
"L’épidémiologie explicative recherche les causes et facteurs susceptibles d’influencer l’incidence.",
"L’épidémiologie évaluative s’intéresse aux résultats des actions de santé dans la collectivité."
],
"Méthode explicative":[
"Les méthodes explicatives comparent des groupes diversement exposés à des facteurs dont on cherche à analyser le rôle.",
"Le risque correspond à la probabilité de survenue d’un événement tel qu’une maladie ou un décès."
]
},[
["Que cherche l’épidémiologie descriptive ?","La fréquence et la répartition des problèmes de santé dans une population."],
["Que cherche l’épidémiologie explicative ?","Les causes et facteurs associés aux problèmes de santé."],
["Que cherche l’épidémiologie évaluative ?","Les résultats des actions de santé dans la collectivité."],
["Quel autre terme qualifie l’épidémiologie explicative ?","Analytique ou étiologique."],
["Sur quoi agit un facteur étudié en épidémiologie explicative ?","Il peut augmenter ou diminuer l’incidence d’un problème de santé."],
["Comment procèdent souvent les méthodes explicatives ?","En comparant des groupes diversement exposés."],
["Qu’est-ce qu’un risque en épidémiologie ?","La probabilité de survenue d’un événement de santé sur une période donnée."],
["La mortalité peut-elle être un risque étudié ?","Oui, elle fait partie des événements étudiés."],
["L’incidence d’une maladie peut-elle être étudiée comme risque ?","Oui."],
["Quelle branche analyserait les cas évités après une action préventive ?","L’épidémiologie évaluative."]
],{
title:"Quelle branche choisir ?",
context:"Une équipe sait qu’une maladie est plus fréquente dans une zone donnée et veut maintenant comprendre quels facteurs expliquent cette différence.",
clues:["Fréquence déjà décrite","Recherche de causes","Comparaison de groupes","Facteurs d’exposition"],
question:"Quelle branche de l’épidémiologie répond le mieux à cette question ?",
options:["Épidémiologie explicative","Épidémiologie descriptive uniquement","Épidémiologie évaluative uniquement","Démographie administrative"],
ok:0,why:"Quand la question porte sur les causes ou facteurs associés, le cours situe la démarche dans l’épidémiologie explicative.",
debrief:"Descriptive = quoi/où/combien ; explicative = pourquoi ; évaluative = quels résultats après une action."
}),

mod("cohorte","Exposés / non exposés et risque relatif","Épidémiologie",C.epi,
"Comparer l’incidence entre groupes exposés et non exposés et interpréter le risque relatif.",
"Épidémiologie explicative et outils en démographie 1 — A. Menudier",
{
"Principe":[
"Les enquêtes exposés/non exposés comparent la survenue de la maladie selon l’exposition à un facteur de risque.",
"Le suivi permet d’estimer l’incidence chez les exposés et chez les non exposés."
],
"Risque relatif":[
"Le risque relatif est le rapport de l’incidence chez les exposés sur l’incidence chez les non exposés.",
"RR = 1 : absence d’association mise en évidence ; RR > 1 : augmentation de la probabilité ; RR < 1 : diminution de la probabilité."
],
"Limites":[
"Le suivi doit pouvoir concerner les personnes exposées identifiées au départ.",
"Le support souligne la difficulté des expositions anciennes et la nécessité de données d’incidence."
]
},[
["Que compare une enquête exposés/non exposés ?","La survenue de la maladie selon l’exposition au facteur étudié."],
["Quel indicateur peut être calculé grâce aux incidences des deux groupes ?","Le risque relatif (RR)."],
["Quelle est la formule conceptuelle du RR ?","Incidence chez les exposés divisée par incidence chez les non exposés."],
["Que signifie RR = 1 ?","Le facteur étudié n’est pas associé à une modification du risque dans la comparaison."],
["Que signifie RR > 1 ?","L’exposition est associée à une augmentation de la probabilité de maladie."],
["Que signifie RR < 1 ?","L’exposition est associée à une diminution de la probabilité de maladie."],
["Si RR = 3, comment l’interpréter ?","Les exposés ont une probabilité environ trois fois plus élevée que les non exposés dans l’étude."],
["Pourquoi la qualité des données d’exposition peut-elle poser problème ?","Parce que des expositions anciennes peuvent être difficiles à retrouver précisément."],
["Quelle information est indispensable pour calculer le RR ?","L’incidence de la maladie dans les groupes comparés."],
["Quel grand avantage a le suivi prospectif pour les facteurs de risque ?","Les données d’exposition peuvent être recueillies avant la survenue de l’issue."]
],{
title:"Interpréter un RR",
context:"Dans une étude, l’incidence d’une maladie est de 6 % chez les exposés et de 2 % chez les non exposés.",
clues:["IE+ = 6 %","IE0 = 2 %","Même période d’observation","Deux groupes comparés"],
question:"Quelle interprétation est correcte ?",
options:["RR = 3 : l’incidence est trois fois plus élevée chez les exposés","RR = 0,33 : le facteur protège","RR = 8 : on additionne les incidences","On ne peut jamais calculer de RR dans une cohorte"],
ok:0,why:"RR = 6/2 = 3. Le support interprète un RR supérieur à 1 comme une augmentation de la probabilité chez les exposés.",
debrief:"Toujours revenir à la logique : incidence exposés / incidence non exposés."
}),

mod("cas-temoins","Enquête cas-témoins et Odds Ratio","Épidémiologie",C.epi,
"Partir de malades et non-malades, rechercher l’exposition passée et estimer l’association par l’OR.",
"Épidémiologie explicative et outils en démographie 2 — A. Menudier",
{
"Principe":[
"On sélectionne des cas atteints de la maladie et des témoins indemnes, puis on recherche l’exposition passée.",
"Il s’agit d’une enquête rétrospective."
],
"Conditions":[
"Le support la présente comme adaptée notamment aux maladies rares.",
"Les cas doivent être représentatifs des personnes atteintes et les témoins de la population dont sont issus les cas."
],
"Odds Ratio":[
"L’incidence n’est pas directement calculable dans ce schéma.",
"L’association est estimée par l’Odds Ratio, calculé à partir du tableau cas/témoins et exposés/non exposés : OR = AD / BC."
]
},[
["Dans une enquête cas-témoins, qui sélectionne-t-on d’abord ?","Des cas malades et des témoins non malades."],
["Dans quel sens temporel recherche-t-on l’exposition ?","Dans le passé : l’étude est rétrospective."],
["Peut-on calculer directement l’incidence chez exposés et non exposés ?","Non, pas dans une étude cas-témoins classique."],
["Quel indicateur estime l’association dans l’étude cas-témoins ?","L’Odds Ratio (OR)."],
["Quelle formule est donnée pour l’OR dans un tableau 2×2 ?","OR = AD / BC."],
["Pour quel type de maladie ce schéma est-il particulièrement utile dans le support ?","Une maladie rare."],
["Que doit représenter le groupe des cas ?","Les personnes atteintes de la maladie pour l’exposition étudiée."],
["Que doit représenter le groupe des témoins ?","La population dont sont issus les cas, pour l’exposition étudiée."],
["Que compare concrètement l’OR ?","La fréquence relative de l’exposition entre cas et témoins."],
["Pourquoi le choix des témoins est-il crucial ?","Parce qu’un groupe témoin non représentatif peut biaiser l’estimation de l’association."]
],{
title:"Choisir l’étude adaptée",
context:"Une maladie est rare. Une équipe dispose d’un registre de patients atteints et souhaite comparer leurs expositions anciennes à celles de personnes non malades.",
clues:["Maladie rare","Exposition passée","Cas disponibles","Témoins à sélectionner"],
question:"Quel schéma d’étude correspond le mieux au cours ?",
options:["Une enquête cas-témoins","Une enquête purement descriptive","Un essai sans groupe comparateur","Une étude qui calcule directement l’incidence avant de sélectionner les sujets"],
ok:0,why:"Le support associe l’enquête cas-témoins à une sélection de cas et témoins puis à la recherche rétrospective des expositions.",
debrief:"Cas-témoins = maladie d’abord, exposition ensuite dans le passé ; OR plutôt que RR calculé sur incidences."
}),

mod("biais","Biais, épidémiologie évaluative et dépistage","Épidémiologie",C.epi,
"Identifier les erreurs systématiques, comprendre leurs sources et distinguer dépistage et diagnostic.",
"Épidémiologie explicative et outils en démographie 3 — A. Menudier",
{
"Biais":[
"Un biais est une erreur systématique qui conduit à une estimation différente de la vraie valeur.",
"Le support distingue surtout biais de sélection et biais de mesure."
],
"Exemples":[
"Les biais de sélection comprennent notamment recrutement, autosélection et perdus de vue.",
"Les biais de mesure comprennent subjectivité de l’enquêteur, mémorisation et classement.",
"Le travail à l’aveugle et les instruments standardisés sont cités comme moyens de limiter certains biais."
],
"Dépistage":[
"Le dépistage vise à identifier de manière présomptive des sujets probablement atteints d’une maladie jusque-là inaperçue.",
"Un test de dépistage n’a pas pour objet de poser un diagnostic ; les résultats positifs ou douteux doivent être confirmés.",
"Pour un dépistage de masse, le support cite notamment gravité du problème, phase préclinique détectable, test acceptable/fiable/valide, moyens diagnostiques et thérapeutiques disponibles, accessibilité et acceptabilité."
]
},[
["Qu’est-ce qu’un biais en épidémiologie ?","Une erreur systématique qui déforme l’estimation de la vraie valeur."],
["Quelles sont les deux grandes catégories de biais citées ?","Biais de sélection et biais de mesure."],
["Quels exemples appartiennent aux biais de sélection ?","Recrutement, autosélection et perdus de vue."],
["Quels exemples appartiennent aux biais de mesure ?","Subjectivité de l’enquêteur, mémorisation et classement."],
["Comment limiter la subjectivité de l’enquêteur ?","Travailler à l’aveugle et utiliser des instruments standardisés."],
["Qu’est-ce qu’un biais de mémorisation ?","Une différence systématique dans le souvenir des expositions selon les sujets ou l’issue."],
["Le dépistage pose-t-il un diagnostic ?","Non, il identifie de façon présomptive les personnes probablement atteintes."],
["Que faire après un dépistage positif ou douteux ?","Orienter vers une confirmation diagnostique et, si besoin, un traitement."],
["Quel critère concerne la maladie dans un dépistage de masse ?","Elle doit constituer une menace importante et comporter une phase préclinique détectable."],
["Quel critère concerne le test de dépistage ?","Il doit notamment être simple, acceptable, fiable, valide, peu coûteux et applicable à la population."]
],{
title:"Repérer un biais",
context:"Une enquête sur les effets d’une exposition professionnelle recrute uniquement des volontaires très préoccupés par leur santé.",
clues:["Participation volontaire","Sujet sensible","Non-répondants nombreux","Exposition professionnelle"],
question:"Quel problème méthodologique faut-il envisager en priorité ?",
options:["Un biais d’autosélection","Un effet protecteur automatique","Une absence totale de biais","Un diagnostic posé par le questionnaire"],
ok:0,why:"Le cours décrit l’autosélection lorsque l’entrée dans l’étude dépend d’une décision des sujets potentiellement liée au phénomène étudié.",
debrief:"Le biais se prévient surtout avant le recueil des données ; après coup il peut être très difficile à corriger."
}),

mod("systemes","Modèles de systèmes de santé","Économie & système",C.eco,
"Bismarckien, beveridgien, libéral et évolution vers des systèmes de plus en plus mixtes.",
"Comparaison des systèmes de santé étrangers — C. Thébaut",
{
"Trois modèles":[
"Le cours distingue traditionnellement les modèles bismarckien et beveridgien, auxquels il ajoute un modèle libéral.",
"Les réformes conduisent toutefois à une mixité croissante des systèmes."
],
"Bismarck":[
"Le modèle bismarckien est historiquement fondé sur une assurance sociale obligatoire liée au statut de travailleur.",
"La gestion des caisses est partagée entre représentants des salariés et des employeurs."
],
"Beveridge & libéral":[
"Le modèle beveridgien vise une protection universelle, une administration unifiée et des prestations selon les besoins ; le NHS est financé par l’impôt.",
"Le modèle libéral est illustré dans le cours par les États-Unis et la Suisse.",
"Les systèmes contemporains empruntent souvent à plusieurs modèles."
]
},[
["Quels sont les deux grands modèles historiques classiquement distingués ?","Bismarckien et beveridgien."],
["Quel troisième modèle est cité ?","Le modèle libéral."],
["À quoi est historiquement lié le modèle bismarckien ?","À une assurance sociale obligatoire liée au statut de travailleur."],
["Qui participe à la gestion des caisses dans le modèle bismarckien historique ?","Les représentants des salariés et des employeurs."],
["Quel principe caractérise le modèle beveridgien ?","Une protection universelle de la population."],
["Par quoi le NHS est-il principalement financé dans le support ?","Par l’impôt."],
["Que signifie l’unité dans l’idéal beveridgien ?","Une seule administration chargée de gérer chaque risque."],
["Que signifie l’uniformité dans l’idéal beveridgien ?","Les aides dépendent des besoins plutôt que du revenu."],
["Quels pays illustrent le modèle libéral dans le support ?","Les États-Unis et la Suisse."],
["Pourquoi faut-il éviter de classer les pays de façon trop rigide aujourd’hui ?","Parce que les réformes ont accru la mixité des systèmes."]
],{
title:"Identifier un modèle",
context:"Un pays organise un service national de santé à couverture universelle, largement financé par l’impôt, avec accès selon les besoins.",
clues:["Universalité","Financement fiscal","Service national","Accès selon besoins"],
question:"À quel modèle historique ce portrait se rapproche-t-il le plus ?",
options:["Beveridgien","Bismarckien pur","Libéral pur","Aucun modèle de protection sociale"],
ok:0,why:"Le support associe le modèle beveridgien à l’universalité, à l’unité et au financement du service national de santé par l’impôt.",
debrief:"Les modèles sont des repères analytiques ; les systèmes réels sont aujourd’hui souvent mixtes."
}),

mod("regulation","Régulation et économie de la santé","Économie & système",C.eco,
"Arbitrer entre besoins, dépenses, financement, valeur collective et ressources limitées.",
"Régulation du système de santé — partie 1 — C. Thébaut",
{
"Réguler":[
"Réguler signifie rechercher une adéquation entre consommation de soins et besoins, entre dépenses et financement et entre dépenses de santé et valeur collectivement accordée à la santé.",
"Le cours oppose renoncement aux soins et surconsommation, tous deux problématiques."
],
"Ressources limitées":[
"Chaque euro dépensé ici ne peut plus être dépensé ailleurs : c’est la logique du coût d’opportunité.",
"Les arbitrages concernent aussi d’autres politiques publiques : éducation, environnement, pauvreté, dépendance, etc."
],
"Rôle de l’économiste":[
"Définir le contenu pertinent du panier remboursable et comprendre les comportements des acteurs afin de favoriser l’efficience.",
"Le support cite les analyses coût/efficacité et coût/bénéfice parmi les outils d’aide au choix."
]
},[
["Que signifie réguler un système de santé ?","Rechercher une adéquation entre besoins, consommation, dépenses, financement et priorités collectives."],
["Pourquoi le renoncement aux soins est-il un problème ?","Il peut générer ou renforcer des inégalités de santé."],
["Pourquoi la surconsommation est-elle un problème ?","Elle peut être source d’inefficience."],
["Qu’est-ce que le coût d’opportunité ?","Le sacrifice lié au fait qu’une ressource utilisée ici ne peut plus l’être ailleurs."],
["Pourquoi l’économiste s’intéresse-t-il au panier remboursable ?","Pour aider à prioriser les soins financés par des ressources collectives limitées."],
["Quels autres secteurs entrent en concurrence pour les ressources publiques ?","Par exemple éducation, environnement, lutte contre la pauvreté ou dépendance."],
["Quel est un objectif de la régulation financière ?","Éviter l’accumulation de déficits et répartir justement les contributions."],
["Quel type d’analyse compare coût et résultat sanitaire ?","L’analyse coût/efficacité."],
["Quel autre outil économique est cité ?","L’analyse coût/bénéfice."],
["Pourquoi les progrès techniques posent-ils un enjeu économique ?","Ils apportent de nouvelles réponses souvent coûteuses alors que les ressources restent limitées."]
],{
title:"Faire un arbitrage",
context:"Une agence doit choisir entre financer deux programmes de santé utiles avec un budget qui ne permet pas de financer intégralement les deux.",
clues:["Budget limité","Deux bénéfices attendus","Choix collectif","Autres usages possibles"],
question:"Quel concept du cours décrit le mieux le fait que l’argent investi dans un programme ne peut plus l’être dans l’autre ?",
options:["Le coût d’opportunité","L’incidence cumulée","Le biais de mémorisation","La prévention tertiaire"],
ok:0,why:"Le cours définit précisément cette logique : toute ressource consacrée à une option est indisponible pour une autre.",
debrief:"L’économie de la santé n’affirme pas que la santé vaut moins ; elle rend visibles les arbitrages imposés par des ressources limitées."
}),

mod("ville","Pratiques efficientes en ville","Économie & système",C.eco,
"Modes de rémunération, paiement à l’acte, demande induite, salariat, ROSP et coordination.",
"Régulation du système de santé — partie 2 — C. Thébaut",
{
"Paiement à l’acte":[
"Le paiement à l’acte incite à produire davantage d’actes et peut accroître les dépenses.",
"Dans le support, le niveau de dépense est difficile à maîtriser ex ante avec ce mode."
],
"Demande induite":[
"La demande induite correspond à une influence du professionnel sur la demande de soins dans un sens différent de l’intérêt maximal du patient tel qu’il l’identifie.",
"Le cours souligne qu’elle est difficile à quantifier."
],
"Autres modes":[
"Le salariat verse un revenu fixe lié au temps de travail plutôt qu’au volume d’actes et permet davantage de maîtrise ex ante des dépenses.",
"La ROSP associe une part de rémunération à des indicateurs d’organisation et de qualité de pratique.",
"La réforme du médecin traitant vise aussi la coordination du parcours."
]
},[
["Quel effet le paiement à l’acte peut-il avoir sur le volume d’activité ?","Il peut inciter à augmenter le nombre d’actes."],
["Pourquoi est-il qualifié d’inflationniste dans le support ?","Parce qu’il peut accroître le niveau de dépenses de santé."],
["Qu’est-ce que la demande induite ?","Une influence du professionnel sur la demande de soins au-delà de l’intérêt maximal du patient tel qu’il l’identifie."],
["La demande induite est-elle facile à mesurer ?","Non, le support souligne qu’elle est difficile à quantifier."],
["Comment le salariat rémunère-t-il principalement le médecin ?","Par un salaire fixe fondé sur un temps de travail défini."],
["Le volume d’actes modifie-t-il directement le salaire fixe ?","Non, pas en principe hors dispositifs spécifiques comme les heures supplémentaires."],
["Quel avantage de régulation est associé au salariat ?","Une meilleure maîtrise ex ante des dépenses."],
["Que signifie ROSP ?","Rémunération sur objectifs de santé publique."],
["Quels types d’indicateurs la ROSP utilise-t-elle ?","Des indicateurs d’organisation du cabinet et de qualité de la pratique."],
["Quel dispositif de 2004 vise à coordonner le suivi du patient ?","La réforme du médecin traitant."]
],{
title:"Incitation et mode de rémunération",
context:"Une tutelle observe une forte augmentation du nombre d’actes alors que les besoins estimés de la population évoluent peu.",
clues:["Rémunération par acte","Volume en hausse","Dépenses en hausse","Besoin stable"],
question:"Quel mécanisme du cours doit être discuté en priorité ?",
options:["L’incitation liée au paiement à l’acte","La prévention tertiaire","Le biais de classement","La définition beveridgienne de l’universalité"],
ok:0,why:"Le cours relie paiement à l’acte, incitation à produire davantage et risque d’inflation des dépenses.",
debrief:"Un mode de rémunération n’est pas neutre : il crée des incitations qui influencent les comportements."
}),

mod("hopital","Financement et efficience à l’hôpital","Économie & système",C.eco,
"Prix de journée, logique budgétaire et tarification à l’activité selon les supports.",
"Régulation du système de santé — partie 3 — C. Thébaut",
{
"Prix de journée":[
"Jusqu’en 1983 dans le support, l’hôpital reçoit un prix fixe par journée passée par le malade.",
"Ce mode incite à allonger les séjours et à multiplier les journées, ce qui favorise l’inflation des dépenses."
],
"T2A":[
"La tarification à l’activité est présentée à partir de 2004.",
"Le budget dépend de l’activité mesurée par groupes homogènes de malades (GHM) et du tarif associé."
],
"Compléments":[
"Le support cite des recettes complémentaires liées notamment aux missions d’intérêt général et d’aide à la contractualisation (MIGAC), dont les MERRI.",
"Certaines activités comme prévention, dépistage, SAMU, centres antipoison ou équipes mobiles sont citées parmi ces missions."
]
},[
["Comment fonctionnait le prix de journée présenté dans le cours ?","L’hôpital recevait un montant fixe par journée passée par le patient."],
["Quelle incitation crée le prix de journée ?","Allonger les séjours et augmenter le nombre de journées."],
["Quel risque économique en découle ?","Une inflation des dépenses."],
["À partir de quelle période le support présente-t-il la T2A ?","À partir de 2004."],
["Que signifie T2A ?","Tarification à l’activité."],
["Sur quoi repose la mesure de l’activité dans le support ?","Sur les groupes homogènes de malades (GHM)."],
["De quoi dépend le revenu T2A décrit ?","Du nombre de patients dans chaque GHM multiplié par le tarif correspondant."],
["Que signifie MIGAC ?","Missions d’intérêt général et d’aide à la contractualisation."],
["Que recouvre l’acronyme MERRI cité dans le cours ?","Missions d’enseignement, de recherche, de référence et d’innovation."],
["Pourquoi les modes de financement sont-ils des outils de régulation ?","Parce qu’ils créent des incitations sur l’activité, la durée de séjour et l’organisation des soins."]
],{
title:"Comprendre l’incitation hospitalière",
context:"Un établissement est rémunéré uniquement selon le nombre de journées d’hospitalisation réalisées.",
clues:["Paiement par journée","Coûts élevés au début du séjour","Durée modulable","Budget lié au nombre de journées"],
question:"Quelle conséquence le cours associe à ce financement ?",
options:["Une incitation à allonger les séjours","Une incitation systématique à raccourcir tous les séjours","Une absence totale d’effet sur l’activité","Un financement indépendant du nombre de journées"],
ok:0,why:"Le support sur le prix de journée explique que plus l’hôpital produit de journées, plus son budget augmente.",
debrief:"Toujours relier mode de financement et comportement attendu de l’organisation."
}),

mod("consommation","Consommations efficientes et assurance","Économie & système",C.eco,
"Asymétrie d’information, consommateur non-payeur, co-paiement, parcours et déremboursement.",
"Régulation du système de santé — partie 4 — C. Thébaut",
{
"Pourquoi réguler":[
"Le marché de la santé présente des dysfonctionnements : incertitude, forte asymétrie d’information et vulnérabilité du patient.",
"Le consommateur n’est pas toujours le payeur direct, ce qui peut générer des inefficiences."
],
"Mécanismes":[
"Le support cite l’aléa moral, la demande induite, les prix administrés et des choix collectifs difficiles.",
"Le parcours du médecin traitant est présenté comme un outil agissant sur l’accès et le remboursement."
],
"Participation financière":[
"Le co-paiement et les franchises sont présentés comme des outils de responsabilisation du patient.",
"Le cours mentionne également des vagues historiques de déremboursement de médicaments.",
"Les montants cités dans le support sont des exemples datés : ils doivent être distingués des règles actuelles."
]
},[
["Pourquoi le patient est-il décrit comme un consommateur vulnérable ?","Parce qu’il fait face à de fortes incertitudes et à une asymétrie d’information."],
["Qu’est-ce que l’asymétrie d’information ?","Une situation où les acteurs ne disposent pas du même niveau d’information, notamment patient et professionnel."],
["Pourquoi le fait que le consommateur ne soit pas toujours le payeur direct compte-t-il ?","Parce qu’il peut modifier les incitations à consommer des soins."],
["Quel phénomène d’inefficience est cité ?","L’aléa moral."],
["Quel autre phénomène est cité ?","La demande induite."],
["Quel dispositif organise le parcours de soins autour d’un médecin référent ?","Le médecin traitant."],
["Que cherchent à faire le co-paiement et les franchises dans le cours ?","Responsabiliser le patient dans la consommation de soins."],
["Que signifie déremboursement ?","Réduire ou supprimer la prise en charge par l’assurance maladie d’un produit ou service."],
["Les prix du secteur de la santé sont-ils tous librement déterminés dans le support ?","Non, le cours cite l’existence de prix administrés."],
["Pourquoi faut-il contextualiser les montants du cours ?","Parce qu’il s’agit d’exemples historiques qui peuvent ne plus correspondre aux règles actuelles."]
],{
title:"Pourquoi une régulation publique ?",
context:"Un patient doit choisir un traitement complexe sans pouvoir évaluer seul son efficacité, tandis qu’un tiers finance l’essentiel du coût.",
clues:["Incertitude","Asymétrie d’information","Tiers payeur","Décision complexe"],
question:"Quel raisonnement du cours justifie le mieux une régulation ?",
options:["Le marché de la santé présente des imperfections spécifiques","Le patient dispose toujours de toute l’information utile","Le prix suffit toujours à guider un choix optimal","Le financement par un tiers supprime tout risque d’inefficience"],
ok:0,why:"Le support de C. Thébaut présente précisément incertitude, asymétrie d’information et dissociation consommateur/payeur comme justifications de régulation.",
debrief:"En économie de la santé, l’organisation du marché et de l’assurance modifie les comportements de consommation."
}),

mod("reformes","LFSS, ONDAM et réformes françaises","Économie & système",C.eco,
"Maîtrise des dépenses, leviers sur l’offre, la demande et le financement, et repères historiques.",
"Régulation du système de santé — partie 5 — C. Thébaut",
{
"Options de régulation":[
"Le support distingue des leviers portant sur l’offre, la demande et le financement.",
"Exemples : prix et rémunérations, modes de rémunération, accès et co-paiement, couverture d’assurance et cotisations."
],
"LFSS & ONDAM":[
"La loi de financement de la Sécurité sociale (LFSS) est issue de la révision constitutionnelle de 1996 et donne au Parlement un rôle dans l’équilibre financier de la Sécurité sociale.",
"L’ONDAM fixe chaque année un objectif de dépenses pour notamment les soins de ville, l’hospitalisation et le médico-social."
],
"Repères historiques":[
"Le support présente des réformes successives : évolution de la CSG, nouvelles formes de rémunération, T2A, médecin traitant, franchises médicales, maîtrise médicalisée, ambulatoire et mécanismes spécifiques de financement.",
"Ces éléments sont des repères historiques du cours."
]
},[
["Quels trois grands champs de régulation sont distingués ?","L’offre, la demande et le financement."],
["Que signifie LFSS ?","Loi de financement de la Sécurité sociale."],
["Quel est un objectif de la LFSS ?","Contribuer à maîtriser les dépenses sociales et de santé et à l’équilibre financier de la Sécurité sociale."],
["Qui vote la LFSS selon le support ?","Le Parlement."],
["Que signifie ONDAM ?","Objectif national de dépenses d’assurance maladie."],
["Quels secteurs sont cités dans l’ONDAM du support ?","Soins de ville, hospitalisation publique et privée, et médico-social."],
["À quelle fréquence l’ONDAM est-il fixé ?","Chaque année dans le cadre de la loi de financement de la Sécurité sociale."],
["Un levier sur l’offre peut-il porter sur le mode de rémunération ?","Oui, le support cite l’efficience des modes de rémunération."],
["Un levier sur la demande peut-il utiliser le co-paiement ?","Oui, il est cité parmi les options de régulation de la demande."],
["Pourquoi présenter les réformes par dates ?","Pour comprendre l’évolution historique des instruments de régulation en France."]
],{
title:"Quel outil pour encadrer les dépenses ?",
context:"Le Parlement examine chaque année un texte fixant des objectifs de dépenses sociales et de santé, dont un objectif spécifique pour l’assurance maladie.",
clues:["Vote annuel","Sécurité sociale","Objectif de dépenses","Parlement"],
question:"Quel couple de notions correspond le mieux ?",
options:["LFSS et ONDAM","RR et OR","SPST et IPRP","Bismarck et Beveridge"],
ok:0,why:"Le support rattache l’ONDAM à la LFSS, votée annuellement.",
debrief:"LFSS = cadre annuel de financement de la Sécurité sociale ; ONDAM = objectif de dépenses d’assurance maladie."
}),

mod("environnement","Santé environnementale","Environnement & santé",C.env,
"L’environnement comme cadre de vie et déterminant de santé, des pollutions aux perturbateurs endocriniens.",
"Santé environnementale : l’émergence d’un concept — J. Guihenneuc",
{
"Concept":[
"L’environnement ne se réduit pas à la nature ou à l’écologie : il inclut ce qui entoure l’individu, son cadre de vie et ses contextes climatiques, psychologiques, sociaux ou politiques.",
"Le cours retrace le passage d’une logique de domination de la nature à une logique de protection."
],
"Impacts humains":[
"La révolution industrielle s’accompagne d’une intensification des impacts humains : diminution des ressources, pollutions et catastrophes.",
"Le support oppose catastrophes visibles de grande ampleur et désastres plus silencieux."
],
"Santé":[
"La santé environnementale relie les expositions environnementales et leurs effets possibles sur la santé.",
"Les perturbateurs endocriniens sont utilisés comme exemple, avec notamment phtalates, pesticides, retardateurs de flamme, composés perfluorés, parabènes ou bisphénol A."
]
},[
["L’environnement se limite-t-il à la nature ?","Non, il comprend aussi le cadre de vie et les contextes sociaux, politiques, psychologiques et climatiques."],
["Quel changement majeur du XIXe siècle amplifie les impacts humains décrits ?","La révolution industrielle."],
["Quels impacts sont cités ?","Diminution des ressources et pollutions, entre autres."],
["Que montre l’histoire retracée par le cours ?","Un passage progressif d’une logique de domination vers une logique de protection de l’environnement."],
["Pourquoi les catastrophes ont-elles joué un rôle dans la prise de conscience ?","Elles ont rendu visibles certains impacts majeurs des activités humaines."],
["Que sont les désastres silencieux dans le raisonnement du cours ?","Des atteintes moins spectaculaires mais durables ou diffuses, notamment liées aux pollutions."],
["Quel exemple d’exposition est développé ?","Les perturbateurs endocriniens."],
["Citer un perturbateur endocrinien mentionné.","Les phtalates, par exemple."],
["Citer un autre exemple mentionné.","Le bisphénol A, les pesticides, les parabènes, les composés perfluorés ou certains retardateurs de flamme."],
["Pourquoi l’environnement est-il un déterminant de santé ?","Parce que les conditions et expositions du cadre de vie peuvent influencer l’état de santé."]
],{
title:"Penser au-delà du soin individuel",
context:"Un quartier présente des expositions répétées à plusieurs polluants et des difficultés sociales. L’équipe veut expliquer la santé des habitants uniquement par leurs comportements individuels.",
clues:["Polluants environnementaux","Cadre de vie","Facteurs sociaux","Expositions multiples"],
question:"Quelle correction conceptuelle est la plus cohérente avec le cours ?",
options:["Intégrer l’environnement au sens large parmi les déterminants de santé","Réduire l’analyse aux choix individuels","Considérer que seule la nature sauvage constitue l’environnement","Écarter les facteurs sociaux de la santé environnementale"],
ok:0,why:"Le cours définit l’environnement de façon large, incluant cadre de vie, voisinage et contextes sociaux, politiques, psychologiques et climatiques.",
debrief:"Santé environnementale = penser les expositions et contextes dans lesquels vivent les populations."
}),

mod("climat","Changement climatique, crises et développement durable","Environnement & santé",C.env,
"Effets sanitaires, adaptation, atténuation, résilience et développement durable.",
"Changement climatique + Crises et développement durable — J. Guihenneuc",
{
"Changement climatique":[
"Le support décrit une augmentation durable de la température moyenne, une élévation du niveau marin, une fonte des glaces, des changements de précipitations et des événements extrêmes plus intenses ou fréquents.",
"Le mécanisme principal présenté est l’intensification de l’effet de serre liée notamment au CO2, CH4 et N2O."
],
"Santé & établissements":[
"Les établissements peuvent subir des impacts directs (destruction, accès coupés, pannes) et indirects (augmentation des prises en charge, nouvelles maladies).",
"Ils contribuent aussi aux émissions et doivent développer atténuation, adaptation, résilience et pertinence des actes."
],
"Développement durable":[
"Le développement durable répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs.",
"Le cours associe responsabilité, participation, solidarité et principe de précaution et articule dimensions environnementale, économique et sociale.",
"Les crises peuvent être environnementales, climatiques, liées aux ressources, démographiques, alimentaires, sociales, économiques, financières ou sanitaires."
]
},[
["Comment le cours définit-il le changement climatique ?","Comme une augmentation durable de la température moyenne accompagnée de multiples modifications du système climatique."],
["Quel mécanisme explicatif principal est cité ?","L’intensification de l’effet de serre."],
["Quels gaz à effet de serre sont cités ?","Notamment CO2, CH4 et N2O."],
["Quel impact direct peut toucher un établissement de santé ?","Destruction, voie d’accès coupée ou panne, par exemple."],
["Quel impact indirect peut toucher un établissement ?","Une hausse des prises en charge ou l’apparition de nouvelles maladies."],
["Qu’est-ce que l’atténuation ?","Les actions visant à réduire les causes ou émissions contribuant au changement climatique."],
["Qu’est-ce que l’adaptation ?","Les actions visant à réduire la vulnérabilité face aux effets attendus ou observés."],
["Quelle définition du développement durable est reprise ?","Répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs."],
["Quels trois grands domaines sont articulés dans le développement durable ?","Environnement, économie et société."],
["Quelles valeurs sont citées ?","Responsabilité, participation, solidarité et principe de précaution."]
],{
title:"Hôpital face au climat",
context:"Un établissement est exposé aux canicules et aux inondations, connaît des pannes récurrentes et souhaite aussi réduire son empreinte environnementale.",
clues:["Risque climatique","Continuité des soins","Émissions","Infrastructure vulnérable"],
question:"Quelle stratégie correspond le mieux au cours ?",
options:["Associer adaptation, atténuation et résilience","Choisir uniquement des actions d’atténuation et ignorer les risques locaux","Attendre la prochaine crise avant d’analyser les vulnérabilités","Considérer que les établissements n’ont aucun impact environnemental"],
ok:0,why:"Le support relie les établissements de santé à la fois aux effets du changement climatique et à leurs propres émissions, d’où la combinaison adaptation/atténuation/résilience.",
debrief:"Un établissement durable doit à la fois réduire son impact et rester capable de fonctionner face aux crises."
})
];

const sources=[
"Organisation de la prévention en santé en France — introduction",
"Comparaison des systèmes de santé étrangers — C. Thébaut",
"Régulation du système de santé — partie 1 : introduction — C. Thébaut",
"Régulation du système de santé — partie 2 : pratiques efficientes en ville — C. Thébaut",
"Régulation du système de santé — partie 3 : pratiques efficientes à l’hôpital — C. Thébaut",
"Régulation du système de santé — partie 4 : consommations efficientes — C. Thébaut",
"Régulation du système de santé — partie 5 : réformes françaises — C. Thébaut",
"Épidémiologie explicative et outils en démographie 1 — A. Menudier",
"Épidémiologie explicative et outils en démographie 2 — A. Menudier",
"Épidémiologie explicative et outils en démographie 3 — A. Menudier",
"Prévention et santé au travail — L. Fernandes",
"Démarche et outils de santé publique — A. Menudier",
"Santé environnementale : l’émergence d’un concept — J. Guihenneuc",
"Changement climatique : effets sur la santé et leviers d’action — J. Guihenneuc",
"Crises et développement durable — J. Guihenneuc"
];

window.UE12_DATA={modules,sources};
})();