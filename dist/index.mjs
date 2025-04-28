import path from "node:path"; 
import url from "node:url"; 
const t = path.dirname(url.fileURLToPath(import.meta.url));
function n(n2) {
  const r2 = function(e2) {
    const t2 = { template: "v1", sample: "dynamic string" }, n3 = new URLSearchParams(e2.search);
    let r3 = {};
    for (let e3 in Object.keys(t2)) n3.has(e3) ? r3[e3] = decodeURI(n3.get(e3)) : r3[e3] = t2[e3];
    return r3;
  }(n2);
  return function(n3) {
    const r3 = { v1: "v1.html", v2: "v2.html" };

    if (!(n3 in r3)) throw new Error("Unknown template " + n3);
    const o = e.join(t, r3[n3]);
    return fs.readFileSync(o, { encoding: "utf8", flag: "r" });
  }(r2.template).replace(/\bSAMPLE\b/g, r2.sample);
}
function r(e2) {
  const t2 = n(new URL(e2.url));
console.log("XXX", e2.url, n(new URL(e2.url)) );
  return new Response(t2, { status: 200, headers: { "cache-control": "max-age=0", "content-type": "text/html; encoding= utf8", expires: (/* @__PURE__ */ new Date()).toString() } });
}
export {
  r as GET
};
