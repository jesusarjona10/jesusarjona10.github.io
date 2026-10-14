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
document.addEventListener('submit',function(e){if(e.target.id!='fm')return;e.preventDefault();var o=tot(),n='AU-'+Math.floor(1000+Math.random()*9000),m=e.target.elements.a2.value;cart={};sync();
$('#cob').innerHTML='<div style="grid-column:1/-1;text-align:center;padding:24px"><h3 class="gold" style="font-size:26px">¡Pedido confirmado!</h3><p style="color:var(--mut)">Número de pedido <b style="color:var(--gold)">'+n+'</b><br>Total: <b>'+eur(o.t)+'</b>. Hemos enviado el resumen a '+m+' (simulado).</p><button class="btn fill" id="fin" type="button">Seguir comprando</button></div>'});
var ST=['Recepción y diagnóstico','Reparación de componentes','Pruebas de estrés y calidad','Listo para entrega'];
$('#tf').onsubmit=function(e){e.preventDefault();var c=$('#code').value.trim().toUpperCase();
if(c!='AU-1234'){$('#tm').textContent='No encontramos esa orden. Revisa el código o llámanos.';$('#job').innerHTML='';return}
$('#tm').textContent='Orden AU-1234 (ejemplo de demostración)';
$('#job').innerHTML=ST.map(function(s,k){var f=k<1?10:k==1?5:0,l=k<1?'COMPLETADO':k==1?'EN CURSO':'EN COLA',b='';for(var j=0;j<10;j++)b+='<i class="'+(j<f?'on':(k==1&&j==5?'now':''))+'"></i>';return '<div><div class="jl"><span>'+s+'</span><b>'+l+'</b></div><div class="bar">'+b+'</div></div>'}).join('')};
function body(){return 'Nombre: '+$('#n').value+'\nTeléfono: '+$('#t').value+'\nDispositivo: '+$('#d').value+'\nProblema: '+$('#p').value}
$('#cf').onsubmit=function(e){e.preventDefault();location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Solicitud de reparación')+'&body='+encodeURIComponent(body());$('#cm').textContent='Abriendo tu aplicación de correo…'};
$('#wa').onclick=function(e){if(!$('#cf').checkValidity()){e.preventDefault();$('#cf').reportValidity();return}this.href='https://wa.me/'+PHONE+'?text='+encodeURIComponent(body())};
draw();sync();
