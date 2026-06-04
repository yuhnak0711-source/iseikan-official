
const h=document.getElementById('hosts');
if(h){h.innerHTML=CASTS.map(x=>x.name).join('<br>');}
const c=document.getElementById('castContainer');
if(c){c.innerHTML=CASTS.map(x=>`<div class="cast"><img src="${x.image}" class="cast-image"><h2>${x.name}</h2><h3>${x.species}</h3><p>${x.desc}</p>
</div>`).join('');}
