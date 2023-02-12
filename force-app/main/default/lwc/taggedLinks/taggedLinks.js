import { LightningElement, wire, track } from 'lwc';
import getTags from '@salesforce/apex/TagsController.getTags';
import getLinksBasedOnTag from '@salesforce/apex/TagsController.getLinksBasedOnTag';

export default class TaggedLinks extends LightningElement {

    @wire(getTags) getTags;

    tagItems = [];
    @track tagValue = 'a017Q000017i9DWQAY'; // Yes, this is a hack...

    @track searchResult;
    @track error;

    @wire(getTags)
    wiredTags({ error, data }) 
    {
        if (data)
        {
            for(var i=0; i<data.length; i++)  {
                this.tagItems = [...this.tagItems ,{value: data[i].Id , label: data[i].Name} ];                                   
            } 
        }
        else if (error)
        {
            this.error = error;
        }
    }

    handleChange(event) {
        this.tagValue = event.detail.value;
        this.runSearch(this.tagValue);
    }

    connectedCallback()
    {
        this.runSearch(this.tagValue);
    }

    runSearch(tagId) {
        getLinksBasedOnTag({tagId: this.tagValue})
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

