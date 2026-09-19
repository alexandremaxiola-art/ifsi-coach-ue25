(function(){
const M=(category,color,short,facts)=>({
 category,color,short,facts,alert:facts.alert,
 sections:{
  "À comprendre":[facts.definition,facts.mechanism,facts.classification],
  "Facteurs de risque":[facts.risks],
  "Signes cliniques":[facts.signs],
  "Examens clés":[facts.exams],
  "Prise en charge":[facts.treatment],
  "Rôle et surveillances IDE":[facts.nursing],
  "Complications et urgence":[facts.complications,facts.alert]
 }
});
const modules={
"Insuffisance coronaire":M("Cardio-coronaire","#35c9c1","Déséquilibre apports–besoins du myocarde et angor stable.",{
 definition:"L’insuffisance coronaire correspond à une perfusion myocardique insuffisante par rapport aux besoins en oxygène, le plus souvent sur athérosclérose coronaire.",
 mechanism:"La sténose fixe réduit la réserve coronaire : à l’effort, les besoins augmentent, l’ischémie apparaît puis régresse habituellement au repos.",
 classification:"L’angor stable est reproductible à l’effort et calmé par le repos ou la trinitrine ; une douleur nouvelle, croissante ou de repos fait craindre un syndrome coronarien aigu.",
 risks:"Tabac, HTA, dyslipidémie, diabète, âge, antécédents familiaux, sédentarité, surpoids et maladie rénale sont les principaux facteurs à rechercher.",
 signs:"Douleur rétrosternale constrictive, déclenchée par l’effort, irradiant parfois vers bras, mâchoire ou dos, avec dyspnée, sueurs ou nausées possibles.",
 exams:"ECG de repos, imagerie ou épreuve fonctionnelle selon le contexte, bilan des facteurs de risque, échocardiographie et coronarographie si indiquée.",
 treatment:"Correction des facteurs de risque, antiangineux, antiagrégant et statine selon prescription ; revascularisation si les symptômes ou l’anatomie le justifient.",
 nursing:"Évaluer la douleur par PQRST, relever TA/FC/SpO₂, vérifier l’effet et la tolérance des traitements, rechercher l’insuffisance cardiaque et renforcer l’éducation.",
 complications:"Rupture de plaque avec SCA, troubles du rythme, insuffisance ventriculaire gauche et mort subite.",
 alert:"Douleur au repos, prolongée, inhabituelle ou non calmée, malaise, dyspnée aiguë ou instabilité hémodynamique : urgence coronarienne."
}),
"Syndrome coronarien aigu":M("Cardio-coronaire","#ff6b67","Occlusion coronaire aiguë, ECG, troponines et reperfusion.",{
 definition:"Le SCA regroupe STEMI et SCA sans sus-décalage du ST, provoqués le plus souvent par rupture ou érosion de plaque avec thrombose coronaire.",
 mechanism:"La thrombose réduit brutalement le débit : ischémie puis nécrose si l’occlusion persiste ; l’étendue de l’infarctus et le délai de reperfusion conditionnent le pronostic.",
 classification:"STEMI : sus-décalage persistant ou équivalent avec reperfusion urgente ; NSTEMI : troponine élevée sans sus-décalage persistant ; angor instable : sans nécrose détectable.",
 risks:"Terrain athéromateux, antécédent coronaire, diabète, insuffisance rénale et retard de prise en charge augmentent le risque de complication.",
 signs:"Douleur thoracique prolongée, souvent au repos, sueurs, nausées, dyspnée ou malaise ; des formes atypiques existent chez femme, sujet âgé ou diabétique.",
 exams:"ECG 12 dérivations très précoce et répété, troponines ultrasensibles cinétiques, glycémie, NFS, ions, rein, coagulation et échocardiographie selon la situation.",
 treatment:"Filière urgente, antiagrégation et anticoagulation selon protocole, antalgiques, oxygène si hypoxémie, angioplastie primaire ou fibrinolyse pour situations sélectionnées.",
 nursing:"Repos, monitorage, VVP, ECG, prélèvements, horaires précis, préparation à la coronarographie ; surveiller rythme, douleur, TA, SpO₂, diurèse, OAP, choc et saignements.",
 complications:"FV/TV, bradyarythmie, OAP, choc cardiogénique, récidive ischémique, complications mécaniques et hémorragiques.",
 alert:"Toute douleur compatible associée à sueurs, dyspnée, syncope, anomalie ECG ou instabilité impose une prise en charge immédiate."
}),
"Prévention cardiovasculaire":M("Prévention","#a7df63","Réduire les facteurs modifiables avant et après l’événement.",{
 definition:"La prévention primaire évite le premier événement, la secondaire prévient la récidive et la tertiaire réduit séquelles, incapacité et complications.",
 mechanism:"La réduction durable du tabagisme, de la pression artérielle, du LDL, du déséquilibre glycémique et de l’inactivité diminue le risque athérothrombotique global.",
 classification:"Prévention individuelle et collective se complètent : dépistage, éducation, environnement favorable, traitements et suivi coordonné.",
 risks:"Tabac, HTA, dyslipidémie, diabète, obésité abdominale, sédentarité, alimentation défavorable, alcool à risque et stress chronique sont ciblés selon le risque global.",
 signs:"L’absence de symptôme ne signifie pas l’absence de risque : beaucoup de facteurs évoluent silencieusement et nécessitent mesure et dépistage.",
 exams:"TA, IMC/tour de taille, bilan lipidique, glycémie ou HbA1c, fonction rénale et estimation du risque cardiovasculaire selon âge et antécédents.",
 treatment:"Mesures hygiénodiététiques personnalisées, sevrage tabagique et traitements antihypertenseurs, hypolipémiants ou antidiabétiques selon indication.",
 nursing:"Repérer, mesurer, expliquer, négocier un objectif SMART, orienter, soutenir l’autonomie et réévaluer sans jugement, en tenant compte des ressources et obstacles.",
 complications:"Une adhésion insuffisante augmente récidive d’IDM/AVC, progression de l’AOMI, insuffisance cardiaque et mortalité.",
 alert:"Après un événement, l’arrêt non encadré d’un antiagrégant, anticoagulant ou traitement majeur doit être rapidement signalé au prescripteur."
}),
"AOMI":M("Artériel périphérique","#f0a34a","Claudication, IPS et ischémie aiguë ou chronique.",{
 definition:"L’artériopathie oblitérante des membres inférieurs est une obstruction artérielle réduisant la perfusion des membres, le plus souvent athéroscléreuse.",
 mechanism:"La sténose limite d’abord le débit à l’effort puis au repos ; l’occlusion aiguë supprime brutalement la perfusion et menace la viabilité du membre.",
 classification:"Fontaine : I asymptomatique, II claudication, III douleur de décubitus, IV trouble trophique ; l’ischémie aiguë se repère par les signes des 6 P.",
 risks:"Tabac et diabète sont majeurs ; s’ajoutent âge, HTA, dyslipidémie, maladie rénale et autres localisations athéromateuses.",
 signs:"Claudication reproductible, froideur, pâleur, pouls diminués, retard de recoloration, douleur de repos, ulcère ou nécrose.",
 exams:"IPS au repos ≤ 0,90 en faveur d’AOMI, écho-Doppler en première intention, angio-TDM/IRM ou artériographie pour cartographie selon le projet.",
 treatment:"Sevrage tabagique, marche structurée, statine et antiagrégant selon prescription, soins du pied, angioplastie/stent ou chirurgie si indication.",
 nursing:"Comparer les membres : douleur, couleur, chaleur, sensibilité, motricité, pouls, recoloration et peau ; après revascularisation surveiller aussi le point d’accès.",
 complications:"Ischémie chronique menaçant le membre, ulcère, infection, gangrène, amputation ; risque systémique élevé d’IDM et d’AVC.",
 alert:"Douleur brutale, pâleur/froideur, abolition des pouls, paresthésie ou paralysie : ischémie aiguë, urgence vasculaire."
}),
"AVC et AIT":M("Neurovasculaire","#7787ff","FAST, imagerie urgente, reperfusion et prévention des complications.",{
 definition:"L’AVC est un déficit neurologique brutal d’origine vasculaire, ischémique ou hémorragique ; l’AIT régresse mais annonce un risque précoce d’AVC.",
 mechanism:"Ischémie : artère occluse avec pénombre récupérable autour du cœur infarci ; hémorragie : rupture vasculaire avec effet de masse et hypertension intracrânienne possibles.",
 classification:"AVC ischémique, hémorragie intracérébrale, hémorragie sous-arachnoïdienne et AIT ; seule l’imagerie cérébrale les distingue avec certitude.",
 risks:"HTA, fibrillation atriale, athérosclérose, tabac, diabète, dyslipidémie, âge et apnée du sommeil ; anticoagulation et angiopathie amyloïde favorisent certaines hémorragies.",
 signs:"Asymétrie faciale, faiblesse d’un bras, trouble de parole, déficit brutal, trouble visuel ou de l’équilibre, céphalée inhabituelle ou altération de conscience.",
 exams:"Scanner cérébral sans injection en urgence ± angio-TDM/perfusion, IRM selon disponibilité ; glycémie immédiate, ECG, biologie et bilan étiologique.",
 treatment:"Filière neurovasculaire, thrombolyse IV et/ou thrombectomie pour patients sélectionnés ; contrôle spécialisé de la PA et traitement de l’hémorragie selon cause.",
 nursing:"Noter début ou dernière fois vu normal, glycémie, constantes, VVP ; jeûne avant test de déglutition, surveillance neurologique, prévention inhalation/TVP/escarres et rééducation précoce.",
 complications:"Œdème cérébral, transformation hémorragique, pneumopathie d’inhalation, TVP/EP, escarres, dénutrition, rétention, chutes, dépression et handicap.",
 alert:"Tout déficit neurologique brutal, même transitoire, nécessite l’appel immédiat au 15/112 : ne jamais attendre l’amélioration."
}),
"MTEV et TVP":M("Veineux","#b666dc","Triade de Virchow, probabilité clinique et anticoagulation.",{
 definition:"La maladie thromboembolique veineuse associe thrombose veineuse profonde et embolie pulmonaire ; le thrombus se forme surtout dans les veines profondes des membres inférieurs.",
 mechanism:"Triade de Virchow : stase veineuse, lésion endothéliale et hypercoagulabilité ; un fragment peut migrer vers les artères pulmonaires.",
 classification:"TVP proximale ou distale, provoquée par facteur transitoire ou non provoquée ; la thrombose veineuse superficielle est distincte mais parfois associée.",
 risks:"Chirurgie/traumatisme, immobilisation, cancer, grossesse/post-partum, estrogènes, antécédent MTEV, thrombophilie, âge et insuffisance cardiaque.",
 signs:"Douleur, œdème unilatéral, chaleur, augmentation du périmètre du mollet et dilatation veineuse ; aucun signe isolé n’est suffisamment spécifique.",
 exams:"Probabilité clinique structurée, D-dimères si probabilité faible ou intermédiaire et écho-Doppler veineux de compression pour confirmer.",
 treatment:"Anticoagulation curative selon le contexte, compression si indiquée, mobilisation encadrée ; durée adaptée au facteur déclenchant et au risque hémorragique.",
 nursing:"Comparer les membres et mesurer au même repère, ne pas masser, surveiller l’EP et les saignements ; vérifier molécule, dose, poids, rein, horaires et interactions.",
 complications:"EP, récidive, syndrome post-thrombotique, insuffisance veineuse chronique et hémorragie liée au traitement.",
 alert:"Dyspnée, douleur thoracique, tachycardie, syncope ou désaturation chez un patient avec TVP : suspecter une EP et alerter immédiatement."
}),
"Embolie pulmonaire":M("Veineux","#ef6ba9","Probabilité, angio-TDM, gravité et traitement anticoagulant.",{
 definition:"L’EP est l’obstruction d’une ou plusieurs artères pulmonaires, le plus souvent par un thrombus provenant d’une TVP.",
 mechanism:"L’obstruction augmente brutalement les résistances pulmonaires, surcharge le ventricule droit et crée un déséquilibre ventilation/perfusion responsable d’hypoxémie.",
 classification:"Haut risque en cas d’instabilité hémodynamique ; sinon stratification par clinique, biomarqueurs et retentissement du ventricule droit.",
 risks:"Chirurgie, immobilisation, cancer, estrogènes, grossesse/post-partum, antécédent de MTEV, thrombophilie et maladie aiguë.",
 signs:"Dyspnée brutale, douleur thoracique pleurale, tachypnée, tachycardie, désaturation, hémoptysie ou syncope ; la présentation est polymorphe.",
 exams:"Score de probabilité, D-dimères si appropriés, angio-TDM thoracique ; ECG, gaz du sang, troponine/BNP et échocardiographie évaluent le retentissement.",
 treatment:"Anticoagulation rapide si indiquée, oxygène et support ; thrombolyse ou stratégie interventionnelle/chirurgicale pour EP à haut risque selon protocole.",
 nursing:"ABCDE, repos, monitorage, VVP, prélèvements et préparation imagerie ; surveiller FR/SpO₂/TA/FC/conscience/diurèse et le risque hémorragique.",
 complications:"Choc obstructif, arrêt cardiaque, infarctus pulmonaire, récidive, hémorragie thérapeutique et hypertension pulmonaire thromboembolique chronique.",
 alert:"Hypotension, syncope, marbrures, confusion, douleur persistante ou aggravation de la dyspnée signalent une EP grave potentielle."
}),
"BPCO":M("Respiratoire","#43b8e8","Obstruction persistante, spirométrie et autogestion au long cours.",{
 definition:"La BPCO est une maladie respiratoire chronique avec symptômes persistants et obstruction bronchique non complètement réversible, confirmée par spirométrie.",
 mechanism:"Inflammation, hypersécrétion, remodelage des petites voies et emphysème limitent le débit expiratoire, entraînant piégeage gazeux et hyperinflation.",
 classification:"Le diagnostic repose sur VEMS/CVF post-bronchodilatateur < 0,70 ; symptômes et antécédents d’exacerbations guident ensuite l’évaluation clinique.",
 risks:"Tabagisme surtout, mais aussi expositions professionnelles, pollution, fumées de biomasse, facteurs précoces et déficit en alpha-1-antitrypsine.",
 signs:"Dyspnée progressive, toux chronique, expectoration, sifflements et limitation à l’effort ; thorax distendu et muscles accessoires aux stades avancés.",
 exams:"Spirométrie indispensable, oxymétrie, gaz du sang si gravité, radiographie/TDM selon indication, NFS et évaluations nutritionnelle et d’effort.",
 treatment:"Sevrage tabagique, bronchodilatateurs inhalés, réhabilitation, activité et vaccinations ; corticoïdes inhalés pour profils sélectionnés, oxygène longue durée si critères.",
 nursing:"Évaluer dyspnée, technique d’inhalation, observance, activité, nutrition, exacerbations et tabagisme ; enseigner respiration à lèvres pincées et plan d’action.",
 complications:"Exacerbations, insuffisance respiratoire chronique, dénutrition/sarcopénie, anxiété-dépression, cœur pulmonaire et pneumothorax.",
 alert:"Dyspnée inhabituelle, cyanose, confusion, épuisement, silence auscultatoire ou incapacité à parler imposent une évaluation urgente."
}),
"Exacerbation de BPCO":M("Respiratoire","#2286c9","Aggravation aiguë, gaz du sang, oxygène contrôlé et VNI.",{
 definition:"Une exacerbation est une aggravation aiguë de dyspnée et/ou toux-expectorations au-delà des variations habituelles, nécessitant une modification thérapeutique.",
 mechanism:"Infection ou irritant accentue inflammation, bronchospasme et sécrétions, augmente le travail respiratoire et peut provoquer hypoxémie puis hypercapnie avec acidose.",
 classification:"La gravité dépend de la dyspnée, des gaz du sang, de la conscience, de l’hémodynamique, des comorbidités et de la réponse initiale.",
 risks:"Antécédents d’exacerbations/hospitalisations, BPCO sévère, mauvaise technique inhalée, tabagisme, comorbidités et infections.",
 signs:"Dyspnée accrue, tachypnée, expiration prolongée, sibilants, expectoration augmentée ou purulente, tirage, cyanose, confusion puis épuisement.",
 exams:"SpO₂, gaz du sang artériel si forme sévère, radiographie thorax, ECG, biologie et microbiologie selon la présentation ; rechercher pneumonie, EP, OAP ou pneumothorax.",
 treatment:"Oxygène contrôlé, bronchodilatateurs courts, corticothérapie systémique courte et antibiotiques si indication ; VNI en acidose respiratoire sélectionnée.",
 nursing:"Position assise, rassurer, monitorer, administrer inhalations, titrer l’O₂ vers la cible prescrite, réévaluer ; sous VNI surveiller conscience, fuites, peau, sécrétions et gaz.",
 complications:"Acidose respiratoire, épuisement, coma hypercapnique, pneumonie, arythmie, intubation, séjour prolongé et récidive précoce.",
 alert:"Trouble de conscience, agitation puis somnolence, bradypnée, épuisement, instabilité ou pH qui baisse : urgence ventilatoire."
}),
"Rétrécissement aortique":M("Valvulaire","#f08a62","Obstacle valvulaire, hypertrophie du VG et triade symptomatique.",{
 definition:"Le rétrécissement aortique calcifié est un obstacle à l’éjection du ventricule gauche par réduction de l’orifice valvulaire aortique.",
 mechanism:"Le VG doit générer une pression élevée, s’hypertrophie puis peut se décompenser ; le débit devient insuffisant à l’effort et la perfusion coronaire se détériore.",
 classification:"La sévérité est intégrée à l’échographie : vitesse, gradient moyen, surface valvulaire, débit et fonction du VG ; attention aux formes bas débit-bas gradient.",
 risks:"Âge, valve bicuspide, maladie rénale, facteurs athéroscléreux et antécédents d’irradiation sont associés à la calcification.",
 signs:"Dyspnée, angor et syncope d’effort ; souffle systolique éjectionnel irradiant aux carotides, pouls petit et retardé.",
 exams:"Échocardiographie Doppler clé, ECG, bilan préintervention et TDM/coronarographie pour planifier TAVI ou chirurgie selon indication.",
 treatment:"Surveillance si asymptomatique selon gravité ; remplacement valvulaire chirurgical ou TAVI lorsque sévère et symptomatique ou selon critères spécialisés.",
 nursing:"Évaluer dyspnée, douleur, syncope, effort et signes d’insuffisance cardiaque ; après TAVI surveiller ECG/BAV, neurologie, ponction, pouls, rein et diurèse.",
 complications:"OAP, insuffisance cardiaque, arythmie, syncope, ischémie et mort subite ; après TAVI : trouble de conduction, saignement, AVC ou fuite.",
 alert:"Syncope, angor ou dyspnée récente avec RAC sévère impose une évaluation rapide ; hypotension et OAP sont des urgences."
}),
"Cathétérisme et TAVI":M("Interventionnel","#16a6a0","Sécuriser coronarographie, angioplastie et TAVI.",{
 definition:"Le cathétérisme cardiaque regroupe des procédures invasives diagnostiques ou thérapeutiques, dont coronarographie, angioplastie et TAVI.",
 mechanism:"Un cathéter atteint cœur ou coronaires sous imagerie ; accès vasculaire, contraste iodé, anticoagulation et dispositif implanté créent des risques spécifiques.",
 classification:"Coronarographie diagnostique, angioplastie avec ballon/stent, cathétérisme droit et implantation valvulaire percutanée TAVI.",
 risks:"Saignement, hématome, occlusion artérielle, allergie, atteinte rénale liée au contraste, arythmie, AVC, tamponnade ou infection selon procédure.",
 signs:"Après geste, rechercher douleur thoracique, malaise, dyspnée, saignement, hématome, froideur du membre, déficit neurologique ou trouble du rythme.",
 exams:"Identité, indication, consentement, ECG, NFS/plaquettes, coagulation, créatinine/DFG, groupage selon protocole et imagerie pré-TAVI.",
 treatment:"Asepsie, anesthésie locale ± sédation, anticoagulation/antiagrégation prescrite, dispositif de compression et hydratation adaptée.",
 nursing:"Check-list, allergies/traitements/jeûne/VVP, accueil et monitorage ; après geste : point d’accès, pouls, membre, TA/FC, douleur, ECG, neurologie et diurèse.",
 complications:"Hémorragie ou pseudo-anévrisme, ischémie du membre, IRA, réaction au contraste, dissection/perforation, arythmie, BAV post-TAVI et AVC.",
 alert:"Saignement actif, hématome expansif, hypotension, douleur thoracique, pouls distal absent, déficit neurologique ou BAV : alerte immédiate."
}),
"Occlusion intestinale":M("Digestif","#ff9c4a","Obstacle mécanique ou iléus, strangulation et péritonite.",{
 definition:"L’occlusion intestinale est un arrêt du transit des matières et des gaz par obstacle mécanique ou paralysie fonctionnelle de l’intestin.",
 mechanism:"L’accumulation en amont distend l’intestin et cause vomissements et pertes hydroélectrolytiques ; la strangulation compromet la vascularisation puis entraîne nécrose et perforation.",
 classification:"Mécanique : bride, hernie, tumeur, volvulus ou invagination ; fonctionnelle : iléus paralytique. Grêle et côlon ont des présentations différentes.",
 risks:"Chirurgie abdominale antérieure, hernie, cancer, maladie inflammatoire, troubles électrolytiques, médicaments ralentisseurs et contexte postopératoire.",
 signs:"Douleur, arrêt matières/gaz, vomissements, météorisme, bruits hydroaériques augmentés puis silence ; douleur continue et défense suggèrent une complication.",
 exams:"TDM abdomino-pelvienne selon indication pour siège, cause et gravité ; NFS, CRP, ions, rein, lactates, gaz du sang et groupage selon contexte.",
 treatment:"Jeûne, VVP, remplissage et correction ionique, sonde nasogastrique si prescrite, antalgiques/antiémétiques ; chirurgie si strangulation, perforation ou cause indiquée.",
 nursing:"Surveiller douleur, abdomen, transit, vomissements, constantes, diurèse, entrées-sorties et SNG ; soins de bouche, prévention inhalation et préparation opératoire.",
 complications:"Déshydratation, IRA, troubles ioniques, inhalation, ischémie/nécrose, perforation, péritonite, sepsis et choc.",
 alert:"Douleur continue intense, défense/contracture, fièvre, tachycardie, hypotension, lactates élevés ou dégradation évoquent strangulation ou péritonite."
}),
"Lithiase biliaire":M("Hépato-biliaire","#e2bd3f","Colique hépatique, cholécystite, angiocholite et CPRE.",{
 definition:"La lithiase biliaire correspond à des calculs vésiculaires ou de la voie biliaire principale, souvent cholestéroliques.",
 mechanism:"L’obstruction du canal cystique cause colique hépatique ou cholécystite ; celle de la voie biliaire principale provoque cholestase, angiocholite ou pancréatite.",
 classification:"Lithiase asymptomatique, colique hépatique, cholécystite aiguë, cholédocolithiase, angiocholite et pancréatite biliaire.",
 risks:"Âge, sexe féminin, obésité, amaigrissement rapide, grossesse, diabète, hémolyse et certaines maladies ou résections iléales.",
 signs:"Douleur HCD ou épigastre irradiant vers épaule/dos ; fièvre et Murphy pour cholécystite, ictère/cholurie et triade douleur-fièvre-ictère pour angiocholite.",
 exams:"Échographie en première intention ; NFS/CRP, bilirubine, PAL/GGT, transaminases et lipase ; bili-IRM ou échoendoscopie selon suspicion.",
 treatment:"Antalgie, jeûne et hydratation selon situation ; cholécystectomie pour formes indiquées ; CPRE pour obstacle de voie principale ou angiocholite selon urgence.",
 nursing:"Évaluer douleur, T°, ictère, vomissements, sepsis et bilans ; préparer échographie/CPRE/bloc ; après geste surveiller pancréatite, saignement, perforation et drains.",
 complications:"Empyème, gangrène/perforation vésiculaire, abcès, angiocholite septique, pancréatite aiguë et péritonite biliaire.",
 alert:"Douleur biliaire avec fièvre/frissons et ictère évoque une angiocholite ; hypotension ou confusion = sepsis grave et drainage urgent."
}),
"Lithiase urinaire":M("Uro-néphrologique","#4eb5c7","Calcul, obstruction urétérale, douleur et risque infectieux.",{
 definition:"La lithiase urinaire est la formation de calculs dans les voies urinaires ; la colique néphrétique est la douleur aiguë due à une obstruction, souvent urétérale.",
 mechanism:"L’obstacle augmente la pression en amont, distend les cavités et provoque une douleur spasmodique ; l’infection sur obstacle menace rapidement le rein et la vie.",
 classification:"Calculs calciques majoritaires, acide urique, struvite infectieuse ou cystine ; colique simple ou compliquée selon fièvre, anurie, rein unique, grossesse ou douleur incontrôlée.",
 risks:"Faible diurèse, chaleur, excès de sel/protéines selon terrain, obésité, goutte, infections urinaires, anomalies anatomiques, médicaments et antécédents familiaux.",
 signs:"Douleur lombaire brutale irradiant vers aine/génitaux, agitation, nausées, vomissements et hématurie ; la fièvre n’appartient pas à la forme simple.",
 exams:"BU/ECBU si infection, créatinine et inflammation ; TDM sans injection souvent référence, échographie privilégiée dans certaines situations dont grossesse.",
 treatment:"AINS en première intention si absence de contre-indication, autres antalgiques/antiémétiques ; drainage urgent par sonde JJ ou néphrostomie si obstacle infecté ou anurie.",
 nursing:"Évaluer EVA, T°, diurèse, hématurie et nausées, réévaluer l’antalgie, filtrer les urines si prescrit et surveiller les effets indésirables.",
 complications:"Pyélonéphrite obstructive, sepsis/choc, IRA, anurie, rupture des voies excrétrices, récidive et altération rénale.",
 alert:"Fièvre ou frissons, anurie, rein unique, grossesse, insuffisance rénale, douleur incontrôlée ou instabilité = colique néphrétique compliquée."
})
};

const cardLabels=[
 ["Définis la notion essentielle.","definition"],["Explique le mécanisme obstructif.","mechanism"],
 ["Quels types ou stades faut-il distinguer ?","classification"],["Quels facteurs de risque retenir ?","risks"],
 ["Quels signes cliniques rechercher ?","signs"],["Quels examens orientent ou confirment ?","exams"],
 ["Quels sont les grands principes de traitement ?","treatment"],["Quel est le rôle IDE prioritaire ?","nursing"],
 ["Quelles complications faut-il anticiper ?","complications"],["Quel signal impose une alerte immédiate ?","alert"]
];
const flashcards=Object.entries(modules).flatMap(([topic,x],i)=>cardLabels.map(([front,key],j)=>({id:`ue28-m${i}-c${j}`,topic,front,back:x.facts[key],key})));
const C=(topic,title,patient,place,context,vitals,signs,question,options,ok,why,debrief)=>({
 id:`ue28-${topic.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-")}`,
 topic,category:modules[topic].category,title,patient,place,
 initials:patient.split(" ").filter(x=>/^[A-ZÉÈ]/.test(x)).map(x=>x[0]).slice(0,2).join(""),
 context,vitals,signs,question,options,ok,why,debrief
});
const cases=[
C("Insuffisance coronaire","L’angor change de profil","M. Laurent, 64 ans","Cardiologie · consultation","Angor d’effort connu. Depuis ce matin, douleur rétrosternale au repos durant 20 minutes, moins sensible à la trinitrine.",[["Douleur","6/10",1],["TA","148/86",0],["FC","92/min",0],["SpO₂","96 %",0]],["Sueurs","Nausées","Douleur au repos"],"Quelle priorité ?",["Rassurer et revoir dans un mois","Considérer un SCA et déclencher une évaluation urgente","Faire une épreuve d’effort immédiate","Conseiller seulement le repos"],1,"Une douleur nouvelle au repos rompt la stabilité de l’angor.",["Une plaque peut devenir instable et se thromboser.","Repos, ECG, constantes, voie veineuse et alerte selon protocole.","Douleur, ECG, TA, FC, SpO₂ et signes d’insuffisance cardiaque."]),
C("Syndrome coronarien aigu","Douleur avec sus-décalage","Mme Martin, 58 ans","Urgences · douleur depuis 45 min","Douleur constrictive irradiant au bras gauche avec sueurs. ECG : sus-décalage antérieur persistant.",[["Douleur","9/10",1],["TA","92/58",1],["FC","108/min",0],["SpO₂","93 %",0]],["Pâleur","Sueurs","Nausées"],"Quel objectif domine ?",["Attendre la seconde troponine","Organiser sans délai la stratégie de reperfusion","Faire marcher la patiente","Donner systématiquement de l’oxygène à haut débit"],1,"Un STEMI nécessite une filière de reperfusion urgente.",["Occlusion coronaire aiguë avec nécrose progressive.","Alerte interventionnelle, monitorage et traitements protocolisés.","Rythme, douleur, TA, choc/OAP et saignements."]),
C("Prévention cardiovasculaire","Antiagrégant arrêté","M. Bernard, 61 ans","Suivi post-infarctus · J30","Le patient a arrêté seul son antiagrégant pour quelques ecchymoses. Un stent a été posé il y a un mois.",[["TA","136/78",0],["FC","72/min",0],["SpO₂","98 %",0],["Douleur","0/10",0]],["Ecchymoses","Traitement interrompu","Stent récent"],"Quelle réponse est la plus sûre ?",["Valider l’arrêt définitif","Contacter rapidement le prescripteur et expliquer le risque","Remplacer par un AINS","Attendre une douleur"],1,"L’arrêt non encadré expose à la thrombose de stent.",["La prévention secondaire associe observance et gestion du risque hémorragique.","Évaluer le saignement, alerter et ne pas modifier seul la prescription.","Douleur thoracique, saignements et compréhension du patient."]),
C("AOMI","Jambe froide et sans pouls","Mme Garcia, 72 ans","Urgences · début 10 h 20","Douleur brutale de jambe droite avec engourdissement et impossibilité de bouger les orteils.",[["TA","158/88",0],["FC","104/min",0],["SpO₂","97 %",0],["TRC pied","Absent",1]],["Pâleur","Froideur","Pouls absent"],"Quelle situation suspecter ?",["Claudication stable","Ischémie aiguë de membre","Insuffisance veineuse","Crise de goutte"],1,"Douleur, pâleur, froideur, pouls absent et déficit évoquent les 6 P.",["Occlusion artérielle menaçant le membre.","Noter l’heure, repos et alerte vasculaire immédiate.","Douleur, couleur, chaleur, pouls, motricité et sensibilité."]),
C("AVC et AIT","Aphasie au petit déjeuner","M. Durand, 69 ans","Urgences · dernière fois normal 07 h 40","À 08 h 05 : bouche déviée, bras droit faible et mots incompréhensibles.",[["Glycémie","1,18 g/L",0],["TA","176/94",0],["FC","96/min",0],["SpO₂","95 %",0]],["Aphasie","Déficit droit","Début brutal"],"Quel recueil est prioritaire ?",["Le dernier repas","L’heure de début ou dernière fois vu normal","Le poids ancien","Le nombre de cafés"],1,"La chronologie précise conditionne notamment la stratégie de reperfusion.",["Artère cérébrale occluse avec pénombre potentielle.","Filière AVC, glycémie, imagerie et recueil des anticoagulants.","Neurologie, conscience, TA, SpO₂ et déglutition."]),
C("MTEV et TVP","Mollet augmenté de volume","Mme Roux, 46 ans","Orthopédie · J5 après chirurgie","Douleur du mollet gauche avec œdème unilatéral malgré la prophylaxie.",[["Mollet G","+4 cm",1],["T°","37,6 °C",0],["FC","88/min",0],["SpO₂","98 %",0]],["Œdème","Chaleur","Douleur"],"Quel examen confirme le plus souvent ?",["Radiographie","Écho-Doppler veineux de compression","ECG seul","Spirométrie"],1,"La clinique estime la probabilité ; l’écho-Doppler confirme.",["Stase postopératoire et hypercoagulabilité favorisent le thrombus.","Alerter, ne pas masser et organiser l’examen.","Douleur, périmètre, signes d’EP et saignements."]),
C("Embolie pulmonaire","Syncope et hypotension","M. Petit, 55 ans","Urgences · J10 après fracture","Dyspnée brutale puis syncope. Le patient est marbré et confus.",[["TA","76/44",1],["FC","132/min",1],["SpO₂","84 %",1],["FR","34/min",1]],["Marbrures","Turgescence jugulaire","Confusion"],"Quelle classification domine ?",["EP faible risque","EP à haut risque avec instabilité","BPCO stable","TVP distale isolée"],1,"Le choc ou l’hypotension persistante définit une EP à haut risque.",["Surcharge aiguë du VD et baisse du débit gauche.","ABCDE, appel urgent, support et reperfusion prescrite.","TA, rythme, conscience, SpO₂ et diurèse."]),
C("BPCO","Inhalateur inefficace","Mme Simon, 67 ans","Consultation IDE · état stable","Dyspnée croissante. La patiente déclenche son inhalateur après avoir inspiré et n’expire pas avant la prise.",[["SpO₂","93 %",0],["FR","20/min",0],["FC","82/min",0],["T°","36,8 °C",0]],["Mauvaise synchronisation","Toux chronique","Pas de fièvre"],"Quelle intervention est la plus pertinente ?",["Augmenter seule la dose","Faire démontrer puis corriger la technique","Arrêter le traitement","Donner un antibiotique"],1,"Une mauvaise technique peut expliquer un contrôle insuffisant.",["Le médicament doit atteindre les voies aériennes.","Démonstration, retour du patient et dispositif adapté.","Dyspnée, technique, observance et exacerbations."]),
C("Exacerbation de BPCO","Somnolence et acidose","M. Lopez, 74 ans","Urgences · exacerbation sévère","Le patient devient somnolent et respire superficiellement. GDS : pH 7,25 ; PaCO₂ 72 mmHg.",[["SpO₂","91 %",0],["FR","10/min",1],["FC","116/min",0],["GCS","12/15",1]],["Somnolence","Respiration superficielle","Acidose"],"Quelle priorité ?",["Retirer tout oxygène et attendre","Alerter et préparer VNI/ventilation selon décision","Faire boire","Le coucher à plat"],1,"Hypercapnie, acidémie et baisse de conscience signalent une défaillance ventilatoire.",["L’épuisement empêche d’éliminer le CO₂.","Alerte, monitorage, gazométrie et VNI si indiquée.","Conscience, FR, cible SpO₂, gaz, fuites et tolérance."]),
C("Rétrécissement aortique","Syncope à l’effort","Mme Moreau, 82 ans","Cardiologie · RAC sévère","Syncope en montant un escalier, précédée de dyspnée et d’oppression thoracique.",[["TA","98/62",1],["FC","88/min",0],["SpO₂","95 %",0],["Douleur","2/10",0]],["Souffle aortique","Dyspnée","Syncope"],"Que signifie cette triade ?",["Le RAC reste bénin","Le RAC est symptomatique : évaluation rapide","Il faut augmenter l’activité","C’est normal avec l’âge"],1,"Syncope, angor ou dyspnée modifient le pronostic du RAC sévère.",["L’obstacle fixe limite le débit à l’effort.","Repos, ECG/constantes et évaluation cardiologique.","Récidive, TA, douleur, dyspnée et rythme."]),
C("Cathétérisme et TAVI","Hématome fémoral expansif","M. Noel, 77 ans","USIC · 30 min après TAVI","Douleur inguinale et lombaire avec hématome qui augmente après voie fémorale.",[["TA","82/50",1],["FC","118/min",1],["SpO₂","96 %",0],["Hb","-2,4 g/dL",1]],["Pâleur","Hématome","Douleur lombaire"],"Quelle complication craindre ?",["Simple inconfort","Hémorragie d’accès ou rétropéritonéale","Exacerbation BPCO","Colique néphrétique"],1,"Hypotension, chute d’Hb, hématome et douleur lombaire évoquent une hémorragie grave.",["Les accès de gros calibre exposent au saignement profond.","Alerte, compression/protocole et préparation du traitement.","TA, FC, conscience, point d’accès, membre et Hb."]),
C("Occlusion intestinale","Douleur devenue continue","Mme Robert, 70 ans","Chirurgie · occlusion sur bride","Douleurs coliques devenues continues, défense, fièvre et tachycardie malgré aspiration gastrique.",[["T°","39,0 °C",1],["FC","126/min",1],["TA","88/54",1],["Lactates","4,8 mmol/L",1]],["Défense","Silence abdominal","Oligurie"],"Quelle complication suspecter ?",["Reprise du transit","Strangulation avec ischémie/péritonite","Constipation simple","Intolérance alimentaire"],1,"Douleur continue, défense et instabilité évoquent souffrance intestinale et sepsis.",["La strangulation compromet la vascularisation.","Alerte chirurgicale, jeûne et préparation au bloc.","Constantes, douleur, abdomen, diurèse, lactates et SNG."]),
C("Lithiase biliaire","Fièvre, ictère et hypotension","M. Cohen, 66 ans","Urgences · douleur HCD","Douleur HCD, frissons, ictère puis confusion. Voie biliaire principale dilatée.",[["T°","39,5 °C",1],["TA","78/46",1],["FC","128/min",1],["SpO₂","94 %",0]],["Ictère","Frissons","Confusion"],"Quelle urgence évoquer ?",["Colique simple","Angiocholite grave sur obstacle","Gastro-entérite","AOMI"],1,"Douleur-fièvre-ictère avec hypotension/confusion évoque une angiocholite septique.",["La bile infectée sous pression doit être drainée.","Alerte sepsis, antibiotiques prescrits et drainage urgent.","Hémodynamique, conscience, diurèse, T° et douleur."]),
C("Lithiase urinaire","Fièvre sur obstacle","Mme Diallo, 39 ans","Urgences · colique néphrétique","Douleur lombaire, frissons et anurie depuis 6 h. TDM : calcul urétéral obstructif.",[["T°","39,2 °C",1],["TA","90/58",1],["FC","122/min",1],["Diurèse","0 mL",1]],["Frissons","Douleur lombaire","Anurie"],"Quelle priorité thérapeutique ?",["Boire trois litres","Drainage urgent et antibiothérapie prescrite","Retour avec chaleur","Attendre l’expulsion"],1,"Obstacle infecté et anurie exposent au choc septique et à l’IRA.",["L’infection ne se contrôle pas sans dériver les urines.","Alerte urologique, prélèvements, antibiothérapie et préparation JJ/néphrostomie.","TA, FC, T°, conscience, douleur, diurèse et créatinine."])
];
window.IFSI_DATA={modules,cases,flashcards};
})();
