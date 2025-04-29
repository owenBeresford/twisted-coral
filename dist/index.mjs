import path from "node:path"; 
import url from "node:url"; 
import fs from "node:fs";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

function n(t2) {
  const e2 = { template: "v1", sample: "dynamic string" }, n2 = new URLSearchParams(t2.search);
  let o2 = {};
  const r2 = Object.keys(e2);
  for (let t3 in r2) n2.has(r2[t3]) ? o2[r2[t3]] = decodeURI(n2.get(r2[t3])).replaceAll(["<", ">"], ["&lt;", "&gt;"]) : o2[r2[t3]] = e2[r2[t3]];
  return o2;
}
function o(n2) {
  const o2 = { v1: "v1.html", v2: "v2.html" };
  if (!(n2 in o2)) throw new Error("Unknown template " + n2);
  const r2 = path.join(e, o2[n2]);
  return fs.readFileSync(r2, { encoding: "utf8", flag: "r" });
}
function r(t2) {
  const e2 = n(t2);
  return o(e2.template).replace(/\bSAMPLE\b/g, e2.sample);
}
function a(t2) {
  const e2 = r(new URL(t2.url));
console.log("XXX", e2.url, n(new URL(e2.url)) );
  return new Response(e2, { status: 200, headers: { "cache-control": "max-age=0", "content-type": "text/html; encoding= utf8", expires: (/* @__PURE__ */ new Date()).toString() } });
}
const c = { map_templates: r, content_template: o, sanitise_getopts: n };
export {
  a as GET,
  c as TEST_ONLY
};
