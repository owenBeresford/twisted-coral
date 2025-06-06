/**
 Why no framework?  
 ****Vercel is a framework ****   This is 30 lines of operational code.

 My normal approach of supply wireframe and ideate isn't relevant to a tech-test.
*/

// FS is used in this file
import fs from "node:fs";
// I think this block of IO import an ugly wart
// but __dirname needs to be defined or various libs crash
import path from "node:path";
import url from "node:url";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

type RuntimeSettings = Record<string, string>;
type TemplateList = Record<string, string>;

/**
 * sanitise_getopts
 * Extract safe data
 
 * @param {URL} loc
 * @public
 * @return {RuntimeSettings} 
 */
function sanitise_getopts(loc: URL): RuntimeSettings {
  const DEFAULTS: RuntimeSettings = {
    template: "v1",
    sample: "dynamic string",
  } as RuntimeSettings;
  const PARAM: URLSearchParams = new URLSearchParams(loc.search);
  let ret: RuntimeSettings = {} as RuntimeSettings;

  const KEYS = Object.keys(DEFAULTS);
  for (let i in KEYS) {
    if (PARAM.has(KEYS[i])) {
      let buf = PARAM.get(KEYS[i]);
      buf = decodeURI(buf);
      buf = buf.replaceAll("<", "&lt;");
      buf = buf.replaceAll(">", "&gt;");

      ret[KEYS[i]] = buf;
    } else {
      ret[KEYS[i]] = DEFAULTS[KEYS[i]];
    }
  }
  return ret;
}

/**
 * content_template
 * Generate a template
 * The files should be inlined, or at least pulled into the OS file cache
 * Maybe inlined on app startup

 * @param {string} nom 
 * @public
 * @return {string}
 */
function content_template(nom: string): string {
  const VALID: TemplateList = {
    v1: "v1.html",
    v2: "v2.html",
  };
  if (!(nom in VALID)) {
    throw new Error("Unknown template " + nom);
  }

  const fileName = path.join(__dirname, VALID[nom]);
  let html = fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });

  return html;
}

/**
 * map_templates
 * Generate a value filled-in HTML result.
 * This exists as a function as I was expecting it would get more complex. 

 * @param {URL} loc
 * @public
 * @return {string}
 */
function map_templates(loc: URL): string {
  const dat = sanitise_getopts(loc);
  const html = content_template(dat["template"]).replace(
    /\bSAMPLE\b/g,
    dat["sample"],
  );
  // I am expecting more behaviour to be added here
  return html;
}

/**
 * GET

 Why no framework?  
 ****Vercel is a framework ****    This is 30 lines of operational code.

 * The visible handler, this should be swapped to a framework
 * This several lines has no module plugin capacity, but aside from that has strong overlap with Express source
 * This function signature is copied from the Fluid compute Vercel docs, 
 *	  I shouldn't make my own server socket, as this will fight with the socket management in the cloud
 * No logging, as observability hasn't been created in Vercel yet.
 *
 * @param {Request} req
 * @public
 * @return {Response}
 */
export function GET(req: Request): Response {
  const loc: URL = new URL(req.url);
  const html = map_templates(loc);

  return new Response(html, {
    status: 200,
    headers: {
      "cache-control": "max-age=0",
      "content-type": "text/html; encoding= utf8",
      expires: new Date().toString(),
    },
  });
}

/**
 * Access point for all local symbols, so unit tests can be applied
 */
export const TEST_ONLY = { map_templates, content_template, sanitise_getopts };
