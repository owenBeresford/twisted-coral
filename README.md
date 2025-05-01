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

Look at the following URLs:

- https://arqiva-submission.vercel.app
- 'https://arqiva-submission.vercel.app?sample=A brave new world of interactivity'
- https://arqiva-submission.vercel.app?sample=A+brave+new+world+of+interactivity ~ these format URLs are better for text editing like this, but harder to read. All three formats are supported
- https://arqiva-submission.vercel.app?sample=A%20brave%20new%20world%20of%20interactivity
- https://arqiva-submission.vercel.app?sample=some+customised+text&template=v2 ~ better use of HTML+CSS

I will tear down this URL fairly quickly. I can add support for a easier-to-use form to enter the dynamic-text.


### Choices

There is a newer copy of this list in the extra PDF file I sent you.

- I chose Vercel over a more traditional Serverless cloud vendor as your spec nearly doesn't ask for any computation. This better maps the features that you ask for IMO.
- I chose Fluid over Edge, as Vercel said too ~ and they know their platform
- I include several HTML templates, as the single Element line isn't good practice
- I currently have little security on the build process, **I should add this**. The build process at Hoptroff for example was a mature release process, as would be expected for a business inside ISO-27001.
- I am not compiling in Vercel, as this adds no benefit to me, but will stack up CPU time. Note loudly: Dep issues are best resolved away from production. Vervel does support this.
- The regions set in the Vercel GUI do nothing, I am setting this the config to AWS London
- I have set some HTTP headers, to show that I can. I will need to add more in the long scale, and if there are any assets.
- Due to extremely small number of features, this will work on mobile, tablet and desktop with no hassle.
- Why didn't I use an LLM to generate the code? It would then take much longer to test, as I haven't used Terraform or Vercel previously. LLM work best on things that the operator already understands, so can make good prompts. A vague request for "cloud" will deliver AWS most of the time, as it is the most common in articles on the interwebs. See why Vercel above.
- Why no SPA framework (React etc)? Vercel is a framework for ISR ~ 'Incremental Static Regeneration', and meets all the needs of this project. Many docs assume a SPA is needed.


### Known limits:

There is a newer copy of this list in the extra PDF file I sent you.

- I have only created 1 IP/ region with this script. This matches what you asked for, and costs the least. In previous employment, we deployed to data-centres around the planet for better performance in each country/ region. This is an easy step to scale-to with rentable cloud.
- I choose to use a blog platform that supported devops rather than a serverless service for them, as this spec is very simple, and doesn't need a DB. If no complexity is needed, the simplest solution should be better.
- I _could_ it look much more graphically designed, easily.
- I will add smoothed URLs in later editions
- Users need to type on the URL bar (rather than a designed form). Your browser will tidy-up various input into a valid URL.

Addendum (after submission): I was only choosing platforms with good docs, as explainability and completion are the most urgent ideas in this context.   For a running service inside UK critical-infra regulation ~ like Telcos ~ I would think carefully about political instability / changeover internationally, which I haven't in this demo.   Some states are publishing draconian regulations that would class with UK operating culture.   

