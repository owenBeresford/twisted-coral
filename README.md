************ NOTE PRIVATE REPO ***************


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

These could be issues, but this is faster.
 
- can be done via IaC?
- ✓ 	Grab IP & report it to the human
  - ✓  - real code would assign a domain name ASAP
- ✓ 	The HTTP server process
- ✓		HTTP2 processing
- ✓ 	HTTPS/ SSL with recent encryption
- ? 	Create cert 
  - - if Linux, can run SSL CLI tools? Can be made by Vercel, or terraform
- ? 	Ensure HTTP security headers
- ? 	Ensure HTTP no-cache type headers to make tests easier
- ✓ 	Firewall on the IP
- ? 	Devop-node service-availability script and graphing
- ✓ 	Log build event
- ✓		Log start/ shutdown events 
- ✓ 	Log HTTP service used 
- ? 	Service has behavioural tests
- ? 	Support an URL that renders a template with a GET arg
  - - indirectly easy :-)
  -	- service "un-urlencodes" the GET arg
  - - service is UTF-8 
- ✓     extra cloud scaling, eg Cloudflare
- ? 	Service has choice of HTML templates - supplied example isn't a HTML page
- ? 	HTTP fittings (robots.txt favico, manifests, RSS, "htaccess type features", etc, etc) 
  -	- Not needed in REST API , but essential for web
- - 	NB: no scalability requirements are mentioned.  Start small and extend as needed
- - 	In real work, large scale is quick with Cloud, but get a spend agreement first.


### Deploy process

- Create Vercel account ~ I wanted this is be automated, then realised steps that can/ might include billing can't be automated
- Clone this repo
- OPTIONAL Setup the local tools described in PRE-INSTALL.bash.  I could create a NPM version of that for win32 people, but do not often develop from win32
- Exec ` terraform apply ` 


### Choices

- I chose Vercel over a more traditional Serverless cloud vendor as your spec nearly doesn't ask for any computation
- I chose Fluid over Edge, as Vercel said too ~ and they know their platform
- I include several HTML templates, as the single Element line isn't good practice 
- I currently have little security on the build process, I should add this.  The build process at Hoptroff for example was a mature release process, as would be expected for a business inside ISO-27001.


### Known limits:

- I have only created 1 IP/ region with this script.   This matches what you asked for, and costs the least.   In previous employment, we deployed to data-centres around the planet for better performance in each country/ region.   
- The first minimal version doesn't include HTTPS/ SSL.  This is a show-stopper for realistic use.   If I created a basic self-signed cert with no domain, this will still trigger many security warnings ~ which is correct procedure.   For the expected use-case, I would guess this is OK, but say "this should be HTTPS"
- I choose to use a blog platform that supported devops rather than a serverless service for them, as this spec is very simple, and doesn't need a DB.   If no complexity is needed, the simplest solution should be better. 
- ...

