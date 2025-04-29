import { assert, describe, it } from "vitest";

import { TEST_ONLY } from "./index";
const { map_templates, content_template, sanitise_getopts } = TEST_ONLY;

describe("TEST internal functions", () => {
  it("go 1: sanitise_getopts  ", () => {
    let U1 = new URL("http://127.0.0.1/?sample=shorter&template=v1");
    assert.deepEqual(
      { sample: "shorter", template: "v1" },
      sanitise_getopts(U1),
      "I can extract URLs",
    );

    U1 = new URL("http://127.0.0.1/?sample=shorter&template=v2");
    assert.deepEqual(
      { sample: "shorter", template: "v2" },
      sanitise_getopts(U1),
      "I can extract URLs 2",
    );

    U1 = new URL("http://127.0.0.1/?sample=a+wonderful+life");
    assert.deepEqual(
      { sample: "a wonderful life", template: "v1" },
      sanitise_getopts(U1),
      "I can extract URLs 3",
    );

    U1 = new URL("http://127.0.0.1/?sample=watch++this+space!&template=v1");
    assert.deepEqual(
      { sample: "watch  this space!", template: "v1" },
      sanitise_getopts(U1),
      "I can extract URLs 4",
    );

    // last test data will fail later on stages
    U1 = new URL("http://127.0.0.1/?sample=shorter&template=v666");
    assert.deepEqual(
      { sample: "shorter", template: "v666" },
      sanitise_getopts(U1),
      "I can extract URLs",
    );
  });

  it("go 2: content_template ", () => {
    let html = "<h1>The saved string is SAMPLE</h1>\n";
    assert.equal(html, content_template("v1"), "go 1");

    try {
      content_template("v666");
      assert.isFalse(true, "not expected condition meet");
    } catch (e) {
      assert.isFalse(false, "go 2");
    }
  });

  it("go 3: map_templates", () => {
    let U1 = new URL("http://127.0.0.1/?sample=shorter&template=v1");
    let html = map_templates(U1);
    assert.isTrue(typeof html == "string", "we did get expected HTML data");
    assert.isTrue(html.length > 0, "we did get expected HTML data");
    assert.isTrue(html.indexOf("shorter") > 0, "we did get expected injection");

    U1 = new URL(
      "http://127.0.0.1/?sample=A+long+walk+to+the+end+of+the+pier&template=v2",
    );
    html = map_templates(U1);
    assert.isTrue(typeof html == "string", "we did get expected HTML data");
    assert.isTrue(html.length > 0, "we did get expected HTML data");
    assert.isTrue(
      html.indexOf("A long walk to the end of the pier") > 0,
      "we did get expected injection",
    );

    try {
      U1 = new URL(
        "http://127.0.0.1/?sample=A+long+walk+to+the+end+of+the+pier&template=v666",
      );
      html = map_templates(U1);
      assert.isFalse(true, "not expected condition meet");
    } catch (e) {
      assert.isFalse(false, "Failed to render made-up template, SUCCESS");
    }

    U1 = new URL(
      "http://127.0.0.1/?sample=<script>alert('Gotya!')</script>&template=v2",
    );
    html = map_templates(U1);
    assert.isTrue(typeof html == "string", "we did get expected HTML data");
    assert.isTrue(html.length > 0, "we did get expected HTML data");
    assert.isFalse(
      html.indexOf("A long walk to the end of the pier") > 0,
      "we did get expected injection",
    );

    U1 = new URL("http://127.0.0.1/?sample=javascript:debug()&template=v2");
    html = map_templates(U1);
    assert.isTrue(typeof html == "string", "we did get expected HTML data");
    assert.isTrue(html.length > 0, "we did get expected HTML data");
    assert.isFalse(
      html.indexOf("A long walk to the end of the pier") > 0,
      "we did get expected injection",
    );
  });
});
