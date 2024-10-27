import { LightningElement,track } from 'lwc';
import doSearch from '@salesforce/apex/SearchController.doSearch';
import getTagsFromLinkIds from '@salesforce/apex/TagsController.getTagsFromLinkIds';

export default class Search extends LightningElement {

    searchTerm = "";
    @track searchResult;
    @track error;
    tags;
    linkTags;

    runSearch(event) {
        
        if(event.keyCode == 13)
        {
            this.searchTerm = event.target.value;
            if(this.searchTerm!=null && this.searchTerm.length>0)
            {
                doSearch({queryText: this.searchTerm})
                .then(links =>
                {
                    /*
                    // Add "Edit"-link to each of the found links.
                    for (var i=0; i<this.links.length; i++)
                    {
                        this.searchResult = [...this.searchResult, {editLink: 'hest'}];
                    }
                    */
                    
                    this.searchResult = links;
                    this.error = undefined;
                })
                .catch(error =>
                {
                    this.error = "Search failed";
                    this.searchResult = undefined;
                });
            }
        }
    }

    getTags(linkIds)
    {
        getTagsFromLinkIds({linkIds: linkIds})
        .then(links =>
        {
            for(var i=0; i<links.length; i++)  {
                //this.tagItems = [...this.tagItems ,{value: data[i].Id , label: data[i].Name} ];
                this.linkTags = [...this.linkTags ,{value: links[i].Id, label: links[i].Name}];
            }

        })
        .catch(error =>
        {
            this.error = "Search failed";
            this.searchResult = undefined;        
        });
    }
}