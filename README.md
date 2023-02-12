# What is this ?

I wanted to build a small and efficient app to store links to various stuff, that I stumble upon and bookmark for later.
It's very simple; you save a URL with a Title, Description and optional tags. A Link can have 0 to many tags associated. 
You can search in freetext and by tags.

I'm kind of novice in Javascript, so I made this small project also to train my Javascript skills.

You may deploy the components as you see fit (as Home page like below, on Record pages etc.), but this is how it looks like for me:
![image](https://user-images.githubusercontent.com/16976573/218338061-13172686-24cb-4cc8-917b-926dcfd00be8.png)

## Custom objects, Flows and Lightning Web Components
There are three custom objects defined: Link__c, Tag__c and TagAssociaion__c. Metadata is in https://github.com/ThomasBPG/LinkAppSearch/tree/master/force-app/main/default/objects

Adding Links and creating Tags is solved with Flows. Metadata is in https://github.com/ThomasBPG/LinkAppSearch/tree/master/force-app/main/default/flows

There are two Lightnings Web Components for searching in freetext (https://github.com/ThomasBPG/LinkAppSearch/tree/master/force-app/main/default/lwc/search) and by tag (https://github.com/ThomasBPG/LinkAppSearch/tree/master/force-app/main/default/lwc/taggedLinks)

## Where can it run ?
I'm with Salesforce. I saw it as an opportunity to get more aquianted on developing on the Salesforce platform. It runs in Lightning console as you see on the screenshot above, but should work just great on an Experience Cloud site, if you prefer that.
Your choice of org, obviously depends on the amount of links and tags you populate. I personally just run in a Trailhead Playground and I still have plenty of space left in the 5 MB included.

## Okay to fork ?
Sure, give it a go. Please do not hesitate to drop me pull-requests or raise an issue, if you find issues or have a good idea for enhancement.

## Upcoming features
I want to improve the freetext search to include tag-searching as well. Also, I want to see the tags per link shown along the search results.