(function(){
  const d=window.IFSI_DATA;
  if(!d||!d.modules||!Array.isArray(d.flashcards)) return;
  const prompts={
    definition:"En une phrase, quelle idée-clé dois-tu retenir ?",
    mechanism:"Quel enchaînement physiopathologique dois-tu savoir expliquer ?",
    classification:"Quel classement permet de ne pas confondre les tableaux ?",
    risks:"Quel terrain ou contexte augmente surtout le risque ?",
    signs:"Quels éléments cliniques doivent immédiatement orienter ton évaluation ?",
    exams:"Quel bilan aide à confirmer le diagnostic ou mesurer la gravité ?",
    treatment:"Quelle logique thérapeutique faut-il connaître ?",
    prevention:"Quel levier de prévention est essentiel ?",
    nursing:"Quelle surveillance ou action IDE faut-il prioriser ?",
    alert:"Dans quelle situation faut-il alerter sans délai ?"
  };
  const base=d.flashcards.filter(c=>/-c(?:[0-9])$/.test(c.id));
  const extra=base.map(c=>{
    const m=c.id.match(/^(.*-c)(\d+)$/);
    const n=m?Number(m[2]):0;
    return {...c,id:(m?m[1]:"ue25-extra-c")+(n+10),front:prompts[c.key]||"Comment appliquer cette notion en situation clinique ?"};
  });
  d.flashcards=[...base,...extra];
})();