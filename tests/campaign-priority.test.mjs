import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
const html = await readFile(new URL('../2026/index.html',import.meta.url),'utf8');
const js = await readFile(new URL('../2026/language.js',import.meta.url),'utf8');
test('winter campaign and production metadata',()=>{
 assert.match(html,/3 PLACES LEFT/);
 assert.match(html,/DEC 8–22/);
 assert.match(html,/canonical/);
 assert.doesNotMatch(html,/DESIGN PREVIEW|NOT PUBLISHED|noindex|assets\/friends.webp/);
 assert.doesNotMatch(html,/FAM Tour|August 24|APPLICATION DEADLINE/);
});
test('all local image, script and stylesheet references exist',async()=>{
 const refs=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]).filter(s=>!s.startsWith('#')&&!s.includes(':'));
 for(const ref of refs) await access(new URL('../2026/'+ref,import.meta.url));
});
test('anchors and application remain intact',()=>{
 const ids=new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]));
 for(const m of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(m[1]));
 assert.match(html,/1FAIpQLSf1479JdvEl36i44FovnueiTBJW8zP7gfG6cBChBToW-1MuwA\/viewform/);
 assert.match(html,/15L_SeddyQqgLDfAUR0YoSNgm1MCK-0DCpEkQWWS0GFA/);
});
test('updated photos and bilingual controls retained',()=>{
 for(const photo of ['noras-office.png','community-night.jpg','community-new.png']) assert.ok(html.includes(photo));
 assert.match(js,/data-language="en"/);assert.match(js,/data-language="ja"/);
 assert.match(js,/document.documentElement.lang = language/);
 assert.match(js,/localStorage.setItem/);
 assert.match(js,/古民家にデスクと椅子/);
});
test('top pages still route to campaign',async()=>{
 for(const file of ['index.html','ja/index.html','zh/index.html']){
  const page=await readFile(new URL('../'+file,import.meta.url),'utf8');
  assert.match(page,/href="\/2026\/"/);
 }
});
