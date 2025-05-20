**** NOTE this was a PRIVATE REPO, as is normal for code-tests ****

### Problem Description

On a cloud platform of your choice provision a service, using Infrastructure as Code, that serves a html page.

The content of the page must be ..

    <h1>The saved string is dynamic string</h1>

.. Where "dynamic string" can be set to whatever is requested without having to re-deploy. When you demonstrate the solution in the interview you will need to modify the string to show it works. Any user accessing the url must get the same result. You will be asked to take us through the source code.

Accompany this work with a short document (PDF) explaining:

Your solution and discussing the available options

The reasons behind the decisions you made

How you would embellish the solution were you to have more time.

Use the document to explore some of the architectural factors you may face when designing and building a cloud based solution. Also, the pros and cons of the design decisions you needed to make - and, if you had more time, how you would adapt your solution.

Whilst you are welcome to use AI in your solution, please NO AI for the document. This is an opportunity to showcase your own skills, opinions and judgement.

Please create a publicly accessible Git repo. Include your code and documentation in the repo.

Send us a link to the repo when you have completed the challenge.

NOTE: If you would prefer to use a private repo - that is fine. Upon the receipt of the link we will provide Git logins to allow you to grant us temporary access to view the code and documentation.


### Deliverables for an exposed HTTP service

These could be Github issues, but this is faster.

- can be done via IaC?
- ✓ Grab IP & report it to the human.
  - ✓ - real code would assign a domain name ASAP
  - ✅ Cloud routing is more dynamic, skip to domain name item
- ✓ The HTTP server process
- ✓ HTTP2 processing
- ✓ HTTPS/ SSL with recent encryption
- ✅ Allocated sub-domain, HTTP2, fairly good SSL
- ? Ensure HTTP security headers
- ✓ Could add headers via Vercel if bought expensive account, or manually via config file
- ? Ensure HTTP no-cache type headers to make tests easier
- ✓ ✅ Added via Vercel, not Terraform
- ✓ Firewall on the IP
- ✓ Devop-node service-availability script and graphing
- ✓ Log build event
- ✓ Log start/ shutdown events
- ✓ Log HTTP service used
- The last five items are easy in Vercel, will add if get time
- ? Service has behavioural tests
- ✅ Done as a unit-test.
- ? Support an URL that renders a template with a GET arg
  - - service "un-urlencodes" the GET arg
  - - service is UTF-8
- ✅ this is supported in Vercel.
- ✓ extra cloud scaling, e.g. Cloudflare
- ? Service has choice of HTML templates - supplied example isn't a HTML page
- ✅ Added.
- ? HTTP fittings (robots.txt favico, manifests, RSS, "htaccess type features", etc, etc)
  - - Not needed in REST API, but essential for web.
- -     NB: no scalability requirements are mentioned.  Start small / cheap and extend as needed
- -     In real work, large scale is quick with Cloud, but get a spend agreement first.
- ✓ Add a form and a form handler for the input


### Deploy process

- Create Vercel account manually ~ I wanted this is to be automated, then realised steps that can/ might include billing can't be automated
- Clone this repo
- OPTIONAL Setup the local tools described in PRE-INSTALL.bash. I could create a NPM version of that for win32 people, but do not often develop from win32
- It is essential to run `terraform init`
- If you want to make edits, run `npm install` to deploy test tools etc
   - Normal npm work flows then apply.  See ` npm run ` 
- Populate a new file terraform.tfvars as a copy of terraform.tfvars.SAMPLE
- Review via `terraform plan` (this shows clean results on my machine)
- Exec `terraform apply`


### Artefact

Look at the following URLs:  UPDATE, destroyed

- [host]/
- '[host]/?sample=A brave new world of interactivity'
- [host]/?sample=A+brave+new+world+of+interactivity ~ these format URLs are better for text editing like this, but harder to read. All three formats are supported
- [host]/?sample=A%20brave%20new%20world%20of%20interactivity
- [host]/?sample=some+customised+text&template=v2 ~ better use of HTML+CSS

I will tear down this URL fairly quickly DONE. I can add support for a easier-to-use form to enter the dynamic-text.


### Choices

There is a newer copy of this list in the extra PDF file I sent you.   There are some notess available at https://owenberesford.me.uk/resource/terraform

- I chose Vercel over a more traditional Serverless cloud vendor as your spec is simple with little computation. Vercel offers strong edge -hosting, international footprint, integrated software services that are useful to this project.
- I chose Fluid over older models, inside Vercel’s advice and they know their platform.
- I include two HTML templates, as the single Element version isn't good practice.
- I currently have little security on the build process or run-time security. To be added. However project holds no data, so cannot be breached. The build process at Hoptroff, for example, was a mature release process, as would be expected for a business inside ISO-27001.
- I have set some HTTP headers as demonstration. For a product (with assets), I would add more.
- I am not compiling in Vercel, as it would stack up billable CPU time. Vercel does support this.
NB: Dependency issues are best resolved away from production.
- Due to extremely small number of features this will work on mobile, tablet and desktop with no extra work.
- I think this code is complex enough to gain from unit-tests, so I added some.
- Why didn't I use an LLM to generate the code? 
   - It would then take much longer to test, as I haven't used Terraform or Vercel previously.    If I am hired as an engineer, I am hired to deliver known-working tools or platforms inside performance characteristics.    I show I am being adaptive as I used what I think is the most relevant platform not what I knew already.   I had some training in Terraform at Hoptroff, but wasn’t doing Devops at that point.   LLM work best on solutions that the operator already understands, so can make good prompts.    A vague request for "cloud" will deliver AWS most of the time, the most common in articles on the interwebs.   Stats based "guessing of meaning" will sometimes led to good solutions and sometimes poor or defective ones.   Before OpenAI released, some people state that source code is a necessary step to "define the software behaviour" in enough detail that a stupid computer can execute it.   See also why Vercel above.
- Why does this not use an SPA framework (React etc.)? 
   - Vercel is a framework for ISR ~ 'Incremental Static Regeneration', and meets all the needs of this project. Many articles on the internet assume a SPA is needed.

### Known limits:

- Vercel have a less mature Devop API than AWS or Azure for example.
- I have only created 1 IP/ region with this demo. This matches what your request, and costs the least. This is an easy step to reach with rentable cloud. At Hoptroff we deployed to data-centres around the planet for better performance in each country/ region.
- Due to the small scale of process, I haven’t enabled auto publish on Git push. I prefer to do a second review for typos with preview. I now have unit-tests the rate of JS errors should be reduced.  - I could restyle it to look much more graphically designed, easily. To add more features quickly, a CSS framework should be injected.
- Users need to type on the URL bar (rather than a designed form). Your browser will tidy-up various input into a valid URL.
- I will add smoothed URLs in later editions. Not done yet.
- The compute regions set in the Vercel GUI do nothing, for deploy. I am setting this the Vercel config to AWS London. A support ticket from 2024 says this region targeting is ineffective to-date. The meta-data API does report the correct AWS zone, but I ought to confirm with an IP2GIS mapper.
- Headers should be changed for a product (easy).
- I should create a “chaos monkey” type service-test that tears down and redeploys this small “pico site”. I haven’t torn this down and republished via Terraform as I would like to keep this sub-domain for the demo.
- My standard package.json "engines": { "node": ">=18.0.0" } should be edited for production with automated cloud services as it encourages auto updates. This limit ensures that isolated machines warn about old Node and therefore service failure.

Addendum (after submission): I was only choosing platforms with good docs, as explainability and completion are the most urgent ideas in this context.   For a running service inside UK critical-infra regulation ~ like Telcos ~ I would think carefully about political instability / changeover internationally, which I haven't in this demo.   Some states are publishing draconian regulations that would clash with UK operating culture.   
I am still unsure how to test config files in a unit-test, they can be compared to other config files, but then I need t get both files typed correctly, and haven't verified the files well.  For this small thing, I manually tested via `terraform plan`, for more realistic work, plesae look at `terraform test`.   If a block of code is supposed to return the smallest numer, I can check the output is the smallest input, but not do that for config files.  
