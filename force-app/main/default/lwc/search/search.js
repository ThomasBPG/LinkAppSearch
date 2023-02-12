import { LightningElement,track } from 'lwc';
import doSearch from '@salesforce/apex/SearchController.doSearch';
import getTagsFromLinkIds from '@salesforce/apex/TagsController.getTagsFromLinkIds';

export default class Search extends LightningElement {

    searchTerm = "";
    @track searchResult;
    @track error;
    tags;

    runSearch(event) {
        
        if(event.keyCode == 13)
        {
            this.searchTerm = event.target.value;
            if(this.searchTerm!=null)
            {
                doSearch({queryText: this.searchTerm})
                .then(links =>
                {
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
            this.tags = links;

            // Do some magic with a Map or associative array here...

            this.error = undefined;
        })
        .catch(error =>
        {
            this.error = "Search failed";
            this.searchResult = undefined;        
        });
    }
}