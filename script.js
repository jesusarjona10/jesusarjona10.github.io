var PHONE='34958000123',MAIL='info@aurum.example',ENV=5.9,FREE=150;
var I={gpu:'<svg viewBox="0 0 220 90" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="4" y="14" width="212" height="62" rx="8"/><circle cx="62" cy="45" r="24"/><circle cx="148" cy="45" r="24"/><circle cx="62" cy="45" r="5"/><circle cx="148" cy="45" r="5"/></svg>',
board:'<svg viewBox="0 0 160 160" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="6" y="6" width="148" height="148" rx="6"/><rect x="40" y="36" width="42" height="42"/><path d="M104 28v60M114 28v60M124 28v60M134 28v60" stroke-width="3"/><rect x="24" y="108" width="112" height="10"/><rect x="24" y="126" width="112" height="10"/></svg>',
phone:'<svg viewBox="0 0 90 170" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="8" y="4" width="74" height="162" rx="14"/><rect x="15" y="14" width="60" height="142" rx="8" stroke-width="1"/><rect x="34" y="20" width="22" height="6" rx="3"/></svg>',
laptop:'<svg viewBox="0 0 200 130" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="30" y="10" width="140" height="90" rx="6"/><path d="M6 108h188l-10 14H16z"/></svg>',
pad:'<svg viewBox="0 0 200 110" fill="none" stroke="#f0c75e" stroke-width="2"><path d="M50 20h100c24 0 40 50 32 72-6 14-22 10-30-4l-8-14H56l-8 14c-8 14-24 18-30 4-8-22 8-72 32-72z"/><path d="M60 50h24M72 38v24"/><circle cx="130" cy="44" r="5"/><circle cx="146" cy="56" r="5"/></svg>',
tower:'<svg viewBox="0 0 100 160" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="10" y="4" width="80" height="152" rx="8"/><circle cx="50" cy="52" r="22"/><circle cx="50" cy="52" r="4"/><circle cx="50" cy="110" r="22"/><path d="M26 140h48"/></svg>',
chip:'<svg viewBox="0 0 120 120" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="28" y="28" width="64" height="64" rx="6"/><rect x="44" y="44" width="32" height="32"/><path d="M42 12v16M60 12v16M78 12v16M42 92v16M60 92v16M78 92v16M12 42h16M12 60h16M12 78h16M92 42h16M92 60h16M92 78h16"/></svg>',
ram:'<svg viewBox="0 0 200 70" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="6" y="8" width="188" height="44" rx="4"/><rect x="24" y="20" width="22" height="20"/><rect x="62" y="20" width="22" height="20"/><rect x="100" y="20" width="22" height="20"/><rect x="138" y="20" width="22" height="20"/><path d="M12 52v10M30 52v10M48 52v10M66 52v10M84 52v10M102 52v10M120 52v10M138 52v10M156 52v10M174 52v10"/></svg>',
psu:'<svg viewBox="0 0 160 110" fill="none" stroke="#f0c75e" stroke-width="2"><rect x="8" y="10" width="144" height="90" rx="8"/><circle cx="62" cy="55" r="30"/><circle cx="62" cy="55" r="4"/><path d="M62 25v60M32 55h60M41 34l42 42M83 34 41 76" stroke-width="1"/><rect x="108" y="38" width="30" height="34" rx="3"/></svg>',
fan:'<svg viewBox="0 0 120 120" fill="none" stroke="#f0c75e" stroke-width="2"><circle cx="60" cy="60" r="52"/><circle cx="60" cy="60" r="8"/><path d="M60 52c-4-20 10-34 24-30M68 60c20-4 34 10 30 24M60 68c4 20-10 34-24 30M52 60c-20 4-34-10-30-24"/></svg>'};
var D=[
['GeForce RTX 5090','NVIDIA','Gráficas','gpu',2399,['32 GB GDDR7','575 W','4K Ultra']],
['GeForce RTX 5080','NVIDIA','Gráficas','gpu',1149,['16 GB GDDR7','360 W','4K']],
['GeForce RTX 5070 Ti','NVIDIA','Gráficas','gpu',839,['16 GB GDDR7','300 W','1440p / 4K']],
['GeForce RTX 5070','NVIDIA','Gráficas','gpu',589,['12 GB GDDR7','250 W','1440p']],
['Radeon RX 9070 XT','AMD','Gráficas','gpu',649,['16 GB GDDR6','304 W','FSR 4']],
['Radeon RX 9060 XT 16 GB','AMD','Gráficas','gpu',369,['16 GB GDDR6','RDNA 4','1440p']],
['Ryzen 7 9800X3D','AMD','Procesadores','chip',479,['8 núcleos','Socket AM5','120 W']],
['Ryzen 9 9950X','AMD','Procesadores','chip',549,['16 núcleos','Socket AM5','170 W']],
['Ryzen 5 9600X','AMD','Procesadores','chip',199,['6 núcleos','Socket AM5','65 W']],
['Core Ultra 7 265K','Intel','Procesadores','chip',389,['20 núcleos','LGA1851','Hasta 5,5 GHz']],
['MAG X870E Tomahawk WiFi','MSI','Placas base','board',319,['AM5','DDR5','Wi-Fi 7']],
['ROG Strix B850-F Gaming WiFi','ASUS','Placas base','board',259,['AM5','DDR5','PCIe 5.0']],
['Z890 Aorus Elite WiFi7','Gigabyte','Placas base','board',279,['LGA1851','DDR5','Wi-Fi 7']],
['SSD 990 Pro 2 TB','Samsung','Memoria y SSD','chip',189,['NVMe PCIe 4.0','7.450 MB/s','2 TB']],
['WD_BLACK SN850X 2 TB','Western Digital','Memoria y SSD','chip',169,['NVMe PCIe 4.0','7.300 MB/s','2 TB']],
['Vengeance DDR5 32 GB','Corsair','Memoria y SSD','ram',149,['2×16 GB','6000 MT/s','DDR5']],
['Trident Z5 RGB 32 GB','G.Skill','Memoria y SSD','ram',159,['2×16 GB','6000 MT/s','CL30']],
['RM850x 850 W','Corsair','Fuentes y cooling','psu',149,['80+ Gold','Modular','850 W']],
['NH-D15 G2','Noctua','Fuentes y cooling','fan',149,['Doble torre','Muy silencioso','AM5 / LGA1851']],
['Liquid Freezer III 360','Arctic','Fuentes y cooling','fan',99,['AIO 360 mm','3 ventiladores','AM5 / LGA1851']],
['PC Gaming 1440p','AURUM','PCs','tower',1699,['Ryzen 7 9800X3D','RX 9070 XT','32 GB DDR5']],
['PC Creator 4K','AURUM','PCs','tower',2999,['Ryzen 9 9950X','RTX 5080','64 GB DDR5']],
['MacBook Air 13″ M4','Apple','Portátiles','laptop',1199,['Chip M4','13,6″','16 GB']],
['ROG Zephyrus G14','ASUS','Portátiles','laptop',2099,['Ryzen AI 9 HX 370','RTX 5070 Ti','14″ OLED']],
['Galaxy S25 Ultra','Samsung','Móviles','phone',1459,['6,9″','Snapdragon 8 Elite','12 GB RAM']],
['iPhone 17 Pro','Apple','Móviles','phone',1219,['6,3″','Chip A19 Pro','256 GB']],
['Pixel 10 Pro','Google','Móviles','phone',1099,['6,3″','Tensor G5','16 GB RAM']],
['PlayStation 5 Pro','Sony','Consolas','pad',799,['2 TB SSD','Gaming 4K','Sin lector']],
['Nintendo Switch 2','Nintendo','Consolas','pad',469,['7,9″','256 GB','Modo portátil']],
['Steam Deck OLED','Valve','Consolas','pad',569,['7,4″ OLED','512 GB','HDR']],
['Xbox Series X','Microsoft','Consolas','pad',499,['1 TB SSD','Gaming 4K','Lector 4K UHD']]
].map(function(a){return{n:a[0],b:a[1],c:a[2],i:a[3],p:a[4],m:a[5]}});
var $=function(s){return document.querySelector(s)},cart={},cur='Todo',cats=['Todo'];
D.forEach(function(p){if(cats.indexOf(p.c)<0)cats.push(p.c)});
try{cart=JSON.parse(localStorage.getItem('aurum-cart')||'{}')}catch(e){cart={}}
function save(){try{localStorage.setItem('aurum-cart',JSON.stringify(cart))}catch(e){}}
function eur(n){return n.toLocaleString('es-ES',{style:'currency',currency:'EUR'})}
function keys(){return Object.keys(cart).filter(function(k){return D[k]&&cart[k]>0})}
function sub(){return keys().reduce(function(t,k){return t+D[k].p*cart[k]},0)}
function draw(){$('#tabs').innerHTML=cats.map(function(c){return '<button type="button" aria-pressed="'+(c==cur)+'" data-c="'+c+'">'+c+'</button>'}).join('');
$('#grid').innerHTML=D.map(function(p,k){return cur=='Todo'||p.c==cur?'<article class="card"><span class="tag">'+p.c+' · '+p.b+'</span><div class="holo" aria-hidden="true">'+I[p.i]+'</div><h3>'+p.n+'</h3><div class="met">'+p.m.map(function(m){return '<span>'+m+'</span>'}).join('')+'</div><div class="row" style="margin-top:auto;justify-content:space-between;align-items:center"><span class="pr">'+eur(p.p)+'</span></div><button class="btn" type="button" data-a="'+k+'">Añadir al carrito</button></article>':''}).join('')}
function sync(){save();var ks=keys();$('#cc').textContent=ks.reduce(function(t,k){return t+cart[k]},0);
$('#cl').innerHTML=ks.map(function(k){return '<li><div><b>'+D[k].n+'</b><br><small style="color:var(--mut)">'+eur(D[k].p)+' · '+D[k].b+'</small></div><div class="q"><button data-q="-1" data-k="'+k+'" aria-label="Menos">−</button><span>'+cart[k]+'</span><button data-q="1" data-k="'+k+'" aria-label="Más">+</button><button class="x" data-r="'+k+'" aria-label="Quitar">✕</button></div></li>'}).join('');
$('#ce').style.display=ks.length?'none':'block';$('#sub').innerHTML='<span>Subtotal</span><span>'+eur(sub())+'</span>';$('#ck').disabled=!ks.length;$('#ck').style.opacity=ks.length?1:.4}
function tot(){var f=$('#fm'),d=f?f.elements.dl.value:'envio',s=sub(),sh=d=='tienda'||s>=FREE?0:ENV,t=s+sh;return{s:s,sh:sh,t:t,iva:t-t/1.21}}
function summ(){var o=tot();$('#sm').innerHTML=keys().map(function(k){return '<div class="tl"><span>'+cart[k]+'× '+D[k].n+'</span><span>'+eur(D[k].p*cart[k])+'</span></div>'}).join('')+'<div class="tl"><span>Subtotal</span><span>'+eur(o.s)+'</span></div><div class="tl"><span>Envío</span><span>'+(o.sh?eur(o.sh):'Gratis')+'</span></div><div class="tl"><span>IVA incluido (21 %)</span><span>'+eur(o.iva)+'</span></div><div class="tl t"><span>Total</span><span>'+eur(o.t)+'</span></div>'}
function opt(n,v,l,c){return '<label class="opt"><input type="radio" name="'+n+'" value="'+v+'"'+(c?' checked':'')+'>'+l+'</label>'}
function openCo(){$('#drawer').classList.remove('open');$('#cob').innerHTML='<form id="fm"><h3 class="gold" style="margin-bottom:6px">Finalizar compra</h3><label for="a1">Nombre completo</label><input id="a1" required autocomplete="name"><label for="a2">Correo</label><input id="a2" type="email" required autocomplete="email"><label for="a3">Teléfono</label><input id="a3" type="tel" required autocomplete="tel"><div id="adr"><label for="a4">Dirección de envío</label><input id="a4" required autocomplete="street-address"><div class="row"><div><label for="a5">Código postal</label><input id="a5" inputmode="numeric" required></div><div><label for="a6">Ciudad</label><input id="a6" required value="Granada"></div></div></div><label>Entrega</label>'+opt('dl','envio','Envío a domicilio (5,90 €, gratis desde 150 €)',1)+opt('dl','tienda','Recogida en tienda · Calle Recogidas 25, Granada · Gratis')+'<label>Método de pago</label>'+opt('pg','tarjeta','Tarjeta',1)+opt('pg','bizum','Bizum')+opt('pg','transf','Transferencia bancaria')+opt('pg','tienda','Pagar en tienda')+'<p style="font-size:12px;color:var(--mut)">Demostración: no se realiza ningún cobro real y no se guardan datos.</p><div class="cta"><button class="btn fill" type="submit">Confirmar pedido</button><button class="btn" type="button" id="xco">Volver</button></div></form><div><h3 style="margin-bottom:12px">Resumen</h3><div id="sm"></div></div>';summ();$('#co').classList.add('open')}
document.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;var k=t.dataset.k;
if(t.dataset.c){cur=t.dataset.c;draw()}
if(t.dataset.a){cart[t.dataset.a]=(cart[t.dataset.a]||0)+1;sync();$('#drawer').classList.add('open')}
if(t.dataset.q){cart[k]=Math.max(0,(cart[k]||0)+ +t.dataset.q);sync()}
if(t.dataset.r){delete cart[t.dataset.r];sync()}
if(t.id=='cb')$('#drawer').classList.add('open');if(t.id=='cx')$('#drawer').classList.remove('open');
if(t.id=='ck'&&keys().length)openCo();if(t.id=='xco'||t.id=='fin')$('#co').classList.remove('open')});
document.addEventListener('change',function(e){if(e.target.name=='dl'){$('#adr').style.display=e.target.value=='tienda'?'none':'block';$('#a4').required=$('#a5').required=e.target.value!='tienda';summ()}});
document.addEventListener('submit',function(e){if(e.target.id!='fm')return;e.preventDefault();var o=tot(),n='AU-'+Math.floor(1000+Math.random()*9000),m=e.target.elements.a2.value;saveOrder(n,o);cart={};disc=0;sync();
$('#cob').innerHTML='<div style="grid-column:1/-1;text-align:center;padding:24px"><h3 class="gold" style="font-size:26px">¡Pedido confirmado!</h3><p style="color:var(--mut)">Número de pedido <b style="color:var(--gold)">'+n+'</b><br>Total: <b>'+eur(o.t)+'</b>. Hemos enviado el resumen a '+m+' (simulado).</p><button class="btn fill" id="fin" type="button">Seguir comprando</button></div>'});
var ST=['Recepción y diagnóstico','Reparación de componentes','Pruebas de estrés y calidad','Listo para entrega'];
$('#tf').onsubmit=function(e){e.preventDefault();var c=$('#code').value.trim().toUpperCase();
if(c!='AU-1234'){$('#tm').textContent='No encontramos esa orden. Revisa el código o llámanos.';$('#job').innerHTML='';return}
$('#tm').textContent='Orden AU-1234 (ejemplo de demostración)';
$('#job').innerHTML=ST.map(function(s,k){var f=k<1?10:k==1?5:0,l=k<1?'COMPLETADO':k==1?'EN CURSO':'EN COLA',b='';for(var j=0;j<10;j++)b+='<i class="'+(j<f?'on':(k==1&&j==5?'now':''))+'"></i>';return '<div><div class="jl"><span>'+s+'</span><b>'+l+'</b></div><div class="bar">'+b+'</div></div>'}).join('')};
function body(){return 'Nombre: '+$('#n').value+'\nTeléfono: '+$('#t').value+'\nDispositivo: '+$('#d').value+'\nProblema: '+$('#p').value}
$('#cf').onsubmit=function(e){e.preventDefault();location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Solicitud de reparación')+'&body='+encodeURIComponent(body());$('#cm').textContent='Abriendo tu aplicación de correo…'};
$('#wa').onclick=function(e){if(!$('#cf').checkValidity()){e.preventDefault();$('#cf').reportValidity();return}this.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(body())};

/* ---- ampliaciones ---- */
var WL=[],ORD=[],REV=[],disc=0,cmp=[],q='',so='';
function ld(k,d){try{return JSON.parse(localStorage.getItem(k)||d)}catch(e){return JSON.parse(d)}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
WL=ld('aurum-wl','[]');ORD=ld('aurum-orders','[]');REV=ld('aurum-rev','[]');
D.push({n:'PlayStation 5 Pro (reacondicionada)',b:'Sony',c:'Outlet',i:'pad',p:649,o:799,m:['2 TB SSD','Revisada en taller','Garantía propia']},{n:'iPhone 15 Pro (reacondicionado)',b:'Apple',c:'Outlet',i:'phone',p:699,o:999,m:['6,1″','Chip A17 Pro','Batería revisada']},{n:'MacBook Air 13″ M2 (reacondicionado)',b:'Apple',c:'Outlet',i:'laptop',p:749,o:1199,m:['Chip M2','13,6″','Revisado']});
[['GeForce RTX 5070',649],['Core Ultra 7 265K',439],['Steam Deck OLED',619]].forEach(function(a){D.forEach(function(p){if(p.n==a[0])p.o=a[1]})});
cats=['Todo','Favoritos'];D.forEach(function(p){if(cats.indexOf(p.c)<0)cats.push(p.c)});
var DESC={'Gráficas':'Potencia gráfica para juegos, creación 3D y trazado de rayos.','Procesadores':'El cerebro de tu equipo: rendimiento para juegos y trabajo.','Placas base':'Base de tu PC con conectividad moderna.','Memoria y SSD':'Velocidad y capacidad para que todo cargue al instante.','Fuentes y cooling':'Energía estable y temperaturas bajo control.','PCs':'Montado, probado y con garantía por nuestro taller.','Portátiles':'Potencia y portabilidad.','Móviles':'Gama alta con garantía.','Consolas':'Diversión lista para jugar.','Outlet':'Equipo reacondicionado y revisado en nuestro taller.'};
function modal(h){$('#md').innerHTML='<div class="mb">'+h+'<div class="cta" style="margin-top:18px"><button class="btn" data-mc="1" type="button">Cerrar</button></div></div>';$('#md').classList.add('open')}
function stars(n){return '<span class="st" aria-label="'+n+' de 5">'+'★'.repeat(n)+'☆'.repeat(5-n)+'</span>'}
function card(p,k){var f=WL.indexOf(k)>=0,c=cmp.indexOf(k)>=0;return '<article class="card"><div class="row" style="justify-content:space-between;align-items:center;margin:0"><span class="tag">'+p.c+' · '+p.b+'</span><button class="x" data-f="'+k+'" aria-label="Favorito" style="color:'+(f?'var(--gold)':'')+'">'+(f?'♥':'♡')+'</button></div><div class="holo" aria-hidden="true">'+I[p.i]+'</div><h3>'+p.n+'</h3><div class="met">'+p.m.map(function(m){return '<span>'+m+'</span>'}).join('')+'</div><div style="margin-top:auto"><span class="pr">'+eur(p.p)+'</span>'+(p.o?' <s style="color:var(--mut);font-size:13px">'+eur(p.o)+'</s>':'')+'</div><div class="row" style="margin:0"><button class="btn" data-d="'+k+'" style="flex:1;margin:0">Detalle</button><button class="btn fill" data-a="'+k+'" style="flex:1;margin:0">Añadir</button></div><label class="opt" style="min-height:36px;margin:0"><input type="checkbox" data-cmp="'+k+'"'+(c?' checked':'')+'> Comparar</label></article>'}
function draw(){if(!$('#sq'))$('#tabs').insertAdjacentHTML('beforebegin','<div class="row" style="margin-bottom:14px"><div><label for="sq" class="sr">Buscar</label><input id="sq" type="search" placeholder="Buscar producto, marca…"></div><div><label for="so" class="sr">Ordenar</label><select id="so"><option value="">Ordenar: destacados</option><option value="a">Precio: menor a mayor</option><option value="d">Precio: mayor a menor</option><option value="n">Nombre A–Z</option><option value="b">Marca A–Z</option></select></div></div>');
$('#tabs').innerHTML=cats.map(function(c){return '<button type="button" aria-pressed="'+(c==cur)+'" data-c="'+c+'">'+(c=='Favoritos'?'♥ Favoritos ('+WL.length+')':c)+'</button>'}).join('');
var L=D.map(function(p,k){return{p:p,k:k}}).filter(function(x){return(cur=='Todo'||(cur=='Favoritos'?WL.indexOf(x.k)>=0:x.p.c==cur))&&(x.p.n+' '+x.p.b+' '+x.p.c+' '+x.p.m.join(' ')).toLowerCase().indexOf(q)>=0});
if(so=='a')L.sort(function(a,b){return a.p.p-b.p.p});if(so=='d')L.sort(function(a,b){return b.p.p-a.p.p});if(so=='n')L.sort(function(a,b){return a.p.n.localeCompare(b.p.n)});if(so=='b')L.sort(function(a,b){return a.p.b.localeCompare(b.p.b)});
$('#grid').innerHTML=L.length?L.map(function(x){return card(x.p,x.k)}).join(''):'<p style="color:var(--mut)">Sin resultados.</p>'}
function detail(k){var p=D[k],rel=D.map(function(x,i){return i}).filter(function(i){return i!=k&&D[i].c==p.c}).slice(0,3);
modal('<div class="dg"><div class="holo" style="display:flex;align-items:center;justify-content:center;height:220px">'+I[p.i]+'</div><div><span class="tag">'+p.c+' · '+p.b+'</span><h3 style="font-size:22px;margin:8px 0">'+p.n+'</h3><div class="pr" style="font-size:26px">'+eur(p.p)+(p.o?' <s style="color:var(--mut);font-size:15px">'+eur(p.o)+'</s>':'')+'</div><p style="color:var(--mut)">'+(DESC[p.c]||'')+'</p><ul class="sp">'+p.m.map(function(m){return '<li>'+m+'</li>'}).join('')+'</ul><p class="ok" style="font-size:13px">● En stock (ejemplo) · Envío en 24–48 h</p><div class="cta"><button class="btn fill" data-a="'+k+'" data-mc="1" type="button">Añadir al carrito</button><button class="btn" data-f="'+k+'" type="button">'+(WL.indexOf(k)>=0?'♥ Quitar de favoritos':'♡ Favorito')+'</button></div></div></div>'+(rel.length?'<h3 style="margin:24px 0 12px;font-size:14px">Productos relacionados</h3><div class="grid">'+rel.map(function(i){return '<button class="card" data-d="'+i+'" type="button" style="text-align:left;color:inherit;cursor:pointer"><span class="tag">'+D[i].b+'</span><b>'+D[i].n+'</b><span class="pr" style="font-size:14px">'+eur(D[i].p)+'</span></button>'}).join('')+'</div>':''))}
function cbar(){var b=$('#cmpbar');b.className=cmp.length?'on':'';b.innerHTML='<span style="font-size:13px">Comparar ('+cmp.length+'/3)</span><button class="btn fill" data-cg="1" type="button"'+(cmp.length<2?' disabled style="opacity:.4"':'')+'>Ver comparativa</button><button class="x" data-cx2="1" aria-label="Vaciar comparador">✕</button>'}
function compare(){var P=cmp.map(function(k){return D[k]}),row=function(l,f){return '<tr><th>'+l+'</th>'+P.map(function(p){return '<td>'+f(p)+'</td>'}).join('')+'</tr>'};
modal('<h3 class="gold" style="margin-bottom:12px">Comparativa</h3><div style="overflow-x:auto"><table class="cmp"><tr><th></th>'+P.map(function(p){return '<td><b>'+p.n+'</b></td>'}).join('')+'</tr>'+row('Marca',function(p){return p.b})+row('Categoría',function(p){return p.c})+row('Precio',function(p){return '<b>'+eur(p.p)+'</b>'})+[0,1,2].map(function(i){return row('Dato '+(i+1),function(p){return p.m[i]||'—'})}).join('')+'</table></div>')}
function tot(){var f=$('#fm'),d=f?f.elements.dl.value:'envio',s=sub(),ds=s*disc,sh=d=='tienda'||s-ds>=FREE?0:ENV,t=s-ds+sh;return{s:s,ds:ds,sh:sh,t:t,iva:t-t/1.21}}
function summ(){var o=tot();$('#sm').innerHTML=keys().map(function(k){return '<div class="tl"><span>'+cart[k]+'× '+D[k].n+'</span><span>'+eur(D[k].p*cart[k])+'</span></div>'}).join('')+'<div class="tl"><span>Subtotal</span><span>'+eur(o.s)+'</span></div>'+(o.ds?'<div class="tl"><span>Descuento</span><span>−'+eur(o.ds)+'</span></div>':'')+'<div class="tl"><span>Envío</span><span>'+(o.sh?eur(o.sh):'Gratis')+'</span></div><div class="tl"><span>IVA incluido (21 %)</span><span>'+eur(o.iva)+'</span></div><div class="tl t"><span>Total</span><span>'+eur(o.t)+'</span></div>'}
var _oc=openCo;openCo=function(){_oc();$('#sm').insertAdjacentHTML('afterend','<div class="row"><div><label for="cp">Código de descuento</label><input id="cp" placeholder="AURUM10"></div><button class="btn" type="button" id="cpb">Aplicar</button></div><div class="msg" id="cpm"></div>')};
function saveOrder(n,o){ORD.unshift({n:n,d:new Date().toLocaleDateString('es-ES'),t:o.t,l:keys().map(function(k){return cart[k]+'× '+D[k].n})});sv('aurum-orders',ORD)}
var LG={g:['Garantía','Los productos nuevos cuentan con la garantía legal vigente. Las reparaciones incluyen garantía sobre la pieza y la mano de obra: [X meses].'],e:['Envíos y devoluciones','Envío estándar 5,90 € (gratis desde 150 €) en 24–48 h. Dispones de 14 días para desistir de tu compra conforme a la normativa de consumo.'],p:['Política de privacidad','Tratamos tus datos solo para gestionar pedidos, citas y consultas. Responsable: AURUM, Calle Recogidas 25, Granada. Puedes ejercer tus derechos escribiendo a info@aurum.example.'],c:['Cookies','Solo usamos almacenamiento local del navegador para guardar tu carrito, favoritos y pedidos. No usamos cookies de publicidad.'],a:['Aviso legal','AURUM · CIF B-00000000 · Calle Recogidas 25, 18002 Granada · info@aurum.example.']};
function legal(k){modal('<h3 class="gold" style="margin-bottom:10px">'+LG[k][0]+'</h3><p style="color:var(--mut)">'+LG[k][1]+'</p><p style="font-size:12px;color:var(--mut)">Texto de plantilla: revísalo con un asesor legal antes de publicar.</p>')}
function acct(){modal('<h3 class="gold" style="margin-bottom:10px">Mi cuenta</h3><p style="color:var(--mut)">Favoritos: '+WL.length+' · Pedidos: '+ORD.length+'<br><small>Datos guardados solo en este navegador (demo).</small></p>'+(ORD.length?ORD.map(function(o){return '<div class="box" style="margin-bottom:10px;padding:14px"><b>'+o.n+'</b> · '+o.d+' · '+eur(o.t)+'<br><small style="color:var(--mut)">'+o.l.join(', ')+'</small></div>'}).join(''):'<p>Aún no tienes pedidos.</p>'))}
function pick(id,cat,ic){return D.map(function(p,k){return{p:p,k:k}}).filter(function(x){return x.p.c==cat&&(!ic||x.p.i==ic)})}
function sel(id,l,list,def){return '<div><label for="'+id+'">'+l+'</label><select id="'+id+'"><option value="">— Elegir —</option>'+list.map(function(x){return '<option value="'+x.k+'"'+(x.p.n==def?' selected':'')+'>'+x.p.n+' · '+eur(x.p.p)+'</option>'}).join('')+'</select></div>'}
var CF=[['cu','Procesador','Procesadores','','Ryzen 7 9800X3D'],['cb2','Placa base','Placas base','','MAG X870E Tomahawk WiFi'],['cg','Tarjeta gráfica','Gráficas','','Radeon RX 9070 XT'],['cr','Memoria RAM','Memoria y SSD','ram','Vengeance DDR5 32 GB'],['cs','Almacenamiento','Memoria y SSD','chip','SSD 990 Pro 2 TB'],['cf','Fuente','Fuentes y cooling','psu','RM850x 850 W'],['cc','Refrigeración','Fuentes y cooling','fan','Liquid Freezer III 360']];
function cfgInit(){$('#cfg').innerHTML='<div class="fg">'+CF.map(function(a){return sel(a[0],a[1],pick(a[0],a[2],a[3]),a[4])}).join('')+'</div><div id="cfm" aria-live="polite" style="margin:18px 0"></div><button class="btn fill" id="cfa" type="button">Añadir configuración al carrito</button>';cfgChk()}
function cv(id){var v=$('#'+id).value;return v===''?null:D[+v]}
function cfgChk(){var u=cv('cu'),b=cv('cb2'),g=cv('cg'),f=cv('cf'),m=[],tt=0,bad=0;CF.forEach(function(a){var p=cv(a[0]);if(p)tt+=p.p});
if(u&&b){var so2=u.m[1].indexOf('AM5')>=0?'AM5':'LGA1851';if(so2==b.m[0])m.push('<span class="ok">✓ Procesador y placa compatibles ('+so2+')</span>');else{bad=1;m.push('<span class="bad">✗ Procesador ('+so2+') y placa ('+b.m[0]+') no son compatibles</span>')}}
if(b&&cv('cr'))m.push('<span class="ok">✓ Memoria DDR5 compatible con la placa</span>');
if(u&&g){var need=(parseInt(g.m[1])||250)+(parseInt(u.m[2])||125)+150;if(!f)m.push('<span class="bad">Consumo estimado ~'+need+' W: elige una fuente de al menos '+Math.ceil(need*1.15/50)*50+' W</span>');else{var w=parseInt(f.m[2]);if(need*1.15<=w)m.push('<span class="ok">✓ Fuente suficiente (~'+need+' W de consumo estimado, fuente de '+w+' W)</span>');else m.push('<span class="bad">✗ Fuente justa: consumo estimado ~'+need+' W, recomendado ≥ '+Math.ceil(need*1.15/50)*50+' W</span>')}}
$('#cfm').innerHTML=m.join('<br>')+'<p class="pr" style="margin:12px 0 0">Total piezas: '+eur(tt)+'</p>';$('#cfa').disabled=!!bad;$('#cfa').style.opacity=bad?.4:1}
var RP={'Móvil':[['Pantalla',80,250,'1–2 días'],['Batería',40,90,'1 día'],['Puerto de carga',40,80,'1–2 días'],['Daño por agua',60,200,'3–7 días']],'Portátil':[['Pantalla',90,300,'3–5 días'],['Batería',60,140,'2–3 días'],['Teclado',50,120,'2–4 días'],['Limpieza y pasta térmica',35,60,'1–2 días']],'PC':[['No enciende',40,150,'2–5 días'],['Limpieza y pasta térmica',30,60,'1 día'],['Cambio de pieza (mano de obra)',30,60,'1–2 días'],['Instalación de sistema',30,50,'1 día']],'Consola':[['Puerto HDMI',60,120,'2–4 días'],['Sobrecalentamiento',40,80,'1–3 días'],['Lector de discos',70,140,'3–5 días']]};
function rpInit(){$('#rd').innerHTML=Object.keys(RP).map(function(k){return '<option>'+k+'</option>'}).join('');rpFill()}
function rpFill(){$('#rf').innerHTML=RP[$('#rd').value].map(function(a,i){return '<option value="'+i+'">'+a[0]+'</option>'}).join('');rpShow()}
function rpShow(){var a=RP[$('#rd').value][+$('#rf').value];$('#rr').innerHTML='Estimación: <b>'+a[1]+' – '+a[2]+' €</b> · Plazo: <b>'+a[3]+'</b> laborables (orientativo)'}
var EX=[[5,'Marta (ejemplo)','Me cambiaron la pantalla del portátil en un par de días y con presupuesto cerrado.'],[5,'Carlos (ejemplo)','Montaron mi PC y me aconsejaron muy bien con la fuente y la refrigeración.'],[4,'Lucía (ejemplo)','Buen trato y seguimiento claro de la reparación de mi consola.']];
function rvDraw(){$('#rv').innerHTML=REV.map(function(r){return [r[0],r[1],r[2]]}).concat(EX).map(function(r){return '<article class="card">'+stars(+r[0])+'<p style="color:var(--txt)">'+String(r[2]).replace(/</g,'&lt;')+'</p><span class="tag">'+String(r[1]).replace(/</g,'&lt;')+'</span></article>'}).join('')}
function mailto(sub2,b){location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(sub2)+'&body='+encodeURIComponent(b)}
document.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;var d=t.dataset;
if(d.d!==undefined)detail(+d.d);
if(d.f!==undefined){var k=+d.f,i=WL.indexOf(k);if(i>=0)WL.splice(i,1);else WL.push(k);sv('aurum-wl',WL);draw();if(t.closest('#md'))detail(k)}
if(d.mc)$('#md').classList.remove('open');
if(d.lg)legal(d.lg);
if(d.cg)compare();
if(d.cx2){cmp=[];cbar();draw()}
if(t.id=='hacc')acct();
if(t.id=='cka'){sv('aurum-ck',1);$('#cookie').className=''}
if(t.id=='cfa'){CF.forEach(function(a){var v=$('#'+a[0]).value;if(v!=='')cart[v]=(cart[v]||0)+1});sync();$('#drawer').classList.add('open')}
if(t.id=='rbk'){$('#bp').value=$('#rd').value+': '+RP[$('#rd').value][+$('#rf').value][0];document.getElementById('citas').scrollIntoView()}
if(t.id=='cpb'){var c=$('#cp').value.trim().toUpperCase();disc=c=='AURUM10'?.1:0;$('#cpm').textContent=disc?'Código aplicado: 10 % de descuento':'Código no válido (prueba AURUM10)';summ()}});
document.addEventListener('change',function(e){var t=e.target;
if(t.dataset.cmp!==undefined){var k=+t.dataset.cmp,i=cmp.indexOf(k);if(i>=0)cmp.splice(i,1);else if(cmp.length<3)cmp.push(k);else t.checked=false;cbar()}
if(t.id=='so'){so=t.value;draw()}if(t.id=='rd')rpFill();if(t.id=='rf')rpShow();if(t.closest('#cfg'))cfgChk()});
document.addEventListener('input',function(e){if(e.target.id=='sq'){q=e.target.value.toLowerCase();var s=e.target.selectionStart;draw();var n=$('#sq');n.value=e.target.value;n.focus();n.setSelectionRange(s,s)}});
document.addEventListener('submit',function(e){var f=e.target.id;
if(f=='bk'){e.preventDefault();var dt=new Date($('#bd').value+'T12:00'),h2=$('#bh').value;if(dt.getDay()==0){$('#bm').textContent='Los domingos estamos cerrados. Elige otro día.';return}if(dt.getDay()==6&&h2>'13:30'){$('#bm').textContent='Los sábados atendemos de 10:00 a 14:00.';return}mailto('Cita en el taller','Nombre: '+$('#bn').value+'\nTeléfono: '+$('#bt').value+'\nFecha: '+$('#bd').value+' '+h2+'\nEquipo/avería: '+$('#bp').value);$('#bm').textContent='Abriendo tu correo para enviar la solicitud…'}
if(f=='ts'){e.preventDefault();mailto('Tasación de equipo usado','Tipo: '+$('#tt').value+'\nEstado: '+$('#te').value+'\nModelo: '+$('#tm2').value+'\nDescripción: '+$('#td').value+'\nCorreo: '+$('#tc').value);$('#tsm').textContent='Abriendo tu correo para enviar la solicitud…'}
if(f=='rf2'){e.preventDefault();REV.unshift([$('#os').value,$('#on').value,$('#ot').value]);sv('aurum-rev',REV);rvDraw();e.target.reset()}
if(f=='nl'){e.preventDefault();$('#nm').textContent='¡Gracias! Te has suscrito (demo, no se guarda).';e.target.reset()}});
(function(){var o='';for(var h=10;h<20;h++)for(var m=0;m<60;m+=30){var s=(h<10?'0':'')+h+':'+(m?m:'00');o+='<option>'+s+'</option>'}$('#bh').innerHTML=o;$('#bd').min=new Date().toISOString().slice(0,10);
$('#cb').insertAdjacentHTML('beforebegin','<button class="btn" id="hacc" type="button">Mi cuenta</button>');
if(!ld('aurum-ck','0'))$('#cookie').className='on';cfgInit();rpInit();rvDraw();cbar();draw();sync()})();
