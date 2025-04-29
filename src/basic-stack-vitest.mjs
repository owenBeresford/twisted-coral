import { assert, describe, it } from "vitest";

import { GET as GET1 } from "./index";
import { GET as GET2 } from "../dist/index";

describe("TEST internal functions", () => {
  it("go 1: GET1  ", async () => {
	let testUrl="http://127.0.0.1/?sample=shorter&template=v1";
	let r1=new Request(testUrl);
	assert.equal(r1.url, testUrl, "I can make Request objects");
	
	let r2;
	try {
		r2=GET1(r1);
	} catch(e) {
		assert.isTrue(false, "we have a valid response "+e.message );
	}
	assert.isTrue(r2 instanceof Response, "we have a valid response" );
	let dat=await r2.text();
	assert.isTrue(typeof dat=== "string", "we have a valid response" );
	assert.isTrue( dat.indexOf("shorter")>0, "we have a valid response" );

  });

  it("go 2: GET2  ", async () => {
	let testUrl="http://127.0.0.1/?sample=shorter&template=v1";
	let r1=new Request(testUrl);
	assert.equal(r1.url, testUrl, "I can make Request objects");
	
	let r2;
	try {
		r2=GET2(r1);
	} catch(e) {
console.log("WWWWW ", e, e.message);
		assert.isTrue(false, "we have a valid response "+e.message );
	}
	assert.isTrue(r2 instanceof Response, "we have a valid response" );
	let dat=await r2.text();
	assert.isTrue(typeof dat=== "string", "we have a valid response" );
	assert.isTrue( dat.indexOf("shorter")>0, "we have a valid response" );

  });

});

