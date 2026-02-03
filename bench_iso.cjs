
const count = 10000;
const d = new Date('2023-01-01');

console.time('Template Literal');
for(let i=0; i<count; i++) {
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
console.timeEnd('Template Literal');

console.time('toISOString');
for(let i=0; i<count; i++) {
    const iso = d.toISOString().substring(0, 10);
}
console.timeEnd('toISOString');
